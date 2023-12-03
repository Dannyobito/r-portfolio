import { Link } from "react-router-dom";
import github from '../../assets/github-icon.svg';
import link from '../../assets/link.svg';
import projects from "./projects";
import './ProjectsPage.css'
const ProjectsPage = () => {
  return (
    <main>
      <section>
        <div className="container">
              <h1 className="sub-title">My Works</h1>
              <div className="work-list">
                {
                  projects.map((project,i)=>{
                    return(
                      <div key={i} className="work">
                        <img src={project.image}/>
                        <div className="layer">
                            <h3>{project.projectName}</h3>
                            <p>{project.description}</p>
                            {
                              project.liveLink?
                              <Link to={project.liveLink}><img src={link} alt="" /></Link>
                              : null
                            }
                            <Link to={project.github}><img src={github} alt="" /></Link>
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