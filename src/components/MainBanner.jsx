import './../style/banner.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";

export default function MainBanner() {
    return (
        <>
        <div className="hero">
            <div className="banner">
                <div className="left">
                    <div className="text">
                        <p className="title">Développeur REACT</p>
                        <p className="name">Adelazize <span>Kabore</span></p>
                        <p className="description">
                            Je conçois des expériences web rapides, élégantes et centrées sur l'utilisateur
                        </p>
                    </div>
                    <div className="btn">
                        <a href='#' className='btn-primary'>Voir mes projets <FaArrowRight /></a>
                        <a href='#' className='btn-secondary'>Me contacter</a>
                    </div>
                    <div className="link">
                        <a href='#'><FaCode /></a>
                    </div>
                </div>
                <div className="right">
                    <img src="/src/assets/img/profil.png" width="394px" height="499px" alt="profil" />
                </div>
            </div>
        </div>
        </>
    )
}