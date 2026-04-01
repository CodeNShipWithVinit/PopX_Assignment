import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="container center">
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <Button text="Create Account" onClick={() => navigate("/register")} />
      <Button
        text="Already Registered? Login"
        variant="secondary"
        onClick={() => navigate("/login")}
      />
    </div>
  );
}