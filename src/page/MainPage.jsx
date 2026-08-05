import './mainPage.css'
import { useState, useEffect } from 'react'
import skills from './../skills'

import Header from "../components/Header"
import MainBanner from "../components/MainBanner"
import AboutSection from "../components/AboutSection"
import ProjectSection from "../components/ProjectSection"
import RoadSection from "../components/RoadSection"
import ContactSection from "../components/ContactSection"
import Footer from '../components/Footer'

export default function MainPage() {

    const skill = skills.map((s) => s.title)
    
    console.log(skill)


    return (
        <>
        <div className="container">
            <Header />
            <div className="mainContent">
                <MainBanner />
                <AboutSection skills={skill} />
                <ProjectSection />
                <RoadSection />
                <ContactSection />
            </div>
            <Footer />
        </div>
        </>
    )
}