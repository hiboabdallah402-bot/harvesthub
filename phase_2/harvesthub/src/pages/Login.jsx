import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const isAuthenticated = localStorage.getItem("harvesthub_auth") === "true";
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter email and password.");
      return;
    }

    localStorage.setItem("harvesthub_auth", "true");
    localStorage.setItem("harvesthub_user", email.trim());
    localStorage.setItem("harvesthub_remember", rememberMe ? "true" : "false");
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="flex min-h-screen w-full bg-white">
      <div className="hidden w-full md:inline-block">
        <img
          className="h-full w-full object-cover"
          src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Login visual"
        />
      </div>

      <div className="flex w-full flex-col items-center justify-center px-6 py-10">
        <form onSubmit={handleSubmit} className="flex w-80 flex-col items-center justify-center md:w-96">
          <h2 className="text-4xl font-medium text-gray-900">Sign in</h2>
          <p className="mt-3 text-sm text-gray-500/90">Welcome back! Please sign in to continue</p>

          {error && (
            <div className="mt-5 w-full rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="mt-8 flex h-12 w-full items-center gap-2 overflow-hidden rounded-full border border-gray-300/60 bg-transparent pl-6">
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280" />
            </svg>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email id"
              className="h-full w-full bg-transparent text-sm text-gray-500/80 placeholder-gray-500/80 outline-none"
              required
            />
          </div>

          <div className="mt-6 flex h-12 w-full items-center gap-2 overflow-hidden rounded-full border border-gray-300/60 bg-transparent pl-6">
            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" />
            </svg>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="h-full w-full bg-transparent text-sm text-gray-500/80 placeholder-gray-500/80 outline-none"
              required
            />
          </div>

          <div className="mt-8 flex w-full items-center justify-between text-gray-500/80">
            <div className="flex items-center gap-2">
              <input
                className="h-5"
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="text-sm" htmlFor="remember-me">Remember me</label>
            </div>
            <Link className="text-sm underline" to="/about">Forgot password?</Link>
          </div>

          <button type="submit" className="mt-8 h-11 w-full rounded-full bg-indigo-500 text-white transition-opacity hover:opacity-90">
            Login
          </button>

          <p className="mt-4 text-sm text-gray-500/90">
            Don&apos;t have an account? <Link className="text-indigo-400 hover:underline" to="/about">Sign up</Link>
          </p>

          <p className="mt-2 text-sm text-gray-500/90">
            Back to <Link className="text-green-600 hover:underline" to="/">Home</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
