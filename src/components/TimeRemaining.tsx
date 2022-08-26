import { intervalToDuration, isBefore } from 'date-fns';
import { FC, memo } from 'react';
import classnames from 'classnames';
import './TimeRemaining.css';
import { useCurrentDate } from '../hooks/useCurrentDate';
import { getTwoDigitNumber } from '../helpers';

export interface TimeRemainingProps {
    className?: string;
    endTime: Date;
}

export const TimeRemaining: FC<TimeRemainingProps> = memo(({ className, endTime }) => {
    const currentDate = useCurrentDate();
    if (isBefore(endTime, currentDate)) {
        return <div className={classnames('remaining-container', 'time-up', className)}>Time's up!</div>;
    }
    const remaining = intervalToDuration({
        start: currentDate,
        end: endTime,
    });

    const showHours = remaining.hours && remaining.hours > 0;

    return (
        <div className={classnames('remaining-container', className)}>
            {showHours ? <div className="time-part">{`${remaining.hours} :`}</div> : null}
            <div className="time-part">{`${getTwoDigitNumber(remaining.minutes || 0)} :`}</div>
            <div className="time-part">{`${getTwoDigitNumber(remaining.seconds || 0)}`}</div>
        </div>
    );
});
