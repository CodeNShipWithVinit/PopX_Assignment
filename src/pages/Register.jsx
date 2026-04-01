import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="container">
      <h2>Create your PopX account</h2>

      <Input label="Full Name*" value={form.name} onChange={handleChange} name="name" />
      <Input label="Phone number*" value={form.phone} onChange={handleChange} name="phone" />
      <Input label="Email address*" value={form.email} onChange={handleChange} name="email" />
      <Input label="Password*" type="password" value={form.password} onChange={handleChange} name="password" />
      <Input label="Company name*" value={form.company} onChange={handleChange} name="company" />

      <div className="radio-group">
        <p>Are you an Agency?</p>
        <label>
          <input type="radio" name="agency" value="yes" checked={form.agency === "yes"} onChange={handleChange} /> Yes
        </label>
        <label>
          <input type="radio" name="agency" value="no" checked={form.agency === "no"} onChange={handleChange} /> No
        </label>
      </div>

      <Button text="Create Account" onClick={() => navigate("/account")} />
    </div>
  );
}