import './../style/banner.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import profil from './../assets/img/profil.png'

import { motion } from 'framer-motion';

export default function MainBanner({id, contact}) {
    return (
        <>
        <motion.div 
        initial={{y:0}}
        whileInView={{y:0}}
        className="hero">
            <div className="banner">
                <div className="left">
                    <div className="text">
                        <p className="title">Développeur Full Stack</p>
                        <p className="name">Adelazize <span>Kabore</span></p>
                        <p className="description">
                            Je conçois des expériences web rapides, élégantes et centrées sur l'utilisateur
                        </p>
                    </div>
                    <div className="btn">
                        <a href={`#${id}`} className='btn-primary'>Voir mes projets <FaArrowRight /></a>
                        <a href={`#${contact}`} className='btn-secondary'>Me contacter</a>
                    </div>
                    <div className="link">
                        <a href='#'><FaCode /></a>
                    </div>
                </div>
                <div className="right">
                    <img src={profil} width="394px" height="499px" alt="profil" loading='lazy' />
                </div>
            </div>
        </motion.div>
        </>
    )
}