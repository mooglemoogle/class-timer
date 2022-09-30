import { addDays, subDays, startOfWeek, eachDayOfInterval, isSameDay } from 'date-fns';
import { useMemo } from 'react';
import { DayType, Schedules } from '../config/BellSchedule';
import { CalendarItem, getCalendarItem } from '../config/Calendar';
import { getToday, getWeekday, getMonth } from '../helpers';

export interface CalendarViewItem {
    date: Date;
    dayOfWeek: string;
    month: string;
    dayItem: CalendarItem;
    color: string;
    isToday: boolean;
}

const colorValues = Schedules.reduce<Record<DayType, string>>((acc, curItem) => {
    acc[curItem.name] = curItem.color;
    return acc;
}, {} as Record<DayType, string>);

export const useCalendarView = () => {
    const today = getToday();

    const days = useMemo(() => {
        const thisMonday = startOfWeek(today, { weekStartsOn: 1 });
        const firstDay = subDays(thisMonday, 7);
        const lastDay = addDays(thisMonday, 11);

        const allDays = eachDayOfInterval({ start: firstDay, end: lastDay });

        return allDays.map((date) => {
            const item = getCalendarItem(date);
            return {
                date,
                dayItem: item,
                color: colorValues[item.dt] || 'rgb(136, 136, 136)',
                dayOfWeek: getWeekday(date, true),
                month: getMonth(date, true),
                isToday: isSameDay(today, date),
            } as CalendarViewItem;
        });
    }, [today]);

    return days;
};
