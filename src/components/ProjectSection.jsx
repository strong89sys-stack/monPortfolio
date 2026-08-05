import './../style/project.css'
import { FaRegFolderOpen } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdOutlineOpenInNew } from "react-icons/md";

export default function ProjectSection() {
    return (
        <>
        <div className="project-section">
            <div className="title">
                <span><FaRegFolderOpen /></span>
                <h2>Mes Projets</h2>
            </div>
            <div className="project-card">
                <div className="card">
                    <div className="top">
                        <img src="/src/assets/img/screen.png" alt="finetrack" />
                    </div>
                    <div className="bottom">
                        <h3 className="title">Expense Tracker</h3>
                        <p className="description">
                            Suivi de dépenses intuitif avec visualisation de données en temps réel.
                        </p>
                        <div className="techno">
                            <span>React</span>
                            <span>Firebase</span>
                        </div>
                        <div className="link">
                            <a href="#">
                                <span><FaCode /></span> GitHub
                            </a>
                            <a href="#">
                                <span><MdOutlineOpenInNew /></span> Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="top">
                        <img src="/src/assets/img/screen.png" alt="finetrack" />
                    </div>
                    <div className="bottom">
                        <h3 className="title">Expense Tracker</h3>
                        <p className="description">
                            Suivi de dépenses intuitif avec visualisation de données en temps réel.
                        </p>
                        <div className="techno">
                            <span>React</span>
                            <span>Firebase</span>
                        </div>
                        <div className="link">
                            <a href="#">
                                <span><FaCode /></span> GitHub
                            </a>
                            <a href="#">
                                <span><MdOutlineOpenInNew /></span> Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                
                <div className="card">
                    <div className="top">
                        <img src="/src/assets/img/screen.png" alt="finetrack" />
                    </div>
                    <div className="bottom">
                        <h3 className="title">Expense Tracker</h3>
                        <p className="description">
                            Suivi de dépenses intuitif avec visualisation de données en temps réel.
                        </p>
                        <div className="techno">
                            <span>React</span>
                            <span>Firebase</span>
                        </div>
                        <div className="link">
                            <a href="#">
                                <span><FaCode /></span> GitHub
                            </a>
                            <a href="#">
                                <span><MdOutlineOpenInNew /></span> Live Demo
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}