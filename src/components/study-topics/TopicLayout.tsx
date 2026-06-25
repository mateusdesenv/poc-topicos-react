import { Link } from 'react-router-dom';
import { CodeBlock } from '../CodeBlock';

export type TopicLayoutProps = {
  title: string;
  summary: string;
  whenToUse: string;
  angularBridge: string;
  focus: string;
  code: string;
  nextSlug: string;
};

export function TopicLayout({
  title,
  summary,
  whenToUse,
  angularBridge,
  focus,
  code,
  nextSlug,
}: TopicLayoutProps) {
  return (
    <article className="topic-card">
      <header className="topic-header">
        <span className="eyebrow">Prioridade React</span>
        <h1>{title}</h1>
        <p>{summary}</p>
      </header>

      <section className="concept-grid">
        <div className="concept-box">
          <h2>Quando usar</h2>
          <p>{whenToUse}</p>
        </div>

        <div className="concept-box">
          <h2>Equivalente mental no Angular</h2>
          <p>{angularBridge}</p>
        </div>
      </section>

      <section className="code-section">
        <div className="section-title">
          <h2>Código limpo</h2>
          <p>Exemplo pequeno, explícito e fácil de revisar em entrevista.</p>
        </div>
        <CodeBlock code={code} />
      </section>

      <footer className="topic-footer">
        <span>Foco: {focus}</span>
        <Link to={`/topics/${nextSlug}`}>Próximo tópico</Link>
      </footer>
    </article>
  );
}
