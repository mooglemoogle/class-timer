import { FC, useEffect, useMemo } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { useSchedule } from './hooks/useSchedule';
import { useLocalStorage } from './hooks/useLocalStorage';
import { AppContext, AppContextValue } from './AppContext';
import { DayType } from './config/BellSchedule';
import { resetDemoStartTime, resetUseDemoStartTime } from './helpers';

const App: FC = () => {
    const [demoStartTime, setDemoStartTime] = useLocalStorage<number>('demoStartTime', Date.now());
    const [useDemoStartTime, setUseDemoStartTime] = useLocalStorage<boolean>('useDemoStartTime', false);
    const [bellDelay, setBellDelay] = useLocalStorage<number>('bellDelay', 26);
    const [useOverrideSchedule, setUseOverrideSchedule] = useLocalStorage<boolean>('useOverrideSchedule', false);
    const [overrideSchedule, setOverrideSchedule] = useLocalStorage<DayType | undefined>('overrideSchedule', undefined);
    const [overrideUntil, setOverrideUntil] = useLocalStorage<number>('overrideUntil', 0);

    useEffect(() => resetDemoStartTime(), [demoStartTime]);
    useEffect(() => resetUseDemoStartTime(), [useDemoStartTime]);

    const contextValue: AppContextValue = useMemo(
        () => ({
            demoStartTime,
            setDemoStartTime,
            useDemoStartTime,
            setUseDemoStartTime,
            bellDelay,
            setBellDelay,
            useOverrideSchedule,
            setUseOverrideSchedule,
            overrideSchedule,
            setOverrideSchedule,
            overrideUntil,
            setOverrideUntil,
        }),
        [demoStartTime, useDemoStartTime, bellDelay, useOverrideSchedule, overrideSchedule, overrideUntil]
    );

    const { effectiveSchedule, dayType, dayItem } = useSchedule(useOverrideSchedule, overrideSchedule, overrideUntil);
    return (
        <AppContext.Provider value={contextValue}>
            <div
                className="app-container"
                style={{
                    background: `radial-gradient(at 100vw 100vh, transparent 70%, ${effectiveSchedule?.color || 'transparent'})`,
                }}
            >
                <Header />
                <Body currentSchedule={effectiveSchedule} dayType={dayType} dayItem={dayItem} />
            </div>
        </AppContext.Provider>
    );
};

export default App;
