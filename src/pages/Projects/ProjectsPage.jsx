import { Link } from "react-router-dom";
import projects from "./projects";
import testImg from '../../assets/photo.jpg'
import './ProjectsPage.css'
const ProjectsPage = () => {
  return (
    <main>
      <section>
        <div className="container">
              <h1 className="sub-title">My Work</h1>
              <div className="work-list">
                {
                  projects.map((project,i)=>{
                    return(
                      <div key={i} className="work">
                        <img src={testImg}/>
                        <div className="layer">
                            <h3>{project.projectName}</h3>
                            <p>{project.description}</p>
                            <Link to={project.liveLink}>link-icon</Link>
                            <Link to={project.github}>github-icon</Link>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
          </div>
      </section>
    </main>
  )
}

export default ProjectsPage;