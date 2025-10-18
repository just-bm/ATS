import '../css/auth.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic password confirmation check
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        email: formData.email,
        password: formData.password,
      });

      // Store token and user info (if backend sends them)
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/movies"); // redirect after successful signup
    } catch (err) {
      setError(err.response?.data?.error || "Error signing up");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 className="heading">Sign Up</h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="mail"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="password"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="password"
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        <p style={{ marginTop: "10px" }}>
          Already have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
