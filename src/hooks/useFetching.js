import { useState } from "react";

export function useFetching(callback) {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState('');

    const fetching = async () => {
        try {
            await callback()
        } catch (error) {
            setIsError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, isError];
}