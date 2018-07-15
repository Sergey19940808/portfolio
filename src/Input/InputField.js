import React, { Component } from 'react';

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
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
        let input = document.querySelector(`input[name=value_${this.props.prefix}]`);
        if (e.target.className === 'input-field__success fz-icon') {
            localStorage.setItem(`${this.props.prefix}`, input.value);
            this.setState({isShowChange: ~this.state.isShowChange});
            this.props.method();
            this.props.saveInput();
        } else {
            this.props.method();
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
                    name={`value_${this.props.prefix}`}
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

                {
                    this.state.isShowChange ?
                        <span className='input-field__cancel fz-icon' 
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

export default InputField;