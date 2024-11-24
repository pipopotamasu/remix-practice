/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { HydratedRouter } from "react-router/dom";
import { startTransition, StrictMode, useState, useCallback } from "react";
import { hydrateRoot } from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "~/styles/createEmotionCache";
import { ClientStyleContext } from "~/styles/client.context";

interface ClientCacheProviderProps {
  children: React.ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache());

  const reset = useCallback(() => {
    setCache(createEmotionCache());
  }, []);

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <ClientCacheProvider>
        <HydratedRouter />
      </ClientCacheProvider>
    </StrictMode>
  );
});
