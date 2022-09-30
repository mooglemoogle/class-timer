import { FC, useCallback, useLayoutEffect, useState, useRef, memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './Body.css';

import { DailySchedule, DayType } from '../config/BellSchedule';
import { ClassPeriodTimer } from './ClassPeriodTimer';
import { Timer } from './Timer';
import { useCurrentDate } from '../hooks/useCurrentDate';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { CalendarItem } from '../config/Calendar';
import { useToggle } from '../hooks/useToggle';
import { Drawer } from '@mui/material';
import { CalendarView } from './CalendarView';

export interface TimerItem {
    targetTime?: Date;
    pausedAt?: Date;
    timeLeftAtPause?: Duration;
    name: string;
    id: string;
}

export interface BodyProps {
    currentSchedule: DailySchedule | undefined;
    dayType: DayType | undefined;
    dayItem: CalendarItem;
}

const serializeTimers = (timers: TimerItem[]) => {
    return JSON.stringify(timers);
};

const deserializeTimers = (val: string) => {
    const initial = JSON.parse(val);
    return initial.map((item: any) => {
        const toReturn = {
            ...item,
        } as TimerItem;
        if (item.targetTime) {
            toReturn.targetTime = new Date(item.targetTime);
        }
        if (item.pausedAt) {
            toReturn.pausedAt = new Date(item.pausedAt);
        }
        return toReturn;
    });
};

export const Body: FC<BodyProps> = memo(({ currentSchedule, dayType, dayItem }) => {
    const currentDate = useCurrentDate();
    const currentDateRef = useRef(currentDate);
    currentDateRef.current = currentDate;
    const [bigSizeRatio, setBigSizeRatio] = useState(1);
    const [smallSizeRatio, setSmallSizeRatio] = useState(1);
    const [timers, setTimers] = useLocalStorage<TimerItem[]>('timers', [], serializeTimers, deserializeTimers);
    const [showCalendar, toggleShowCalendar] = useToggle(false);

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
        (item: TimerItem) => {
            setTimers(
                timers.map((timer) => {
                    if (timer.id === item.id) {
                        return item;
                    }
                    return timer;
                })
            );
        },
        [timers, setTimers]
    );
    const addTimer = useCallback(() => {
        setTimers([
            ...timers,
            {
                id: uuidv4(),
                name: 'New Timer',
            },
        ]);
    }, [setTimers, timers]);

    const classTimerStyle = timers.length
        ? {
              transformOrigin: 'bottom left',
              transform: `scale(${smallSizeRatio})`,
              left: '10px',
              bottom: '10px',
              borderRadius: '10px',
              boxShadow: '0px 0px 10px 0px #888',
          }
        : {
              transformOrigin: 'bottom',
              transform: `scale(${bigSizeRatio})`,
              bottom: '0',
              left: 'calc(50% - 250px)',
              boxShadow: 'none',
          };

    return (
        <div className="body">
            {timers.length ? (
                <div className="timers">
                    {timers.map((item) => (
                        <Timer item={item} removeTimer={removeTimer} key={item.id} updateTimer={updateTimer} />
                    ))}
                </div>
            ) : null}
            <div className="class-period-container" style={classTimerStyle}>
                <ClassPeriodTimer currentSchedule={currentSchedule} dayType={dayType} dayItem={dayItem} />
            </div>
            <Fab
                sx={{
                    position: 'absolute',
                    right: '5px',
                    top: '5px',
                }}
                onClick={addTimer}
                size="small"
                color="secondary"
            >
                <AddIcon />
            </Fab>
            <Fab
                sx={{
                    position: 'absolute',
                    right: '5px',
                    top: '50px',
                }}
                onClick={toggleShowCalendar}
                size="small"
                color="secondary"
            >
                <CalendarMonthIcon />
            </Fab>
            <Drawer open={showCalendar} onClose={toggleShowCalendar} anchor="right">
                <CalendarView />
            </Drawer>
        </div>
    );
});
