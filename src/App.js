import "./App.css";
import Card from "./Card";
import Hero from "./Hero";
import Tutorial from "./Tutorial";
import homeImage from "./images/lady.png";
import maskImage from "./images/Mask.png";
import manImage from "./images/man.png";
import videoImage from "./images/Video.png";
function App() {
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
    </div>
  );
}

export default App;
