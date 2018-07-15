import React, { Component } from 'react';

class InputSkills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isShowChange: false 
        }
    }

    changeValue = (e) => {
        this.setState({value: e.target.value});
    };

    showChange = () => {
        this.setState({isShowChange: ~this.state.isShowChange});
    }

    saveInput = (e) => {
        let input = document.querySelector('input[name=skills]');
        if (e.target.className === 'input-field__success fz-icon' && input.value !== '') {
            localStorage.setItem(
                'skills', 
                JSON.stringify(
                    JSON.parse(localStorage.getItem('skills')).concat(
                        input.value,  
                    )
                )
            );
            this.props.isInput();
            this.props.saveInput();
        } else {
            this.props.isInput();
        }
    }

    render() {
        return (
            <div className='input-field' onBlur={this.showChange} >
                <input 
                    type='text' 
                    value={this.state.value} 
                    onChange={this.changeValue}
                    className='input-field__input fz-small'
                    name='skills'
                    autoFocus
                />

                {
                    this.state.isShowChange ?
                        <span className='input-field__success fz-icon' 
                            style={{ fontSize: 'initial' }}
                            onClick={this.saveInput}
                        >
                        
                        </span>
                        :
                        null
                }

            </div>
        );
    }
}

export default InputSkills;