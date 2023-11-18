/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: November 16, 2023 at 11:24:46 PM  CST
 * @ Last Modification Date: November 17, 2023 at 7:49:51 AM  CST
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
        iconStyle={{ background: education.iconBg }}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                <img
                    src={education.icon}
                    alt={education.university}
                    className="w-[60%] h-[60%] object-contain"
                />
            </div>
        }
    >
        <div>
            <h3 className="text-white text-[24px] font-bold">{education.diploma}</h3>
            <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                {education.university}
            </p>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
            {education.courses.map((course, index) => (
                <li
                    key={`education-course-${index}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                >
                    {course}
                </li>
            ))}
        </ul>
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