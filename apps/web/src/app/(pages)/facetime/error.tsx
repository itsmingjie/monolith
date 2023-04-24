"use client";

import { useEffect } from "react";

const FacetimeErrorPage = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">Error</h1>
        <p onClick={() => reset()}>Try again</p>
      </div>
    </div>
  );
};

export default FacetimeErrorPage;
