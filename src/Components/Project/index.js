import spotify from '../../assets/images/Spotify_Logo_CMYK_White.png'
import netflix from '../../assets/images/netflix logo.png'
import todo from '../../assets/images/todo.png'
import './index.scss'


const Project = () => {
  const projects = [
       {
              id:1,
              src: spotify
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
              src: todo
       },
       
  ];

return(
       <div className="project1">
              <h1 className="title">My Projects</h1>
              {
              projects.map(({id ,src}) => {
                return  <>
              <div key={id} className="card">
                <img src={src} className='spotify' alt="Avatar"  />
                <button onClick={site} className="button">Demo</button>
                <button onClick={site} className="button">Code</button>
              </div>
              </>
         })}
              
       </div>
  )
 }

 export default Project