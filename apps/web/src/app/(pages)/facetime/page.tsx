"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import { useEffect, useState } from "react";

const FacetimePage = () => {
  const [status, setStatus] = useState("loading");
  const [token, setToken] = useState<string>();

  useEffect(() => {
    if (token) {
      void getUrl(token);
    }
  }, [token]);

  const getUrl = async (token: string) => {
    const response = await fetch("/api/facetime", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cf-turnstile-response": token,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get URL");
    }

    const { url } = await response.json();
    window.location.replace(url);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">Facetime</h1>
        {status === "loading" && !token && (
          <p className="text-sm text-light/60">
            Just making sure you're legit and you'll be on your way...
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-yellow">
            Something went wrong. Please refresh the page and try again.
          </p>
        )}

        {status === "expired" && (
          <p className="text-sm text-yellow">
            You took too long to solve the puzzle. Please refresh the page and
            try again.
          </p>
        )}

        {token && (
          <p className="text-sm text-light/60">Redirecting you now...</p>
        )}
      </div>

      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string}
        onError={() => setStatus("error")}
        onExpire={() => setStatus("expired")}
        onSuccess={setToken}
      />
    </div>
  );
};

export default FacetimePage;
