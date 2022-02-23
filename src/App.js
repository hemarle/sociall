import "./App.css";
import Card from "./Card";
import Hero from "./Hero";
import Testimonial from "./Testimonial";
import Tutorial from "./Tutorial";

import homeImage from "./images/lady.png";
import maskImage from "./images/Mask.png";
import manImage from "./images/man.png";
import videoImage from "./images/vid.png";
import girlImage from "./images/girl.png";
import Contact from "./Contact";
import Footer from "./Footer";
function App() {
  const testimonialData = [
    {
      testimony:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the race.",
      stars: "",
      image: girlImage,
      author: "Amanda Jackson",
      role: "CEO, NRD Group",
    },
    {
      testimony:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the race.",
      stars: "",
      image: girlImage,
      author: "Amanda Jackson",
      role: "CEO, NRD Group",
    },
  ];
  return (
    <div className="app">
      <Hero
        title="Social Media Accounts Instantly"
        about="Welcome to largest social media account exchange on the planet. Want to take a break permanently on social media or kickstart your influencer career, we've got you covered"
        optionalText="Buy & Sell"
        signIn="/login"
        signUp="/signup"
        image={homeImage}
      />

      <Card
        image={maskImage}
        title="Sell Accounts And Get Paid Instantly"
        about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        link="/signin"
        linkText="Get Started"
      />
      <Card
        image={manImage}
        title="A Safe Way To Buy Accounts On Social Media"
        about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        link="/signin"
        linkText="Get Started"
      />

      <Tutorial title="How It Works" video={videoImage} />

      <Testimonial title="What Our Customers Say" data={testimonialData} />

      <Contact
        title="Have An Enquiry"
        about="Do you have a question you need answers to? contact us and our support team would respond shortly"
        linkText="Contact us"
        link="/contact us"
      />
      <Footer />
    </div>
  );
}

export default App;
