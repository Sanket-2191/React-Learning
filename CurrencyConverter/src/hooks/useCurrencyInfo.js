import { useEffect, useState } from "react";

const host = 'api.frankfurter.app';
function useCurrencyInfo(currency) {
    let [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://${host}/latest?amount=10&from=${from}&to=${to}`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))

        // console.log(data);
    }, [currency])


}


export default useCurrencyInfo;


fetch(``)
    .then(resp => resp.json())
    .then((data) => {
        alert(`10 GBP = ${data.rates.USD} USD`);
    });