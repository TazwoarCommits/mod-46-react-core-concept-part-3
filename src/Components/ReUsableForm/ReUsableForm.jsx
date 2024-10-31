
const ReUsableForm = ({formTitle, handleSubmit  , submitBtnText= "Submit"}) => {
 
    return (
        <div>
            <h2 className="text-6xl mb-8">{formTitle}</h2>
            <form onSubmit={handleSubmit} >
                <input type="text" name="text" />
                <br />
                <br />
                <input type="email" name="email" />
                <br />
                <br />
                <input type="text" name="phone" />
                <br />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReUsableForm;