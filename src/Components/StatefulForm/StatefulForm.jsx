import { useState } from "react";

const StatefulForm = () => {
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error , setError] = useState("");

    const handleTextChange = e => {
        // console.log(e.target.value)
        setText(e.target.value)
    };

    const handleEmailChange = e => {
        // console.log(e.target.value)
        setEmail(e.target.value)
    };

    const handlePasswordChange = e => {
        // console.log(e.target.value) 
        setPassword(e.target.value)
    };


    const handleSubmit = e => {
        e.preventDefault()
        if(password.length < 6){
            setError("password must be at-least-6 characters or longer ")
        }
        else {
            setError('')
            console.log(text, email, password)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                    onChange={handleTextChange}
                    type="text" name="text" required />
                <br />
                <br />
                <input
                    onChange={handleEmailChange}
                    type="email" name="email" required />
                <br />
                <br />
                <input
                    onChange={handlePasswordChange}
                    type="password" name="password" required/>
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default StatefulForm;