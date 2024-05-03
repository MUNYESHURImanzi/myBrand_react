import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import BlogForm from "./BlogForm";

const BlogContainer = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);
    const [blogPosts, setBlogPosts] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editId, setEditId] = useState(null);
    const [author, setAuthor] = useState('');
    const [blogName, setBlogName] = useState('');
    const [formData, setFormData] = useState(null);
    const [formMode, setFormMode] = useState("save");
    const [blogContent, setBlogContent] = useState('');
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        displayBlogPosts();
    }, [currentPage]);

    const handleOpenForm = () => {
        setIsFormOpen(true);
        
    };

 

    const handleSave = async () => {
        try {
            setFormMode("save");
            const formData = new FormData();
            formData.append('author', author);
            formData.append('title', blogName);
            formData.append('content', blogContent);
            formData.append('file', imageFile);
            

            const response = await fetch('https://mybland-backend-c3uv.onrender.com/articles', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to save post');
            }

            toast('Post saved successfully!');
            handleCloseForm();
            displayBlogPosts();
        } catch (error) {
            console.error('An error occurred while saving the post:', error);
            toast.error('Failed to save post. Please try again later.');
        }
    };

    const deletePost = async (id) => {
        try {
            const response = await fetch(`https://mybland-backend-c3uv.onrender.com/articles/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Failed to delete post');
            }

            toast('Post deleted successfully!');
            displayBlogPosts();
        } catch (error) {
            console.error('An error occurred while deleting the post:', error);
            toast.error('Failed to delete post. Please try again later.');
        }
    };

    const displayBlogPosts = async () => {
        try {
            const postsPerPage = 5;
            const startIndex = (currentPage - 1) * postsPerPage;
            const endIndex = startIndex + postsPerPage;

            const response = await fetch('https://mybland-backend-c3uv.onrender.com/articles');
            if (!response.ok) {
                throw new Error('Failed to fetch blog posts');
            }
            const data = await response.json();
            const fetchedBlogPosts = data.data.slice(startIndex, endIndex);

            setBlogPosts(fetchedBlogPosts);
            setTotalPosts(data.data.length);
        } catch (error) {
            console.error('Error fetching blog posts:', error);
        }
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
        setEditId(null);
        setAuthor('');
        setBlogName('');
        setBlogContent('');
        setImageFile(null);
    };
    
    const handleUpdate = async () => {
        if (!editId) {
            toast('No post selected for update');
            return;
        }
    
        try {
            const formData = new FormData();
            formData.append('author', author);
            formData.append('title', blogName);
            formData.append('content', blogContent);
            formData.append('file', imageFile);
    
            const response = await fetch(`https://mybland-backend-c3uv.onrender.com/articles/${editId}`, {
                method: 'PUT',
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error('Failed to update post');
            }
    
            toast('Post updated successfully!');
            handleCloseForm();
            displayBlogPosts();
        } catch (error) {
            console.error('An error occurred while updating the post:', error);
            toast('Failed to update post. Please try again later.');
        }
    };
    
    const handlePaginationClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPaginationButtons = () => {
        const totalPages = Math.ceil(totalPosts / 5);
        const buttons = [];

        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <button key={i} onClick={() => handlePaginationClick(i)}>
                    {i}
                </button>
            );
        }
        return buttons;
    };

    const handleEdit = async (id) => {
        try {
            const response = await fetch(`https://mybland-backend-c3uv.onrender.com/articles/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch post data for editing');
            }
            const postData = await response.json();
            const { author, title, content } = postData;
    
            setEditId(id);
            setAuthor(author);
            setBlogName(title);
            setBlogContent(content);
            setIsFormOpen(true);
            setFormMode("edit");
    
           
            setFormData({
                author,
                blogName: title,
                blogContent: content
            });
        } catch (error) {
            console.error('An error occurred while fetching post data for editing:', error);
            toast.error('Failed to fetch post data for editing. Please try again later.');
        }
    };
    

    return (
        <main className="main-content">
          <div className="nmain">
            <button onClick={handleOpenForm} className="create-button">Create New Blog</button>
            <BlogForm
                isFormOpen={isFormOpen}
                handleCloseForm={handleCloseForm}
                author={author}
                setAuthor={setAuthor}
                blogName={blogName}
                setBlogName={setBlogName}
                blogContent={blogContent}
                setBlogContent={setBlogContent}
                setImageFile={setImageFile}
                handleSave={handleSave}
                handleUpdate={handleUpdate}
                formData={formMode} 
                setFormMode={setFormMode}
            />
            <table className="table text-nowrap">
                <thead>
                    <tr>
                        <th className="border-top-0">#</th>
                        <th className="border-top-0">Author</th>
                        <th className="border-top-0">Blog Name</th>
                        <th className="border-top-0">Image</th>
                        <th className="border-top-0">Actions</th>
                    </tr>
                </thead>
                <tbody id="blogTableBody">
                    {blogPosts.map((post, index) => (
                        <tr key={post._id}>
                            <td>{index + 1}</td>
                            <td>{post.author}</td>
                            <td>{post.title.substring(0, 20) || 'N/A'}</td>
                            <td>
                                <img src={post.file} alt="Blog" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                            </td>
                            <td>
                                <button onClick={() => handleEdit(post._id)} className="btn btn-primary btn-sm">Edit</button>
                                <button onClick={() => deletePost(post._id)} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div id="paginationContainer">
                {renderPaginationButtons()}
            </div>
            </div>
        </main>
    );
};

export default BlogContainer;
