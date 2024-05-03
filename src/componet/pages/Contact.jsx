import ContactForm from "./formC";
import axios from "axios";

function Contact() {
  const handleFormSubmit = async ({ fullName, email, phone, message }) => {
    try {
      const response = await axios.post("https://cyberopsrw.cyclic.app/api/v1/post/email", { fullName, email, phone, message });
      console.log("Form submitted successfully", response.data);
    
    } catch (error) {
      console.error("An error occurred during form submission:", error);
     
    }
  };

  return (
    <>
      <section id="Contact">
        <div className="Contact">
          <div className="contantus">
            <h1>Get in touch</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p>+250790706170</p>
            <p>munyeshurimanzi@gmail.com</p>
            <address>
              Kigali, Rwanda
              <div className="map-container"></div>
              View location Map
            </address>
          </div>

          <ContactForm  />
        </div>
      </section>
    </>
  );
}

export default Contact;
