import classNames from 'classnames';
import { addSeconds, isBefore } from 'date-fns';
import { ChangeEvent, FC, useState, memo, useRef, useMemo } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useCurrentDate } from '../hooks/useCurrentDate';
import './Timer.css';
import { TimeRemaining } from './TimeRemaining';
import { TimerItem } from './Body';

export interface TimerProps {
    className?: string;
    item: TimerItem;
    updateTimer: (item: TimerItem) => void;
    removeTimer: (id: string) => void;
}

export const Timer: FC<TimerProps> = memo(({ className, item, updateTimer, removeTimer }) => {
    const currentDate = useCurrentDate();
    const currentDateRef = useRef(currentDate);
    currentDateRef.current = currentDate;
    const updateTitle = (event: ChangeEvent<HTMLInputElement>) => {
        updateTimer({
            ...item,
            name: event.currentTarget.value,
        });
    };

    const addTimeFuncs = useMemo(() => {
        return [30, 60, 120, 300, 600].reduce((acc, time) => {
            acc[time] = () => {
                if (!item.targetTime || isBefore(item.targetTime, currentDateRef.current)) {
                    const newTargetTime = addSeconds(currentDateRef.current, time);
                    newTargetTime.setMilliseconds(0);
                    updateTimer({
                        ...item,
                        targetTime: newTargetTime,
                    });
                } else {
                    const newTargetTime = addSeconds(item.targetTime, time);
                    updateTimer({
                        ...item,
                        targetTime: newTargetTime,
                    });
                }
            };
            return acc;
        }, {} as Record<number, () => void>);
    }, [item, updateTimer]);
    const remove = () => removeTimer(item.id);
    return (
        <div className={classNames(className, 'timer-container')}>
            <div className="timer-name">
                <input type="text" value={item.name} onChange={updateTitle} />
            </div>
            {item.targetTime ? <TimeRemaining endTime={item.targetTime} /> : null}
            <div className="buttons">
                <ButtonGroup variant="outlined">
                    <Button onClick={addTimeFuncs[600]}>+10m</Button>
                    <Button onClick={addTimeFuncs[300]}>+5m</Button>
                    <Button onClick={addTimeFuncs[120]}>+2m</Button>
                    <Button onClick={addTimeFuncs[60]}>+1m</Button>
                    <Button onClick={addTimeFuncs[30]}>+30s</Button>
                </ButtonGroup>
            </div>
            <button className="remove-button" onClick={remove}>
                X
            </button>
        </div>
    );
});
