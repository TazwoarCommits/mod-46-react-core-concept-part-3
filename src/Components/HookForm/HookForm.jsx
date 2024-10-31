import useInputState from "../../Hooks/useInputState2";


const HookForm = () => {

    // const [name , handleNameChange] = useInputState("") ;
    const emailState = useInputState() ;
    const handleSubmit = (e) => {
          e.preventDefault() ;
          console.log('form data', emailState.value)
    }
    return (
        <div>
             <form onSubmit={handleSubmit} >
                {/* <input value={name} onChange={handleNameChange} type="text" name="name"/> */}
                <br />
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <br />
                <input type="password" name="password" />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;