import Footer from "../../componet/dasboard/Dfoater";
import Header from "../../componet/dasboard/Dheader";
import Sidebar from "../../componet/dasboard/sidebar";
import UserContainer from "../../componet/dasboard/usercontainer";
import "./dashboard.css"

const UserDashboard = () => {
    return (
        <div>
            <Header />
            <div className="body">
                <Sidebar />
                <UserContainer/>
            </div>
            <Footer />
        </div>
    );
};

export default UserDashboard ;
