import { useState } from 'react';
import Calendar from './components/Calendar';
import DayTimeline from './components/DayTimeline';
import ProjectView from './components/ProjectView';
import './App.css';
import './index.css';

// Defines view type
type ViewType = 'calendar' | 'timeline' | 'project';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('calendar');

  const renderView = () => {
    switch (currentView) {
      case 'calendar':
        return <Calendar />;
      case 'timeline':
        return <DayTimeline date={new Date().toISOString()} />;
      case 'project':
        return <ProjectView />;
      default:
        return <Calendar />;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Life-Sync Planner</h1>
        <nav className="view-switcher">
          <button onClick={() => setCurrentView('calendar')} className={currentView === 'calendar' ? 'active' : ''}>
            Calendar
          </button>
          <button onClick={() => setCurrentView('timeline')} className={currentView === 'timeline' ? 'active' : ''}>
            Timeline
          </button>
          <button onClick={() => setCurrentView('project')} className={currentView === 'project' ? 'active' : ''}>
            Project
          </button>
        </nav>
      </header>
      <main className="app-main">
        {renderView()}
      </main>
    </div>
  );
}

export default App;