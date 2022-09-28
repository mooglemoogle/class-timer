import { FC } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { useSchedule } from './hooks/useSchedule';

const App: FC = () => {
    const { effectiveSchedule, overrideSchedule, dayType } = useSchedule();
    return (
        <div
            className="app-container"
            style={{
                background: `radial-gradient(at 100vw 100vh, transparent 70%, ${effectiveSchedule?.color || 'transparent'})`,
            }}
        >
            <Header currentSchedule={effectiveSchedule} overrideSchedule={overrideSchedule} />
            <Body currentSchedule={effectiveSchedule} dayType={dayType} />
        </div>
    );
};

export default App;
