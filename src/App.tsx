import { FC, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { getDate } from './helpers';
import { useInterval } from './hooks/useInterval';

import { DailySchedule, Schedules } from './config/BellSchedule';
import { Body } from './components/Body';

const App: FC = () => {
    const [currentSchedule, setCurrentSchedule] = useState<DailySchedule>(Schedules[0]);

    return (
        <div
            className="app-container"
            style={{
                background: `radial-gradient(at 100vw 100vh, transparent 70%, ${currentSchedule.color})`,
            }}
        >
            <Header schedules={Schedules} currentSchedule={currentSchedule.name} setSchedule={setCurrentSchedule} />
            <Body currentSchedule={currentSchedule} />
        </div>
    );
};

export default App;
