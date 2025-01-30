'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import countries, { plans } from '@/constants/index';
import { useFormContext } from '@/context/FormContext'; // Custom hook for form context
import { usePhoneAuth } from '@/hooks/auth/use-auth'; // Custom hook for OTP

import Success from '@/components/SuccessPage';

type FormData = {
  name: string;
  age: string;
  country: string;
  phone: string;
  describeYourself: string;
  description: string;
  subscriptionPlan: string;
  gender: string;
  option: string;
  otp: string;
};

// Cart Component
const Cart = ({ subscriptionPlan }: { subscriptionPlan: string }) => {
  // Find the selected plan based on the subscriptionPlan name
  const selectedPlan = plans.find((plan) => plan.name === subscriptionPlan);

  return (
    <div
      className={`bg-gradient-to-b ${selectedPlan ? selectedPlan.gradient : 'from-[#F2C0D3]/10 to-transparent'
        } p-6 rounded-lg shadow-lg backdrop-blur-lg`}
    >
      <h2 className="text-xl font-bold text-[#F2C0D3] mb-4">🛒 Your Cart</h2>
      {selectedPlan ? (
        <div className="space-y-4">
          {/* Plan Name and Price */}
          <div className="flex justify-between items-center">
            <span className="text-[#FFFFFF] font-bold">{selectedPlan.name}</span>
            <span className="text-[#FFFFFF] font-bold">
              ${selectedPlan.price}/{selectedPlan.period}
            </span>
          </div>

          {/* Features */}
          <ul className="space-y-2">
            {selectedPlan.features.map((feature, index) => (
              <li key={index} className="text-sm text-[#FFFFFF] flex items-center">
                <span className="mr-2">✔️</span>
                {feature}
              </li>
            ))}
          </ul>

          {/* Popular Tag */}
          {selectedPlan.popular && (
            <div className="mt-4 text-center">
              <span className="bg-[#A07DF4] text-white text-xs px-2 py-1 rounded-full">
                Most Popular
              </span>
            </div>
          )}

          {/* Total Amount */}
          <div className="pt-4 border-t border-white/20">
            <div className="flex justify-between items-center">
              <span className="text-[#FFFFFF] font-bold">Total</span>
              <span className="text-[#FFFFFF] font-bold">
                ${selectedPlan.price}/{selectedPlan.period}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-[#FFFFFF]">No subscription plan selected.</p>
      )}
    </div>
  );
};


const FormPage = () => {
  const [step, setStep] = useState(1); // 1: Details, 2: OTP, 3: Subscription
  const [selectedCountryCode, setSelectedCountryCode] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission
  const { formData, setFormData } = useFormContext(); // Use the form context

  // Custom phone authentication hook
  const {
    isOtpSent,
    isOtpVerified,
    isLoading,
    error: otpError,
    sendOtp,
    verifyOtp,
  } = usePhoneAuth();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: formData, // Initialize form with context values
  });

  const subscriptionPlan = watch('subscriptionPlan'); // Watch the subscription plan field

  const onSubmit = async (data: FormData) => {
    if (step === 1) {
      // Save details and move to OTP step
      setFormData((prevData) => ({
        ...prevData,
        ...data,
      }));
      await sendOtp(data.phone); // Send OTP
      setStep(2); // Move to OTP verification step
    } else if (step === 2) {
      // Verify OTP and move to subscription step
      const isOtpVerified = await verifyOtp(data.otp);
      if (isOtpVerified) {
        setStep(3); // Move to subscription selection step
      }
    } else if (step === 3) {
      // Final submission with subscription details
      const finalData = { ...formData, ...data };
      console.log('Final Form Data:', finalData);

      try {
        const response = await fetch('/api/insert-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(finalData),
        });

        const result = await response.json();
        if (result.success) {
          console.log('User inserted successfully:', result.user);
          setFormData(finalData); // Update context with final form data
          setIsSubmitted(true); // Set submission state to true
        } else {
          console.error('Failed to insert user:', result.error);
        }
      } catch (error) {
        console.error('Error inserting user:', error);
      }
    }
  };

  // Render the Success component if the form is submitted
  if (isSubmitted) {
    return <Success />;
  }

  // Handle country selection and update phone number field with country code
  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  const handleCountryChange = (countryCode: string) => {
    setSelectedCountryCode(countryCode);
    const escapedCountryCode = escapeRegExp(selectedCountryCode);
    const currentPhone = watch('phone')?.replace(new RegExp(`^${escapedCountryCode}`), '') || '';
    setValue('phone', `${countryCode}${currentPhone}`);
  };

  // Handle phone number input changes
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.startsWith(selectedCountryCode)) {
      setValue('phone', inputValue);
    } else {
      setValue('phone', `${selectedCountryCode}${inputValue}`);
    }
  };

  return (
    <div
      className="min-h-screen w-screen flex items-center justify-center py-24 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/digital.jpg')" }}
    >

      {/* Black Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/80"></div>

      {/* Form and Cart Container */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mx-4">

        {/* Form Container with Glass Blur and Box Shadow */}
        <motion.div
          className="relative bg-white/10 p-8 rounded-lg shadow-lg w-full md:w-2/3 backdrop-blur-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-[#F2C0D3] mb-4 text-center">
            {step === 1
              ? 'Let’s Bring Bunnie to Life! 🐰'
              : step === 2
                ? '🔑 OTP Verification'
                : '💎 Subscription Plan'}
          </h1>
          {/* Step Count Section */}
          <div className="flex flex-col items-center space-y-4 mb-8">
            {/* Step Progress Bar */}
            <div className="w-full bg-white/20 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-[#F2C0D3] to-[#A07DF4] h-2.5 rounded-full"
                style={{ width: `${(step / 3) * 100}%` }} // Dynamically adjust width based on step
              ></div>
            </div>

            {/* Step Numbers */}
            <div className="flex space-x-4">
              {[1, 2, 3].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === stepNumber
                    ? 'bg-gradient-to-r from-[#F2C0D3] to-[#A07DF4] text-white' // Active step
                    : 'bg-white/10 text-white/50' // Inactive step
                    }`}
                >
                  {stepNumber}
                </div>
              ))}
            </div>

            {/* Step Labels */}
            <div className="flex space-x-6 text-sm text-[#FFFFFF]">
              <span className={step === 1 ? 'font-bold' : 'opacity-50'}>Details</span>
              <span className={step === 2 ? 'font-bold' : 'opacity-50'}>OTP</span>
              <span className={step === 3 ? 'font-bold' : 'opacity-50'}>Plan</span>
            </div>
          </div>


          <p className="text-sm text-[#FFFFFF] text-center mb-5">
            {step === 1
              ? '🌟 Please fill out the form to get started with Bunnie'
              : step === 2
                ? 'Enter the OTP sent to your phone number to verify your identity.'
                : 'Select your subscription plan to proceed.'}
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Step 1: Details Gathering */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Name and Age */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#FFFFFF] mb-1">
                    👤 Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    className="bg-transparent mt-1 text-[#FFFFFF] shadow-sm shadow-white/20 focus:bg-transparent focus:ring-0 border-0"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-[#FFFFFF] mb-1">
                    🎂 Age
                  </label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    className="bg-transparent mt-1 text-[#FFFFFF] shadow-sm shadow-white/20 focus:shadow-white/70 focus:ring-0 border-0"
                    {...register('age', { required: 'Age is required' })}
                  />
                  {errors.age && (
                    <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
                  )}
                </div>

                {/* Country and Phone Number */}
                <div className="relative"> {/* Ensure the parent is relative for absolute positioning */}
                  <label htmlFor="country" className="block text-sm font-medium text-[#FFFFFF] mb-1">
                    🌍 Country
                  </label>
                  <Controller
                    name="country"
                    control={control}
                    rules={{ required: 'Country is required' }}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(value) => {
                          field.onChange(value);
                          const selectedCountry = countries.find((c) => c.name === value);
                          if (selectedCountry) {
                            handleCountryChange(selectedCountry.code);
                          }
                        }}

                      >
                        <SelectTrigger className="bg-transparent text-[#FFFFFF] shadow-sm shadow-white/20 focus:shadow-white/70 focus:ring-0 border-0">
                          {field.value || "Select your country"}
                        </SelectTrigger>
                        <SelectContent
                          className="bg-gray-200 text-black absolute mt-2"
                          position="popper"
                          side="bottom"
                          align="start"
                          style={{ top: "100%", bottom: "auto" }}
                        >
                          {countries.map((country) => (
                            <SelectItem key={country.name} value={country.name} className="hover:bg-gray-100 cursor-pointer">
                              {country.name} ({country.code})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.country && (
                    <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#FFFFFF] mb-1">
                    📞 Whatsapp Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="bg-transparent mt-1 text-[#FFFFFF] shadow-sm shadow-white/20 focus:shadow-white/70 focus:ring-0 border-0"
                    {...register('phone', { required: 'Phone number is required' })}
                    onChange={(e) => {
                      handlePhoneChange(e); // Handle phone number formatting
                    }}
                    value={watch('phone') || ''}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Gender (Full Width) */}
                <div className="md:col-span-2">
                  <label htmlFor="gender" className="block text-sm font-medium text-[#FFFFFF] mb-1">
                    🚻 Your Gender
                  </label>
                  <Controller
                    name="gender"
                    control={control}
                    rules={{ required: 'Gender is required' }}
                    render={({ field }) => (
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                        className="mt-1 flex space-x-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" className="text-[#FFFFFF]" />
                          <Label htmlFor="male" className="text-[#FFFFFF]">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" className="text-[#FFFFFF]" />
                          <Label htmlFor="female" className="text-[#FFFFFF]">Female</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" className="text-[#FFFFFF]" />
                          <Label htmlFor="other" className="text-[#FFFFFF]">Other</Label>
                        </div>
                      </RadioGroup>
                    )}
                  />
                  {errors.gender && (
                    <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
                  )}
                </div>

                {/* Companion's Gender (Full Width) */}
                <div className="md:col-span-2">
                  <label htmlFor="option" className="block text-sm font-medium text-[#FFFFFF] mb-1">
                    👫 Your Companion's Gender
                  </label>
                  <Controller
                    name="option"
                    control={control}
                    rules={{ required: 'Option is required' }}
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="bg-transparent text-[#FFFFFF] shadow-sm shadow-white/20 focus:shadow-white/70 focus:ring-0 border-0">
                          {field.value || "Select an option"}
                        </SelectTrigger>
                        <SelectContent className="bg-gray-200 text-black">
                          <SelectItem value="Male" className="hover:bg-gray-100 cursor-pointer">Male</SelectItem>
                          <SelectItem value="Female" className="hover:bg-gray-100 cursor-pointer">Female</SelectItem>
                          <SelectItem value="Others" className="hover:bg-gray-100 cursor-pointer">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.option && (
                    <p className="text-red-500 text-sm mt-1">{errors.option.message}</p>
                  )}
                </div>

                {/* Describe Yourself (Full Width) */}
                <div className="md:col-span-2">
                  <label htmlFor="describeYourself" className="block text-sm font-medium text-[#FFFFFF] mb-1">
                    🎨 Describe Yourself
                  </label>
                  <Textarea
                    id="describeYourself"
                    placeholder="Example: I'm a 22-year-old guy who loves hiking 🏞️, gaming 🎮, and exploring new places 🌍. Looking for someone fun and adventurous to share experiences with!"
                    className="bg-transparent mt-1 text-[#FFFFFF] shadow-sm shadow-white/20 focus:shadow-white/70 focus:ring-0 border-0"
                    {...register('describeYourself', { required: 'This field is required' })}
                  />
                  {errors.describeYourself && (
                    <p className="text-red-500 text-sm mt-1">{errors.describeYourself.message}</p>
                  )}
                </div>

                {/* Expectations from Bunnie (Full Width) */}
                <div className="md:col-span-2">
                  <label htmlFor="description" className="block text-sm font-medium text-[#FFFFFF] mb-1">
                    💭 Expectations from Bunnie
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Example: I expect Bunnie to be young, passionate, and fun-loving 🎉. Someone who enjoys deep conversations 💬, outdoor adventures 🏕️, and has a great sense of humor 😂!"
                    className="bg-transparent mt-1 text-[#FFFFFF] shadow-sm shadow-white/20 focus:shadow-white/70 focus:ring-0 border-0"
                    {...register('description', { required: 'Description is required' })}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 2: OTP Verification */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-center justify-center space-y-6">
                  {/* OTP Input Section */}
                  <label htmlFor="otp" className="block text-md font-bold text-[#FFFFFF] mb-1 text-center">
                    Enter your OTP
                  </label>
                  <p className="text-md text-[#FFFFFF] text-center">
                    We've sent a 6-digit OTP to your phone. Please enter it below to verify your identity.
                  </p>
                  <Controller
                    name="otp"
                    control={control}
                    rules={{ required: 'OTP is required' }}
                    render={({ field }) => (
                      <InputOTP maxLength={6} {...field}>
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
                    )}
                  />
                  {errors.otp && (
                    <p className="text-red-500 text-sm mt-1 text-center">{errors.otp.message}</p>
                  )}
                  {otpError && (
                    <p className="text-red-500 text-sm mt-1 text-center">{otpError}</p>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 3: Subscription Selection */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-center justify-center space-y-6">
                  <label htmlFor="subscriptionPlan" className="block text-md font-bold text-[#FFFFFF] mb-1 text-center">
                    💎 Select Your Subscription Plan
                  </label>

                  {/* Subscription Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {plans.map((plan) => (
                      <motion.div
                        key={plan.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`bg-gradient-to-b ${plan.gradient} p-6 rounded-lg shadow-lg backdrop-blur-lg cursor-pointer ${watch('subscriptionPlan') === plan.name
                          ? 'ring-2 ring-[#F2C0D3]' // Highlight selected plan
                          : 'ring-1 ring-white/20' // Default border
                          }`}
                        onClick={() => setValue('subscriptionPlan', plan.name)} // Update selected plan
                      >
                        <div className="flex flex-col space-y-2">
                          {/* Plan Name and Price */}
                          <div className="flex flex-col  items-center ">
                            <span className="text-[#FFFFFF] font-bold">{plan.name}</span>
                            <span className="text-[#FFFFFF] font-semibold">
                              ${plan.price}/{plan.period}
                            </span>
                          </div>

                          {/* Features */}
                          <ul className="space-y-2">
                            {plan.features.map((feature, index) => (
                              <li key={index} className="text-sm text-[#FFFFFF] flex items-center">
                                <span className="mr-2">✔️</span>
                                {feature}
                              </li>
                            ))}
                          </ul>

                          {/* Popular Tag */}
                          {plan.popular && (
                            <div className="mt-4 text-center">
                              <span className="bg-[#A07DF4] text-white text-xs px-2 py-1 rounded-full">
                                Most Popular
                              </span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Error Message */}
                  {errors.subscriptionPlan && (
                    <p className="text-red-500 text-sm mt-1 text-center">
                      {errors.subscriptionPlan.message}
                    </p>
                  )}
                </div>
              </motion.div>
            )}
            <div id="clerk-captcha" className="mb-6"></div>

            {/* Submit Button */}
            <div className="mt-8">
              <Button
                type="submit"
                className="w-full bg-[#9348ef] hover:bg-[#A07DF4] text-[#FFFFFF]"
                disabled={isLoading}
              >
                {isLoading
                  ? 'Loading...'
                  : step === 1
                    ? 'Next'
                    : step === 2
                      ? 'Verify OTP'
                      : 'Submit'}
              </Button>
            </div>
          </form>
        </motion.div>

        {/* Cart Section */}
        <div className="w-full md:w-1/3">
          <Cart subscriptionPlan={subscriptionPlan} />
        </div>
      </div>
    </div>
  );
};

export default FormPage;