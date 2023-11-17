/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: November 16, 2023 at 7:10:04 PM  CST
 * @ Last Modification Date: November 16, 2023 at 7:42:33 PM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => function HOC() {
    return <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
        <span className="hash-span" id={idName}>
            &nbsp;
        </span>
        <Component />
    </motion.section>
}

export default SectionWrapper