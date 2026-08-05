import './../style/road.css'
import { MdOutlineRoute } from "react-icons/md";

export default function RoadSection() {
    return (
        <>
        <section className="road-section">
            <div className="title">
                <span><MdOutlineRoute /></span>
                <h2>Mon Parcours</h2>
            </div>
            <div className="container">
                <div className="timeline"></div>
                <div className="road">
                    <div className="row first">
                        <div className="date">
                            <span>2026 - Présent</span>
                        </div>
                        <div className="ring"></div>
                        <div className="content-box">
                            <h3>Développeur Front-End Freelance</h3>
                            <p>
                                Création d'interfaces sur mesure pour des startups. Focus sur les performances React et l'intégration de designs complexes.
                            </p>
                        </div>
                    </div>

                    <div className="row second">
                        <div className="date">
                            <span>2025 - 2026</span>
                        </div>
                        <div className="ring"></div>
                        <div className="content-box">
                            <h3>Formation Bootcamp Web</h3>
                            <p>
                                Apprentissage intensif du stack MERN. Réalisation de projets complets en équipe avec méthodologie agile.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}