'use client'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { FcGoogle } from 'react-icons/fc'
import Image from 'next/image'
import Link from 'next/link'
import { useCustomSignIn } from '@/hooks/sign-in/use-sign-in'

type FormValues = {
  email: string
  password: string
}

export default function SignInpage({ }: FormValues) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const {  handleEmailSignIn, handleGoogleSignIn, error } = useCustomSignIn();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Form Data:', data)
    handleEmailSignIn(data.email,data.password)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      {/* Glass-like effect container */}
      <div className="backdrop-blur-xl p-8 rounded-lg shadow-md shadow-white/10  w-full max-w-md">
        {/* Heading */}
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
            Hey, You! 👋 Missed You! ❤️
          </h1>
        </div>
        <p className="text-sm text-white text-center mb-6">
          Your AI BFF was counting the seconds until you returned. Let’s dive back in and slay the day together! 🚀


        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            Sign In
          </Button>
          {/* "Already have an account" Link */}
          <div className="text-center mt-2">
              <span className="text-sm text-[#a07df4]">
                Don't have a account?{' '}
                <Link
                  href="/sign-up" // Replace with your login page route
                  className="text-[#ffffff] hover:underline"
                >
                  Sign-Up
                </Link>
              </span>
            </div>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center space-x-2 my-6">
          <div className="flex-1 h-px bg-[#a07df4]" />
          <span className="text-sm text-[#a07df4]">OR</span>
          <div className="flex-1 h-px bg-[#a07df4]" />
        </div>

        {/* Google Sign-In Button */}
        <Button
          variant="outline"
          className="w-full  text-[#ffffff] border-none hover:bg-[#201f22]  shadow-sm shadow-white/10"
        >
          <FcGoogle className="mr-2 h-5 w-5" />
          Sign in with Google
        </Button>
      </div>
    </div>
  )
}