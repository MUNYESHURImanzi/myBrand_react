import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import BlogPage from './pages/blog';
import SinglePage from './pages/singlePage';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/dashboard/dashboard';
import ContactDashboard from './pages/dashboard/ContactDashboard';
import UserDashboard from './pages/dashboard/UserDashboard';
import BlogDashboard from './pages/dashboard/BlogDashboard';
import Services from './componet/pages/services';
import About from './componet/pages/about';
import PortfolioItem from './componet/pages/Portfolio';
import Contact from './componet/pages/Contact';
const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/services" component={Services} />
        
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={PortfolioItem} />
        <Route path="/contact" component={Contact} />

        {/* other pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/singleblog/:postId" element={<SinglePage />} />
           {/* dashboards */}
        <Route path="/dashboard" element={<Dashboard/>} /> 
        <Route path="/user" element={<UserDashboard/>} />
        <Route path="/blogdashboard" element={<BlogDashboard/>} />
        <Route path="/Dashbordcontact" element={<ContactDashboard/>} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
