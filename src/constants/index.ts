export const plans = [
  {
    name: "Basic",
    price: "9.99",
    period: "week",
    features: [
      "24/7 Chat Support",
      "Basic Emotional Analysis",
      "Text Conversations",
      "100 Messages per Day",
    ],
    gradient: "from-[#F2C0D3]/10 to-transparent", // Primary gradient
  },
  {
    name: "Premium",
    price: "29.99",
    period: "month",
    features: [
      "All Basic Features",
      "Voice & Video Calls",
      "Advanced Emotional Support",
      "Unlimited Messages",
      "Priority Support",
    ],
    gradient: "from-[#A07DF4]/10 to-transparent", // Secondary gradient
    popular: true,
  },
  {
    name: "Ultimate",
    price: "69.99",
    period: "quarter",
    features: [
      "All Premium Features",
      "Multiple AI Companions",
      "Custom Personality Training",
      "24/7 Priority Support",
      "Exclusive Community Access",
    ],
    gradient: "from-[#F2C0D3]/10 to-transparent", // Primary gradient
  },
];

const countries = [
  { name: 'United States', code: '+1' },
  { name: 'Canada', code: '+1' },
  { name: 'United Kingdom', code: '+44' },
  { name: 'Australia', code: '+61' },
  { name: 'India', code: '+91' },
  { name: 'Germany', code: '+49' },
  { name: 'France', code: '+33' },
  { name: 'Japan', code: '+81' },
  { name: 'China', code: '+86' },
  { name: 'Brazil', code: '+55' },
  { name: 'Indonesia', code: '+62' },
  { name: 'Russia', code: '+7' },
  { name: 'Mexico', code: '+52' },
  { name: 'Philippines', code: '+63' },
  { name: 'Vietnam', code: '+84' },
  { name: 'Turkey', code: '+90' },
  { name: 'Italy', code: '+39' },
  { name: 'Spain', code: '+34' },
  { name: 'South Korea', code: '+82' },
  { name: 'Argentina', code: '+54' },
  { name: 'South Africa', code: '+27' },
  { name: 'Nigeria', code: '+234' },
  { name: 'Egypt', code: '+20' },
  { name: 'Thailand', code: '+66' },
  { name: 'Pakistan', code: '+92' },
  { name: 'Bangladesh', code: '+880' },
  { name: 'Saudi Arabia', code: '+966' },
  { name: 'Malaysia', code: '+60' },
  { name: 'Poland', code: '+48' },
  { name: 'Colombia', code: '+57' },
  // Add more countries as needed
];

export default countries;