import './../style/header.css'

export default function Header() {
    return (
        <>
        <div className="navbar">
            <div className="header">
                <div className="left">
                    <h1><span>D</span>evPortfolio</h1>
                </div>
                <nav>
                    <ul>
                        <li>Projets</li>
                        <li><span>à</span> propos</li>
                        <li>Contact</li>
                        <li><button>Télécharger CV</button></li>
                    </ul>
                    
                </nav>
            </div>
        </div>
        </>
    )
}