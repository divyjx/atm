import React from 'react'

export default function Signin() {
  return (
    <div>
        <h2>Enter New User Details</h2>
        <form>
            <label>
                <input name = 'username' maxLength={50} minLength={3} placeholder='Name'/>
            </label>
            <label>
                <input type='password' name = 'password' maxLength={50} minLength={8} placeholder='Password'/>
            </label>
            <label>
                <input type='number' name = 'balance' max={10000} min={100} placeholder='Initail Deposit'/>
            </label>
            <input type='submit'/>
        </form>
    </div>
  )
}
