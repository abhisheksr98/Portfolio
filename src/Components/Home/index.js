import { Link } from 'react-router-dom';
//import logotitle from '../../assets/images/logo-s.png';
import './index.scss';


const Home = () => {
    
    return (
        
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi I'm Abhishek</h1>
                <br></br>
                A passionate Frontend Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / and some other cool libraries and frameworks
                
                <h2>Frontend developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    
    )
}


export default Home