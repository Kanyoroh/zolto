"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { useState, useEffect } from "react";


export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  
  if (!domLoaded) {
    return <></>;
  }

  return (
   <div>
      <NextUIProvider navigate={router.push} >
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </NextUIProvider>
      </div>
  );
}
