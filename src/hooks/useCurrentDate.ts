import {useState} from 'react';
import { useInterval } from './useInterval';

import { getDate } from '../helpers';

export const useCurrentDate = () => {
    const [currentDate, setCurrentDate] = useState(getDate());

    const delay = 1000 - currentDate.getMilliseconds() + 1;
    useInterval(() => {
        setCurrentDate(getDate());
    }, delay);

    return currentDate;
}