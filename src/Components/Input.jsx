import React from 'react'
import { useId } from 'react'

function Input({
  label,
  amount,
  onAmountCng,
  selectCurrency,
  onCurrencyCng,
  currencyOptions=[],
  className="",
}) {
  const uniqueId = useId();

  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={uniqueId} className="block text-gray-700  font-bold mb-2">
        {label}
      </label>
      <input
        type="number"
        id={uniqueId}
        value={amount}
        onChange={(e) => { onAmountCng && onAmountCng(Number(e.target.value)) }}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <select
        value={selectCurrency}
        onChange={(e) => onCurrencyCng && onCurrencyCng(e.target.value)}
        className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  )
}

export default Input
