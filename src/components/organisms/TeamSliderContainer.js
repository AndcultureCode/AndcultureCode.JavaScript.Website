import React, { useState, useEffect } from "react";
import { graphql, StaticQuery } from "gatsby";
import PrevArrow from "components/molecules/PrevArrow";
import NextArrow from "components/molecules/NextArrow";
import TeamSlider from "components/organisms/TeamSlider";
import { TABLETBREAKPOINT } from "../../constants/index.js";

// Primary Component
// ------------------------------------

const TeamSliderContainer = (props) => {
    let initialSlidesPerPage = 3;

    function isLargeViewport() {
        if (typeof window !== `undefined`) {
            const matchString = "(min-width: " + TABLETBREAKPOINT + ")";
            return window.matchMedia(matchString).matches;
        }
        return false;
    }

    const [slidesPerPage, setSlidesPerPage] = useState(initialSlidesPerPage);
    const [isExpanded, setIsExpanded] = useState(false);
    const [shuffledItems, setShuffledItems] = useState([]);

    useEffect(() => {
        if (shuffledItems.length === 0) {
            setShuffledItems(shuffleEmployees(props.data));
        }

        function handleResize() {
            if (isLargeViewport()) {
                setSlidesPerPage(7);
                return;
            }
            setSlidesPerPage(3);
        }
        handleResize();
        if (typeof window !== `undefined`) {
            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    function shuffleEmployees(a) {
        let employees = a.allMarkdownRemark.edges;
        for (let i = employees.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [employees[i], employees[j]] = [employees[j], employees[i]];
        }
        a.allMarkdownRemark.edges = employees;
        return a;
    }

    let settings = {
        accessibility: false,
        dots: true,
        draggable: true,
        infinite: true,
        speed: 500,
        rows: 4,
        slidesToShow: slidesPerPage,
        slidesToScroll: slidesPerPage,
        prevArrow: (
            <PrevArrow
                isDisabled={isExpanded}
                title="Slide team grid left"
            />
        ),
        nextArrow: (
            <NextArrow
                isDisabled={isExpanded}
                title="Slide team grid right"
            />
        ),
    };

    if (shuffledItems == null || shuffledItems.length === 0) {
        return null;
    }

    return (
        <TeamSlider
            settings={settings}
            data={shuffledItems}
            count={props.count}
            onExpand={() => setIsExpanded(true)}
            onCollapse={() => setIsExpanded(false)}
            isExpanded={isExpanded}
        />
    );
};

// Exports
// ------------------------------------

export default () => (
    <StaticQuery
        query={graphql`
            query EmployeeListQuery {
                allMarkdownRemark(
                    filter: {
                        frontmatter: {
                            templateKey: { eq: "employee" }
                            status: { eq: "active" }
                        }
                    }
                ) {
                    edges {
                        node {
                            id
                            frontmatter {
                                position
                                name
                                easterEgg
                                socialLinks {
                                    platform
                                    url
                                }
                                teamGridPhoto {
                                    image {
                                        childImageSharp {
                                            fluid(maxWidth: 960, quality: 100) {
                                                ...GatsbyImageSharpFluid
                                            }
                                        }
                                    }
                                    description
                                }
                                teamExpandedPhoto {
                                    image {
                                        childImageSharp {
                                            fluid(maxWidth: 960, quality: 100) {
                                                ...GatsbyImageSharpFluid
                                            }
                                        }
                                    }
                                    description
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => (
            <TeamSliderContainer data={data} count={count} />
        )}
    />
);
