const API_URL = import.meta.env.VITE_API_URL as string | undefined

// La API gratuita se duerme cuando no recibe tráfico. Apenas se abre el sitio
// le mandamos un pedido liviano para que vaya despertando mientras la persona
// navega; así, cuando use el formulario de contacto, ya está lista.
// `no-cors` alcanza: no necesitamos leer la respuesta, solo que el pedido llegue.
export function wakeApi(): void {
  if (!API_URL) return
  fetch(`${API_URL}/health`, { mode: 'no-cors' }).catch(() => {
    /* si falla, el formulario lo reintenta al enviar */
  })
}
