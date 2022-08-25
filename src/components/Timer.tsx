import classNames from 'classnames';
import { addSeconds, isBefore } from 'date-fns';
import { ChangeEvent, FC, useState, memo, useRef, useMemo } from 'react';
import { useCurrentDate } from '../hooks/useCurrentDate';
import './Timer.css';
import { TimeRemaining } from './TimeRemaining';

export interface TimerProps {
    className?: string;
    targetTime: Date;
    id: string;
    updateTargetTime: (id: string, newTargetTime: Date) => void;
    removeTimer: (id: string) => void;
}

export const Timer: FC<TimerProps> = memo(({ className, targetTime, id, updateTargetTime, removeTimer }) => {
    const currentDate = useCurrentDate();
    const currentDateRef = useRef(currentDate);
    currentDateRef.current = currentDate;
    const [started, setStarted] = useState(false);
    const [title, setTitle] = useState('New Timer');
    const updateTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    };

    const addTimeFuncs = useMemo(() => {
        return [30, 60, 120, 300, 600].reduce((acc, time) => {
            acc[time] = () => {
                if (!started || isBefore(targetTime, currentDateRef.current)) {
                    setStarted(true);
                    const newTargetTime = addSeconds(currentDateRef.current, time);
                    newTargetTime.setMilliseconds(0);
                    updateTargetTime(id, newTargetTime);
                } else {
                    const newTargetTime = addSeconds(targetTime, time);
                    updateTargetTime(id, newTargetTime);
                }
            };
            return acc;
        }, {} as Record<number, () => void>);
    }, [id, started, targetTime, setStarted, updateTargetTime]);
    const remove = () => removeTimer(id);
    return (
        <div className={classNames(className, 'timer-container')}>
            <div className="timer-name">
                <input type="text" value={title} onChange={updateTitle} />
            </div>
            {started ? <TimeRemaining endTime={targetTime} /> : null}
            <div className="buttons">
                <button onClick={addTimeFuncs[600]}>+10m</button>
                <button onClick={addTimeFuncs[300]}>+5m</button>
                <button onClick={addTimeFuncs[120]}>+2m</button>
                <button onClick={addTimeFuncs[60]}>+1m</button>
                <button onClick={addTimeFuncs[30]}>+30s</button>
            </div>
            <button className="remove-button" onClick={remove}>
                X
            </button>
        </div>
    );
});
