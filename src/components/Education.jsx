/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: November 16, 2023 at 11:24:46 PM  CST
 * @ Last Modification Date: November 17, 2023 at 1:03:35 AM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */
/* eslint-disable react/prop-types */

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../style";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";

const EducationCard = ({ education }) => {
    return <VerticalTimelineElement
        contentStyle={{ background: "#1d1836", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #232621" }}
        date={education.duration}
    >

    </VerticalTimelineElement>
}

const Education = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My Educational Journey</p>
                <h2 className={styles.sectionHeadText}>Education History.</h2>
            </motion.div >

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {educations.map((education, index) => (
                        <EducationCard key={index} education={education} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper(Education, "education")