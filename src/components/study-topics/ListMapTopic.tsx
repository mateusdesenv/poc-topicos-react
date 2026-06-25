import { TopicLayout } from './TopicLayout';

export function ListMapTopic() {
  return (
    <TopicLayout
      title="Listas com map()"
      summary="React renderiza listas usando map(). Cada item precisa de uma key estável para o algoritmo de reconciliação."
      whenToUse="Use sempre que uma coleção vira componentes na tela: cards, linhas de tabela, menus, filtros ou notificações."
      angularBridge="Equivale ao *ngFor/@for. A key do React cumpre papel parecido com trackBy: ajuda a preservar identidade dos elementos."
      focus="listas performáticas com key correta"
      nextSlug="formularios-controlados"
      code={String.raw`
type MenuItem = {
  id: string;
  label: string;
};

export function MenuList({ items }: { items: MenuItem[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.label}</li>
      ))}
    </ul>
  );
}`}
    />
  );
}
