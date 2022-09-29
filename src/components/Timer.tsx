import classNames from 'classnames';
import { addSeconds, intervalToDuration, isBefore } from 'date-fns';
import { ChangeEvent, FC, memo, useRef, useMemo, useCallback } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
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
    const timesUp = item.targetTime && !item.pausedAt && isBefore(item.targetTime, currentDate);

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

    const playPause = useCallback(() => {
        if (item.targetTime && item.pausedAt) {
            const dif = currentDateRef.current.getTime() - item.pausedAt.getTime();
            const updatedTarget = new Date(item.targetTime?.getTime() + dif);
            updatedTarget.setMilliseconds(0);
            const newTimer: TimerItem = {
                id: item.id,
                targetTime: updatedTarget,
                name: item.name,
            };
            updateTimer(newTimer);
        } else if (item.targetTime && !item.pausedAt) {
            const currentTimeLeft = intervalToDuration({
                start: currentDateRef.current,
                end: item.targetTime,
            });
            updateTimer({
                ...item,
                pausedAt: currentDateRef.current,
                timeLeftAtPause: currentTimeLeft,
            });
        }
    }, [updateTimer, item]);

    return (
        <div className={classNames(className, 'timer-container', timesUp && 'time-up')}>
            <div className="timer-name">
                <input type="text" value={item.name} onChange={updateTitle} />
            </div>
            {item.targetTime ? (
                timesUp ? (
                    <div className="time-up-message">Time's up!</div>
                ) : (
                    <TimeRemaining endTime={item.targetTime} staticTime={item.timeLeftAtPause} />
                )
            ) : null}
            <div className="buttons">
                <ButtonGroup variant="outlined">
                    <Button onClick={addTimeFuncs[600]}>+10m</Button>
                    <Button onClick={addTimeFuncs[300]}>+5m</Button>
                    <Button onClick={addTimeFuncs[120]}>+2m</Button>
                    <Button onClick={addTimeFuncs[60]}>+1m</Button>
                    <Button onClick={addTimeFuncs[30]}>+30s</Button>
                </ButtonGroup>
            </div>
            <Fab
                sx={{
                    position: 'absolute',
                    top: '-15px',
                    right: '-15px',
                }}
                onClick={remove}
                size="small"
            >
                <DeleteIcon />
            </Fab>
            {item.targetTime && !timesUp && (
                <Fab
                    sx={{
                        position: 'absolute',
                        top: '30px',
                        right: '-15px',
                    }}
                    onClick={playPause}
                    size="small"
                >
                    {item.pausedAt ? <PlayArrowIcon /> : <PauseIcon />}
                </Fab>
            )}
        </div>
    );
});
