import './formInput.css'

const FormInput = (props) => {
    return (
        <div className="formInputs">
            {/* <label>UserName</label> */}
            <input 
                ref={props.usernameRef}
                placeholder={props.placeholder} 
            />
        </div>
    )
}

export default FormInput