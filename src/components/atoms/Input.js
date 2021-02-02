import React from 'react';

const Input = class extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue:       '',
            fieldActive:      false,
            placeholderValue: this.props.name,
            error:            false,
            isInvalidInput:   false,
        }

        this._updateInputValue = this._updateInputValue.bind(this);
        this._activateField    = this._activateField.bind(this);
        this._disableField     = this._disableField.bind(this);
    }

    _activateField() {
        this.setState({
            fieldActive:      true,
            placeholderValue: '',
            error:            false,
            isInvalidInput:   false,
        })
    }

    _disableField(e) {
        if (e.target.value === "") {
            this.setState({
                fieldActive:      false,
                placeholderValue: this.props.name,
                isInvalidInput:   false,
            })

            if (this.props.isRequired) {
                this.setState({
                    error: true,
                })
            }
        } else {
            if (this.props.type === "email") {
                const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!pattern.test(e.target.value)) {
                    this.setState({
                        isInvalidInput: true,
                    })
                    return;
                }
            }
            if (this.props.name === "phone") {
                const pattern = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
                if (!pattern.test(e.target.value)) {
                    this.setState({
                        isInvalidInput: true,
                    })
                    return;
                }
            }
            if (this.props.isRequired) {
                this.setState({
                    error:          false,
                    isInvalidInput: false,
                })
            }
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

        let inputClassName = 'a-input';
        inputClassName += this.props.lightTheme ? ' -light ' : '';
        let inputProps = {};

        if (this.props.isRequired) {
            inputProps.required = true;
        }

        return (
            <fieldset className = { this.props.className }>
                <label
                    className = { cssClassName }
                    htmlFor   = { this.props.id }>
                    { this.props.name }
                </label>
                <input
                    { ...inputProps }
                    aria-label  = { this.props.description }
                    className   = { inputClassName }
                    id          = { this.props.id }
                    name        = { this.props.name }
                    onFocus     = { this._activateField }
                    onBlur      = { this._disableField }
                    onChange    = { this._updateInputValue }
                    onKeyDown   = { (e) => this.props.onKeydownPress(e) }
                    placeholder = { this.state.placeholderValue }
                    type        = { this.props.type }
                    value       = { this.props.value }/>
                { // if
                    this.state.error &&
                    <span className = "a-label__error">please enter your { this.props.name }</span>
                }
                { // if
                    this.state.isInvalidInput &&
                    <span className = "a-label__error">please enter a valid { this.props.name }</span>
                }
            </fieldset>
        )
    }
}

export default Input
