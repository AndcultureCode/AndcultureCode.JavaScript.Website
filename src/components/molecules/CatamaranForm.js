import React                   from 'react';
import Input                   from '../atoms/Input';
import Textarea                from '../atoms/Textarea';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const CatamaranForm = class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeQuestion:  1,
            totalQuestions:  4,
            formData:        {},
        }

        this._onNextClick       = this._onNextClick.bind(this);
        this._onBackClick       = this._onBackClick.bind(this);
        this._caclulateProgress = this._caclulateProgress.bind(this);
        this._setInputValue     = this._setInputValue.bind(this);
    }

    _onNextClick() {
        this.setState({
            activeQuestion: this.state.activeQuestion + 1,
        }, this._caclulateProgress(1));
    }

    _onBackClick() {
        this.setState({
            activeQuestion: this.state.activeQuestion - 1,
        }, this._caclulateProgress(0));
    }

    _caclulateProgress(direction) {
        let percentComplete = this.state.activeQuestion / this.state.totalQuestions * 100;
        if (this.state.activeQuestion === this.state.totalQuestions && direction === 1) {
            this.props.isSubmittedCallback(true);
        }

        if (this.state.activeQuestion === 1 && direction === 0) {
            this.props.isSubmittedCallback(false);
        }

        if (direction === 0) {
            percentComplete = (this.state.activeQuestion - 2) / this.state.totalQuestions * 100;
        }

        this._sendData(percentComplete);
    }

    _sendData(percentComplete) {
        this.props.progressCallback(percentComplete);
    }

    _setInputValue(name, value) {
        this.setState({ formData: {...this.state.formData, [name]: value }});
    }

    render() {

        return (
            <form className = "o-contact-form">
                <div className = "o-rhythm__container">
                    <header>talk start-ups (Catamaran)</header>
                    <ReactCSSTransitionGroup
                        transitionName          = "animate"
                        transitionAppear        = { true }
                        transitionAppearTimeout = { 500 }
                        transitionEnter         = { true }
                        transitionEnterTimeout  = { 1000 }
                        transitionLeave         = { false }>
                        { // if
                            this.state.activeQuestion === 1 &&
                            <Input 
                                name               = "name" 
                                inputValueCallback = { this._setInputValue } 
                                value              = { this.state.formData.name } />
                        }
                        { // if
                            this.state.activeQuestion === 2 &&
                            <Input 
                                name               = "email" 
                                inputValueCallback = { this._setInputValue } 
                                value              = { this.state.formData.email } />
                        }
                        { // if
                            this.state.activeQuestion === 3 &&
                            <fieldset>
                                <label
                                    className = "a-label -static"
                                    htmlFor   = "interest">
                                    What are you interested in talking to us about?
                                </label>
                                <div className = "a-dropdown">
                                    <select id = "interest">
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
                        }
                        { // if
                            this.state.activeQuestion === 4 && 
                            <Textarea 
                                name               = "message" 
                                inputValueCallback = { this._setInputValue } 
                                value              = { this.state.formData.message } />
                        }
                    </ReactCSSTransitionGroup>
                    <div className = "o-contact-form__buttons">
                        <a 
                            onClick   = { this._onBackClick }
                            className = "a-button">
                            Go Back
                        </a>
                        <a 
                            onClick   = { this._onNextClick }
                            className = "a-button">
                            Next
                        </a>
                    </div>
                </div>
            </form>
        )
    }
}

export default CatamaranForm
