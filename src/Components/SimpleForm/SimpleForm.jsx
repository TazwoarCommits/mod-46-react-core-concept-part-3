

const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.text.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);

        console.log('Form Submitted')
    }


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" name="text"/>
                <br />
                <br />
                <input type="email" name="email" />
                <br />
                <br />
                <input type="text" name="phone" />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;