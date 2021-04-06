import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { loginAction } from "../redux/actions/userAction";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  if (user.token.length !== 0) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div>Login</div>
      <div>
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
        <Button onClick={() => dispatch(loginAction({ username, password }))}>
          Login
        </Button>
      </div>
      <div>
        Go to Register:
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
