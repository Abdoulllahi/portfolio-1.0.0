/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: November 16, 2023 at 1:05:41 PM  CST
 * @ Last Modification Date: November 16, 2023 at 3:44:36 PM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */

import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
    const { progress } = useProgress();
    return (

        <Html>
            <span className="canvas-load"></span>
            <p
                style={{
                    fontSize: 14,
                    color: "#f1f1f1",
                    fontWeight: 800,
                    marginTop: 40
                }}
            >{progress.toFixed(2)}%</p>
        </Html>
    )
}

export default Loader