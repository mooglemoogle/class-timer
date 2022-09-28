import { addDays, differenceInMilliseconds, startOfDay, isAfter } from 'date-fns';
import { useCallback, useState } from 'react';
import { DailySchedule, DayType, OffDays, Schedules } from '../config/BellSchedule';
import { Calendar } from '../config/Calendar';
import { getDate } from '../helpers';
import { useInterval } from './useInterval';

export interface ScheduleItem {
    dayType: DayType;
    isOff: boolean;
    schedule?: DailySchedule;
}

export const useSchedule = () => {
    const date = getDate();

    const tomorrow = startOfDay(addDays(date, 1));
    const interval = differenceInMilliseconds(tomorrow, date) + 100;

    const getSchedule = (date: Date) => {
        const month = date.getMonth() + 1;
        const day = date.getDate();

        const dayItem = Calendar[month][day];
        if (!dayItem) {
            return undefined;
        }
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

    const [schedule, setSchedule] = useState(getSchedule(date));
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

    useInterval(() => {
        const date = getDate();
        const schedule = getSchedule(date);
        setSchedule(schedule);
    }, interval);

    const effectiveSchedule = scheduleOverride
        ? Schedules.find((schedule) => schedule.name === scheduleOverride.name) || schedule?.schedule
        : schedule?.schedule;

    return {
        ...schedule,
        effectiveSchedule,
        overrideSchedule,
    };
};
