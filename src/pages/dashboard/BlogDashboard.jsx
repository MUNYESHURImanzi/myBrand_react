import BlogContainer from "../../componet/dasboard/blogcontainer";
import Footer from "../../componet/dasboard/Dfoater";
import Header from "../../componet/dasboard/Dheader";
import Sidebar from "../../componet/dasboard/sidebar";
import "./dashboard.css"

const BlogDashboard = () => {
    return (
        <div>
            <Header />
            <div className="body">
                <Sidebar />
                <BlogContainer/>
            </div>
            <Footer />
        </div>
    );
};

export default BlogDashboard ;
