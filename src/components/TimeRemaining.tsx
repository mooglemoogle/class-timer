import { intervalToDuration } from 'date-fns';
import { FC, memo } from 'react';
import './TimeRemaining.css';
import { useCurrentDate } from '../hooks/useCurrentDate';
import { getTwoDigitNumber } from '../helpers';
import classNames from 'classnames';

export interface TimeRemainingProps {
    className?: string;
    endTime: Date;
    staticTime?: Duration;
}

export const TimeRemaining: FC<TimeRemainingProps> = memo(({ className, endTime, staticTime }) => {
    const currentDate = useCurrentDate();
    const remaining = staticTime
        ? staticTime
        : intervalToDuration({
              start: currentDate,
              end: endTime,
          });

    const showHours = remaining.hours && remaining.hours > 0;

    return (
        <div className={classNames(className, 'remaining-container')}>
            {staticTime && <div className="pause-message">Paused</div>}
            <div className={'remaining-parts'}>
                {showHours ? <div className="time-part">{`${remaining.hours} :`}</div> : null}
                <div className="time-part">{`${getTwoDigitNumber(remaining.minutes || 0)} :`}</div>
                <div className="time-part">{`${getTwoDigitNumber(remaining.seconds || 0)}`}</div>
            </div>
        </div>
    );
});
