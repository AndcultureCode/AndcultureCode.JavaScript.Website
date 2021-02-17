import React from 'react';

const Select = class extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue:       '',
            fieldActive:      false,
            placeholderValue: this.props.name,
            error: false,
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

    _handleKeydown = (e) => {
        if (!this.props.onKeydownPress) {
            return;
        }
        this.props.onKeydownPress(e);
    }

    render() {
        let cssClassName = 'a-label -dropdown';

        if (this.state.fieldActive) {
            cssClassName += ' -field-active';
        }

        let selectClassName = 'a-dropdown';
        selectClassName += this.props.lightTheme ? ' -light ' : '';
        let selectProps = {};

        if (this.props.isRequired) {
            selectProps.required = true;
        }

        return (
            <fieldset className = { this.props.className }>
                <label
                    className = { cssClassName }
                    htmlFor   = { this.props.id }>
                    { this.props.name }
                </label>
                <div className = { selectClassName }>
                    <select
                        { ...selectProps }
                        aria-label   = { this.props.description }
                        id           = { this.props.id }
                        name         = { this.props.name }
                        onChange     = { this._updateInputValue }
                        onBlur       = { this._disableField }
                        onKeyDown    = { this._handleKeydown }
                        onFocus      = { this._activateField }
                        defaultValue = "default">
                        <option value="default" disabled>Select an option</option>
                        <option value="existing">I have a startup I’d like to talk to you about</option>
                        <option value="story">I have an entrepreneurship story to share</option>
                        <option value="event">I have an event for your community calendar</option>
                        <option value="partner">I’m interested in a partnership</option>
                        <option value="job">I’m interested in a job or internship with Catamaran</option>
                        <option value="training">I’m interested in training</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </fieldset>
        )
    }
}

export default Select;
