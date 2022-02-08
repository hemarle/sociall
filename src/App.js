import './App.css';
import Hero from './Hero';
import homeImage from './images/lady.png'


function App() {
    return (
        <div className="app">
            <Hero title='Social Media Accounts Instantly' about="Welcome to largest social media account exchange on the planet. Want to take a break permanently on social media or kickstart your influencer career, we've got you covered" optionalText='Buy & Sell' signIn='/login' signUp='/signup'
                image={homeImage}/>
        </div>
    );
}

export default App;
