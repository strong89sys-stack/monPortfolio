import './../style/about.css'
import { FaRegUser } from "react-icons/fa6";
import profil from './../assets/img/twitter-logo-transparent.png'

import { motion } from 'framer-motion';

export default function AboutSection({skills, about}) {
    return (
        <>
        <motion.div 
        initial={{opacity: 0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6, ease:"easeOut"}}
        className="about-section" id={about}>
            <div className="about">
                <div className="left">
                    <img src={profil} alt="image" loading='lazy' />
                </div>
                <div className="right">
                    <div className="title">
                        <span className='icon'><FaRegUser /></span>
                        <h2><span>à</span> Propos</h2>
                    </div>
                    <div className="text">
                        Passionné par le développement, je transforme des maquettes complexes en interfaces interactives et performantes. 
                        Mon approche se concentre sur la qualité du code, l'accessibilité et les animations fluides pour offrir une expérience utilisateur irréprochable.
                    </div>
                    <div className="skills">
                        {skills.map((skill) => (
                            <span key={skill} className="skills-box">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
        </>
    )
}