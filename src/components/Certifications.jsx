/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/**
 * @ Author: Abdou Lahi DIOP - Copyright © 2023 Abdallah
 * @ Creation Date: December 09, 2023 at 12:02:43 AM  CST
 * @ Last Modification Date: December 12, 2023 at 1:39:10 AM  CST
 * @ Modified by: Abdou Lahi DIOP
 * @ Description:
 */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { certifications } from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CertificationCard = ({
    index,
    title,
    description,
    credential_url,

    image,
}) => {
    return (

        <div
            class="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow hover:bg-tertiary
                    dark:bg-gray-800 dark:border-gray-700">
            <a href={credential_url}>
                <img class="rounded-t-lg" src={image} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
            </div>
        </div >

    )
}
const Certifications = () => {
    const [showAll, setShowAll] = useState(false);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const handleToggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div className={`mt-12 bg-black-100 rounded-[20px]`}>
            <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
                <p className={styles.sectionSubText}>What I&apos;ve achieved so far</p>
                <h2 className={styles.sectionHeadText}>Certifications.</h2>
            </div>
            <div className={`mt-20 pb-1 ${styles.paddingX}`}>
                {showAll ? (
                    <div className="flex justify-center flex-wrap gap-7">
                        {certifications.map((certification, index) => (
                            <CertificationCard key={`certification-${index}`} {...certification} />
                        ))}
                    </div>
                ) : (
                    <Slider {...sliderSettings}>
                        {certifications.map((certification, index) => (
                            <div key={`certification-${index}`}>
                                <CertificationCard {...certification} />
                            </div>
                        ))}
                    </Slider>
                )}
            </div>
            <div className="text-center mt-4">
                <button
                    onClick={handleToggleShowAll}
                    className="bg-primary text-secondary px-4 py-2 rounded-full focus:outline-none hover:bg-opacity-80"
                >
                    {showAll ? "Show Slides" : "Show All"}
                </button>
            </div>
        </div>
    );
};

export default SectionWrapper(Certifications, "certifications");