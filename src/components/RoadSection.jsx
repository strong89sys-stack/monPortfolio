import './../style/road.css'
import { MdOutlineRoute } from "react-icons/md";

import { motion } from 'framer-motion'
import road from '../road';

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

                    {road.map((item, index) => (
                        item.id % 2 !== 0 ? 
                        <div key={index} className="row first">
                            <div className="date">
                                <span>{item.year}</span>
                            </div>

                            <div className="ring"></div>

                            <div className="content-box">
                                <h3>
                                    {item.title}
                                    {item.subtitle !== "" && <span><br />{item.subtitle}</span>}
                                </h3>

                                <p>
                                    {item.description}
                                </p>
                            </div>
                        </div> :
                        <div key={index} className="row second">
                            <div className="date">
                                <span>{item.year}</span>
                            </div>

                            <div className="ring"></div>

                            <div className="content-box">
                                <h3>
                                    {item.title}
                                    {item.subtitle !== "" && <span><br />{item.subtitle}</span>}
                                </h3>

                                <p>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
        </>
    )
}