import "@/styles/globals.css";

import type { PropsWithChildren } from "react";

import { RootLayout } from "@/ui/layout/root";
import { TopBar } from "@/ui/topbar/topbar";

const PagesLayout = async ({
  children,
}: PropsWithChildren): Promise<JSX.Element> => {
  return (
    <RootLayout>
      <main className="relative order-2 m-2 w-full overflow-auto rounded-md border border-hint/50 bg-light/5 shadow-black backdrop-blur-sm">
        <TopBar />

        <div className="px-20 pt-4">{children}</div>
      </main>
    </RootLayout>
  );
};

PagesLayout.revalidate = 0;
export default PagesLayout;
