import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { registerAction } from "../redux/actions/userAction";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  if (user.token.length !== 0) {
    return <Redirect to="/" />;
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>Register</div>
      <div>
        <Input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={() =>
            dispatch(registerAction({ username, password, email }))
          }
        >
          Register
        </Button>
      </div>
      <div>
        Go to login:
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
