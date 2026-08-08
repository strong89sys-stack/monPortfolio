import './../style/road.css'
import { MdOutlineRoute } from "react-icons/md";

import { motion } from 'framer-motion'

export default function RoadSection() {
    return (
        <>
        <motion.section initial={{y : '50px', opacity: 0}} whileInView={{y : 0, opacity: 1}} transition={{duration: 0.5, ease: 'easeIn'}} className="road-section">
            <div className="title">
                <span><MdOutlineRoute /></span>
                <h2>Mon Parcours</h2>
            </div>
            <div className="container">
                <div className="timeline"></div>
                <div className="road">

                    {/* 2026 - Présent */}
                    <div className="row first">
                        <div className="date">
                            <span>2026 - Présent</span>
                        </div>

                        <div className="ring"></div>

                        <div className="content-box">
                            <h3>
                                Développeur Full-Stack — Projets personnels & apprentissage avancé
                                
                            </h3>

                            <p>
                                Poursuite de ma formation en développement logiciel,
                                avec un approfondissement de mes compétences en
                                développement web, conception d'applications et
                                architectures modernes.
                            </p>
                        </div>
                    </div>

                    {/* 2025 - 2026 */}
                    <div className="row second">
                        <div className="date">
                            <span>2025 - 2026</span>
                        </div>

                        <div className="ring"></div>

                        <div className="content-box">
                            <h3>
                                Licence 2 — Réseaux & Génie Logiciel
                                <br />
                                <span>PIGIER Côte d'Ivoire — BTS</span>
                            </h3>

                            <p>
                                Deuxième année de formation avec obtention du BTS.
                                Développement de compétences en programmation,
                                bases de données, développement web et conception
                                d'applications.
                            </p>
                        </div>
                    </div>

                    {/* 2024 - 2025 */}
                    <div className="row first">
                        <div className="date">
                            <span>2024 - 2025</span>
                        </div>

                        <div className="ring"></div>

                        <div className="content-box">
                            <h3>
                                Licence 1 — Réseaux & Génie Logiciel
                                <br />
                                <span>PIGIER Côte d'Ivoire</span>
                            </h3>

                            <p>
                                Découverte et acquisition des fondamentaux de la
                                programmation, des réseaux, des bases de données
                                et du développement logiciel.
                            </p>
                        </div>
                    </div>

                    {/* 2024 */}
                    <div className="row second">
                        <div className="date">
                            <span>2024</span>
                        </div>

                        <div className="ring"></div>

                        <div className="content-box">
                            <h3>
                                Baccalauréat
                            </h3>

                            <p>
                                Obtention du Baccalauréat et début de mon parcours
                                dans le domaine de l'informatique et du développement
                                logiciel.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </motion.section>
        </>
    )
}