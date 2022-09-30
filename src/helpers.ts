import { Duration, startOfDay, add, isAfter as dfnsIsAfter, isBefore as dfnsIsBefore, format } from 'date-fns';

const demoStartTime: number | undefined = undefined;
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
};

let lastToday: Date, lastTodayVal: number;
export const getToday = () => {
    const today = startOfDay(getDate());
    const todayVal = today.getTime();
    if (lastTodayVal !== todayVal) {
        lastToday = today;
        lastTodayVal = todayVal;
    }

    return lastToday;
};

export const getWeekday = (date: Date, short?: boolean) => {
    return format(date, short ? 'EEE' : 'EEE');
};

export const getMonth = (date: Date, short?: boolean) => {
    return format(date, short ? 'LLL' : 'LLLL');
};

const st = [1, 21, 31];
const nd = [2, 22];
const rd = [3, 23];
const formatDayOfMonth = (date: Date) => {
    const dom = date.getDate();
    let suffix = 'th';
    if (st.includes(dom)) suffix = 'st';
    else if (nd.includes(dom)) {
        suffix = 'nd';
    } else if (rd.includes(dom)) {
        suffix = 'rd';
    }
    return `${dom}${suffix}`;
};

export const getTodayMessage = (date: Date) => {
    return `${formatDayOfMonth(date)} of ${getMonth(date)}`;
};

export const getTwoDigitNumber = (value: number) => {
    if (value >= 10) {
        return value;
    } else {
        return `0${value}`;
    }
};

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
};

export const getDateFromDuration = (duration: Duration) => {
    const today = startOfDay(getDate());
    return add(today, duration);
};

export const isAfter = (date: Date, duration: Duration) => {
    const target = getDateFromDuration(duration);
    return dfnsIsAfter(date, target);
};

export const isBefore = (date: Date, duration: Duration) => {
    const target = getDateFromDuration(duration);
    return dfnsIsBefore(date, target);
};

export const pSBC = (percentage: number, color0: string, color1?: string, linear?: boolean) => {
    let p = percentage,
        c0 = color0,
        c1 = color1,
        l = linear;
    let r, g, b;
    let m = Math.round;
    let a = typeof c1 == 'string';

    if (typeof p != 'number' || p < -1 || p > 1 || typeof c0 != 'string' || (c0[0] !== 'r' && c0[0] !== '#') || (c1 && !a)) return null;
    const isRGB = c0.length > 9;
    const outRGB = a ? (c1 && c1.length > 9 ? true : c1 === 'c' ? !isRGB : false) : isRGB;
    let f = pSBCr(c0);
    let t = c1 && c1 !== 'c' ? pSBCr(c1) : p < 0 ? { r: 0, g: 0, b: 0, a: -1 } : { r: 255, g: 255, b: 255, a: -1 };
    p = p < 0 ? p * -1 : p;
    let P = 1 - p;
    if (!f || !t) {
        return null;
    }
    if (l) {
        r = m(P * f.r + p * t.r);
        g = m(P * f.g + p * t.g);
        b = m(P * f.b + p * t.b);
    } else {
        r = m((P * f.r ** 2 + p * t.r ** 2) ** 0.5);
        g = m((P * f.g ** 2 + p * t.g ** 2) ** 0.5);
        b = m((P * f.b ** 2 + p * t.b ** 2) ** 0.5);
    }
    const fromA = f.a;
    const toA = t.a;
    const hasAlpha = fromA >= 0 || toA >= 0;
    const outA = hasAlpha ? (fromA < 0 ? toA : toA < 0 ? fromA : fromA * P + toA * p) : 0;
    if (outRGB) {
        return 'rgb' + (hasAlpha ? 'a(' : '(') + r + ',' + g + ',' + b + (hasAlpha ? ',' + m(outA * 1000) / 1000 : '') + ')';
    } else {
        return '#' + (4294967296 + r * 16777216 + g * 65536 + b * 256 + (hasAlpha ? m(outA * 255) : 0)).toString(16).slice(1, hasAlpha ? undefined : -2);
    }
};

const pSBCr = (color: string) => {
    let d = color;
    const i = parseInt;
    let n = d.length;
    let x = { r: 0, g: 0, b: 0, a: -1 };
    if (n > 9) {
        const items = d.split(',');
        const [r, g, b, a] = items;
        n = items.length;
        if (n < 3 || n > 4) return null;
        x.r = i(r[3] === 'a' ? r.slice(5) : r.slice(4));
        x.g = i(g);
        x.b = i(b);
        x.a = a ? parseFloat(a) : -1;
    } else {
        if (n === 8 || n === 6 || n < 4) {
            return null;
        }
        if (n < 6) {
            d = '#' + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (n > 4 ? d[4] + d[4] : '');
        }
        const colorNum = i(d.slice(1), 16);
        if (n === 9 || n === 5) {
            x.r = (colorNum >> 24) & 255;
            x.g = (colorNum >> 16) & 255;
            x.b = (colorNum >> 8) & 255;
            x.a = Math.round((colorNum & 255) / 0.255) / 1000;
        } else {
            x.r = colorNum >> 16;
            x.g = (colorNum >> 8) & 255;
            x.b = colorNum & 255;
            x.a = -1;
        }
    }

    return x;
};
