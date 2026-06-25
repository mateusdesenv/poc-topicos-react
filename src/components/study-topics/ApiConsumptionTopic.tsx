import { TopicLayout } from './TopicLayout';

export function ApiConsumptionTopic() {
  return (
    <TopicLayout
      title="Consumo de API"
      summary="Você pode buscar dados com fetch ou axios dentro de um hook próprio. Em projetos reais, React Query/TanStack Query costuma ser superior."
      whenToUse="Use um custom hook quando quiser esconder loading, erro, abort e parsing fora do componente visual."
      angularBridge="Em Angular você faria isso num service injetável. Em React limpo, um custom hook concentra essa lógica."
      focus="separação entre dados e apresentação"
      nextSlug="react-router"
      code={String.raw`
import { useEffect, useState } from 'react';

type RequestState<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

export function useApi<T>(url: string): RequestState<T> {
  const [state, setState] = useState<RequestState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Erro ao buscar dados');
        return response.json();
      })
      .then((data) => setState({ data, isLoading: false, error: null }))
      .catch((error) => {
        if (error.name === 'AbortError') return;
        setState({ data: null, isLoading: false, error: error.message });
      });

    return () => controller.abort();
  }, [url]);

  return state;
}`}
    />
  );
}
