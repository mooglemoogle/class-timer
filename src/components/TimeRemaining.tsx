import { intervalToDuration, isBefore } from 'date-fns';
import { FC, memo } from 'react';
import classnames from 'classnames';
import './TimeRemaining.css';
import { useCurrentDate } from '../hooks/useCurrentDate';

interface TimePartProps {
    className?: string;
    value: number;
    label: string;
}

const TimePart: FC<TimePartProps> = ({ className, value, label }) => {
    return (
        <div className={classnames('time-part', className)}>
            <div className={'value'}>{value}</div>
            <div className={'label'}>{label}</div>
        </div>
    );
};

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
    const showMinutes = showHours || (remaining.minutes && remaining.minutes > 0);
    const showSeconds = showHours || showMinutes || (remaining.seconds && remaining.seconds > 0);

    return (
        <div className={classnames('remaining-container', className)}>
            {showHours ? <TimePart value={remaining.hours || 0} label={remaining.hours === 1 ? 'hour,' : 'hours,'} /> : null}
            {showMinutes ? <TimePart value={remaining.minutes || 0} label={remaining.minutes === 1 ? 'minute,' : 'minutes,'} /> : null}
            {showSeconds ? <TimePart value={remaining.seconds || 0} label={remaining.seconds === 1 ? 'second' : 'seconds'} /> : null}
        </div>
    );
});
