import {Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup} from '@mui/material'
import {ChangeEvent, useState} from 'react'

export const MuiRadioButton = () => {
    const [value, setValue] = useState('')
    console.log({value})

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <Box>
            <FormControl error>
                <FormLabel id='job-experience-group-label'>Years of experience</FormLabel>
                <RadioGroup name='job-experience-group' aria-labelledby='job-experience-group-label'
                            onChange={handleChange} row>
                    <FormControlLabel control={<Radio size='medium' color='secondary'/>} label='0-2'
                                      value='0-2'></FormControlLabel>
                    <FormControlLabel control={<Radio size='small' color='success'/>} label='3-5'
                                      value='3-5'></FormControlLabel>
                    <FormControlLabel control={<Radio/>} label='6-10' value='6-10'></FormControlLabel>
                </RadioGroup>
                <FormHelperText>Invalid Selection</FormHelperText>
            </FormControl>
        </Box>
    )
}