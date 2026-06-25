import { TopicLayout } from './TopicLayout';

export function ControlledFormsTopic() {
  return (
    <TopicLayout
      title="Formulários controlados"
      summary="Campo controlado é aquele em que o valor exibido vem do state e toda alteração passa por onChange."
      whenToUse="Use quando precisa validar, formatar, habilitar botão, montar payload ou reagir ao que o usuário digita."
      angularBridge="Lembra Reactive Forms ou ngModel, mas sem uma API oficial acoplada ao framework. O padrão base é value + onChange."
      focus="input previsível e payload limpo"
      nextSlug="consumo-api"
      code={String.raw`
import { FormEvent, useState } from 'react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const canSubmit = email.includes('@');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log({ email });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="seu@email.com"
      />

      <button type="submit" disabled={!canSubmit}>
        Entrar
      </button>
    </form>
  );
}`}
    />
  );
}
