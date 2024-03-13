import { useEffect, useState } from "react";

function useFetch(url, count) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState('');

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(fetchedData => {
                console.log(fetchedData);
                setData(fetchedData);
            })
            .catch(err => {
                console.log(err);
                setError(err)
            })
            .finally(() => {
                setLoading(false);
            })
    }, [count])

    return {data, error, loading};
}

export default useFetch;