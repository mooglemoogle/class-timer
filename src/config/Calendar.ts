import { DayType } from './BellSchedule';

export interface CalendarItem {
    m: number;
    d: number;
    dt: DayType;
}

export const Calendar: Record<number, Record<number, CalendarItem>> = {
    8: {
        22: {m: 8, d: 22, dt: DayType.PURPLE},
        23: {m: 8, d: 23, dt: DayType.GOLD},
        24: {m: 8, d: 24, dt: DayType.PURPLE},
        25: {m: 8, d: 25, dt: DayType.GOLD},
        26: {m: 8, d: 26, dt: DayType.PURPLE},
        27: {m: 8, d: 27, dt: DayType.WEEKEND},
        28: {m: 8, d: 28, dt: DayType.WEEKEND},
        29: {m: 8, d: 29, dt: DayType.GOLD},
        30: {m: 8, d: 30, dt: DayType.PURPLE},
        31: {m: 8, d: 31, dt: DayType.GOLD},
    },
    9: {
        1: {m: 9, d: 1, dt: DayType.PURPLE},
        2: {m: 9, d: 2, dt: DayType.HOLIDAY},
        3: {m: 9, d: 3, dt: DayType.WEEKEND},
        4: {m: 9, d: 4, dt: DayType.WEEKEND},
        5: {m: 9, d: 5, dt: DayType.HOLIDAY},
        6: {m: 9, d: 6, dt: DayType.GOLD},
        7: {m: 9, d: 7, dt: DayType.PURPLE},
        8: {m: 9, d: 8, dt: DayType.GOLD},
        9: {m: 9, d: 9, dt: DayType.PURPLE},
        10: {m: 9, d: 10, dt: DayType.WEEKEND},
        11: {m: 9, d: 11, dt: DayType.WEEKEND},
        12: {m: 9, d: 12, dt: DayType.GOLD},
        13: {m: 9, d: 13, dt: DayType.PURPLE},
        14: {m: 9, d: 14, dt: DayType.GOLD_EW},
        15: {m: 9, d: 15, dt: DayType.PURPLE},
        16: {m: 9, d: 16, dt: DayType.GOLD},
        17: {m: 9, d: 17, dt: DayType.WEEKEND},
        18: {m: 9, d: 18, dt: DayType.WEEKEND},
        19: {m: 9, d: 19, dt: DayType.PURPLE},
        20: {m: 9, d: 20, dt: DayType.GOLD},
        21: {m: 9, d: 21, dt: DayType.PURPLE},
        22: {m: 9, d: 22, dt: DayType.GOLD},
        23: {m: 9, d: 23, dt: DayType.PURPLE},
        24: {m: 9, d: 24, dt: DayType.WEEKEND},
        25: {m: 9, d: 25, dt: DayType.WEEKEND},
        26: {m: 9, d: 26, dt: DayType.TEACHER_WORKDAY},
        27: {m: 9, d: 27, dt: DayType.GOLD},
        28: {m: 9, d: 28, dt: DayType.PURPLE},
        29: {m: 9, d: 29, dt: DayType.GOLD},
        30: {m: 9, d: 30, dt: DayType.PURPLE},
    },
    10: {
        1: {m: 10, d: 1, dt: DayType.WEEKEND},
        2: {m: 10, d: 2, dt: DayType.WEEKEND},
        3: {m: 10, d: 3, dt: DayType.GOLD},
        4: {m: 10, d: 4, dt: DayType.PURPLE},
        5: {m: 10, d: 5, dt: DayType.HOLIDAY},
        6: {m: 10, d: 6, dt: DayType.GOLD_EW},
        7: {m: 10, d: 7, dt: DayType.PURPLE},
        8: {m: 10, d: 8, dt: DayType.WEEKEND},
        9: {m: 10, d: 9, dt: DayType.WEEKEND},
        10: {m: 10, d: 10, dt: DayType.STAFF_DEVELOPMENT},
        11: {m: 10, d: 11, dt: DayType.GOLD},
        12: {m: 10, d: 12, dt: DayType.PURPLE},
        13: {m: 10, d: 13, dt: DayType.GOLD},
        14: {m: 10, d: 14, dt: DayType.PURPLE},
        15: {m: 10, d: 15, dt: DayType.WEEKEND},
        16: {m: 10, d: 16, dt: DayType.WEEKEND},
        17: {m: 10, d: 17, dt: DayType.GOLD},
        18: {m: 10, d: 18, dt: DayType.PURPLE},
        19: {m: 10, d: 19, dt: DayType.GOLD_EW},
        20: {m: 10, d: 20, dt: DayType.PURPLE},
        21: {m: 10, d: 21, dt: DayType.GOLD_EW},
        22: {m: 10, d: 22, dt: DayType.WEEKEND},
        23: {m: 10, d: 23, dt: DayType.WEEKEND},
        24: {m: 10, d: 24, dt: DayType.HOLIDAY},
        25: {m: 10, d: 25, dt: DayType.PURPLE},
        26: {m: 10, d: 26, dt: DayType.GOLD},
        27: {m: 10, d: 27, dt: DayType.PURPLE},
        28: {m: 10, d: 28, dt: DayType.GOLD_ER},
        29: {m: 10, d: 29, dt: DayType.WEEKEND},
        30: {m: 10, d: 30, dt: DayType.WEEKEND},
        31: {m: 10, d: 31, dt: DayType.TEACHER_WORKDAY},
    },
    11: {
        1: {m: 11, d: 1, dt: DayType.PURPLE},
        2: {m: 11, d: 2, dt: DayType.GOLD},
        3: {m: 11, d: 3, dt: DayType.PURPLE},
        4: {m: 11, d: 4, dt: DayType.GOLD},
        5: {m: 11, d: 5, dt: DayType.WEEKEND},
        6: {m: 11, d: 6, dt: DayType.WEEKEND},
        7: {m: 11, d: 7, dt: DayType.PURPLE},
        8: {m: 11, d: 8, dt: DayType.HOLIDAY},
        9: {m: 11, d: 9, dt: DayType.GOLD},
        10: {m: 11, d: 10, dt: DayType.PURPLE},
        11: {m: 11, d: 11, dt: DayType.SCHOOL_PLANNING},
        12: {m: 11, d: 12, dt: DayType.WEEKEND},
        13: {m: 11, d: 13, dt: DayType.WEEKEND},
        14: {m: 11, d: 14, dt: DayType.GOLD_2_8_SWAP},
        15: {m: 11, d: 15, dt: DayType.PURPLE},
        16: {m: 11, d: 16, dt: DayType.GOLD_2_8_SWAP},
        17: {m: 11, d: 17, dt: DayType.PURPLE},
        18: {m: 11, d: 18, dt: DayType.GOLD_EW},
        19: {m: 11, d: 19, dt: DayType.WEEKEND},
        20: {m: 11, d: 20, dt: DayType.WEEKEND},
        21: {m: 11, d: 21, dt: DayType.PURPLE},
        22: {m: 11, d: 22, dt: DayType.GOLD},
        23: {m: 11, d: 23, dt: DayType.HOLIDAY},
        24: {m: 11, d: 24, dt: DayType.HOLIDAY},
        25: {m: 11, d: 25, dt: DayType.HOLIDAY},
        26: {m: 11, d: 26, dt: DayType.WEEKEND},
        27: {m: 11, d: 27, dt: DayType.WEEKEND},
        28: {m: 11, d: 28, dt: DayType.PURPLE},
        29: {m: 11, d: 29, dt: DayType.GOLD},
        30: {m: 11, d: 30, dt: DayType.PURPLE},
    },
    12: {
        1: {m: 12, d: 1, dt: DayType.GOLD},
        2: {m: 12, d: 2, dt: DayType.PURPLE},
        3: {m: 12, d: 3, dt: DayType.WEEKEND},
        4: {m: 12, d: 4, dt: DayType.WEEKEND},
        5: {m: 12, d: 5, dt: DayType.GOLD_2_8_SWAP},
        6: {m: 12, d: 6, dt: DayType.PURPLE},
        7: {m: 12, d: 7, dt: DayType.GOLD_2_8_SWAP},
        8: {m: 12, d: 8, dt: DayType.PURPLE},
        9: {m: 12, d: 9, dt: DayType.GOLD_2_8_SWAP},
        10: {m: 12, d: 10, dt: DayType.WEEKEND},
        11: {m: 12, d: 11, dt: DayType.WEEKEND},
        12: {m: 12, d: 12, dt: DayType.PURPLE},
        13: {m: 12, d: 13, dt: DayType.GOLD},
        14: {m: 12, d: 14, dt: DayType.PURPLE},
        15: {m: 12, d: 15, dt: DayType.GOLD},
        16: {m: 12, d: 16, dt: DayType.PURPLE},
        17: {m: 12, d: 17, dt: DayType.WEEKEND},
        18: {m: 12, d: 18, dt: DayType.WEEKEND},
        19: {m: 12, d: 19, dt: DayType.HOLIDAY},
        20: {m: 12, d: 20, dt: DayType.HOLIDAY},
        21: {m: 12, d: 21, dt: DayType.HOLIDAY},
        22: {m: 12, d: 22, dt: DayType.HOLIDAY},
        23: {m: 12, d: 23, dt: DayType.HOLIDAY},
        24: {m: 12, d: 24, dt: DayType.WEEKEND},
        25: {m: 12, d: 25, dt: DayType.WEEKEND},
        26: {m: 12, d: 26, dt: DayType.HOLIDAY},
        27: {m: 12, d: 27, dt: DayType.HOLIDAY},
        28: {m: 12, d: 28, dt: DayType.HOLIDAY},
        29: {m: 12, d: 29, dt: DayType.HOLIDAY},
        30: {m: 12, d: 30, dt: DayType.HOLIDAY},
        31: {m: 12, d: 31, dt: DayType.WEEKEND},
    },
    1: {
        1: {m: 1, d: 1, dt: DayType.WEEKEND},
        2: {m: 1, d: 2, dt: DayType.HOLIDAY},
        3: {m: 1, d: 3, dt: DayType.GOLD},
        4: {m: 1, d: 4, dt: DayType.PURPLE},
        5: {m: 1, d: 5, dt: DayType.GOLD},
        6: {m: 1, d: 6, dt: DayType.PURPLE},
        7: {m: 1, d: 7, dt: DayType.WEEKEND},
        8: {m: 1, d: 8, dt: DayType.WEEKEND},
        9: {m: 1, d: 9, dt: DayType.GOLD_EW},
        10: {m: 1, d: 10, dt: DayType.PURPLE},
        11: {m: 1, d: 11, dt: DayType.GOLD_EW},
        12: {m: 1, d: 12, dt: DayType.PURPLE},
        13: {m: 1, d: 13, dt: DayType.GOLD},
        14: {m: 1, d: 14, dt: DayType.WEEKEND},
        15: {m: 1, d: 15, dt: DayType.WEEKEND},
        16: {m: 1, d: 16, dt: DayType.HOLIDAY},
        17: {m: 1, d: 17, dt: DayType.PURPLE},
        18: {m: 1, d: 18, dt: DayType.GOLD},
        19: {m: 1, d: 19, dt: DayType.PURPLE},
        20: {m: 1, d: 20, dt: DayType.GOLD},
        21: {m: 1, d: 21, dt: DayType.WEEKEND},
        22: {m: 1, d: 22, dt: DayType.WEEKEND},
        23: {m: 1, d: 23, dt: DayType.PURPLE},
        24: {m: 1, d: 24, dt: DayType.GOLD_EW},
        25: {m: 1, d: 25, dt: DayType.PURPLE_ER},
        26: {m: 1, d: 26, dt: DayType.STAFF_DEVELOPMENT},
        27: {m: 1, d: 27, dt: DayType.TEACHER_WORKDAY},
        28: {m: 1, d: 28, dt: DayType.WEEKEND},
        29: {m: 1, d: 29, dt: DayType.WEEKEND},
        30: {m: 1, d: 30, dt: DayType.GOLD},
        31: {m: 1, d: 31, dt: DayType.PURPLE},
    },
    2: {
        1: {m: 2, d: 1, dt: DayType.GOLD},
        2: {m: 2, d: 2, dt: DayType.PURPLE},
        3: {m: 2, d: 3, dt: DayType.GOLD},
        4: {m: 2, d: 4, dt: DayType.WEEKEND},
        5: {m: 2, d: 5, dt: DayType.WEEKEND},
        6: {m: 2, d: 6, dt: DayType.PURPLE},
        7: {m: 2, d: 7, dt: DayType.GOLD},
        8: {m: 2, d: 8, dt: DayType.PURPLE},
        9: {m: 2, d: 9, dt: DayType.GOLD},
        10: {m: 2, d: 10, dt: DayType.PURPLE},
        11: {m: 2, d: 11, dt: DayType.WEEKEND},
        12: {m: 2, d: 12, dt: DayType.WEEKEND},
        13: {m: 2, d: 13, dt: DayType.GOLD},
        14: {m: 2, d: 14, dt: DayType.PURPLE},
        15: {m: 2, d: 15, dt: DayType.GOLD},
        16: {m: 2, d: 16, dt: DayType.PURPLE},
        17: {m: 2, d: 17, dt: DayType.GOLD},
        18: {m: 2, d: 18, dt: DayType.WEEKEND},
        19: {m: 2, d: 19, dt: DayType.WEEKEND},
        20: {m: 2, d: 20, dt: DayType.HOLIDAY},
        21: {m: 2, d: 21, dt: DayType.PURPLE},
        22: {m: 2, d: 22, dt: DayType.GOLD},
        23: {m: 2, d: 23, dt: DayType.PURPLE},
        24: {m: 2, d: 24, dt: DayType.GOLD},
        25: {m: 2, d: 25, dt: DayType.WEEKEND},
        26: {m: 2, d: 26, dt: DayType.WEEKEND},
        27: {m: 2, d: 27, dt: DayType.PURPLE},
        28: {m: 2, d: 28, dt: DayType.GOLD},
    },
    3: {
        1: {m: 3, d: 1, dt: DayType.PURPLE},
        2: {m: 3, d: 2, dt: DayType.GOLD_ER},
        3: {m: 3, d: 3, dt: DayType.SCHOOL_PLANNING},
        4: {m: 3, d: 4, dt: DayType.WEEKEND},
        5: {m: 3, d: 5, dt: DayType.WEEKEND},
        6: {m: 3, d: 6, dt: DayType.PURPLE},
        7: {m: 3, d: 7, dt: DayType.GOLD},
        8: {m: 3, d: 8, dt: DayType.PURPLE},
        9: {m: 3, d: 9, dt: DayType.GOLD},
        10: {m: 3, d: 10, dt: DayType.PURPLE},
        11: {m: 3, d: 11, dt: DayType.WEEKEND},
        12: {m: 3, d: 12, dt: DayType.WEEKEND},
        13: {m: 3, d: 13, dt: DayType.GOLD},
        14: {m: 3, d: 14, dt: DayType.PURPLE},
        15: {m: 3, d: 15, dt: DayType.GOLD_EW},
        16: {m: 3, d: 16, dt: DayType.PURPLE},
        17: {m: 3, d: 17, dt: DayType.GOLD},
        18: {m: 3, d: 18, dt: DayType.WEEKEND},
        19: {m: 3, d: 19, dt: DayType.WEEKEND},
        20: {m: 3, d: 20, dt: DayType.PURPLE},
        21: {m: 3, d: 21, dt: DayType.GOLD},
        22: {m: 3, d: 22, dt: DayType.PURPLE},
        23: {m: 3, d: 23, dt: DayType.GOLD},
        24: {m: 3, d: 24, dt: DayType.PURPLE},
        25: {m: 3, d: 25, dt: DayType.WEEKEND},
        26: {m: 3, d: 26, dt: DayType.WEEKEND},
        27: {m: 3, d: 27, dt: DayType.GOLD},
        28: {m: 3, d: 28, dt: DayType.PURPLE},
        29: {m: 3, d: 29, dt: DayType.GOLD_EW},
        30: {m: 3, d: 30, dt: DayType.PURPLE},
        31: {m: 3, d: 31, dt: DayType.GOLD_EW},
    },
    4: {
        1: {m: 4, d: 1, dt: DayType.WEEKEND},
        2: {m: 4, d: 2, dt: DayType.WEEKEND},
        3: {m: 4, d: 3, dt: DayType.HOLIDAY},
        4: {m: 4, d: 4, dt: DayType.HOLIDAY},
        5: {m: 4, d: 5, dt: DayType.HOLIDAY},
        6: {m: 4, d: 6, dt: DayType.HOLIDAY},
        7: {m: 4, d: 7, dt: DayType.HOLIDAY},
        8: {m: 4, d: 8, dt: DayType.WEEKEND},
        9: {m: 4, d: 9, dt: DayType.WEEKEND},
        10: {m: 4, d: 10, dt: DayType.PURPLE},
        11: {m: 4, d: 11, dt: DayType.GOLD},
        12: {m: 4, d: 12, dt: DayType.PURPLE},
        13: {m: 4, d: 13, dt: DayType.GOLD_ER},
        14: {m: 4, d: 14, dt: DayType.TEACHER_WORKDAY},
        15: {m: 4, d: 15, dt: DayType.WEEKEND},
        16: {m: 4, d: 16, dt: DayType.WEEKEND},
        17: {m: 4, d: 17, dt: DayType.PURPLE},
        18: {m: 4, d: 18, dt: DayType.GOLD},
        19: {m: 4, d: 19, dt: DayType.PURPLE},
        20: {m: 4, d: 20, dt: DayType.GOLD},
        21: {m: 4, d: 21, dt: DayType.TEACHER_WORKDAY},
        22: {m: 4, d: 22, dt: DayType.WEEKEND},
        23: {m: 4, d: 23, dt: DayType.WEEKEND},
        24: {m: 4, d: 24, dt: DayType.PURPLE},
        25: {m: 4, d: 25, dt: DayType.GOLD_EW},
        26: {m: 4, d: 26, dt: DayType.PURPLE},
        27: {m: 4, d: 27, dt: DayType.GOLD},
        28: {m: 4, d: 28, dt: DayType.PURPLE},
        29: {m: 4, d: 29, dt: DayType.WEEKEND},
        30: {m: 4, d: 30, dt: DayType.WEEKEND},
    },
    5: {
        1: {m: 5, d: 1, dt: DayType.GOLD},
        2: {m: 5, d: 2, dt: DayType.PURPLE},
        3: {m: 5, d: 3, dt: DayType.GOLD},
        4: {m: 5, d: 4, dt: DayType.PURPLE},
        5: {m: 5, d: 5, dt: DayType.GOLD},
        6: {m: 5, d: 6, dt: DayType.WEEKEND},
        7: {m: 5, d: 7, dt: DayType.WEEKEND},
        8: {m: 5, d: 8, dt: DayType.PURPLE},
        9: {m: 5, d: 9, dt: DayType.GOLD},
        10: {m: 5, d: 10, dt: DayType.PURPLE},
        11: {m: 5, d: 11, dt: DayType.GOLD},
        12: {m: 5, d: 12, dt: DayType.PURPLE},
        13: {m: 5, d: 13, dt: DayType.WEEKEND},
        14: {m: 5, d: 14, dt: DayType.WEEKEND},
        15: {m: 5, d: 15, dt: DayType.GOLD},
        16: {m: 5, d: 16, dt: DayType.PURPLE},
        17: {m: 5, d: 17, dt: DayType.GOLD},
        18: {m: 5, d: 18, dt: DayType.PURPLE},
        19: {m: 5, d: 19, dt: DayType.GOLD},
        20: {m: 5, d: 20, dt: DayType.WEEKEND},
        21: {m: 5, d: 21, dt: DayType.WEEKEND},
        22: {m: 5, d: 22, dt: DayType.PURPLE},
        23: {m: 5, d: 23, dt: DayType.GOLD},
        24: {m: 5, d: 24, dt: DayType.PURPLE},
        25: {m: 5, d: 25, dt: DayType.GOLD},
        26: {m: 5, d: 26, dt: DayType.PURPLE},
        27: {m: 5, d: 27, dt: DayType.WEEKEND},
        28: {m: 5, d: 28, dt: DayType.WEEKEND},
        29: {m: 5, d: 29, dt: DayType.HOLIDAY},
        30: {m: 5, d: 30, dt: DayType.GOLD},
        31: {m: 5, d: 31, dt: DayType.PURPLE},
    },
    6: {
        1: {m: 5, d: 1, dt: DayType.GOLD},
        2: {m: 5, d: 2, dt: DayType.PURPLE},
        3: {m: 5, d: 3, dt: DayType.WEEKEND},
        4: {m: 5, d: 4, dt: DayType.WEEKEND},
        5: {m: 5, d: 5, dt: DayType.GOLD},
        6: {m: 5, d: 6, dt: DayType.PURPLE},
        7: {m: 5, d: 7, dt: DayType.GOLD},
        8: {m: 5, d: 8, dt: DayType.PURPLE},
        9: {m: 5, d: 9, dt: DayType.GOLD},
        10: {m: 5, d: 10, dt: DayType.WEEKEND},
        11: {m: 5, d: 11, dt: DayType.WEEKEND},
        12: {m: 5, d: 12, dt: DayType.PURPLE},
        13: {m: 5, d: 13, dt: DayType.GOLD},
        14: {m: 5, d: 14, dt: DayType.PURPLE},
        15: {m: 5, d: 15, dt: DayType.GOLD},
        16: {m: 5, d: 16, dt: DayType.PURPLE},
        17: {m: 5, d: 17, dt: DayType.WEEKEND},
        18: {m: 5, d: 18, dt: DayType.WEEKEND},
        19: {m: 5, d: 19, dt: DayType.HOLIDAY},
        20: {m: 5, d: 20, dt: DayType.TEACHER_WORKDAY},
    },
}