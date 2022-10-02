import classNames from 'classnames';
import { addSeconds, Duration } from 'date-fns';
import { FC, useMemo, memo, useContext } from 'react';
import './ClassPeriodTimer.css';
import { ClassPeriod, DailySchedule, DayType } from '../config/BellSchedule';
import { isAfter, isBefore, getDateFromDuration } from '../helpers';
import { TimeRemaining } from './TimeRemaining';
import { useCurrentDate } from '../hooks/useCurrentDate';
import { CalendarItem } from '../config/Calendar';
import { AppContext } from '../AppContext';

export interface ClassPeriodTimerProps {
    className?: string;
    currentSchedule: DailySchedule | undefined;
    dayType: DayType | undefined;
    dayItem: CalendarItem;
}

export const ClassPeriodTimer: FC<ClassPeriodTimerProps> = memo(({ className, currentSchedule, dayItem }) => {
    const { bellDelay } = useContext(AppContext);
    const currentDate = useCurrentDate();

    const delayedSchedule = useMemo(() => {
        if (currentSchedule) {
            return currentSchedule.schedule.map((period) => {
                const delayedPeriod: ClassPeriod = {
                    ...period,
                    start: {
                        ...period.start,
                        seconds: (period.start.seconds || 0) + bellDelay,
                    },
                    end: {
                        ...period.end,
                        seconds: (period.end.seconds || 0) + bellDelay,
                    },
                };
                if (period.break) {
                    delayedPeriod.break = {
                        ...period.break,
                        seconds: (period.break.seconds || 0) + bellDelay,
                    };
                }
                return delayedPeriod;
            });
        } else {
            return [] as ClassPeriod[];
        }
    }, [currentSchedule, bellDelay]);

    if (!currentSchedule) {
        return null;
    }

    const currentPeriodIndex = delayedSchedule.findIndex((period) => {
        return isAfter(currentDate, period.start) && isBefore(currentDate, period.end);
    });

    let targetTime: Duration | undefined = undefined;
    let message: string;

    if (currentPeriodIndex < 0) {
        if (delayedSchedule.length === 0) {
            message = `No school today!`;
        } else if (isBefore(currentDate, delayedSchedule[0].start)) {
            targetTime = delayedSchedule[0].start;
            message = `Class starts soon`;
        } else {
            message = `School's over! Go home!`;
        }
    } else {
        const currentPeriod = delayedSchedule[currentPeriodIndex];
        if (currentPeriod.break && isBefore(currentDate, currentPeriod.break)) {
            targetTime = currentPeriod.break;
            message = `This is ${currentPeriod.name}`;
        } else {
            targetTime = currentPeriod.end;
            if (currentPeriod.break) {
                const nextPeriod = delayedSchedule[currentPeriodIndex + 1];
                message = `${nextPeriod.name} coming up`;
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
