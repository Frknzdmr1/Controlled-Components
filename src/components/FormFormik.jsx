import React from 'react'

const FormFormik = () => {
    return( 
        <form className="card card-body shadow m-5">
            <h3 className="text-center"> Login</h3>
            <div className="mb3">
                <label htmlFor="email">Email</label>
                <input type="text" className={`form-control`}
                  name="email" id="email"

              />
            </div> 

            <div className="mb3">
                <label htmlFor="password">Password</label>
                <input type="text" className={`form-control`}
                  name="password" id="password"
             />
            </div>

            <div className="text-center ">
                <button className="btn btn-warning">Login</button>
            </div>
        </form>
)}

export default FormFormik