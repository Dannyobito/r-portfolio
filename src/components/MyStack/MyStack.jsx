import technologies from './technologiesArray';
import './MyStack.css';
const MyStack = () => {
    
  return (
    <section>
        <div className="technologies-container">
          {
            technologies.map((technology,i)=>{
                return(
                    <div key={i} className="techology-image-container">
                        <div className="center">
                            <img src={technology.icon} className="technology-image" />
                        </div>
                        <span className="technology-name">{technology.name}</span>
                    </div>
                )
            })
          }
        </div>
    </section>
  )
}

export default MyStack