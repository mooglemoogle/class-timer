import classNames from 'classnames';
import { Duration } from 'date-fns';
import { FC, memo } from 'react';
import './ClassPeriodTimer.css';
import { DailySchedule, DayType } from '../config/BellSchedule';
import { isAfter, isBefore, getDateFromDuration } from '../helpers';
import { TimeRemaining } from './TimeRemaining';
import { useCurrentDate } from '../hooks/useCurrentDate';
import { CalendarItem } from '../config/Calendar';

export interface ClassPeriodTimerProps {
    className?: string;
    currentSchedule: DailySchedule | undefined;
    dayType: DayType | undefined;
    dayItem: CalendarItem;
}

export const ClassPeriodTimer: FC<ClassPeriodTimerProps> = memo(({ className, currentSchedule, dayItem }) => {
    const currentDate = useCurrentDate();

    if (!currentSchedule) {
        return null;
    }

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
            message = `This is ${currentPeriod.name}`;
        } else {
            targetTime = currentPeriod.end;
            if (currentPeriod.break) {
                const nextPeriod = currentSchedule.schedule[currentPeriodIndex + 1];
                message = `Time until ${nextPeriod.name}:`;
            } else {
                message = `This is ${currentPeriod.name}`;
            }
        }
    }

    return (
        <div className={classNames(className, 'class-period-timer')}>
            <div className="today-message">{`Today is a ${currentSchedule.name} day`}</div>
            {dayItem.hn ? <div className="holiday-message">{`Observing ${dayItem.hn}`}</div> : null}
            <div className="period-message">{message}</div>
            <div className="time-remaining-container">
                {targetTime && (
                    <>
                        <div className="remaining-label">Time remaining</div>
                        <TimeRemaining endTime={getDateFromDuration(targetTime)} />
                    </>
                )}
            </div>
        </div>
    );
});
