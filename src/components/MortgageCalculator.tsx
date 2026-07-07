"use client";

import { useMemo, useState } from "react";
import { formatPrice } from "@/lib/utils";

export default function MortgageCalculator() {
  const [price, setPrice] = useState(280000);
  const [downPercent, setDownPercent] = useState(10);
  const [rate, setRate] = useState(4.99);
  const [years, setYears] = useState(30);

  const monthlyPayment = useMemo(() => {
    const principal = price * (1 - downPercent / 100);
    const monthlyRate = rate / 100 / 12;
    const numPayments = years * 12;
    if (monthlyRate === 0) return principal / numPayments;
    const payment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
    return payment;
  }, [price, downPercent, rate, years]);

  return (
    <div className="rounded-2xl bg-white p-7 shadow-md ring-1 ring-navy-100 sm:p-8">
      <h3 className="font-display text-xl font-semibold text-navy-900">Estimated Monthly Payment</h3>
      <p className="mt-1 text-xs text-navy-500">
        This is an estimate for illustration only and does not include taxes, insurance, or HOA fees.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <div className="flex justify-between text-sm font-medium text-navy-800">
            <span>Home Price</span>
            <span>{formatPrice(price)}</span>
          </div>
          <input
            type="range"
            min={200000}
            max={400000}
            step={5000}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-2 w-full accent-sky-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-sm font-medium text-navy-800">
            <span>Down Payment</span>
            <span>{downPercent}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={30}
            step={1}
            value={downPercent}
            onChange={(e) => setDownPercent(Number(e.target.value))}
            className="mt-2 w-full accent-sky-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-sm font-medium text-navy-800">
            <span>Interest Rate</span>
            <span>{rate}%</span>
          </div>
          <input
            type="range"
            min={3}
            max={9}
            step={0.1}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="mt-2 w-full accent-sky-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-sm font-medium text-navy-800">
            <span>Loan Term</span>
            <span>{years} years</span>
          </div>
          <div className="mt-2 flex gap-2">
            {[15, 20, 30].map((y) => (
              <button
                key={y}
                onClick={() => setYears(y)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold ring-1 ${
                  years === y ? "bg-navy-900 text-white ring-navy-900" : "text-navy-700 ring-navy-200"
                }`}
              >
                {y} yr
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-xl bg-navy-900 p-6 text-center text-white">
        <p className="text-sm text-navy-300">Estimated Monthly Payment</p>
        <p className="font-display text-3xl font-bold">
          {formatPrice(Math.round(monthlyPayment))}
          <span className="text-base font-normal text-navy-300">/mo</span>
        </p>
      </div>
    </div>
  );
}
