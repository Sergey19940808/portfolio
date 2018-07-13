import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
    render() {
        return (
            <div className='portfolio'>
                <div className='portfolio__user-head'>
                    <div className='portfolio__user-avatar'>
                        <img src='user.png' />
                    </div>
                    <div className='portfolio__user-about'>
                        <div className='portfolio__user-about-info'>
                            <div className='portfolio__user-about-name'>
                            </div>
                            <div className='portfolio__user-about-location'>
                            </div>
                            <div className='portfolio__user-about-langue'>
                            </div>
                            <div className='portfolio__user-about-skills'>
                            </div>
                            <div className='portfolio__user-about-button'>
                            </div>
                        </div>
                        <div className='portfolio__user-print'>
                        </div>
                    </div>
                </div>

                <div className='portfolio__user-description'>
                    <div className='portfolio__user-description-item'>
                        <header className='portfolio__user-description-item-head'>
                        </header>
                        <article className='portfolio__user-description-item-content'>
                        </article>
                    </div>
                    <div className='portfolio__user-description-item'>
                        <header className='portfolio__user-description-item-head'>
                        </header>
                        <article className='portfolio__user-description-item-content'>
                        </article>
                    </div>
                    <div className='portfolio__user-description-item'>
                        <header className='portfolio__user-description-item-head'>
                        </header>
                        <article className='portfolio__user-description-item-content'>
                        </article>
                    </div>
                    <div className='portfolio__user-description-item'>
                        <header className='portfolio__user-description-item-head'>
                        </header>
                        <article className='portfolio__user-description-item-content'>
                        </article>
                    </div>
                    <div className='portfolio__user-description-item'>
                        <header className='portfolio__user-description-item-head'>
                        </header>
                        <article className='portfolio__user-description-item-content'>
                        </article>
                    </div>
                    <div className='portfolio__user-description-item'>
                        <header className='portfolio__user-description-item-head'>
                        </header>
                        <article className='portfolio__user-description-item-content'>
                        </article>
                        <footer className='portfolio__user-description-item-footer'>
                        </footer>
                    </div>
                    <div className='portfolio__user-description-item'>
                        <header className='portfolio__user-description-item-head'>
                        </header>
                        <article className='portfolio__user-description-item-content'>
                        </article>
                    </div>
                    <div className='portfolio__user-description-item'>
                        <header className='portfolio__user-description-item-head'>
                        </header>
                        <article className='portfolio__user-description-item-content'>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;