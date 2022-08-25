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

export const Schedules: DailySchedule[] = [
    {
        name: DayType.PURPLE,
        color: 'rgb(84, 50, 131)',
        schedule: [
            {
                name: 'Period 1',
                start: {hours: 8},
                break: {hours: 9, minutes: 28},
                end: {hours: 9, minutes: 43},
            },
            {
                name: 'Period 3',
                start: {hours: 9, minutes: 43},
                break: {hours: 11, minutes: 39},
                end: {hours: 11, minutes: 46},
            },
            {
                name: 'Period 5',
                start: {hours: 11, minutes: 46},
                break: {hours: 13, minutes: 12},
                end: {hours: 13, minutes: 19},
            },
            {
                name: 'Period 5',
                start: {hours: 13, minutes: 19},
                end: {hours: 14, minutes: 45},
            }
        ],
    },
    {
        name: DayType.GOLD,
        color: 'rgb(247, 202, 73)',
        schedule: [
            {
                name: 'Period 2',
                start: {hours: 8},
                break: {hours: 9, minutes: 28},
                end: {hours: 9, minutes: 43},
            },
            {
                name: 'Period 4',
                start: {hours: 9, minutes: 43},
                break: {hours: 11, minutes: 39},
                end: {hours: 11, minutes: 46},
            },
            {
                name: 'Period 6',
                start: {hours: 11, minutes: 46},
                break: {hours: 13, minutes: 12},
                end: {hours: 13, minutes: 19},
            },
            {
                name: 'Period 8: Advisory',
                start: {hours: 13, minutes: 19},
                break: {hours: 13, minutes: 50},
                end: {hours: 13, minutes: 55},
            },
            {
                name: 'Period 8: WIN',
                start: {hours: 13, minutes: 55},
                end: {hours: 14, minutes: 45},
            }
        ],
    },
];