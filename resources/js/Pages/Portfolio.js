import React, { useEffect, useState } from 'react'
import Main from '../Layouts/Main'

const Portfolio = () => {

    // state for storing the isotope object, with an initial value of null
    const [isotope, setIsotope] = useState(null);
    // state for storing the filter keyword, with an initial value of *, which matches everything
    const [filterKey, setFilterKey] = useState(null);

    useEffect(() => {
        setIsotope(
            new Isotope('.grid', {
                // filter-container: className of the parent of the isotope elements
                itemSelector: '.grid-item', // filter-item: className of the isotope elements
                layoutMode: 'fitRows', // for horizontal isotope
            })
        );
    }, []); // [] makes this useEffect work like a componentDidMount in a class component

    useEffect(() => {
        if (isotope) {
            // sanity check
            filterKey === '*'
                ? isotope.arrange({ filter: `*` })
                : isotope.arrange({ filter: `.${filterKey}` });
        }
    }, [isotope, filterKey]);

    return (
        <Main title="Portfolio">
            <div className="page-section">
                <div onLoad={() => setFilterKey('*')} className="container">
                    <div className="filterable-btn">
                        <button className="btn active" onClick={() => setFilterKey('*')} >All</button>
                        <button className="btn" onClick={() => setFilterKey('web')}>Website</button>
                        <button className="btn" onClick={() => setFilterKey('mobile')}>Mobile</button>
                        <button className="btn" onClick={() => setFilterKey('desktop')}>Desktop</button>
                    </div>

                    <div className="grid mt-3">
                        <div className="grid-item mobile">
                            <div className="portfolio">
                                <a href="img/portfolio/work-1.jpg" data-fancybox="portfolio">
                                    <img src="img/portfolio/work-1.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="grid-item mobile">
                            <div className="portfolio">
                                <a href="img/portfolio/work-2.jpg" data-fancybox="portfolio">
                                    <img src="img/portfolio/work-2.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="grid-item desktop">
                            <div className="portfolio">
                                <a href="img/portfolio/work-3.jpg" data-fancybox="portfolio">
                                    <img src="img/portfolio/work-3.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="grid-item web">
                            <div className="portfolio">
                                <a href="img/portfolio/work-4.jpg" data-fancybox="portfolio">
                                    <img src="img/portfolio/work-4.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="grid-item mobile">
                            <div className="portfolio">
                                <a href="img/portfolio/work-5.jpg" data-fancybox="portfolio">
                                    <img src="img/portfolio/work-5.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="grid-item desktop">
                            <div className="portfolio">
                                <a href="img/portfolio/work-6.jpg" data-fancybox="portfolio">
                                    <img src="img/portfolio/work-6.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="grid-item web">
                            <div className="portfolio">
                                <a href="img/portfolio/work-7.jpg" data-fancybox="portfolio">
                                    <img src="img/portfolio/work-7.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="grid-item mobile">
                            <div className="portfolio">
                                <a href="img/portfolio/work-8.jpg" data-fancybox="portfolio">
                                    <img src="img/portfolio/work-8.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="grid-item mobile">
                            <div className="portfolio">
                                <a href="img/portfolio/work-9.jpg" data-fancybox="portfolio">
                                    <img src="img/portfolio/work-9.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="mt-5 text-center">
                        <button className="btn btn-primary">Load More</button>
                    </div> */}
                </div>
            </div>

        </Main>
    )
}

export default Portfolio
