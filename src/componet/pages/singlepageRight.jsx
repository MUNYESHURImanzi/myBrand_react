// RightBlog.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContentReader from './Contentrender';

const RightBlog = () => {
    const [lastFivePosts, setLastFivePosts] = useState([]);

    const handleBlogClick = (postId) => {
        window.location.href = `../singlepage.html#${postId}`;
    };

    useEffect(() => {
        const fetchAndUpdatePosts = async () => {
            try {
                const response = await axios.get('https://mybland-backend-c3uv.onrender.com/articles');
                if (!response.data) {
                    throw new Error('Failed to fetch blog posts');
                }
                const { data } = response.data;

                if (Array.isArray(data)) {
                    const lastFive = data.slice(-5);
                    setLastFivePosts(lastFive);
                }
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };

        fetchAndUpdatePosts();

        const intervalId = setInterval(fetchAndUpdatePosts, 60000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {lastFivePosts.map((post, index) => (
                <div 
                    key={`blogPost${index + 1}`} 
                    className="blog-post card" 
                    data-blog-id={post._id}
                    onClick={() => handleBlogClick(post._id)}
                >
                    <img src={post.file || ''} alt="Blog Image" />
                    <div className="content">
                        <h2>{post.title || ''}</h2>
                        <ContentReader content={post.content && post.content.length > 30 ? `${post.content.substring(0, 30)}...` : post.content || ''}/>
                        {post.content && post.content.length > 30 && (
                            <a href={`/singleblog/${post._id}`}>Read More</a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RightBlog;
