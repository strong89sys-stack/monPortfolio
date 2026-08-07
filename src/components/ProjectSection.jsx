import './../style/project.css'
import { FaRegFolderOpen } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdOutlineOpenInNew } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProjectSection({id}) {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const PROJECTS = [
        {
            id: 1,
            title: "Expense Tracker",
            description: "cette application web de gestion de ferme avicole permet aux producteurs de mieux valoriser leurs activités en facilitant la promotion et la vente de leurs produits. Il centralise la gestion des clients, le suivi des commandes, les campagnes promotionnelles et l'analyse des ventes afin d'améliorer la fidélisation de la clientèle et d'augmenter les revenus de l'exploitation.",
            technos: ["React", "Firebase"],
            github: "#",
            demo: "#",
            image: "/public/img/screen.png"
        },
        {
            id: 2,
            title: "Expense Tracker",
            description: "cette application web de gestion de ferme avicole permet aux producteurs de mieux valoriser leurs activités en facilitant la promotion et la vente de leurs produits. Il centralise la gestion des clients, le suivi des commandes, les campagnes promotionnelles et l'analyse des ventes afin d'améliorer la fidélisation de la clientèle et d'augmenter les revenus de l'exploitation.",
            technos: ["React", "Firebase"],
            github: "#",
            demo: "#",
            image: "/public/img/screen.png"
        },
        {
            id: 3,
            title: "Expense Tracker",
            description: "cette application web de gestion de ferme avicole permet aux producteurs de mieux valoriser leurs activités en facilitant la promotion et la vente de leurs produits. Il centralise la gestion des clients, le suivi des commandes, les campagnes promotionnelles et l'analyse des ventes afin d'améliorer la fidélisation de la clientèle et d'augmenter les revenus de l'exploitation.",
            technos: ["React", "Firebase"],
            github: "#",
            demo: "#",
            image: "/public/img/screen.png"
        },
        {
            id: 4,
            title: "Expense Tracker",
            description: "cette application web de gestion de ferme avicole permet aux producteurs de mieux valoriser leurs activités en facilitant la promotion et la vente de leurs produits. Il centralise la gestion des clients, le suivi des commandes, les campagnes promotionnelles et l'analyse des ventes afin d'améliorer la fidélisation de la clientèle et d'augmenter les revenus de l'exploitation.",
            technos: ["React", "Firebase"],
            github: "#",
            demo: "#",
            image: "/public/img/screen.png"
        }
    ]

    const sectionRef = useRef(null)

    // Détecte le défilement précis du viewport sur cette section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        // L'animation commence quand le haut de la section touche le bas de l'écran,
        // et se termine quand la section atteint le centre de l'écran.
        offset: ["start start", "end end"]
    })

    // On transforme le scroll (de 0 à 1) en propriétés d'animation fluides
    // const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
    // const y = useTransform(scrollYProgress, [0, 1], [100, 0])
    // const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1])

    const x = useTransform(
        scrollYProgress,
        [0,1],
        [0, -(PROJECTS.length - 1) * (850) + 480],
    )

    return (
        <>
        <div 
        style={{height: `${(PROJECTS.length) * 100}vh`}}
        className="project-section" ref={sectionRef} id={id}>
            {/* Le titre s'anime au scroll */}
            

            {/* Le carrousel s'agrandit et apparaît au fur et à mesure du scroll */}
            <motion.div 
            
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5}}
            className="sticky-container">

                {/* <motion.div className="title" >
                    <span><FaRegFolderOpen /></span>
                    <h2>Mes Projets</h2>
                </motion.div> */}

                <motion.div 
                    className="project-card"
                    style={{ x }}
                >
                    <div className="accroche">
                        <p style={{color: '#a8a29e', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '10px', marginBottom: '24px', fontWeight: 700}}>Projets éffectués</p>
                        <h2 style={{fontSize: '3.75rem', lineHeight: 1.25, marginBottom: '24px' }}>Des architectures conçues pour <em style={{color: '#a8a29e'}}>convertir</em>.</h2>
                        <p style={{color: '#a8a29e', fontWeight: 300, lineHeight: 1.625}}>
                            Chaque projet est une nouvelle occasion d'explorer des technologies modernes et de créer des interfaces élégantes, rapides et centrées sur l'utilisateur.
                        </p>
                        <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', color: '#a8a29e'}}>
                            <motion.span animate={{y: [0, -5, 0]}} transition={{duration: 1.2, repeat: Infinity, ease: 'easeOut'}} style={{fontSize: '24px', textTransform: 'none', letterSpacing: 'normal'}}><FaArrowDown /></motion.span>
                            <span>Défilez vers le bas pour explorer</span>
                        </div>
                    </div>
                    {PROJECTS.map((project) => (
                        <div className="card" key={project.id}>
                            <div className="top">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="bottom">
                                <div className='left'>
                                    <h3 className="card-title">{project.title}</h3>
                                    <p className="description">{project.description}</p>
                                    
                                    <div className="techno">
                                        {project.technos.map((tech, i) => (
                                            <span key={i}>{tech}</span>
                                        ))}
                                    </div>

                                    <div className="link">
                                        <a href={project.github}>
                                            <span><FaCode /></span> GitHub
                                        </a>
                                        <a href={project.demo}>
                                            <span><MdOutlineOpenInNew /></span> Live Demo
                                        </a>
                                    </div>
                                </div>
                                <div className="right">
                                    <span>Personnel</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
        </>
    )
}