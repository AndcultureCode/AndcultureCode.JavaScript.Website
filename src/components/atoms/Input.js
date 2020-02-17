import React from 'react';

const Input = class extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue:       '',
            fieldActive:      false,
            placeholderValue: this.props.name,
        }

        this._updateInputValue = this._updateInputValue.bind(this);
        this._activateField    = this._activateField.bind(this);
        this._disableField     = this._disableField.bind(this);
    }

    _activateField() {
        this.setState({
            fieldActive:      true,
            placeholderValue: '',
        })
    }

    _disableField(e) {
        if (e.target.value === "") {
            this.setState({
                fieldActive:      false,
                placeholderValue: this.props.name,
            })
        }
    }

    _updateInputValue(e) {
        this.setState({ inputValue: e.target.value }, () => this.props.inputValueCallback(this.props.name, this.state.inputValue));
    }

    render() {
        let cssClassName = 'a-label'; 

        if (this.state.fieldActive) {
            cssClassName += ' -field-active';
        }

        return (
            <fieldset>
                <label 
                    className = { cssClassName }
                    htmlFor   = { this.props.name }>
                    { this.props.name }
                </label>
                <input 
                    value       = { this.props.value }
                    onFocus     = { this._activateField }
                    onBlur      = { this._disableField }
                    onChange    = { this._updateInputValue }
                    className   = "a-input" 
                    type        = "text" 
                    name        = { this.props.name }
                    placeholder = { this.state.placeholderValue }
                    id          = { this.props.name } />
            </fieldset>
        )
    }
}

export default Input
