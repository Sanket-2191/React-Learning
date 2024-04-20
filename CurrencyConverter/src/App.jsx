import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from);
  // Object.keys(currencyInfo);
  const options = ['a', 'b', 'c', 'd', 'e']

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          url(`https://images.pexels.com/photos/3521353/pexels-photo-3521353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`),
      }}
    >

    </div>
  )
}

export default App

