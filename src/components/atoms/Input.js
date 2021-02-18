import {
    EMAILPATTERN,
    PHONEEXTENSIONPATTERN,
    PHONEPATTERN
}                      from "../../constants/data-validation-patterns";
import React           from 'react';
import { StringUtils } from '../../utils/stringUtils';

const Input = class extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue:       '',
            fieldActive:      false,
            placeholderValue: this.props.placeholder ?? this.props.name,
            error:            false,
            isInvalidInput:   false,
        }

        this._updateInputValue = this._updateInputValue.bind(this);
        this._activateField    = this._activateField.bind(this);
        this._disableField     = this._disableField.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.fieldActive === false &&
            StringUtils.hasValue(prevProps.value) &&
            StringUtils.isEmpty(this.props.value)){
            this.setState({
                placeholderValue: this.props.placeholder ?? this.props.name,
                isInvalidInput:   false,
            })
        }
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
                placeholderValue: this.props.placeholder ?? this.props.name,
                isInvalidInput:   false,
            })

            if (this.props.isRequired) {
                this.setState({
                    error: true,
                })
            }
        } else {
            // remove focus on blur
            this.setState({fieldActive: false});

            if (this.props.type === "email") {
                if (!EMAILPATTERN.test(e.target.value)) {
                    this.setState({
                        isInvalidInput: true,
                    })
                    return;
                }
            }
            if (this.props.name === "phone") {
                if (!PHONEPATTERN.test(e.target.value)) {
                    this.setState({
                        isInvalidInput: true,
                    })
                    return;
                }
            }
            if (this.props.name === "extension") {
                if (!PHONEEXTENSIONPATTERN.test(e.target.value)) {
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

    _handleKeydown = (e) => {
        if (!this.props.onKeydownPress) {
            return;
        }
        this.props.onKeydownPress(e);
    }

    render() {
        let cssClassName = 'a-label';

        if (this.state.fieldActive || StringUtils.hasValue(this.props.value)) {
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
                    { this.props.placeholder ?? this.props.name }
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
                    onKeyDown   = { this._handleKeydown }
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
