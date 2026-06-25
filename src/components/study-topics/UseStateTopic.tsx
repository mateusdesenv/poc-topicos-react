import { TopicLayout } from './TopicLayout';

export function UseStateTopic() {
  return (
    <TopicLayout
      title="useState"
      summary="Hook usado para estado local do componente. Sempre que o estado muda, o React recalcula a UI daquele componente."
      whenToUse="Use para dados que pertencem à tela atual: campo de formulário, aba selecionada, modal aberto, contador ou filtro local."
      angularBridge="Pense como uma propriedade do componente Angular que reflete no template. A diferença é que no React você altera usando a função setter."
      focus="estado local e atualização imutável"
      nextSlug="use-effect"
      code={String.raw`
import { useState } from 'react';

type CounterProps = {
  initialValue?: number;
};

export function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((currentCount) => currentCount + 1);
  };

  return (
    <button type="button" onClick={increment}>
      Cliques: {count}
    </button>
  );
}`}
    />
  );
}
