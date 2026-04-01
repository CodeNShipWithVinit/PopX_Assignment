import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <Input label="Email Address*" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input label="Password*" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <Button text="Login" onClick={() => navigate("/account")} />
    </div>
  );
}