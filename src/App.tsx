import { Navigate, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { topicRoutes } from './components/study-topics';

const firstTopicSlug = topicRoutes[0]?.slug ?? 'use-state';

export default function App() {
  return (
    <main className="app-shell">
      <Sidebar topics={topicRoutes} />

      <section className="content-panel">
        <Routes>
          <Route path="/" element={<Navigate to={`/topics/${firstTopicSlug}`} replace />} />

          {topicRoutes.map(({ slug, Component }) => (
            <Route key={slug} path={`/topics/${slug}`} element={<Component />} />
          ))}

          <Route path="*" element={<Navigate to={`/topics/${firstTopicSlug}`} replace />} />
        </Routes>
      </section>
    </main>
  );
}
