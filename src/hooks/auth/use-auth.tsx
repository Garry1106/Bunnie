'use client';

import { useSignUp, useSignIn } from "@clerk/nextjs"; // Clerk SDK
import { useState } from "react";
import { useRouter } from "next/navigation"; // For redirection after success
import { toast } from "react-toastify";

// Custom hook for OTP logic
export const usePhoneAuth = () => {
  const { signUp } = useSignUp(); // Use Clerk's signUp hook
  const { signIn } = useSignIn(); // Use Clerk's signIn hook
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Start OTP verification (send OTP to the phone number)
  const sendOtp = async (phoneNumber: string) => {
    try {
      setIsLoading(true);
      setError(null);

      // Create a new sign-up attempt with the phone number
      await signUp?.create({
        phoneNumber,
      });

      // Prepare for OTP verification
      await signUp?.preparePhoneNumberVerification();

      console.log("OTP sent to phone number.",phoneNumber);
      setIsOtpSent(true); // Show the second form to enter OTP
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      console.error("Error sending OTP:", err);
      setError(err.errors?.[0]?.message || "Failed to send OTP.");
    }
  };

  const verifyOtp = async (otp: string): Promise<boolean> => {
    if (!signUp) {
      setError("Sign-up process is not initialized.");
      return false;
    }
  
    try {
      setIsLoading(true);
      setError(null);
  
      // Ensure the phone number is available
      if (!signUp.phoneNumber) {
        setError("Phone number is not available.");
        return false;
      }
  
      // Attempt to verify the OTP
      const result = await signUp.attemptPhoneNumberVerification({
        code: otp,
      });
  
      if (result?.status === "complete") {
        setIsOtpVerified(true);
        console.log("OTP verified successfully.");
        toast.success("OTP has been verified successfully.");
        setIsLoading(false);
        return true; // Return true if OTP is verified
      } else {
        setError("OTP verification failed.");
        return false; // Return false if OTP verification fails
      }
    } catch (err: any) {
      setIsLoading(false);
      console.error("Error verifying OTP:", err);
      setError(err.errors?.[0]?.message || "Failed to verify OTP.");
      return false; // Return false if an error occurs
    }
  };

  return {
    isOtpSent,
    isOtpVerified,
    isLoading,
    error,
    sendOtp,
    verifyOtp,
  };
};