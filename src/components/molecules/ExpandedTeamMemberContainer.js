import React, { useState, useEffect } from "react";
import ExpandedTeamMember from "./ExpandedTeamMember";
import { gsap } from "gsap";
import NextArrow from "components/molecules/NextArrow";
import PrevArrow from "components/molecules/PrevArrow";

const ExpandedTeamMemberContainer = (props) => {
    const employees = props.employees;
    const [selectedEmployee, setSelectedEmployee] = useState(
        props.selectedEmployee
    );
    const [arrowDisplay, setArrowDisplay] = useState({ display: "none" });
    const [animationType, setAnimationType] = useState("initial");
    const previous = "previous";
    const next = "next";

    useEffect(() => {
        setSelectedEmployee(props.selectedEmployee);
        if (props.selectedEmployee != null) {
            setArrowDisplay({ display: "block" });
            return;
        }
        setArrowDisplay({ display: "none" });
        setAnimationType("initial");
    }, [props.selectedEmployee]);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    const escFunction = (e) => {
        if (e.key === "Escape") {
            props.handleCollapse();
        }
    };

    const onClick = (direction) => {
        if (props.isAnimating) { return; }
        props.setIsAnimating(true);
        setAnimationType("expanded-arrow");
        const newIndex = getNewIndex(direction);
        let newEmployee = employees[newIndex].node.frontmatter;
        newEmployee.index = newIndex;

        const imageDiv = document.querySelector(".expanded-team-member-image-div");
        const textDiv = document.querySelector(".expanded-team-member-text");


        if (direction === next) {
            goToNextEmployee(textDiv, imageDiv, newEmployee);

        } else if (direction === previous) {
            goToPrevEmployee(textDiv, imageDiv, newEmployee);
        }
    };

    const getNewIndex = (direction) => {
        const increment = direction === previous ? -1 : 1;
        let newIndex = selectedEmployee.index + increment;
        if (newIndex >= employees.length) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = employees.length - 1;
        }
        return newIndex;
    }

    const goToNextEmployee = (textDiv, imageDiv, newEmployee) => {
        gsap.fromTo(
            [textDiv, imageDiv],
            { opacity: 1 },
            {
                duration: 0.15,
                opacity: 0,
            }
        );
        gsap.fromTo(
            [textDiv, imageDiv],
            { x: 0 },
            { duration: 0.25, x: -1000 }
        );
        setTimeout(() => setSelectedEmployee(newEmployee), 200);
        setTimeout(() => props.setIsAnimating(false), 2000);
        gsap.fromTo(
            [textDiv, imageDiv],
            { x: 2000, opacity: 0 },
            {
                delay: 0.22,
                duration: 0.5,
                opacity: 1,
                x: 0,
            }
        );
    }

    const goToPrevEmployee = (textDiv, imageDiv, newEmployee) => {
        let tl = gsap.timeline();
        tl.fromTo(
            [textDiv, imageDiv],
            { opacity: 1, x: 0 },
            {
                duration: 0.5,
                opacity: 0,
                x: 1500,
            }
        );

        // Wait to change employee until invisible to user
        setTimeout(() => setSelectedEmployee(newEmployee), 450);
        setTimeout(() => props.setIsAnimating(false), 2000);
        tl.fromTo(
            [textDiv, imageDiv],
            { x: -1500, opacity: 0 },
            {
                duration: 0.5,
                opacity: 1,
                x: 0,
            }
        );
    }

    return (
        <>
            <PrevArrow
                onClick={() => onClick(previous)}
                className="expanded-arrow expanded-arrow-prev"
                style={arrowDisplay}
            />
            <ExpandedTeamMember
                animationType={animationType}
                setAnimationType={setAnimationType}
                employee={selectedEmployee}
                handleCollapse={props.handleCollapse}
                isExpanded={props.isExpanded}
                onFadedOut={props.onFadedOut}
                wasOpenedByKeyboard={props.wasOpenedByKeyboard}
                setIsAnimating={props.setIsAnimating}
            />
            <NextArrow
                onClick={() => onClick(next)}
                className="expanded-arrow expanded-arrow-next"
                style={arrowDisplay}
            />
        </>
    );
};

export default ExpandedTeamMemberContainer;
