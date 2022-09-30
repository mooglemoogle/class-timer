import { Box, Typography } from '@mui/material';
import { isFriday, isSunday } from 'date-fns';
import { FC, forwardRef, useLayoutEffect, useRef } from 'react';
import { pSBC } from '../helpers';
import { CalendarViewItem, useCalendarView } from '../hooks/useCalendarView';

export interface CalendarViewProps {}

export const CalendarView: FC<CalendarViewProps> = () => {
    const days = useCalendarView();
    const todayRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        todayRef.current?.scrollIntoView({ block: 'center' });
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
            }}
        >
            {days.map((day) => {
                return <DayView key={day.date.toString()} day={day} ref={day.isToday ? todayRef : undefined} />;
            })}
        </Box>
    );
};

interface DayViewProps {
    day: CalendarViewItem;
}

const DayView = forwardRef<HTMLDivElement, DayViewProps>(({ day }, ref) => {
    const additionalMargin = isFriday(day.date) || isSunday(day.date);
    const color = pSBC(0.4, day.color);
    return (
        <Box
            sx={{
                borderBottom: '1px solid #222',
                background: `linear-gradient(90deg, ${color} 0%, transparent 100%)`,
                marginBottom: additionalMargin ? '20px' : '3px',
                padding: '5px',
                width: '300px',
                boxShadow: day.isToday ? `0px 0px 0px 3px #FF5F1588` : `none`,
                borderRadius: day.isToday ? '0.25rem' : 'none',
            }}
            ref={ref}
        >
            <Typography sx={{ fontWeight: 'bold' }}>{`${day.dayOfWeek} - ${day.month} ${day.date.getDate()}`}</Typography>
            <Typography sx={{ fontWeight: 'bold' }}>{day.dayItem.dt}</Typography>
            {day.dayItem.hn ? <Typography>{day.dayItem.hn}</Typography> : null}
        </Box>
    );
});
