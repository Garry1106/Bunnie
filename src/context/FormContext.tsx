'use client'

import React, { createContext, useContext, useState } from 'react';

// Define the type for the form data
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

// Define the type for the context
type FormContextType = {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

// Create the context
const FormContext = createContext<FormContextType | undefined>(undefined);

// Create a provider component
export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        age: '',
        country: '',
        phone: '',
        describeYourself: '',
        description: '',
        subscriptionPlan: '',
        gender: '',
        option: '',
        otp: '',
    });

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};

// Custom hook to use the form context
export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within a FormProvider');
    }
    return context;
};