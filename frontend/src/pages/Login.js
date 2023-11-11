import React from 'react'

export default function Login() {
  return (
    <div>
        <h2>Enter Login Details</h2>

        <form>
            <label>
                <input name = 'username' maxLength={50} minLength={3} placeholder='Name'/>
            </label>
            <label>
                <input type='password' name = 'password' maxLength={50} minLength={8} placeholder='Password'/>
            </label>
            <input type='submit'/>
        </form>
        <p>
        new user? 
        <a href="signin">
          Signin
        </a>
      </p>
    </div>
  )
}
