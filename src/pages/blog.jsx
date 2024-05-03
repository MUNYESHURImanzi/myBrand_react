import React, { useState, useEffect } from 'react';
import Navbar from "../componet/pages/navbar"

import axios from 'axios';
import Footer from '../componet/pages/foater';
import { Link } from 'react-router-dom';
import ContentReader from '../componet/pages/Contentrender';

const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchPosts();
    }, [currentPage]);

    const fetchPosts = () => {
        const postsPerPage = 8;
        axios.get(`https://mybland-backend-c3uv.onrender.com/articles?page=${currentPage}&limit=${postsPerPage}`)
            .then(response => {
                setPosts(response.data.data);
                setTotalPages(response.data.totalPages);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const handlePaginationClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
           <Navbar/>

            <main style={{ marginTop: '30px', minHeight: '100vh' }} >
                {posts.map(post => (
                    <div key={post._id} className="blog-post card" data-blog-id={post._id} onClick={() => window.location.href = `/singleblog/${post._id}`}>
                        <img src={post.file || ''} alt="Blog Image" />
                        <div className="content">
                            <h2>{post.title || ''}</h2>
                            <ContentReader content={post.content && post.content.length > 30 ? `${post.content.substring(0, 30)}...` : post.content || ''} />
                            
                            {post.content && post.content.length > 30 && (
                                <Link to="/" onClick={(e) => { e.preventDefault(); }}>{'Read More'}</Link>
                            )}
                        </div>
                    </div>
                ))}
                <div id="paginationContainer">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={currentPage === index + 1 ? 'active' : ''}
                            onClick={() => handlePaginationClick(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </main>

          <Footer/>
        </>
    );
};

export default BlogPage;
