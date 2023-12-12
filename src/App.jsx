/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: November 12, 2023 at 10:07:00 PM  CST
 * @ Last Modification Date: December 09, 2023 at 9:11:23 PM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

import { BrowserRouter } from "react-router-dom";
import {
    About,
    Contact,
    Experience,
    // Feedbacks,
    // Certifications,
    Hero,
    Navbar,
    StarsCanvas,
    Tech,
    Works
} from "./components";
// import { useState } from "react";
import Education from "./components/Education";
import Certifications from "./components/Certifications";

const App = () => {
    // const [currentPage, setCurrentPage] = useState(1);

    // const handlePageChange = (newPage) => {
    //     setCurrentPage(newPage);
    // };

    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Experience />
                <Education />
                <Tech />
                <Works />
                {/* <Feedbacks /> */}
                <div className="relative z-0">
                    <Certifications />
                </div>
                {/* <Certification
                    currentPage={currentPage}
                    onPageChange={(newPage) => handlePageChange(newPage)}
                /> */}
                <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
