import React, { Component } from 'react';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [
                'PHP',
                'RUBY',
                'JAVASCRIPT',
                'ACTIONSCRIPT'
            ]
        }
    }

    render() {
        return (
            <div className='portfolio'>
                <div className='portfolio__user-head'>
                    <div className='portfolio__user-avatar'>
                        <img src='user.jpg' alt="My default image" />  
                    </div>
                    <div className='portfolio__user-about bg-grey'>
                        <div className='portfolio__user-about-info'>
                            <div className='portfolio__user-about-name fw-bold fz-2'>
                                John Smith
                            </div>
                            <div className='portfolio__user-about-location fw-bold'>
                                Portland, Oregon, USA
                            </div>
                            <div className='portfolio__user-about-langue fw-bold'>
                                English
                            </div>
                            <div className='portfolio__user-about-skills'>
                                {
                                    this.state.skills.map((i, index)=>{
                                        return (
                                            <div key={i + index} className='portfolio__user-about-skills-text f-white bg-black'>
                                                {i}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='portfolio__user-about-button fw-middle'>
                                Add Skills
                            </div>
                        </div>
                        <div className='portfolio__user-print'>
                            <div className='portfolio__user-print-button bg-black'>
                                <p className='portfolio__user-print-button-text'>
                                    PRINT THIS PAGE
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='portfolio__user-description'>
                    <div className='portfolio__user-description-item'>
                        <header className='portfolio__user-description-item-head pos-center fw-bold'>
                            Portfolio
                        </header>
                        <span className='portfolio__user-description-item-sp pos-center'>
                            Php, Ruby, Javascript
                        </span>
                        <article className='portfolio__user-description-item-content'>
                            <ul>
                                <li><span className='fw-bold'>NavalPlan,</span> PHP, Ruby</li>
                                <li><span className='fw-bold'>MyTime,</span> JavaScript</li>
                                <li><span className='fw-bold'>Formidable,</span> PHP, Ruby</li>
                                <li><span className='fw-bold'>MyTime,</span> JavaScript</li>
                                <li><span className='fw-bold'>MonSoon,</span> ActionScript</li>
                            </ul>

                        </article>
                    </div>
                    <div className='portfolio__user-description-item'>
                        <header className='portfolio__user-description-item-head pos-center fw-bold'>
                            Experience
                        </header>
                        <article className='portfolio__user-description-item-content'>
                            <ul>
                                <li><span className='fw-bold'>PHP,</span> 6 years</li>
                                <li><span className='fw-bold'>Ruby,</span> 7years</li>
                                <li><span className='fw-bold'>JavaScript,</span> 4years</li>
                                <li><span className='fw-bold'>ActionScript,</span> 3 years</li>
                            </ul>
                        </article>
                    </div>
                    <div className='portfolio__user-description-item code-bg'>
                        <header className='portfolio__user-description-item-head bg-white-container pos-center fw-bold'>
                            Sample code and algorithms
                        </header>
                        <article className='portfolio__user-description-item-content'>
                        </article>
                    </div>
                    <div className='portfolio__user-description-item'>
                        <div className='portfolio__user-description-item-first'>
                            <header className='portfolio__user-description-item-head pos-center fw-bold'>
                                Availabality
                            </header>
                            <article className='portfolio__user-description-item-content pos-center fz-2 fw-bold'>
                                Full-Time
                            </article>
                        </div>
                        <div className='portfolio__user-description-item-last'>
                            <header className='portfolio__user-description-item-head pos-center fw-bold'>
                                Preferred environment
                            </header>
                            <article id='pref-env' className='portfolio__user-description-item-content pos-center'>
                                Git, Github, vim, emacs,<br/>
                                Jenkins, Mac OS X
                            </article>
                        </div>
                    </div>
                    <div className='portfolio__user-description-item'>
                        <header className='portfolio__user-description-item-head pos-center fw-bold'>
                            The most amazing...
                        </header>
                        <article className='portfolio__user-description-item-content fs fz-small'>
                            <blockquote>
                                ...Lorem ipsum dolor sit amet, consestetur adipisicing
                                Lorem ipsum dolor sit amet, consestetur adipisicing
                                Lorem ipsum dolor sit amet, consestetur adipisicing
                                Lorem ipsum dolor sit amet, consestetur adipisicing
                            </blockquote>
                        </article>
                        <footer className='portfolio__user-description-item-footer fw-bold'>
                            - Martin
                        </footer>
                    </div>
                    <div className='portfolio__user-description-item'>
                        <header className='portfolio__user-description-item-head pos-center fw-bold'>
                            In clients at look for
                        </header>
                        <article className='portfolio__user-description-item-content fs fz-small'>
                            <blockquote>
                                ...Lorem ipsum dolor sit amet, consestetur adipisicing
                                Lorem ipsum dolor sit amet, consestetur adipisicing
                                Lorem ipsum dolor sit amet, consestetur adipisicing
                            </blockquote>
                        </article>
                        <footer className='portfolio__user-description-item-footer fw-bold'>
                            - Martin
                        </footer>
                    </div>
                    <div className='portfolio__user-description-item'>
                        <header className='portfolio__user-description-item-head pos-center'>

                        </header>
                        <article className='portfolio__user-description-item-content'>
                        </article>
                    </div>
                    <div className='portfolio__user-description-item'>
                        <header className='portfolio__user-description-item-head pos-center fw-bold'>
                            Note
                        </header>
                        <article className='portfolio__user-description-item-content fs fz-small'>
                            <blockquote>
                                ...Lorem ipsum dolor sit amet, consestetur adipisicing
                                Lorem ipsum dolor sit amet, consestetur adipisicing
                                Lorem ipsum dolor sit amet, consestetur adipisicing
                            </blockquote>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;