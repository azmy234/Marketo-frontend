import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
  };

  return (
    <div
      className="w-full min-h-[calc(100vh-160px)] flex items-center justify-center bg-[#fbfaf7] py-12 px-4 font-sans text-left"
      dir="ltr"
    >
      {/* Main Card */}
      <div className="w-full max-w-120 bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100/60 text-center">
        {/* Icon Header */}
        <div className="w-12 h-12 bg-[#1a6649]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#1a6649]">
          <Mail size={24} />
        </div>

        {/* Title & Subtitle */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Forgot your password?
          </h2>
          <p className="text-sm text-gray-500 mt-2.5 max-w-sm mx-auto">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5 text-left">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2.5 px-4 text-sm border border-gray-200 rounded-xl focus:ring-1 focus:ring-[#1a6649]/20 focus:border-[#1a6649] outline-none transition text-left"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-6 text-sm font-semibold text-white bg-[#1a6649] rounded-xl hover:bg-[#1a6649]/90 transition duration-150 shadow-sm"
            >
              Send reset link
            </button>
          </div>
        </form>

        {/* Back to LogIn link */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 font-medium">
            Remember your password?{" "}
            <Link
              to="/login"
              className="text-[#1a6649] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
