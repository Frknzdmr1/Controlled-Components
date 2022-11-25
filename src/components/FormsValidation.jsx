import React, {useState} from 'react'

const FormsValidation = () => {



const [email, setEmail] = useState("");
const[password, setPassword] = useState("");

const[emailError, setEmailError] = useState(false);
const[passwordError, setPasswordError] = useState(false);

const[emailTouched, setEmailTouched] = useState(false)
const[passwordTouched, setPasswordTouched] = useState(false)

const emailHandler = (e) => {
    const eneterdEmail = e.target.value
      setEmail(eneterdEmail);
      setEmailTouched(true);
    if(eneterdEmail === "" || !eneterdEmail.includes("@"))
      setEmailError(true);
        else
        setEmailError(false)
}

const passwordHandler = (e) => {
    const enteredPassword = e.target.value
       setPassword(enteredPassword);
       setEmailTouched(true);
    if(enteredPassword ==="" || enteredPassword.length < 5)
       setPasswordError(true);
    else
       setPasswordError(false)
}


    return(
        <form className="card card-body shadow m-5" >
            <h3 className="text-center"> Login</h3>
            <div className="mb3">
                <label htmlFor="email">Email</label>
                <input type="text" className={`form-control ${emailError&&emailTouched&& 'border border-danger'}`}
                  name="email" id="email"
                    onChange={emailHandler}
                    onBlur={()=> setEmailTouched(true)}

                    value= {email} />
                {emailError ? <small className="text-danger"> Invalid Email</small> : null }

            </div> 

            <div className="mb3">
                <label htmlFor="password">Password</label>
                <input type="text" className={`form-control ${passwordError && 'border border-danger'}`}
                  name="password" id="password"
                    onChange={passwordHandler }
                    onBlur={()=> setPasswordTouched(true)}
                    value= {password} />

                {passwordError && passwordTouched&& <small className="text-danger"> Invalid Password</small> }

            </div>

            <div className="text-center">
                <button className="btn btn-warning">Login</button>
            </div>
        </form>
    )
};


export default FormsValidation;