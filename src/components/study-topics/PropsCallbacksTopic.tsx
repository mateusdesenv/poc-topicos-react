import { TopicLayout } from './TopicLayout';

export function PropsCallbacksTopic() {
  return (
    <TopicLayout
      title="Props e callbacks"
      summary="Props levam dados do componente pai para o filho. Callbacks permitem o filho avisar o pai sobre uma ação."
      whenToUse="Use para comunicação simples entre componentes. Mantenha o estado no ancestral comum quando vários filhos precisam reagir ao mesmo dado."
      angularBridge="Props equivalem a @Input. Callback passado por props equivale a @Output com EventEmitter."
      focus="componentização e fluxo unidirecional"
      nextSlug="renderizacao-condicional"
      code={String.raw`
type Product = {
  id: string;
  name: string;
  price: number;
};

type ProductCardProps = {
  product: Product;
  onAddToCart: (productId: string) => void;
};

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <article>
      <h3>{product.name}</h3>
      <p>R$ {product.price.toFixed(2)}</p>

      <button type="button" onClick={() => onAddToCart(product.id)}>
        Adicionar ao carrinho
      </button>
    </article>
  );
}`}
    />
  );
}
