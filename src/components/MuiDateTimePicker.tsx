import {Stack} from '@mui/material'
import {useState} from 'react'
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker'
import {DatePicker} from '@mui/x-date-pickers/DatePicker'
import {TimePicker} from '@mui/x-date-pickers/TimePicker'
import {DateRange} from '@mui/lab'
import dayjs, {Dayjs} from 'dayjs'
import {DateRangePicker} from '@mui/x-date-pickers-pro/DateRangePicker'

export const MuiDateTimePicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [selectedTime, setSelectedTime] = useState<Date | null>(null)
    const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null)
    const [selectedDateRange, setSelectedDateRange] = useState<DateRange<Dayjs>>([
        dayjs('2022-04-17'),
        dayjs('2022-04-21'),
    ])

    selectedDate && console.log(selectedDate)
    selectedTime && console.log(selectedTime)
    selectedDateTime && console.log(selectedDateTime)
    selectedDateRange && console.log(selectedDateRange)

    return (
        <Stack p={4} spacing={4} sx={{width: '250px'}}>
            <DatePicker
                label='Date picker'
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
            />

            <TimePicker
                label='Time picker'
                value={selectedTime}
                onChange={(newValue) => setSelectedTime(newValue)}
            />

            <DateRangePicker
                value={selectedDateRange}
                calendars={2}
                onChange={(newValue) => setSelectedDateRange(newValue)}
            />

            <DateTimePicker
                label='Date Time picker'
                value={selectedDateTime}
                onChange={(newValue) => setSelectedDateTime(newValue)}
            />
        </Stack>
    )
}