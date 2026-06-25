import { TopicLayout } from './TopicLayout';

export function ConditionalRenderingTopic() {
  return (
    <TopicLayout
      title="Renderização condicional"
      summary="No React, você usa JavaScript para decidir o que aparece na tela: ternário, &&, early return ou função auxiliar."
      whenToUse="Use para loading, erro, tela vazia, permissões, feature flag ou qualquer estado visual alternativo."
      angularBridge="Substitui *ngIf/@if e ng-template. A decisão fica dentro do JSX usando expressões JavaScript."
      focus="UI previsível para loading, erro e vazio"
      nextSlug="listas-map"
      code={String.raw`
type Status = 'loading' | 'error' | 'success';

export function OrderStatus({ status }: { status: Status }) {
  if (status === 'loading') {
    return <p>Buscando pedido...</p>;
  }

  if (status === 'error') {
    return <p>Não foi possível carregar o pedido.</p>;
  }

  return <p>Pedido carregado com sucesso.</p>;
}`}
    />
  );
}
