import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length <= 5) {
      setError("password length should be more than 5");
      return;
    }

    setError("");

    console.log({ email, password, country });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          <option value="">Select country</option>
          <option value="sl">Sri Lanka</option>
          <option value="in">India</option>
        </select>

        <p>Selected: {country}</p>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
