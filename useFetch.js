import React, { useState, useEffect } from "react";
function useFetch(uri) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const [error, setError] = useState()
    useEffect(() => {
        if (!uri) return;
        fetch(uri)
            .then(data => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    }, [uri]);
    return {
        loading,
        data,
        error
    };
}
