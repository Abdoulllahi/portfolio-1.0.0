/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: November 12, 2023 at 10:07:00 PM  CST
 * @ Last Modification Date: November 17, 2023 at 12:59:31 AM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from "./components";
import Education from "./components/Education";

const App = () => {

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
                <Feedbacks />
                <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
