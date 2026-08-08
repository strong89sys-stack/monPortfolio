import './mainPage.css'
import { useId } from 'react'
import skills from './../skills'

import { motion } from 'framer-motion'

import Header from "../components/Header"
import MainBanner from "../components/MainBanner"
import AboutSection from "../components/AboutSection"
import ProjectSection from "../components/ProjectSection"
import RoadSection from "../components/RoadSection"
import ContactSection from "../components/ContactSection"
import Footer from '../components/Footer'

export default function MainPage() {

    const skill = skills.map((s) => s.title)
 
    const projectId = useId()
    const contactId = useId()
    const aboutId = useId()


    return (
        <>
        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration:0.8, ease:"easeOut"}}
        className="container">
            <Header project={projectId} contact={contactId} about={aboutId} />
            <div className="mainContent">
                <MainBanner id={projectId} contact={contactId} />
                <AboutSection skills={skill} about={aboutId} />
                <ProjectSection id={projectId} />
                <RoadSection />
                <ContactSection contact={contactId} />
            </div>
            <Footer />
        </motion.div>
        </>
    )
}