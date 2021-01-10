import React from 'react'
import Footer from '../Footer'
import Introduction from '../Introduction'
import MainSection from '../MainSection'
import Navbar from '../Navbar'
import Projects from '../Projects'

export default function Main() {
    return (
        <>
            <Navbar />
            <MainSection />
            <Projects />
            <Introduction />
            <Footer />
        </>
    )
}
