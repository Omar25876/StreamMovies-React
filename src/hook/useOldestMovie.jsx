import { useMemo } from "react";

const useOldestMovie = (movies) => {
  return useMemo(() => {
    if (!movies || movies.length === 0) return null;

    const sorted = [...movies].sort(
      (a, b) => new Date(a.release_date) - new Date(b.release_date)
    );

    return sorted[0];
  }, [movies]);
};

export default useOldestMovie;
