import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ContentReader from '../componet/pages/Contentrender';
import Navbar from '../componet/pages/navbar';
import Footer from '../componet/pages/foater';
import RightBlog from '../componet/pages/singlepageRight';

const SinglePage = () => {
    const [postData, setPostData] = useState(null);
    const [likeCount, setLikeCount] = useState(0);
    const [liked, setLiked] = useState(false);
    const { postId } = useParams();
    const contentRef = useRef(null);

    useEffect(() => {
        const fetchPostData = async () => {
            if (postId) {
                try {
                    const response = await axios.get(`https://mybland-backend-c3uv.onrender.com/articles/${postId}`);
                    if (!response.data) {
                        throw new Error('Failed to fetch blog post');
                    }
                    const { data } = response.data;
                    setPostData(data);
                    setLikeCount(data.likes);
                    setLiked(data.liked);
                } catch (error) {
                    console.error('Error fetching blog post:', error);
                }
            } else {
                console.error('Error: No blog post ID provided');
            }
        };

        fetchPostData();
    }, [postId]);

    const addComment = async (e) => {
        e.preventDefault();
       
    };

    const handleLikeClick = () => {
       
        if (liked) {
            setLikeCount(prevCount => prevCount - 1);
        } else {
            setLikeCount(prevCount => prevCount + 1);
        }
        setLiked(prevLiked => !prevLiked);
    };

    useEffect(() => {
        if (contentRef.current) {
            const content = contentRef.current.innerHTML;
            console.log(content);
        }
    }, [postData]);

    return (
        <div >
            <Navbar />
            {postData ? (
                <section className="singlepage" style={{ marginTop: '30px', minHeight: '100vh' }}>
                    <div className="bloghead">
                        <a href="http://">home/blog</a>
                        <h2>{postData.title}</h2>
                    </div>
                    <div className="blogcontaine">
                        <div className="blogz">
                            <div className="head">
                                <h1>Welcome to my blog content</h1>
                            </div>
                            <div className="singlepar">
                                <div className="imagedec">
                                    <img src={postData.file} alt="Blog Image" />
                                    <i></i>
                                </div>
                                <div className="nextpar" ref={contentRef}>
                                    <h2>next part </h2>
                                    <ContentReader content={postData ? postData.content : ''} />
                                </div>
                            </div>
                            <div className="author-info">
                                <h3>Author: {postData.author}</h3>
                                <p>Follow me on <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">Twitter</a></p>

                                <button id="like-btn" onClick={handleLikeClick}>
                                    <img src="./image/like.png" alt="" style={{ width: '20px', height: '20px' }} />
                                </button>
                                <span id="like-count">{likeCount} Likes</span>
                            </div>

                            <div className="like-comment-section">
                                <div className="comment-form">
                                    <h3>Leave a Comment</h3>
                                    <form id="comment-form" onSubmit={addComment}>
                                        <textarea id="comment-text" placeholder="Your comment"></textarea>
                                        <button type="submit">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="rightblog">
                        <RightBlog />
                        </div>
                    </div>
                </section>
            ) : (
                <div>Loading...</div>
            )}
            <Footer />
        </div>
    );
};

export default SinglePage;
