import React, { useRef, useEffect } from 'react';
import 'trix';
import 'trix/dist/trix.css';

const BlogForm = ({
    isFormOpen,
    handleCloseForm,
    author,
    setAuthor,
    blogName,
    setBlogName,
    blogContent,
    setBlogContent,
    setImageFile,
    handleSave,
    handleUpdate,
    formData,
   
}) => {
    const trixInput = useRef(null);

    useEffect(() => {
        if (isFormOpen && formData) {
            setAuthor(formData.author);
            setBlogName(formData.blogName);
            setBlogContent(formData.blogContent);
        }
    }, [isFormOpen, formData]);

    useEffect(() => {
        if (isFormOpen && trixInput.current) {
            trixInput.current.addEventListener('trix-change', handleTrixChange);
            return () => {
                if (trixInput.current) {
                    trixInput.current.removeEventListener('trix-change', handleTrixChange);
                }
            };
        }
    }, [isFormOpen, trixInput]);
    
    const handleTrixChange = () => {
        if (trixInput.current) {
            setBlogContent(trixInput.current.value);
        }
    };

    return (
        isFormOpen && (
            <div id="formPopup" className="form-popup">
                <span onClick={handleCloseForm} className="close-button">&times;</span>
                <form id="blogForm" className="fixed-form">
                    <div className="form-input" id="editIndex">
                        <div>
                            <label htmlFor="author">Author Name:</label>
                            <input type="text" id="author" name="author" placeholder="Enter author name"value={author} onChange={(e) => setAuthor(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="blogName">Blog Name:</label>
                            <input type="text" id="blogName" name="blogName" placeholder="Enter blog name" value={blogName} onChange={(e) => setBlogName(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="file-input-element">Upload Image:</label>
                        <input type="file" id="file-input-element" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
                    </div>
                    <div>
                        <label htmlFor="editor">Blog Content:</label>
                        <trix-editor
                            id="editor"
                            input={blogContent}
                            ref={trixInput}
                            placeholder="Write your blog post here..."
                            style={{ maxHeight: '200px', overflowY: 'auto' }} 
                        />
                    </div>
                    
                        <button type="button" className="save-button" onClick={handleSave}>Save Post</button>
              
                        <button type="button" className="update-button" onClick={handleUpdate}>Update</button>
                   
                </form>
            </div>
        )
    );
};

export default BlogForm;
