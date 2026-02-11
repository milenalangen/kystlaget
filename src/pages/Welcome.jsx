import React, { useRef } from "react";
import Typography from "../components/Typography";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useSignal } from "@preact/signals-react";
import { isDarkMode } from "../store/darkMode";
import { t } from "i18next";

const Welcome = () => {
  const inputRef = useRef(null);
  const isLoading = useSignal(false);
  const errorMessage = useSignal(null);
  const isDemoMode = import.meta.env.VITE_DEMO_MODE === 'true';

  const handleGoogleLogin = async () => {
    isLoading.value = true;
    try {
      // Demo mode: bypass authentication
      if (isDemoMode) {
        // Store demo token and redirect
        localStorage.setItem("token", JSON.stringify("DEMO_TOKEN"));
        localStorage.setItem("demoUser", JSON.stringify({
          id: "demo-user-123",
          email: "demo@kystlaget.no",
          name: "Demo User"
        }));
        window.location.href = "/home";
        return;
      }

      // Production mode: Google OAuth flow would go here
      // For now, this is a placeholder for future Google authentication
      errorMessage.value = "Google authentication not yet implemented. Please contact administrator.";
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        errorMessage.value = error.message;
      }
    } finally {
      isLoading.value = false;
    }
  };

  return (
    <div className="flex items-center justify-between w-full h-screen">
      {/* Left side - Login form */}
      <div
        className={`flex items-center justify-center h-full p-10 w-full sm:w-[46%] ${
          isDarkMode.value ? "bg-primary-800" : "bg-primary-800"
        }`}
      >
        <div className="flex flex-col gap-6 w-full max-w-[504px] px-4">
          <div className="flex flex-col gap-2">
            <Typography
              size="body2/bold"
              className="text-white opacity-80"
            >
              {t("Welcome To")}
            </Typography>
            <Typography
              size="h6/bold"
              className="text-white"
            >
              {t("Kystlaget Trondhjem")}
            </Typography>
            <Typography
              size="body2/semi-bold"
              className="text-white opacity-70 mt-2"
            >
              {t("Not a member yet?")}{" "}
              <a
                href="https://www.kystlaget-trh.no/elfryd/"
                className="text-teritary-400 hover:text-teritary-300"
              >
                {t("Become a member")}
              </a>
            </Typography>
          </div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading.value}
            className="flex items-center justify-center gap-3 w-full bg-primary-700 hover:bg-primary-600 text-white px-6 py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img src="/images/google_logo.svg" alt="Google" className="w-6 h-6" />
            <span className="font-semibold">
              {isLoading.value ? `${t("Please wait...")}` : t("Login with your Google")}
            </span>
          </button>

          {errorMessage.value ? (
            <Typography variant="error" className="text-red-400">
              {errorMessage.value}
            </Typography>
          ) : null}

          <Typography
            size="body2/normal"
            className="text-white opacity-60 mt-4"
          >
            {t(
              "Here you can log in to Kystlaget Trondheim's booking system. To be able to log in, you must be a member of Kystlaget."
            )}
          </Typography>
        </div>
      </div>

      {/* Right side - Boat image */}
      <div className="hidden sm:block w-[54%] h-full overflow-hidden">
        <img
          src="/images/boat.jpg"
          alt="boat"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Welcome;
