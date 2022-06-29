import React from 'react'
import './Form.css'
class Form extends React.Component{
  render(){
    return(
      <div>
<div class="main_div">
      <div class="box">
        <h1>Login </h1>
        <form action="">
          <div class="input-box">
            <input
              type="text"
              name="email"
              id="name"
              autocomplete="off"
              required
            />
            <label for="Email">Enter Your College Email-ID</label>
          </div>
          <div class="input-box">
            <input
              type="password"
              name="password"
              id="name"
              autocomplete="off"
              required
            />
            <label for="Password">Password</label>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
    </div>
    );
}
}
export default Form;