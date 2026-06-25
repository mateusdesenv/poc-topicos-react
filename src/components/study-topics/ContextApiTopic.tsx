import { TopicLayout } from './TopicLayout';

export function ContextApiTopic() {
  return (
    <TopicLayout
      title="Context API"
      summary="Context permite compartilhar dados com uma árvore de componentes sem passar props manualmente em todos os níveis."
      whenToUse="Use para dados transversais e relativamente estáveis: usuário logado, tema, idioma, permissões. Evite para qualquer estado que muda o tempo todo."
      angularBridge="Lembra um service singleton consumido por várias partes da aplicação, mas com Provider envolvendo a árvore React."
      focus="estado compartilhado sem prop drilling"
      nextSlug="estado-local-global"
      code={String.raw`
import { createContext, useContext } from 'react';

type AuthUser = {
  id: string;
  name: string;
};

const AuthContext = createContext<AuthUser | null>(null);

export function useAuth() {
  const user = useContext(AuthContext);

  if (!user) {
    throw new Error('useAuth deve ser usado dentro de AuthContext.Provider');
  }

  return user;
}

export function Header() {
  const user = useAuth();
  return <span>Olá, {user.name}</span>;
}`}
    />
  );
}
