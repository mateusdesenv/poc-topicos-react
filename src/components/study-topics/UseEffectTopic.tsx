import { TopicLayout } from './TopicLayout';

export function UseEffectTopic() {
  return (
    <TopicLayout
      title="useEffect"
      summary="Hook para sincronizar o componente com algo externo: API, timer, subscription, localStorage ou evento do browser."
      whenToUse="Use quando a renderização precisa disparar ou limpar uma interação externa. Evite usar para calcular dados que poderiam ser derivados diretamente no render."
      angularBridge="É o mais próximo de ngOnInit, ngOnChanges e ngOnDestroy, mas com dependências explícitas no array final."
      focus="efeitos colaterais e cleanup"
      nextSlug="props-callbacks"
      code={String.raw`
import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
};

export function UserPreview({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadUser() {
      const response = await fetch('/api/users/' + userId, {
        signal: controller.signal,
      });
      const data = await response.json();
      setUser(data);
    }

    loadUser();

    return () => controller.abort();
  }, [userId]);

  return <strong>{user?.name ?? 'Carregando...'}</strong>;
}`}
    />
  );
}
