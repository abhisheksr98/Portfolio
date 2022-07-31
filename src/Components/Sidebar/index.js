import { Link , NavLink } from 'react-router-dom'
import './index.scss'
//import logo from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope , faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram ,faLinkedin} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' to='/'>
          <img className='' src='' alt=''/>
          <img className='sub-logo' src="" alt=''/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='blank' rel='noreferrer' href='https://in.linkedin.com/company/linkedin'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
                <a target='blank' rel='noreferrer' href='https://github.com/CodeRed9898'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
                <a target='blank' rel='noreferrer' href='https://www.instagram.com'>
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar