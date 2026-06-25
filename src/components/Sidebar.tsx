import { NavLink } from 'react-router-dom';
import type { TopicRoute } from './study-topics';

type SidebarProps = {
  topics: TopicRoute[];
};

export function Sidebar({ topics }: SidebarProps) {
  return (
    <aside className="sidebar" aria-label="Menu de estudos React">
      <div className="brand">
        <span className="brand-mark">R</span>
        <div>
          <strong>React POC</strong>
          <small>Angular → React</small>
        </div>
      </div>

      <nav className="nav-list">
        {topics.map((topic, index) => (
          <NavLink
            key={topic.slug}
            to={`/topics/${topic.slug}`}
            className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
          >
            <span className="nav-index">{String(index + 1).padStart(2, '0')}</span>
            <span>{topic.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
