import React, { useState } from "react";

function SignUp() {
  const [data, setData] = useState({
    fullName: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { fullName, number, email, password, confirmPassword } = data;

  const changeHndler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      alert("Password length should be minimum 8 Digits");
    } else if (password !== confirmPassword) {
      alert("Password and confirm passwords are not matching");
    } else if (fullName.length < 8) {
      alert("fullname should be minimum 8 charcters");
    } else if (number.length < 9) {
      alert("number length should be 10 digits");
    } else {
      console.log(data);
    }
  };

  return (
    <div>
      <h1>SignUp to Access</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter Full Name:</label>
        <br />
        <input
          type="text"
          name="fullName"
          value={fullName}
          onChange={changeHndler}
        />
        <br />
        <label>Enter Your Number:</label>
        <br />
        <input
          type="number"
          name="number"
          onChange={changeHndler}
          value={number}
        />
        <br />
        <label>Enter Your Email:</label>
        <br />
        <input
          type="email"
          name="email"
          onChange={changeHndler}
          value={email}
        />
        <br />
        <label>Enter Password</label>
        <br />
        <input
          type="password"
          name="password"
          onChange={changeHndler}
          value={password}
        />
        <br />
        <label>Confirm Your Password:</label>
        <br />
        <input
          type="password"
          name="confirmPassword"
          onChange={changeHndler}
          value={confirmPassword}
        />
        <br />
        <br />
        <input type="submit" name="submit" />
      </form>
    </div>
  );
}

export default SignUp;
