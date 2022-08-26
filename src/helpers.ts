import { Duration, startOfDay, add, isAfter as dfnsIsAfter, isBefore as dfnsIsBefore } from "date-fns";

const demoStartTime: number | undefined = 1661269200000;
const demoRealStartTime: Date = new Date();

export const getDate = () => {
    if (!demoStartTime) {
        return new Date();
    } else {
        const d = new Date();
        const sinceStart = d.getTime() - demoRealStartTime.getTime();
        d.setTime(demoStartTime + sinceStart);
        return d;
    }
}

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

export const getWeekday = (date: Date) => {
    return weekdays[date.getDay()];
}

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const getMonth = (date: Date) => {
    return months[date.getMonth()];
}

const st = [1, 21, 31];
const nd = [2, 22];
const rd = [3, 23];
const formatDayOfMonth = (date:Date) => {
    const dom = date.getDate();
    let suffix = 'th';
    if (st.includes(dom))
        suffix = 'st';
    else if (nd.includes(dom)) {
        suffix = 'nd';
    } else if (rd.includes(dom)) {
        suffix = 'rd';
    }
    return `${dom}${suffix}`
}

export const getTodayMessage = (date: Date) => {
    return `${formatDayOfMonth(date)} of ${getMonth(date)}`
}

export const getTwoDigitNumber = (value: number) => {
    if (value >= 10) {
        return value;
    } else {
        return `0${value}`;
    }
}

export const getTime = (date: Date) => {
    let hour: number = date.getHours();
    let ap: 'AM' | 'PM' = 'AM';
    if (hour === 0) {
        hour = 12;
    } else if (hour === 12) {
        hour = 12;
        ap = 'PM';
    } else if (hour > 12) {
        hour = hour - 12;
        ap = 'PM';
    }
    return {
        hour,
        minute: getTwoDigitNumber(date.getMinutes()),
        second: getTwoDigitNumber(date.getSeconds()),
        ap,
    };
}

export const getDateFromDuration = (duration: Duration) => {
    const today = startOfDay(getDate());
    return add(today, duration);
}

export const isAfter = (date: Date, duration: Duration) => {
    const target = getDateFromDuration(duration);
    return dfnsIsAfter(date, target);
}

export const isBefore = (date: Date, duration: Duration) => {
    const target = getDateFromDuration(duration);
    return dfnsIsBefore(date, target);
}