import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [info, setInfo] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((val) => val.json())
            .then((val) => setInfo(val[currency]))

    }, [currency])

    return info
}

export default useCurrencyInfo