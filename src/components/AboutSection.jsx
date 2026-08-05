import './../style/about.css'
import { FaRegUser } from "react-icons/fa6";

export default function AboutSection({skills}) {
    return (
        <>
        <div className="about-section">
            <div className="about">
                <div className="left">
                    <img src="/src/assets/img/twitter-logo-transparent.png" alt="image" />
                </div>
                <div className="right">
                    <div className="title">
                        <span className='icon'><FaRegUser /></span>
                        <h2><span>à</span> Propos</h2>
                    </div>
                    <div className="text">
                        Passionné par le développement front-end, je transforme des maquettes complexes en interfaces interactives et performantes. 
                        Mon approche se concentre sur la qualité du code, l'accessibilité et les animations fluides pour offrir une expérience utilisateur irréprochable.
                    </div>
                    <div className="skills">
                        {skills.map((skill) => (
                            <span key={skill} className="skills-box">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}