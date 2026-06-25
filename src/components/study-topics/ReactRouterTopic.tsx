import { TopicLayout } from './TopicLayout';

export function ReactRouterTopic() {
  return (
    <TopicLayout
      title="React Router"
      summary="React não traz roteamento oficial. React Router é uma biblioteca comum para mapear URLs para componentes."
      whenToUse="Use quando a aplicação precisa de navegação SPA com páginas, parâmetros de rota, links ativos e redirecionamentos."
      angularBridge="Equivale ao Angular Router, mas instalado como dependência do ecossistema React."
      focus="rotas declarativas e navegação SPA"
      nextSlug="context-api"
      code={String.raw`
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function AppRoutes() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/settings">Configurações</Link>
      </nav>

      <Routes>
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/settings" element={<h1>Configurações</h1>} />
      </Routes>
    </BrowserRouter>
  );
}`}
    />
  );
}
