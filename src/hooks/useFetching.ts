import { useCallback, useState } from "react";

export function useFetching(callback: () => Promise<void>) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string>("");

  const fetching = useCallback(async (): Promise<void> => {
    try {
      setIsLoading(true);
      await callback();
    } catch (error) {
      if (error instanceof Error) {
        setIsError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, [callback]);

  return [fetching, isLoading, isError] as const;
}
