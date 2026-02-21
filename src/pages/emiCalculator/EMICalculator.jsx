import React, { useState, useEffect } from 'react';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTenure, setLoanTenure] = useState(12);

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [interestRatio, setInterestRatio] = useState(0);

  useEffect(() => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / (12 * 100);
    const months = loanTenure;

    const emiCalc = (principal * ratePerMonth * Math.pow(1 + ratePerMonth, months)) / (Math.pow(1 + ratePerMonth, months) - 1);
    const totalPayable = emiCalc * months;
    const totalInt = totalPayable - principal;
    const intPercentage = (totalInt / totalPayable) * 100;

    setEmi(Math.round(emiCalc));
    setTotalPayment(Math.round(totalPayable));
    setTotalInterest(Math.round(totalInt));
    setInterestRatio(intPercentage.toFixed(1));
  }, [loanAmount, interestRate, loanTenure]);

  // SVG Circle Logic
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (interestRatio / 100) * circumference;

  return (
    <section className="py-12 px-4 bg-gray-50 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Side: Inputs */}
        <div className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-[#1447E6] mb-8">Loan Details</h2>
          <div className="space-y-8">
            {[ 
              { label: "Loan Amount (₹)", val: loanAmount, set: setLoanAmount, min: 50000, max: 5000000, suffix: `₹${loanAmount.toLocaleString()}` },
              { label: "Interest Rate (%)", val: interestRate, set: setInterestRate, min: 5, max: 20, suffix: `${interestRate}%` },
              { label: "Loan Tenure (Months)", val: loanTenure, set: setLoanTenure, min: 6, max: 360, suffix: `${loanTenure} months` }
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-black font-semibold">{item.label}</label>
                  <span className="bg-[#E8EEFF] text-[#1447E6] px-3 py-1 rounded-md font-bold">{item.suffix}</span>
                </div>
                <input 
                  type="range" min={item.min} max={item.max} value={item.val}
                  onChange={(e) => item.set(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1447E6]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Output */}
        <div className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-[#1447E6] mb-8">Your EMI Summary</h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            {/* The Fixed Circle */}
            <div className="relative flex items-center justify-center">
  {/* SVG Layer */}
  <svg className="w-full h-full transform -rotate-90">
    {/* Gray Background Track */}
    <circle 
      cx="50%" 
      cy="50%" 
      r={radius} 
      stroke="#F3F4F6" 
      strokeWidth="12" 
      fill="transparent" 
    />
    {/* Blue Progress Bar */}
    <circle 
      cx="50%" 
      cy="50%" 
      r={radius} 
      stroke="#1447E6" 
      strokeWidth="12" 
      fill="transparent"
      strokeDasharray={circumference}
      strokeDashoffset={offset}
      strokeLinecap="round"
      className="transition-all duration-500 ease-out"
    />
  </svg>

  {/* Text Layer - Fixed Positioning */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
    <span className="text-3xl md:text-4xl font-extrabold text-black leading-none">
      {interestRatio}%
    </span>
    <p className="text-[9px] md:text-[10px] text-gray-400 uppercase font-bold tracking-tighter mt-1 max-w-[80px] leading-tight">
      Interest <br /> Percentage
    </p>
  </div>
</div>

            {/* Data Cards */}
            <div className="w-full space-y-3">
              <div className="bg-[#F0FFF4] p-4 rounded-xl border border-green-100">
                <p className="text-xs text-gray-500 font-medium">Monthly Payment (EMI)</p>
                <p className="text-xl font-bold text-green-600">₹{emi.toLocaleString()}</p>
              </div>
              <div className="bg-[#F0F7FF] p-4 rounded-xl border border-blue-100">
                <p className="text-xs text-gray-500 font-medium">Total Interest Payable</p>
                <p className="text-xl font-bold text-[#1447E6]">₹{totalInterest.toLocaleString()}</p>
              </div>
              <div className="bg-[#FAF5FF] p-4 rounded-xl border border-purple-100">
                <p className="text-xs text-gray-500 font-medium">Total Payment</p>
                <p className="text-xl font-bold text-purple-700">₹{totalPayment.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;