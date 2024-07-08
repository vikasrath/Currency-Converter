import { useState } from 'react';
import './App.css'
import Input from './Components/Input';
import useCurrencyInfo from './Hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedamount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTO] = useState("inr");

  const currencyData = useCurrencyInfo(from);

  const currencyOptions = currencyData ? Object.keys(currencyData) : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    const rate = currencyData && currencyData[to];
    const totalAmount = amount * rate;
    setConvertedAmount(totalAmount);
  }

  const swap = ()=>{
    setFrom(to)
    setTO(from)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Currency Converter</h1>
        <Input
          amount={amount}
          label="From"
          onAmountCng={setAmount}
          selectCurrency={from}
          onCurrencyCng={setFrom}
          currencyOptions={currencyOptions}
        />

        <button className=' px-5 py-2 border  bg-blue-500 text-white rounded-md' onClick={swap}>Swap</button>

        <Input
          className='mt-2'
          amount={convertedamount}
          onAmountCng={setConvertedAmount}
          label="To"
          selectCurrency={to}
          onCurrencyCng={setTO}
          currencyOptions={currencyOptions}
        />
        <button
          type='submit'
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Convert
        </button>
      </form>
    </div>
  )
}

export default App
