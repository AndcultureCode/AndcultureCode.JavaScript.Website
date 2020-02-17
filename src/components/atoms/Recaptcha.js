import React from 'react'; 
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
    console.log("Captcha value:", value);
}

class Recaptcha extends React.Component {


    render() {
        return (
            <ReCAPTCHA  
                theme = "dark"
                sitekey = "Your client site key"
                onChange = { onChange } />
        )
    }
}

export default Recaptcha;
