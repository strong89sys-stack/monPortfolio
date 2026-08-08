import './../style/header.css'
import logo from './../assets/img/Aziz_Dev_logo_140x36_fixed.svg'

export default function Header({project, contact, about}) {
    return (
        <>
        <div className="navbar">
            <div className="header">
                <div className="left">
                    <img src={logo} alt="logo" />
                </div>
                <nav>
                    <ul>
                        <li><a href={`#${project}`}>Projets</a></li>
                        <li><a href={`#${about}`}><span>à</span> propos</a></li>
                        <li><a href={`#${contact}`}>Contact</a></li>
                        <li><button>Télécharger CV</button></li>
                    </ul>
                    
                </nav>
            </div>
        </div>
        </>
    )
}