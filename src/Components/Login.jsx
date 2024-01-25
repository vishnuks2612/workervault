import React from 'react'

const Login = () => {
    return (
        <div className='login-image'>
            <div className='wrapper'>
                <br></br>
                <form action=''>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type='text' placeholder='Username' required />
                    </div>
                    <div className="input-box">
                        <input type='password' placeholder='Password' required />
                    </div>
                    <div className='remember-forgot'>
                        <label><input type='checkbox' />Remember Me</label>
                        <a href='#'>Forgot Password?</a>
                    </div>
                    <button type='submit'>Login</button>
                    <div className='register-link'>
                        <p>Don't have an account?<a href='/register'>Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login