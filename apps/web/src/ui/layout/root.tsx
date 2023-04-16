import type { PropsWithChildren } from "react";

import { Sidebar } from "@/ui/menu";
import { AnalyticsWrapper } from "@/ui/utilities/analytics";

export const RootLayout = ({
  children,
}: PropsWithChildren<{}>): JSX.Element => (
  <html lang="en" className="h-full">
    <body className="relative flex h-full items-stretch">
      <aside className="order-1 hidden w-0 flex-none py-2 pl-2 md:block md:w-56">
        <Sidebar />
      </aside>

      {children}

      <AnalyticsWrapper />
    </body>
  </html>
);
