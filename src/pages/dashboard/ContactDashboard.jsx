
import ContactContainer from "../../componet/dasboard/contactcontainer";
import Footer from "../../componet/dasboard/Dfoater";
import Header from "../../componet/dasboard/Dheader";
import Sidebar from "../../componet/dasboard/sidebar";
import "./dashboard.css"

const ContactDashboard = () => {
    return (
        <div>
            <Header />
            <div className="body">
                <Sidebar />
                <ContactContainer/>
            </div>
            <Footer />
        </div>
    );
};

export default ContactDashboard ;
