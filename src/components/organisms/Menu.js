import React, { useEffect, createRef, Fragment } from 'react';
import { createPortal }                from "react-dom";
import IconClose                       from 'components/atoms/IconClose';
import Logo                            from 'components/atoms/Logo';
import FocusTrap                       from 'focus-trap-react';

const Menu = (props) => {
    useEffect(() => {
        function keyListener(e) {
            const listener = keyListenersMap.get(e.keyCode);
            return listener && listener(e);
        }
        document.addEventListener("keydown", keyListener);

        return () => document.removeEventListener("keydown", keyListener);
    });

    const keyListenersMap = new Map([[27, props.onClose]]);

    return (
        <FocusTrap active={props.open}>
            <div className={`c-menu ${props.open ? "-open" : ""}`} aria-modal="true" aria-hidden={!props.open}>
                <div className="c-menu__overlay">
                    <div className="o-rhythm__container -fluid">
                        <div className="c-menu__overlay__logo">
                            <Logo />
                        </div>
                    </div>
                </div>
                <nav aria-label="Main menu links">
                    <button onClick={props.onClose}><IconClose /></button>
                    <a href="/">home</a>
                    <a href="/blog/">blog</a>
                    <a href="/careers/">careers</a>
                    <a href="/contact/">contact</a>
                </nav>
            </div>
        </FocusTrap>
    );
};

export default Menu;
