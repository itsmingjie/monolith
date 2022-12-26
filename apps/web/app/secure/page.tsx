import { createServerClient } from "@/lib/supabase/clients/server";

const ProtectedPage = async () => {
  const supabase = createServerClient();
  const user = await supabase.auth.getUser();

  return (
    <>
      <h1>Protected Page</h1>
      <p>Welcome {JSON.stringify(user.data)}</p>
    </>
  );
};

export default ProtectedPage;
