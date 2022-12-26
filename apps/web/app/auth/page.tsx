"use client";

import { createBrowserClient } from "@/lib/supabase/clients/browser";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSearchParams } from "next/navigation";

const AuthPage = (): JSX.Element => {
  const supabase = createBrowserClient();
  // get query param "redirectedFrom" from the URL
  const searchParams = useSearchParams();
  const redirectedFrom = searchParams.get("redirectedFrom");

  return (
    <>
      <Auth
        supabaseClient={supabase}
        providers={["apple"]}
        onlyThirdPartyProviders
        redirectTo={redirectedFrom ?? undefined}
        appearance={{
          theme: ThemeSupa,
        }}
      />
    </>
  );
};

export default AuthPage;
