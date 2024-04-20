
import React, { useId } from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currenyOptions = [],
    selectCurrency = "inr",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();
    return (
        <div className={`${className} bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    disabled={amountDisable}
                    value={amount}
                    onChange={e => onAmountChange && onAmountChange(Number(e.target.value))}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    className="rounded-lg px-1 py-1
                     bg-gray-100 cursor-pointer outline-none"
                >

                    {
                        currenyOptions.map((curr, i) => {
                            <option value={curr} key={i} className='text-black'>
                                {curr}
                            </option>
                        })
                    }

                </select>
            </div>
        </div>
    );
}

export default InputBox
