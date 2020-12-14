import React from 'react';

const Input = class extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue:       '',
            fieldActive:      false,
            placeholderValue: this.props.name,
            error:            false,
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
        if (this.props.type === "email") {
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!pattern.test(e.target.value)) {
                this.setState({
                    error: true,
                })
                return;
            }
        }
        if (e.target.value === "") {
            this.setState({
                fieldActive:      false,
                placeholderValue: this.props.name,
            })

            if (this.props.isRequired) {
                this.setState({
                    error: true,
                })
            }
        } else {
            if (this.props.isRequired) {
                this.setState({
                    error: false,
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
                    value       = { this.props.value }
                    onFocus     = { this._activateField }
                    onBlur      = { this._disableField }
                    onChange    = { this._updateInputValue }
                    className   = { inputClassName }
                    type        = { this.props.type }
                    name        = { this.props.name }
                    placeholder = { this.state.placeholderValue }
                    id          = { this.props.id } />
                { // if
                    this.state.error &&
                    <span className = "a-label__error">please enter your { this.props.name }</span>
                }
            </fieldset>
        )
    }
}

export default Input
