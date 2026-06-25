import { TopicLayout } from './TopicLayout';

export function LocalVsGlobalStateTopic() {
  return (
    <TopicLayout
      title="State local vs global"
      summary="Nem todo estado merece ir para uma store global. Estado local é mais simples, previsível e barato de manter."
      whenToUse="Mantenha local quando só um componente ou uma pequena subárvore usa. Eleve para global quando múltiplas áreas independentes precisam ler ou alterar o mesmo dado."
      angularBridge="É a mesma decisão entre propriedade local do componente, service compartilhado, NgRx ou outro gerenciador de estado."
      focus="arquitetura pragmática de estado"
      nextSlug="use-state"
      code={String.raw`
type CartItem = {
  id: string;
  quantity: number;
};

function getTotalItems(items: CartItem[]) {
  return items.reduce((total, item) => total + item.quantity, 0);
}

export function CartSummary({ items }: { items: CartItem[] }) {
  const totalItems = getTotalItems(items);

  return (
    <section>
      <strong>{totalItems}</strong>
      <span> itens no carrinho</span>
    </section>
  );
}

// Regra prática:
// - Estado de input/modal/filtro: local.
// - Usuário logado/carrinho/permissões: compartilhado/global.`}
    />
  );
}
