import "@/styles/globals.css";

import { Archivo } from "@next/font/google";
import type { PropsWithChildren } from "react";

import { clsx } from "@/lib/utils/clsx";
import { Sidebar } from "@/ui/menu";
import { AnalyticsWrapper } from "@/ui/utilities/analytics";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const RootLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <html lang="en" className={clsx("h-full font-sans", archivo.variable)}>
      <body className="relative flex items-stretch h-full gap-1">
        <aside className="flex-none order-1 hidden w-0 p-2 md:w-56 md:block">
          <Sidebar />
        </aside>

        <main className="relative order-2 w-full px-20 pt-16 m-2 overflow-auto border rounded-md bg-light/5 border-hint/50 backdrop-blur-sm shadow-black">
          {children}

          <AnalyticsWrapper />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
