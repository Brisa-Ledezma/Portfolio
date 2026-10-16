import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, type ReactNode } from 'react'

// TanStack Query maneja el estado de los pedidos a la API (enviando, error, listo).
export function QueryProvider({ children }: { children: ReactNode }) {
  const [client] = useState(() => new QueryClient({ defaultOptions: { mutations: { retry: false } } }))
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
