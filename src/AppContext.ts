import { createContext } from 'react';
import { DayType } from './config/BellSchedule';

export interface AppContextValue {
    useDemoStartTime: boolean;
    setUseDemoStartTime: (v: boolean) => void;
    demoStartTime: number;
    setDemoStartTime: (v: number) => void;
    bellDelay: number;
    setBellDelay: (v: number) => void;
    useOverrideSchedule: boolean;
    setUseOverrideSchedule: (v: boolean) => void;
    overrideSchedule?: DayType;
    setOverrideSchedule: (v: DayType) => void;
    overrideUntil?: number;
    setOverrideUntil: (v: number) => void;
}

export const AppContext = createContext<AppContextValue>({
    useDemoStartTime: false,
    setUseDemoStartTime: () => {},
    demoStartTime: 0,
    setDemoStartTime: () => {},
    bellDelay: 0,
    setBellDelay: () => {},
    useOverrideSchedule: false,
    setUseOverrideSchedule: () => {},
    overrideSchedule: undefined,
    setOverrideSchedule: () => {},
    overrideUntil: 0,
    setOverrideUntil: () => {},
});
