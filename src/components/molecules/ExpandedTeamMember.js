import React, { useEffect } from "react";
import asteriskImg from "./../../../static/img/team/white-asterisk.png";
import { gsap, Power4 } from "gsap";
import closeButton from "./../../../static/img/close-button.png";
import Img from "gatsby-image";

const calculateFinalImageWidth = () => {
    const windowWidth = window.innerWidth;
    switch (true) {
        case (windowWidth > 1451):
            return 349;
        case (windowWidth > 1181):
            return 303;
        case (windowWidth > 941):
            return 239;
        case (windowWidth > 769):
            return 172;
        case (windowWidth > 601):
            return 429;
        case (windowWidth > 481):
            return 340;
        default:
            return 162;
    }
}

const calculateFinalImagePosValue = () => {
    const windowWidth = window.innerWidth;
    let position = {
        left: "41%",
        top: "19%"
    };
    switch (true) {
        case (windowWidth > 1801):
            return position;
        case (windowWidth > 1451):
            position.left = "46%";
            return position;
        case (windowWidth > 1251):
            position.left = "51%";
            return position;
        case (windowWidth > 941):
            position.left = "51%";
            position.top = "21%";
            return position;
        case (windowWidth > 769):
            position.left = "54%";
            position.top = "21%";
            return position;
        default:
            return {left: 0, top: 0};
    }
}

const ExpandedTeamMember = (props) => {
    const {employee} = props;

    useEffect(() => {
        // fades in the expanded team member view
        if (!props.isExpanded || employee === null) {
            return;
        }

        props.setIsAnimating(true);

        const parentDiv = document.querySelector(".expanded-team-member");
        const textDiv = document.querySelector(".expanded-team-member-text");
        const imageDiv = document.querySelector(".expanded-team-member-image-div");
        const image = document.querySelector(".expanded-team-member-image");
        const arrows = document.querySelectorAll(".expanded-arrow");

        const finalImageWidth = calculateFinalImageWidth();
        const finalImagePosValue = calculateFinalImagePosValue();

        if (props.animationType === "expanded-arrow") {
            // Handle "next, prev" navigation
            gsap.fromTo(textDiv,
                { opacity: 0,},
                { duration: 2, opacity: 1 }
            );

            // this animation with duration 0 is to ensure the images are at full size when using slider
            // (when not using slider, the image grows when initially expanded)
            gsap.to(image,
                { duration: 0, width: finalImageWidth }
            );
            gsap.fromTo(image,
                { opacity: 0 },
                { duration: 2, opacity: 1 }
            );

            return;
        }

        if (props.wasOpenedByKeyboard) {
            arrows[1].focus();
        }

        setTimeout(() => props.setIsAnimating(false), 1000);

        gsap.to(parentDiv,
            { background: "rgba(0, 119, 93, 0.9)", duration: 0.25 }
        );

        gsap.to(textDiv,
            { duration: 0.5, opacity: 1 }
        );

        gsap.to(imageDiv, {
            duration: 1,
            ease: Power4.easeIn,
            left: finalImagePosValue.left,
            opacity: 1,
            top: finalImagePosValue.top,
        });

        gsap.to(image, {
            duration: 1,
            ease: Power4.easeIn,
            width: finalImageWidth,
        });

        gsap.to(arrows[0],
            { opacity: 0.9, duration: 0.35 }
        );

        gsap.to(arrows[1],
            { opacity: 0.9, duration: 0.35 }
        );

    }, [employee]);

    useEffect(() => {
        // fades out the expanded team member view
        if (props.isExpanded == true) { return; }

        const parentDiv = document.querySelector(".expanded-team-member");
        const textDiv = document.querySelector(".expanded-team-member-text");
        const imageDiv = document.querySelector(".expanded-team-member-image-div");
        const arrows = document.querySelectorAll(".expanded-arrow");

        if (arrows !== null) {
            gsap.to(arrows[0], {
                opacity: 0,
                duration: .01
            });
            gsap.to(arrows[1], {
                opacity: 0,
                duration: .01
            });
        }

        if (parentDiv !== null) {
            gsap.to(parentDiv, {
                background: "rgba(0, 119, 93, 0.0)",
                duration: 0.5,
                onComplete: () => props.onFadedOut(),
            });
        }

        if (textDiv !== null) {
            gsap.to(textDiv, {
                opacity: 0,
                duration: 0.25,
            });
        }

        if (imageDiv !== null) {
            gsap.to(imageDiv, {
                opacity: 0,
                duration: 0.25,
            });
        }

    }, [props.isExpanded]);

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            props.handleCollapse()
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClick = () => {
        props.setAnimationType("initial");
        props.handleCollapse();
    }

    // If no employee is selected, don't render this component:
    if (employee == null) {
        return null;
    }

    const getEmployeeTeamExpandedPhoto = () => {
        let photoComponent;

        if (employee.teamExpandedPhoto != null){
            photoComponent = <Img
                alt={employee.teamExpandedPhoto.description}
                className="expanded-team-member-image"
                durationFadeIn={50}
                fluid={employee.teamExpandedPhoto?.image.childImageSharp.fluid}
                loading="eager"/>
        }
        else {
            photoComponent = <img
                alt = {employee.name}
                className="expanded-team-member-image"
                src = "/img/team/expanded-photos/placeholder6_lg.jpg" />;
        }

        return photoComponent;
    }

    return (
        <div
            className="expanded-team-member"
            onClick={handleClick}>
            <div className="expanded-team-member-text">
                <p className="expanded-team-member-text-name">
                    {employee.name}{" "}
                    <sup>
                        <img src={asteriskImg} alt="Asterisk" />
                    </sup>
                </p>
                <p className="expanded-team-member-text-position">
                    {employee.position}
                </p>
                <p className="expanded-team-member-text-egg">
                    <sup>
                        <img src={asteriskImg} alt="Asterisk" />{" "}
                    </sup>
                    {employee.easterEgg}
                </p>
            </div>
            <div className="expanded-team-member-image-div">
                {getEmployeeTeamExpandedPhoto()}
                <img
                    alt="close button"
                    className="expanded-team-member-close-button"
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            props.handleCollapse();
                            event.preventDefault();
                        }
                    }}
                    src={closeButton}
                    tabIndex="0"
                />
            </div>
        </div>
    );
};

export default ExpandedTeamMember;
