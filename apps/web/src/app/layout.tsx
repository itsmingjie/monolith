import "@/styles/globals.css";

import { Archivo } from "@next/font/google";
import type { PropsWithChildren } from "react";

import { cx } from "@/lib/utils/tailwind";
import { Sidebar } from "@/ui/menu";
import { AnalyticsWrapper } from "@/ui/utilities/analytics";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const RootLayout = async ({
  children,
}: PropsWithChildren): Promise<JSX.Element> => {
  return (
    <html lang="en" className={cx("h-full font-sans", archivo.variable)}>
      <body className="relative flex h-full items-stretch">
        <aside className="order-1 hidden w-0 flex-none py-2 pl-2 md:block md:w-56">
          <Sidebar />
        </aside>

        <main className="relative order-2 m-2 w-full overflow-auto rounded-md border border-hint/50 bg-light/5 px-20 pt-16 shadow-black backdrop-blur-sm">
          {children}

          <AnalyticsWrapper />
        </main>
      </body>
    </html>
  );
};

RootLayout.revalidate = 0;
export default RootLayout;
