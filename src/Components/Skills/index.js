import './index.scss'
import { faCss3,faGitAlt,faHtml5,faJsSquare,faReact, faNodeJs} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Skills = () => {
        
return(
  <> <div className='skill-zone'> 
       <h1 className='skills'>Skills</h1>
       <div >
          <FontAwesomeIcon className='Angular' icon={faNodeJs} color="#DD0031" />        
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />  
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          
      </div>
   </div>


   </>
   )


}

export default Skills