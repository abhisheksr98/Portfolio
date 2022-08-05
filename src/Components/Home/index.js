import { Link } from 'react-router-dom';
//import logotitle from '../../assets/images/logo-s.png';
import './index.scss';


const Home = () => {
    
    return (
        
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi <br />I'm
                Abhishek
                <br />
                Web developer
                </h1>
                <h2>Frontend developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    
    )
}


export default Home