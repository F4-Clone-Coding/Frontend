import { useState, useEffect, useCallback } from "react";
import { api } from "../shared/apis";

function useFetch(page, categoryId) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [stores, setStores] = useState([]);

    const sendQuery = useCallback(async () => {
        try {
            await setLoading(true);
            await setError(false);
            const res = await api.get(`${categoryId === 0 ? `/?page=${page}` : `/${categoryId}?page=${page}`}`);
            console.log("Res", res)
            await setStores((prev) => prev.concat(res.data.storeList));
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }, [page]);

    useEffect(() => {
        sendQuery();
    }, [sendQuery, page]);

    return { loading, error, stores };
}

export default useFetch;