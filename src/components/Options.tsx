import { Box, Divider, FormControl, FormLabel, MenuItem, Select, SelectChangeEvent, Stack, Switch, TextField, Typography } from '@mui/material';
import { endOfDay } from 'date-fns';
import { ChangeEventHandler, FC, useContext } from 'react';
import { AppContext } from '../AppContext';
import { DayType, Schedules } from '../config/BellSchedule';
// import { getToday } from '../helpers';

export const Options: FC = () => {
    // const today = getToday();
    const {
        useDemoStartTime,
        setUseDemoStartTime,
        demoStartTime,
        setDemoStartTime,
        bellDelay,
        setBellDelay,
        useOverrideSchedule,
        setUseOverrideSchedule,
        overrideSchedule,
        setOverrideSchedule,
        setOverrideUntil,
    } = useContext(AppContext);
    const scheduleOptions = Schedules.map((schedule) => (
        <MenuItem key={schedule.name} value={schedule.name}>
            {schedule.name}
        </MenuItem>
    ));

    const onChangeUseOverrideSchedule: ChangeEventHandler<HTMLInputElement> = (e) => {
        const checked = e.currentTarget.checked;
        setUseOverrideSchedule(checked);
        if (checked) {
            setOverrideUntil(endOfDay(new Date()).getTime());
        } else {
            setOverrideUntil(0);
        }
    };
    const onChangeOverrideSchedule = (e: SelectChangeEvent<DayType>) => {
        setOverrideSchedule(e.target.value as DayType);
        setOverrideUntil(endOfDay(new Date()).getTime());
    };

    const onChangeBellDelay: ChangeEventHandler<HTMLInputElement> = (e) => {
        const val = parseInt(e.currentTarget.value);
        setBellDelay(isNaN(val) ? 0 : val);
    };

    const onChangeUseDemoStartTime: ChangeEventHandler<HTMLInputElement> = (e) => setUseDemoStartTime(e.currentTarget.checked);
    const onChangeDemoStartTime: ChangeEventHandler<HTMLInputElement> = (e) => setDemoStartTime(parseInt(e.currentTarget.value));

    return (
        <Box
            sx={{
                width: '300px',
                padding: '10px',
            }}
        >
            <Typography variant="h3">Options</Typography>

            <Stack>
                <FormControl>
                    <FormLabel>Override today's day type?</FormLabel>
                    <Switch checked={useOverrideSchedule} onChange={onChangeUseOverrideSchedule} />
                </FormControl>
                {useOverrideSchedule && (
                    <FormControl>
                        <FormLabel>Today's type</FormLabel>
                        <Select size="small" value={overrideSchedule} onChange={onChangeOverrideSchedule}>
                            {scheduleOptions}
                        </Select>
                    </FormControl>
                )}
                <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
                <FormControl>
                    <FormLabel>Bell Time Delay (seconds)</FormLabel>
                    <TextField size="small" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} value={bellDelay} onChange={onChangeBellDelay} />
                </FormControl>
                <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
                <FormControl>
                    <FormLabel>Use a fake time for testing?</FormLabel>
                    <Switch checked={useDemoStartTime} onChange={onChangeUseDemoStartTime} />
                </FormControl>
                {useDemoStartTime && (
                    <FormControl>
                        <FormLabel>Fake start time</FormLabel>
                        <TextField
                            size="small"
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            value={demoStartTime}
                            onChange={onChangeDemoStartTime}
                        />
                    </FormControl>
                )}
            </Stack>
        </Box>
    );
};
