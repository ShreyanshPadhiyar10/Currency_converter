import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    className = "",
}) {
    return (
        <div className={`bg-white rounded-lg text-sm flex ${className}`}>
            <div className="">
                <p className="text-gray-400">
                    {label}
                </p>
                <input
                    className="outline-none w-full bg-transparent py-1 px-3 rounded-md"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="flex flex-wrap justify-end text-right">
                <p className="text-gray-400 mb-2 w-full"
                    style={{ marginLeft: "13px" }}>Currency Type</p>
                <select className="rounded-lg px-1 py-1 pl-2 bg-gray-100 cursor-pointer outline-none"
                    style={{
                        marginLeft: "11px",
                        width: "100%",
                        paddingLeft: "6px"
                    }}

                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((options) => (
                        <option value={options}>{options}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;