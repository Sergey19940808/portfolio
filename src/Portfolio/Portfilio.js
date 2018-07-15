import React, { Component } from 'react';
import InputField from '../Input/InputField';
import InputSkills from '../Input/InputSkills';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInputName: localStorage.getItem('inputFullName'),
            isInputLocation: localStorage.getItem('inputLocation'),
            isInputLangue: localStorage.getItem('inputLangue'),
            isInputSkills: localStorage.getItem('inputSkills'),

            fullName: localStorage.getItem('fullName') === null ? 
                localStorage.setItem('fullName', 'John Smith') 
                : 
                localStorage.getItem('fullName'),
            location: localStorage.getItem('location') === null ?  
                localStorage.setItem('location', 'Portland, Oregon, USA')
                : 
                localStorage.getItem('location'),
            langue: localStorage.getItem('langue') === null ?
                localStorage.setItem('langue', 'english') 
                : 
                localStorage.getItem('langue'),
            skills: localStorage.getItem('skills') === null ? 
                localStorage.setItem('skills', JSON.stringify(['PHP']))
                :
                JSON.parse(localStorage.getItem('skills'))
        }
    }

    componentWillMount() {
        //localStorage.clear();
        localStorage.setItem('inputFullName', 'false');
        localStorage.setItem('inputLocation', 'false');
        localStorage.setItem('inputLangue', 'false');
        localStorage.setItem('inputSkills', 'false');
    }

    showInputFullName = () => {
        if (this.state.isInputName === 'true') {
            localStorage.setItem('inputFullName', 'false');
            this.setState({isInputName: localStorage.getItem('inputFullName')});
        } else {
            localStorage.setItem('inputFullName', 'true');
            this.setState({isInputName: localStorage.getItem('inputFullName')});
        }

    }

    showInputLocation = () => {
        if (this.state.isInputLocation === 'true') {
            localStorage.setItem('inputLocation', 'false');
            this.setState({isInputLocation: localStorage.getItem('inputLocation')});
        } else {
            localStorage.setItem('inputLocation', 'true');
            this.setState({isInputLocation: localStorage.getItem('inputLocation')});
        }
    }

    showInputLangue = () => {
        if (this.state.isInputLangue === 'true') {
            localStorage.setItem('inputLangue', 'false');
            this.setState({isInputLangue: localStorage.getItem('inputLangue')});
        } else {
            localStorage.setItem('inputLangue', 'true');
            this.setState({isInputLangue: localStorage.getItem('inputLangue')});
        }
    }

    showInputSkills = () => {
        if (this.state.isInputSkills === 'true') {
            localStorage.setItem('inputSkills', 'false');
            this.setState({isInputSkills: localStorage.getItem('inputSkills')});
        } else {
            localStorage.setItem('inputSkills', 'true');
            this.setState({isInputSkills: localStorage.getItem('inputSkills')});
        }
    }

    saveInput = () => {
        this.setState({fullName: localStorage.getItem('fullName')});
        this.setState({location: localStorage.getItem('location')});
        this.setState({langue: localStorage.getItem('langue')});
        this.setState({skills: JSON.parse(localStorage.getItem('skills'))});

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
                            <div className='portfolio__user-about-name fw-bold fz-2' 
                                onDoubleClick={this.showInputFullName}
                            >
                                {
                                    this.state.isInputName === 'true' ?
                                        <InputField 
                                            key={'name'}
                                            value={this.state.fullName} 
                                            prefix={'fullName'}
                                            prefixInput={'inputFullName'}
                                            method={this.showInputFullName}
                                            saveInput={this.saveInput}
                                        />
                                        :
                                        this.state.fullName
                                }
                            </div>
                            <div className='portfolio__user-about-location fw-bold fz-middle'
                                onDoubleClick={this.showInputLocation}
                            >
                                {
                                    this.state.isInputLocation === 'true' ?
                                        <InputField 
                                            key={'location'}
                                            value={this.state.location} 
                                            prefix={'location'}
                                            prefixInput={'inputLocation'}
                                            method={this.showInputLocation}
                                            saveInput={this.saveInput}
                                        />
                                        :
                                        this.state.location
                                }
                            </div>
                            <div className='portfolio__user-about-langue fw-bold fz-middle'
                                onDoubleClick={this.showInputLangue}
                            >
                                {
                                    this.state.isInputLangue === 'true' ?
                                        <InputField
                                            key={'langue'}    
                                            value={this.state.langue} 
                                            prefix={'langue'}
                                            prefixInput={'inputLangue'} 
                                            method={this.showInputLangue}
                                            saveInput={this.saveInput}
                                        />
                                        :
                                        this.state.langue
                                }
                                
                            </div>
                            <div className='portfolio__user-about-skills'>
                                {
                                    this.state.skills.map((i, index)=>{
                                        return (
                                            <div 
                                                key={i + index} 
                                                className='portfolio__user-about-skills-text f-white bg-black'
                                            >
                                                {i}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='portfolio__user-about-button fw-middle'
                                onDoubleClick={this.showInputSkills}
                            >
                                {
                                    this.state.isInputSkills === 'true' ?
                                        <InputSkills
                                            key={'skills'}    
                                            isInput={this.showInputSkills}
                                            saveInput={this.saveInput}
                                        />
                                        :
                                        'Add Skills'
                                }
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
                        <header className='portfolio__user-description-item-head pos-center fw-bold fz-middle'>
                            Portfolio
                        </header>
                        <span className='portfolio__user-description-item-sp pos-center'>
                            Php, Ruby, Javascript
                        </span>
                        <div className='portfolio__user-description-item-content'>
                            <ul>
                                <li><span className='fw-bold'>NavalPlan,</span> PHP, Ruby</li>
                                <li><span className='fw-bold'>MyTime,</span> JavaScript</li>
                                <li><span className='fw-bold'>Formidable,</span> PHP, Ruby</li>
                                <li><span className='fw-bold'>MyTime,</span> JavaScript</li>
                                <li><span className='fw-bold'>MonSoon,</span> ActionScript</li>
                            </ul>

                        </div>
                    </div>
                    <div className='portfolio__user-description-item'>
                        <header className='portfolio__user-description-item-head pos-center fw-bold fz-middle'>
                            Experience
                        </header>
                        <div className='portfolio__user-description-item-content'>
                            <ul>
                                <li><span className='fw-bold'>PHP,</span> 6 years</li>
                                <li><span className='fw-bold'>Ruby,</span> 7years</li>
                                <li><span className='fw-bold'>JavaScript,</span> 4years</li>
                                <li><span className='fw-bold'>ActionScript,</span> 3 years</li>
                            </ul>
                        </div>
                    </div>
                    <div className='portfolio__user-description-item code-bg'>
                        <header className='portfolio__user-description-item-head bg-white-container pos-center fw-bold fz-middle'>
                            Sample code and algorithms
                        </header>
                        <div className='portfolio__user-description-item-content'>
                        </div>
                    </div>
                    <div className='portfolio__user-description-item'>
                        <div className='portfolio__user-description-item-first'>
                            <header className='portfolio__user-description-item-head pos-center fw-bold fz-middle'>
                                Availabality
                            </header>
                            <div className='portfolio__user-description-item-content pos-center fz-2 fw-bold'>
                                Full-Time
                            </div>
                        </div>
                        <div className='portfolio__user-description-item-last'>
                            <header className='portfolio__user-description-item-head pos-center fw-bold fz-middle'>
                                Preferred environment
                            </header>
                            <div id='pref-env' className='portfolio__user-description-item-content pos-center'>
                                Git, Github, vim, emacs,<br/>
                                Jenkins, Mac OS X
                            </div>
                        </div>
                    </div>
                    <div className='portfolio__user-description-item'>
                        <header className='portfolio__user-description-item-head pos-center fw-bold fz-middle'>
                            The most amazing...
                        </header>
                        <div className='portfolio__user-description-item-content fs fz-small'>
                            <blockquote className='blockquote-one'>
                                ...Lorem ipsum dolor sit amet, consestetur adipisicing
                                Lorem ipsum dolor sit amet, consestetur adipisicing
                                Lorem ipsum dolor sit amet, consestetur adipisicing
                                Lorem ipsum dolor sit amet, consestetur adipisicing
                            </blockquote>
                        </div>
                        <footer className='portfolio__user-description-item-footer fw-bold'>
                            - Martin
                        </footer>
                    </div>
                    <div className='portfolio__user-description-item'>
                        <header className='portfolio__user-description-item-head pos-center fw-bold fz-middle'>
                            In clients at look for
                        </header>
                        <div className='portfolio__user-description-item-content fs fz-small'>
                            <blockquote className='blockquote-two'>
                                ...Lorem ipsum dolor sit amet, consestetur adipisicing
                                Lorem ipsum dolor sit amet, consestetur adipisicing
                                Lorem ipsum dolor sit amet, consestetur adipisicing
                            </blockquote>
                        </div>
                        <footer className='portfolio__user-description-item-footer fw-bold'>
                            - Martin
                        </footer>
                    </div>
                    <div className='portfolio__user-description-item'>
                        <header className='portfolio__user-description-item-head pos-center'>

                        </header>
                        <div className='portfolio__user-description-item-content'>
                        </div>
                    </div>
                    <div className='portfolio__user-description-item'>
                        <header className='portfolio__user-description-item-head pos-center fw-bold fz-middle'>
                            Note
                        </header>
                        <div className='portfolio__user-description-item-content fs fz-small'>
                            <blockquote className='blockquote-three'>
                                ...Lorem ipsum dolor sit amet, consestetur adipisicing
                                Lorem ipsum dolor sit amet, consestetur adipisicing
                                Lorem ipsum dolor sit amet, consestetur adipisicing
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;