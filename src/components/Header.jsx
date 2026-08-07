import './../style/header.css'

export default function Header({project, contact, about}) {
    return (
        <>
        <div className="navbar">
            <div className="header">
                <div className="left">
                    <h1><span>D</span>evPortfolio</h1>
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