import { FC, useCallback, useLayoutEffect, useState, useRef, memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Body.css';

import { DailySchedule, DayType } from '../config/BellSchedule';
import { ClassPeriodTimer } from './ClassPeriodTimer';
import { Timer } from './Timer';
import { useCurrentDate } from '../hooks/useCurrentDate';

interface TimerItem {
    targetTime: Date;
    id: string;
}

export interface BodyProps {
    currentSchedule: DailySchedule | undefined;
    dayType: DayType | undefined;
}

export const Body: FC<BodyProps> = memo(({ currentSchedule, dayType }) => {
    const currentDate = useCurrentDate();
    const currentDateRef = useRef(currentDate);
    currentDateRef.current = currentDate;
    const [bigSizeRatio, setBigSizeRatio] = useState(1);
    const [smallSizeRatio, setSmallSizeRatio] = useState(1);
    const [timers, setTimers] = useState<TimerItem[]>([]);

    useLayoutEffect(() => {
        const updateSizeRatio = () => {
            const body = document.getElementsByClassName('body')[0];
            if (body) {
                const { height } = body.getBoundingClientRect();
                setBigSizeRatio(height / 400);
                setSmallSizeRatio((height / 400) * 0.3);
            }
        };
        updateSizeRatio();
        window.addEventListener('resize', updateSizeRatio);
        return () => {
            window.removeEventListener('resize', updateSizeRatio);
        };
    }, [setBigSizeRatio, setSmallSizeRatio]);

    const removeTimer = useCallback(
        (idToRemove: string) => {
            setTimers(timers.filter(({ id }) => id !== idToRemove));
        },
        [timers, setTimers]
    );
    const updateTimer = useCallback(
        (id: string, newTimer: Date) => {
            setTimers(
                timers.map((timer) => {
                    if (timer.id === id) {
                        timer.targetTime = newTimer;
                    }
                    return timer;
                })
            );
        },
        [timers, setTimers]
    );
    const addTimer = useCallback(() => {
        const newTimer = new Date(currentDateRef.current.getTime());
        newTimer.setMilliseconds(0);
        setTimers([
            ...timers,
            {
                targetTime: newTimer,
                id: uuidv4(),
            },
        ]);
    }, [setTimers, timers]);

    const classTimerStyle = timers.length
        ? {
              transformOrigin: 'bottom left',
              transform: `scale(${smallSizeRatio})`,
              left: '10px',
              bottom: '10px',
              border: '3px solid darkgray',
          }
        : {
              transformOrigin: 'bottom',
              transform: `scale(${bigSizeRatio})`,
              bottom: '0',
              left: 'calc(50% - 250px)',
              border: 'none',
          };

    return (
        <div className="body">
            {timers.length ? (
                <div className="timers">
                    {timers.map(({ id, targetTime }) => (
                        <Timer id={id} targetTime={targetTime} removeTimer={removeTimer} key={id} updateTargetTime={updateTimer} />
                    ))}
                </div>
            ) : null}
            <div className="class-period-container" style={classTimerStyle}>
                <ClassPeriodTimer currentSchedule={currentSchedule} dayType={dayType} />
            </div>
            <button className="add-timer-button" onClick={addTimer}>
                +
            </button>
        </div>
    );
});
