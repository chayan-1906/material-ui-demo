import {MenuItem, Stack, TextField} from '@mui/material'
import {ChangeEvent, useState} from 'react'

export const MuiSelect = () => {
    const [selectedCountries, setSelectedCountries] = useState<string[]>([])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setSelectedCountries(typeof value === 'string' ? value.split(',') : value)
    }

    console.log({selectedCountries})

    return (
        <Stack p={4} width='250px'>
            <TextField label='Select country' select value={selectedCountries} onChange={handleChange} fullWidth
                       SelectProps={{
                           multiple: true
                       }} size='small' color='secondary' helperText='Please select your country' error>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Australia</MenuItem>
            </TextField>
        </Stack>
    )
}
