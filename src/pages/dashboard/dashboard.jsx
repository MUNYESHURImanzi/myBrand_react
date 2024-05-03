import DasboardContainer from "../../componet/dasboard/dashbordcontainer";
import Footer from "../../componet/dasboard/Dfoater";
import Header from "../../componet/dasboard/Dheader";
import Sidebar from "../../componet/dasboard/sidebar";
import "./dashboard.css"

const Dashboard = () => {
    return (
        <div>
            <Header />
            <div className="body">
                <Sidebar />
                <DasboardContainer/>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard ;
