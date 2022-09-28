import { FC, useCallback, ChangeEventHandler, memo, ChangeEvent } from 'react';
import './Header.css';
import { getTodayMessage, getTime, getWeekday } from '../helpers';
import { DailySchedule, DayType } from '../config/BellSchedule';
import { useCurrentDate } from '../hooks/useCurrentDate';
import { Schedules } from '../config/BellSchedule';
import { useLocalStorage } from '../hooks/useLocalStorage';

export interface HeaderProps {
    currentSchedule: DailySchedule | undefined;
    overrideSchedule: (schedule: DayType) => void;
}

export const Header: FC<HeaderProps> = memo(({ currentSchedule, overrideSchedule }) => {
    const currentDate = useCurrentDate();
    const [title, setTitle] = useLocalStorage('pageTitle', `Ms. Rock's Classroom`);
    const updateTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    };
    const options = Schedules.map((schedule) => (
        <option key={schedule.name} value={schedule.name}>
            {schedule.name}
        </option>
    ));
    const onChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
        (event) => {
            const newValue = event.target.value;
            overrideSchedule(newValue as DayType);
        },
        [overrideSchedule]
    );
    const formattedTime = getTime(currentDate);
    return (
        <header className="header">
            <div className="title">
                <input type="text" value={title} onChange={updateTitle} />
            </div>
            <div className="date">
                <div>{getWeekday(currentDate)}</div>
                <div>{getTodayMessage(currentDate)}</div>
                <div className="time">
                    <div>{formattedTime.hour}</div>:<div>{formattedTime.minute}</div>:<div>{formattedTime.second}</div>
                    {formattedTime.ap}
                </div>
                <select onChange={onChange} value={currentSchedule?.name}>
                    {options}
                </select>
            </div>
        </header>
    );
});
