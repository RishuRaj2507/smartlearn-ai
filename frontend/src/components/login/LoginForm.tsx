"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  FiUser,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
} from "react-icons/fi";

import { loginUser } from "@/services/authService";

export default function LoginForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
  
    setError("");
  
    try {
      setLoading(true);
  
      const response =
        await loginUser(formData);
  
      // Save JWT Token
      localStorage.setItem(
        "token",
        response.token
      );
  
      // Save User Object
      localStorage.setItem(
        "user",
        JSON.stringify(response.user)
      );
  
      // Save Employee ID
      localStorage.setItem(
        "employeeId",
        response.user._id
      );
  
      // Save Role
      localStorage.setItem(
        "role",
        response.user.role
      );
  
      // Redirect according to role
      if (
        response.user.role === "admin"
      ) {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
        "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="w-full"
    >
      {/* Email Field */}

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address
        </label>

        <div
          className="
            flex
            items-center
            border
            border-gray-300
            rounded-xl
            px-4
            py-4
            bg-[#F7F9FC]
            transition-all
            duration-300
            focus-within:border-blue-500
            focus-within:ring-2
            focus-within:ring-blue-200
            focus-within:bg-white
          "
        >
          <FiUser
            className="
              text-gray-500
              mr-3
              shrink-0
            "
          />

          <input
            type="email"
            name="email"
            placeholder="alex@test.com"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className="
              w-full
              bg-transparent
              outline-none
              text-gray-900
              placeholder:text-gray-400
            "
          />
        </div>
      </div>

      {/* Password Field */}

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Password
        </label>

        <div
          className="
            flex
            items-center
            border
            border-gray-300
            rounded-xl
            px-4
            py-4
            bg-[#F7F9FC]
            transition-all
            duration-300
            focus-within:border-blue-500
            focus-within:ring-2
            focus-within:ring-blue-200
            focus-within:bg-white
          "
        >
          <FiLock
            className="
              text-gray-500
              mr-3
              shrink-0
            "
          />

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
            className="
              w-full
              bg-transparent
              outline-none
              text-gray-900
              placeholder:text-gray-400
            "
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            className="
              ml-2
              text-gray-500
              hover:text-blue-600
              transition
            "
          >
            {showPassword ? (
              <FiEyeOff size={18} />
            ) : (
              <FiEye size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Error Message */}

      {error && (
        <div
          className="
            mt-4
            bg-red-50
            border
            border-red-200
            text-red-600
            text-sm
            px-4
            py-3
            rounded-xl
          "
        >
          {error}
        </div>
      )}

      {/* Remember Me */}

      <div className="flex items-center justify-between mt-6">
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            className="accent-blue-600"
          />
          Remember me
        </label>

        <button
          type="button"
          className="
            text-blue-600
            font-medium
            hover:text-blue-700
          "
        >
          Forgot password?
        </button>
      </div>

      {/* Login Button */}

      <button
        type="submit"
        disabled={loading}
        className="
          mt-8
          w-full
          bg-blue-600
          hover:bg-blue-700
          text-white
          font-semibold
          py-4
          rounded-xl
          flex
          justify-center
          items-center
          gap-2
          transition-all
          duration-300
          hover:scale-[1.01]
          disabled:opacity-70
          disabled:cursor-not-allowed
        "
      >
        {loading ? (
          <>
            <div
              className="
                h-5
                w-5
                border-2
                border-white
                border-t-transparent
                rounded-full
                animate-spin
              "
            />
            Signing In...
          </>
        ) : (
          <>
            Login
            <FiArrowRight />
          </>
        )}
      </button>

      {/* Divider */}

      <div className="border-t border-gray-200 mt-10 pt-8">
        <p className="text-center text-gray-500">
          Having trouble signing in?
        </p>

        <div className="flex justify-center mt-3">
          <button
            type="button"
            className="
              font-semibold
              text-gray-700
              hover:text-blue-600
            "
          >
            Contact IT Support
          </button>
        </div>
      </div>
    </form>
  );
}