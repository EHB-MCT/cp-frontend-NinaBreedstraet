import { useState, useEffect } from "react";
import { getFairytaleCardItems } from ".././components/Fetch";

export function useFairytaleCards() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    getFairytaleCardItems()
      .then((items) => {
        if (!mounted) return;
        setData(items);
      })
      .catch((err) => {
        if (!mounted) return;
        console.error(err);
        setError("Kon sprookjes niet laden.");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return { data, loading, error };
}
