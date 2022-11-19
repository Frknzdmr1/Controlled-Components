import {useState} from "react"

const Form = () => {

    const [email, setEmail] = useState(" ")
    const [emailError, setEmailError] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault();
        alert(email);

        if(email!=="" && email.includes("@")){
            alert(email);
            setEmailError(false);
        }else{
        setEmailError(true)

        }
        
    }

    return(
        <form className="card card-body shadow m-5" onSubmit={submitHandler} >
            <h3 className="text-center"> Login</h3>
            <div className="mb3">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control"
                  name="email" id="email"
                    onChange={(e) => setEmail(e.target.value) }
                    value= {email} />
                {emailError && <small className="text-danger"> Invalid Email</small>}

            </div>

            <div className="text-cent">
                <button className="btn btn-warning">Login</button>
            </div>
        </form>
    )
};

export default Form;