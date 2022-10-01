import { FC, memo, ChangeEvent } from 'react';
import './Header.css';
import { getTodayMessage, getTime, getWeekday } from '../helpers';
import { DailySchedule } from '../config/BellSchedule';
import { useCurrentDate } from '../hooks/useCurrentDate';
import { useLocalStorage } from '../hooks/useLocalStorage';

export interface HeaderProps {}

export const Header: FC<HeaderProps> = memo(({}) => {
    const currentDate = useCurrentDate();
    const [title, setTitle] = useLocalStorage('pageTitle', `Ms. Rock's Classroom`);
    const updateTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    };

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
            </div>
        </header>
    );
});
