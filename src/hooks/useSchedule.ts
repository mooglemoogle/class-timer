import { addDays, differenceInMilliseconds, startOfDay, isAfter } from 'date-fns';
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

export const useSchedule = () => {
    const date = getDate();

    const tomorrow = startOfDay(addDays(date, 1));
    const interval = differenceInMilliseconds(tomorrow, date) + 100;

    const [dayItem, setDayItem] = useState(getCalendarItem(date));
    const [schedule, setSchedule] = useState(getSchedule(dayItem));
    const [scheduleOverride, setScheduleOverride] = useState(() => {
        const existingOverride = JSON.parse(localStorage.getItem('scheduleOverride') || 'null');
        if (existingOverride) {
            const overrideUntil = new Date(existingOverride.until || 0);
            if (isAfter(date, overrideUntil)) {
                localStorage.removeItem('scheduleOverride');
                return null;
            }
            return {
                until: overrideUntil,
                name: existingOverride.name,
            };
        }
        return null;
    });

    const overrideSchedule = useCallback(
        (name: string) => {
            setScheduleOverride({
                until: tomorrow,
                name,
            });
            localStorage.setItem(
                'scheduleOverride',
                JSON.stringify({
                    name,
                    until: tomorrow.getTime(),
                })
            );
        },
        [tomorrow]
    );

    const clearOverride = useCallback(() => {
        setScheduleOverride(null);
        localStorage.removeItem('scheduleOverride');
    }, [setScheduleOverride]);

    useInterval(() => {
        const date = getDate();
        const dayItem = getCalendarItem(date);
        const schedule = getSchedule(dayItem);
        setDayItem(dayItem);
        setSchedule(schedule);
    }, interval);

    const effectiveSchedule = scheduleOverride
        ? Schedules.find((schedule) => schedule.name === scheduleOverride.name) || schedule?.schedule
        : schedule?.schedule;

    return {
        ...schedule,
        dayItem,
        effectiveSchedule,
        overrideSchedule,
        clearOverride,
    };
};
