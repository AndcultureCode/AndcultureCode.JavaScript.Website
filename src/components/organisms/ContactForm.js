import React from 'react'

class ContactForm extends React.Component {

    render() {
        return (
            <form className = "o-contact-form">
                <div className = "o-rhythm__container">
                    <h6>Get In Touch</h6>
                    <header>what can we help you with today?</header>
                    <fieldset>
                        <input 
                            className = "a-radio" 
                            type      = "radio" 
                            name      = "type" 
                            value     = "project" 
                            id        = "project"/>
                        <label htmlFor="project">start a project together</label>
                    </fieldset>
                    <fieldset>
                        <input 
                            className = "a-radio" 
                            type      = "radio" 
                            name      = "type" 
                            value     = "quick-info" 
                            id        = "quick-info"/>
                        <label htmlFor="quick-info">get quick info</label>
                    </fieldset>
                    <fieldset>
                        <input 
                            className = "a-radio" 
                            type      = "radio" 
                            name      = "type" 
                            value     = "join-team" 
                            id        = "join-team"/>
                        <label htmlFor="join-team">join the team</label>
                    </fieldset>
                    <fieldset>
                        <input 
                            className = "a-radio" 
                            type      = "radio" 
                            name      = "type" 
                            value     = "start-ups" 
                            id        = "start-ups"/>
                        <label htmlFor="start-ups">talk start-ups (catamaran)</label>
                    </fieldset>
                </div>
            </form>
            
        )
    }
}

export default ContactForm;
