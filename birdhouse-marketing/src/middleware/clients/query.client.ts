import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000*60*3,
      // staleTime: DEFAULT_STALE_TIME_MS,
      refetchOnWindowFocus: false,
    },
  },
});
