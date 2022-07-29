import { Link } from 'react-router-dom'
import './index.scss'


const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' to='/'>
          <img src={logo} alt=''/>
          <img src={logosubtitle} alt=''/>
        </Link>
    </div>
)

export default Sidebar