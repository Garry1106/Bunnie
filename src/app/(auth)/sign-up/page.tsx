'use client'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { FcGoogle } from 'react-icons/fc'
import Image from 'next/image'
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import Link from 'next/link' // Import Link from Next.js for navigation
import { useCustomSignUp } from '@/hooks/sign-up/use-sign-up';

type FormValues = {
  fullName: string
  email: string
  password: string
}

type OtpFormValues = {
  otp: string
}

export default function SignUpPage({ }: FormValues) {
  const [showOtpForm, setShowOtpForm] = useState(false) // State to toggle OTP form

  const { step, error, handleSignUp, handleVerifyOtp, handleGoogleSignUp } = useCustomSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const {
    register: registerOtp,
    handleSubmit: handleSubmitOtp,
    setValue,
    formState: { errors: otpErrors },
  } = useForm<OtpFormValues>()

  // Handle initial form submission
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Initial Form Data:', data)
    handleSignUp(data.email,data.fullName,data.password)
    setShowOtpForm(true) // Show OTP form after submission
  }

  // Handle OTP form submission
  const onSubmitOtp: SubmitHandler<OtpFormValues> = (data) => {
    console.log('OTP Form Data:', data)
    handleVerifyOtp(data.otp)
    console.log('Form Submitted') // Log form submission
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      {/* Glass-like effect container */}
      <div className="backdrop-blur-2xl  p-8 rounded-lg shadow-md shadow-white/10 w-full max-w-md">
        {/* Logo and Heading */}
        <div className="flex items-center justify-center gap-3 mb-4">
          {/* Logo */}
          <Image
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            width={40} // Adjust size as needed
            height={40}
            className="rounded-full" // Optional: Add rounded corners
          />
          {/* Heading */}
          <h1 className="text-2xl font-bold text-[#ffffff] text-center">
            Meet Your New Bestie! 👯‍♀️
          </h1>
        </div>
        <p className="text-sm text-white text-center mb-6">
          Your AI companion is here to chat, help, and keep you on fleek. Sign up
          and let’s slay! 💅
        </p>

        {/* Initial Form */}
        {!showOtpForm ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            {/* Full Name Field */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-[#ffffff]">
                Full Name
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                className="bg-transparent mt-1 text-[#FFFFFF] shadow-sm shadow-white/10 focus:bg-transparent focus:ring-0 border-0"
                {...register('fullName', {
                  required: 'Full Name is required',
                })}
              />
              {errors.fullName && (
                <p className="text-sm text-[#f2c0d3]">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#ffffff]">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-transparent mt-1 text-[#FFFFFF] shadow-sm shadow-white/10 focus:bg-transparent focus:ring-0 border-0"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-[#f2c0d3]">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#ffffff]">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="bg-transparent mt-1 text-[#FFFFFF] shadow-sm shadow-white/10 focus:bg-transparent focus:ring-0 border-0"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
              />
              {errors.password && (
                <p className="text-sm text-[#f2c0d3]">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#a07df4] text-[#ffffff] hover:bg-[#b99ef9]"
            >
              Sign Up
            </Button>

            {/* "Already have an account" Link */}
            <div className="text-center mt-2">
              <span className="text-sm text-[#a07df4]">
                Already have an account?{' '}
                <Link
                  href="/sign-in" // Replace with your login page route
                  className="text-[#ffffff] hover:underline"
                >
                  Sign-In
                </Link>
              </span>
            </div>
          </form>
        ) : (
          /* OTP Form */
          <form onSubmit={handleSubmitOtp(onSubmitOtp)} className="space-y-4">
            {/* OTP Field */}
            <div className="flex flex-col items-center space-y-2">
              <Label htmlFor="otp" className="text-[#ffffff] text-xl">
                Enter OTP
              </Label>
              <InputOTP
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                {...registerOtp('otp', {
                  required: 'OTP is required',
                  minLength: {
                    value: 6,
                    message: 'OTP must be 6 digits',
                  },
                })}
                onChange={(value) => setValue('otp', value)} // Update form value on change
              >
                <InputOTPGroup className="flex gap-2">
                  {[...Array(6)].map((_, index) => (
                    <InputOTPSlot
                      key={index}
                      index={index}
                      className="text-[#FFFFFF] border-none shadow-sm shadow-white/30 w-12 h-12 text-center text-lg"
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
              {otpErrors.otp && (
                <p className="text-sm text-[#f2c0d3]">{otpErrors.otp.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#a07df4] text-[#ffffff] hover:bg-[#b99ef9]"
            >
              Verify OTP
            </Button>
          </form>
        )}

        {/* Divider */}
        {!showOtpForm && (
          <div className="flex items-center justify-center space-x-2 my-2">
            <div className="flex-1 h-px bg-[#a07df4]" />
            <span className="text-sm text-[#a07df4]">OR</span>
            <div className="flex-1 h-px bg-[#a07df4]" />
          </div>
        )}

        {/* Google Sign-Up Button */}
        {!showOtpForm && (
          <Button
            variant="outline"
            className="w-full text-[#ffffff] border-none hover:bg-[#201f22] shadow-sm shadow-white/10"
          >
            <FcGoogle className="mr-2 h-5 w-5" />
            Sign up with Google
          </Button>
        )}
      </div>
    </div>
  )
}