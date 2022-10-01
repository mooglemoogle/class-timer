import { addDays, differenceInMilliseconds, startOfDay } from 'date-fns';
import { useCallback, useState } from 'react';
import { DailySchedule, DayType, OffDays, Schedules } from '../config/BellSchedule';
import { CalendarItem, getCalendarItem } from '../config/Calendar';
import { getDate } from '../helpers';
import { useInterval } from './useInterval';

export interface ScheduleItem {
    dayType: DayType;
    isOff: boolean;
    schedule?: DailySchedule;
}

const getSchedule = (dayItem: CalendarItem) => {
    if (OffDays.includes(dayItem.dt)) {
        return {
            dayType: dayItem.dt,
            isOff: true,
        } as ScheduleItem;
    }
    const schedule = Schedules.find((schedule) => schedule.name === dayItem.dt);
    if (!schedule) {
        return undefined;
    } else {
        return {
            dayType: schedule.name,
            isOff: false,
            schedule,
        } as ScheduleItem;
    }
};

export const useSchedule = (useScheduleOverride: boolean, scheduleOverride: DayType | undefined, overrideUntil: number) => {
    const date = getDate();

    const tomorrow = startOfDay(addDays(date, 1));
    const interval = differenceInMilliseconds(tomorrow, date) + 100;

    const [dayItem, setDayItem] = useState(getCalendarItem(date));
    const [schedule, setSchedule] = useState(getSchedule(dayItem));

    const clearOverride = useCallback(() => {
        localStorage.removeItem('scheduleOverride');
    }, []);

    useInterval(() => {
        const date = getDate();
        const dayItem = getCalendarItem(date);
        const schedule = getSchedule(dayItem);
        setDayItem(dayItem);
        setSchedule(schedule);
    }, interval);

    const effectiveSchedule =
        useScheduleOverride && scheduleOverride && date.getTime() < overrideUntil
            ? Schedules.find((schedule) => schedule.name === scheduleOverride) || schedule?.schedule
            : schedule?.schedule;

    return {
        ...schedule,
        dayItem,
        effectiveSchedule,
        clearOverride,
    };
};
