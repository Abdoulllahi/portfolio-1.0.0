/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: November 17, 2023 at 8:29:57 AM  CST
 * @ Last Modification Date: November 19, 2023 at 4:27:08 AM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology) => (
                <div className="w-28 h-28" key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}
        </div>
    )
}

export default SectionWrapper(Tech, "");