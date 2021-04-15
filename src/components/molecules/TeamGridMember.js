import React, { useState } from "react";
import Img from "gatsby-image";

// Primary Component
// ------------------------------------

const TeamGridMember = (props) => {
    const employee = props.employee;
    const [hasMouseMoved, setHasMouseMoved] = useState(false);

    // These mouse events allow for dragging the whole slider without causing the handleExpand to fire.
    // With these in place, handleExpand only fires if you click without dragging.
    const onMouseDown = () => {
        setHasMouseMoved(false);
    };
    const onMouseMove = () => {
        setHasMouseMoved(true);
    };
    const onMouseUp = () => {
        if (!hasMouseMoved) {
            props.handleExpand(employee);
        }
        setHasMouseMoved(false);
    };

    const getEmployeeTeamGridPhoto = () => {
        let photoComponent;

        if (employee.teamGridPhoto != null){
            photoComponent = <Img
                fluid={employee.teamGridPhoto?.image.childImageSharp.fluid}
                alt={employee.teamGridPhoto?.description}
                loading="eager"/>
        }
        else {
            photoComponent = <img
                alt = {employee.name}
                src = "/img/team/grid-photos/placeholder6_sm.jpg" />;
        }

        return photoComponent;
    }

    return (
        <div
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            className="team-grid-member">
            {getEmployeeTeamGridPhoto()}
            <div className="gradient"></div>
            <div className="green-gradient"></div>
        </div>
    );
};

// Exports
// ------------------------------------

export default TeamGridMember;
