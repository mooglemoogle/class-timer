import { Duration } from 'date-fns';

export enum DayType {
    GOLD = 'Gold',
    PURPLE = 'Purple',
    GOLD_ER = 'Gold Early Release',
    PURPLE_ER = 'Purple Early Release',
    GOLD_2HD = 'Gold 2 Hour Delay',
    PURPLE_2HD = 'Purple 2 Hour Delay',
    GOLD_2_8_SWAP = 'Gold 2-8 Swap',
    GOLD_EW = 'Gold Extended WIN',
    WEEKEND = 'Weekend',
    HOLIDAY = 'Holiday',
    TEACHER_WORKDAY = 'Teacher Workday',
    STAFF_DEVELOPMENT = 'Staff Development',
    SCHOOL_PLANNING = 'School Planning',
}

export interface ClassPeriod {
    name: string;
    start: Duration;
    lunchStart?: Duration;
    lunchEnd?: Duration;
    end: Duration;
    break?: Duration;
}

export interface DailySchedule {
    name: DayType;
    color: string;
    schedule: ClassPeriod[];
}

export const OffDays = [DayType.WEEKEND, DayType.HOLIDAY, DayType.TEACHER_WORKDAY, DayType.STAFF_DEVELOPMENT, DayType.SCHOOL_PLANNING];

export const Schedules: DailySchedule[] = [
    {
        name: DayType.PURPLE,
        color: 'rgb(84, 50, 131)',
        schedule: [
            {
                name: 'Period 1',
                start: { hours: 8 },
                break: { hours: 9, minutes: 28 },
                end: { hours: 9, minutes: 43 },
            },
            {
                name: 'Period 3',
                start: { hours: 9, minutes: 43 },
                break: { hours: 11, minutes: 39 },
                end: { hours: 11, minutes: 46 },
            },
            {
                name: 'Period 5',
                start: { hours: 11, minutes: 46 },
                break: { hours: 13, minutes: 12 },
                end: { hours: 13, minutes: 19 },
            },
            {
                name: 'Period 5',
                start: { hours: 13, minutes: 19 },
                end: { hours: 14, minutes: 45 },
            },
        ],
    },
    {
        name: DayType.GOLD,
        color: 'rgb(247, 202, 73)',
        schedule: [
            {
                name: 'Period 2',
                start: { hours: 8 },
                break: { hours: 9, minutes: 28 },
                end: { hours: 9, minutes: 43 },
            },
            {
                name: 'Period 4',
                start: { hours: 9, minutes: 43 },
                break: { hours: 11, minutes: 39 },
                end: { hours: 11, minutes: 46 },
            },
            {
                name: 'Period 6',
                start: { hours: 11, minutes: 46 },
                break: { hours: 13, minutes: 12 },
                end: { hours: 13, minutes: 19 },
            },
            {
                name: 'Period 8: Advisory',
                start: { hours: 13, minutes: 19 },
                break: { hours: 13, minutes: 50 },
                end: { hours: 13, minutes: 55 },
            },
            {
                name: 'Period 8: WIN',
                start: { hours: 13, minutes: 55 },
                end: { hours: 14, minutes: 45 },
            },
        ],
    },
    {
        name: DayType.GOLD_EW,
        color: 'rgb(247, 202, 73)',
        schedule: [
            {
                name: 'Period 2',
                start: { hours: 8 },
                break: { hours: 9, minutes: 28 },
                end: { hours: 9, minutes: 43 },
            },
            {
                name: 'Period 4',
                start: { hours: 9, minutes: 43 },
                break: { hours: 11, minutes: 39 },
                end: { hours: 11, minutes: 46 },
            },
            {
                name: 'Period 6',
                start: { hours: 11, minutes: 46 },
                break: { hours: 13, minutes: 12 },
                end: { hours: 13, minutes: 19 },
            },
            {
                name: 'Period 8: WIN',
                start: { hours: 13, minutes: 19 },
                end: { hours: 14, minutes: 45 },
            },
        ],
    },
    {
        name: DayType.GOLD_2_8_SWAP,
        color: 'rgb(247, 202, 73)',
        schedule: [
            {
                name: 'Period 8: Advisory',
                start: { hours: 8 },
                break: { hours: 8, minutes: 31 },
                end: { hours: 8, minutes: 36 },
            },
            {
                name: 'Period 8: WIN',
                start: { hours: 8, minutes: 36 },
                break: { hours: 9, minutes: 28 },
                end: { hours: 9, minutes: 43 },
            },
            {
                name: 'Period 4',
                start: { hours: 9, minutes: 43 },
                break: { hours: 11, minutes: 39 },
                end: { hours: 11, minutes: 46 },
            },
            {
                name: 'Period 6',
                start: { hours: 11, minutes: 46 },
                break: { hours: 13, minutes: 12 },
                end: { hours: 13, minutes: 19 },
            },
            {
                name: 'Period 2',
                start: { hours: 13, minutes: 19 },
                end: { hours: 14, minutes: 45 },
            },
        ],
    },
    {
        name: DayType.PURPLE_2HD,
        color: 'rgb(84, 50, 131)',
        schedule: [
            {
                name: 'Period 1',
                start: { hours: 10 },
                break: { hours: 10, minutes: 55 },
                end: { hours: 11, minutes: 2 },
            },
            {
                name: 'Period 3',
                start: { hours: 11, minutes: 2 },
                break: { hours: 12, minutes: 30 },
                end: { hours: 12, minutes: 37 },
            },
            {
                name: 'Period 5',
                start: { hours: 12, minutes: 37 },
                break: { hours: 13, minutes: 35 },
                end: { hours: 13, minutes: 42 },
            },
            {
                name: 'Period 5',
                start: { hours: 13, minutes: 42 },
                end: { hours: 14, minutes: 45 },
            },
        ],
    },
    {
        name: DayType.GOLD_2HD,
        color: 'rgb(247, 202, 73)',
        schedule: [
            {
                name: 'Period 2',
                start: { hours: 10 },
                break: { hours: 10, minutes: 55 },
                end: { hours: 11, minutes: 2 },
            },
            {
                name: 'Period 4',
                start: { hours: 11, minutes: 2 },
                break: { hours: 12, minutes: 30 },
                end: { hours: 12, minutes: 37 },
            },
            {
                name: 'Period 6',
                start: { hours: 12, minutes: 37 },
                break: { hours: 13, minutes: 35 },
                end: { hours: 13, minutes: 42 },
            },
            {
                name: 'Period 8: Advisory',
                start: { hours: 13, minutes: 42 },
                end: { hours: 14, minutes: 45 },
            },
        ],
    },
    {
        name: DayType.PURPLE_ER,
        color: 'rgb(84, 50, 131)',
        schedule: [
            {
                name: 'Period 1',
                start: { hours: 8 },
                break: { hours: 9, minutes: 2 },
                end: { hours: 9, minutes: 9 },
            },
            {
                name: 'Period 3',
                start: { hours: 9, minutes: 9 },
                break: { hours: 10, minutes: 11 },
                end: { hours: 10, minutes: 18 },
            },
            {
                name: 'Period 5',
                start: { hours: 10, minutes: 18 },
                break: { hours: 11, minutes: 20 },
                end: { hours: 11, minutes: 27 },
            },
            {
                name: 'Period 7',
                start: { hours: 11, minutes: 27 },
                end: { hours: 12, minutes: 30 },
            },
        ],
    },
    {
        name: DayType.GOLD_ER,
        color: 'rgb(247, 202, 73)',
        schedule: [
            {
                name: 'Period 2',
                start: { hours: 8 },
                break: { hours: 9, minutes: 25 },
                end: { hours: 9, minutes: 32 },
            },
            {
                name: 'Period 4',
                start: { hours: 9, minutes: 32 },
                break: { hours: 10, minutes: 57 },
                end: { hours: 11, minutes: 4 },
            },
            {
                name: 'Period 6',
                start: { hours: 11, minutes: 4 },
                end: { hours: 12, minutes: 30 },
            },
        ],
    },
    {
        name: DayType.WEEKEND,
        color: 'rgb(136, 136, 136)',
        schedule: [],
    },
    {
        name: DayType.HOLIDAY,
        color: 'rgb(136, 136, 136)',
        schedule: [],
    },
    {
        name: DayType.TEACHER_WORKDAY,
        color: 'rgb(136, 136, 136)',
        schedule: [],
    },
    {
        name: DayType.STAFF_DEVELOPMENT,
        color: 'rgb(136, 136, 136)',
        schedule: [],
    },
    {
        name: DayType.SCHOOL_PLANNING,
        color: 'rgb(136, 136, 136)',
        schedule: [],
    },
];
