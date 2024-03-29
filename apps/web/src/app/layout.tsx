import "@/styles/globals.css";

import type { PropsWithChildren } from "react";

import { RootLayout } from "@/ui/layout/root";
import { TopBar } from "@/ui/topbar/topbar";

const MarkdownLayout = async ({
  children,
}: PropsWithChildren): Promise<JSX.Element> => {
  return (
    <RootLayout>
      <main className="border-hint/50 bg-light/5 relative order-2 m-2 w-full overflow-auto rounded-md border shadow-black backdrop-blur-sm">
        <TopBar />

        <div className="text-light mx-auto w-full max-w-2xl px-4 py-12 pb-10 md:px-8">
          {children}
        </div>
      </main>
    </RootLayout>
  );
};

MarkdownLayout.revalidate = 0;
export default MarkdownLayout;
