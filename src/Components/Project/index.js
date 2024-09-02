import spotify from '../../assets/images/Spotify_Logo_CMYK_White.png'
import netflix from '../../assets/images/netflix logo.png'
import todo from '../../assets/images/todo.png'
import olx from '../../assets/images/olx-logo.png'
import './index.scss'
// import { useNavigate } from 'react-router-dom'


const Project = () => {

  const projects = [
       {
              id:1,
              src: spotify,
             
       },
       {
              id:2,
              src: netflix
       },
       {
              id:3,
              src: todo
       },
       {
              id:4,
              src: olx
       },
       
  ];

return(
       <div className="project">
              <h3 className="title">Projects</h3>
              {
              projects.map(({id ,src }) => {
                return  <>
              <div key={id} className="card">
                <img src={src} className='spotify' alt="Avatar"  />
                <button onClick={event =>  window.location.href='google.com'} className="button">Demo</button>
                <button className="button">Code</button>
              </div>
              </>
         })}
              
       </div>
  )
 }

 export default Project