import { FC, useCallback, ChangeEventHandler, memo } from 'react';
import './Header.css';
import { getTodayMessage, getTime, getWeekday } from '../helpers';
import { DailySchedule, DayType } from '../config/BellSchedule';
import { useCurrentDate } from '../hooks/useCurrentDate';

export interface HeaderProps {
    schedules: DailySchedule[];
    currentSchedule: DayType;
    setSchedule: (schedule: DailySchedule) => void;
}

export const Header: FC<HeaderProps> = memo(({ schedules, currentSchedule, setSchedule }) => {
    const currentDate = useCurrentDate();
    const options = schedules.map((schedule) => (
        <option key={schedule.name} value={schedule.name}>
            {schedule.name}
        </option>
    ));
    const onChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
        (event) => {
            const newValue = event.target.value;
            const newSchedule = schedules.find((schedule) => schedule.name === newValue);
            if (!newSchedule) {
                throw new Error('invalid schedule');
            }
            setSchedule(newSchedule);
        },
        [setSchedule, schedules]
    );
    const formattedTime = getTime(currentDate);
    return (
        <header className="header">
            <div className="title">{"Welcome to Ms. Rock's Classroom!"}</div>
            <div className="date">
                <div>{getWeekday(currentDate)}</div>
                <div>{getTodayMessage(currentDate)}</div>
                <div className="time">
                    <div>{formattedTime.hour}</div>:<div>{formattedTime.minute}</div>:<div>{formattedTime.second}</div>
                    {formattedTime.ap}
                </div>
                <select onChange={onChange} value={currentSchedule}>
                    {options}
                </select>
            </div>
        </header>
    );
});
