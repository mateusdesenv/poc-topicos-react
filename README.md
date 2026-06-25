# React Study POC

POC em React + TypeScript + Vite para estudar a transição Angular → React.

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

## Estrutura principal

```txt
src/
  components/
    CodeBlock.tsx
    Sidebar.tsx
    study-topics/
      TopicLayout.tsx
      UseStateTopic.tsx
      UseEffectTopic.tsx
      PropsCallbacksTopic.tsx
      ConditionalRenderingTopic.tsx
      ListMapTopic.tsx
      ControlledFormsTopic.tsx
      ApiConsumptionTopic.tsx
      ReactRouterTopic.tsx
      ContextApiTopic.tsx
      LocalVsGlobalStateTopic.tsx
      index.ts
  App.tsx
  main.tsx
  styles.css
```

## Ideia da componentização

- `App.tsx` monta o shell da aplicação e declara as rotas.
- `Sidebar.tsx` recebe a lista de rotas e renderiza o menu lateral.
- `components/study-topics/index.ts` centraliza o registro dos 10 tópicos.
- Cada item do menu possui um componente próprio dentro de `components/study-topics`.
- `TopicLayout.tsx` é o componente reutilizável que padroniza a tela dos tópicos.
- Os componentes de tópico carregam apenas o conteúdo específico: título, explicação, comparação com Angular e exemplo de código.

Esse padrão separa navegação, layout reutilizável e conteúdo específico, que é uma forma limpa de enxergar componentização em React.
