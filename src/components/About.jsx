/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: November 16, 2023 at 11:06:40 AM  CST
 * @ Last Modification Date: November 19, 2023 at 5:58:00 PM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[240px] w-full">
            <motion.div
                variants={fadeIn("rigth", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center 
                    flex-col"
                >
                    <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I&apos;m a skilled software engineer with a penchant for quick learning, specializing in Java, JavaScript,
                Python, C and Erlang. Proficient in frameworks such as React, Angular, Express, and Spring, I have
                in-depth knowledge of the software lifecycle and Agile methodologies. Able to collaborate seamlessly
                within a team while retaining autonomy, I excel at problem-solving and enjoy taking on complex challenges.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, "about");