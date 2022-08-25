import classNames from 'classnames';
import { Duration } from 'date-fns';
import { FC, memo } from 'react';
import './ClassPeriodTimer.css';
import { DailySchedule } from '../config/BellSchedule';
import { isAfter, isBefore, getDateFromDuration } from '../helpers';
import { TimeRemaining } from './TimeRemaining';
import { useCurrentDate } from '../hooks/useCurrentDate';

export interface ClassPeriodTimerProps {
    className?: string;
    currentSchedule: DailySchedule;
}

export const ClassPeriodTimer: FC<ClassPeriodTimerProps> = memo(({ className, currentSchedule }) => {
    const currentDate = useCurrentDate();
    const currentPeriodIndex = currentSchedule.schedule.findIndex((period) => {
        return isAfter(currentDate, period.start) && isBefore(currentDate, period.end);
    });

    let targetTime: Duration | undefined = undefined;
    let message: string;

    if (currentPeriodIndex < 0) {
        if (isBefore(currentDate, currentSchedule.schedule[0].start)) {
            targetTime = currentSchedule.schedule[0].start;
            message = `Class starts in`;
        } else {
            message = `School's over! Go home!`;
        }
    } else {
        const currentPeriod = currentSchedule.schedule[currentPeriodIndex];
        if (currentPeriod.break && isBefore(currentDate, currentPeriod.break)) {
            targetTime = currentPeriod.break;
            message = `This is ${currentPeriod.name}. Time remaining:`;
        } else {
            targetTime = currentPeriod.end;
            if (currentPeriod.break) {
                const nextPeriod = currentSchedule.schedule[currentPeriodIndex + 1];
                message = `Class is over! Time until ${nextPeriod.name}:`;
            } else {
                message = `This is ${currentPeriod.name}. Time remaining:`;
            }
        }
    }

    return (
        <div className={classNames(className, 'class-period-timer')}>
            <div className="today-message">{`Today is a ${currentSchedule.name} day`}</div>
            <div className="period-message">{message}</div>
            <div className="time-remaining-container">{targetTime && <TimeRemaining endTime={getDateFromDuration(targetTime)} />}</div>
        </div>
    );
});
