import {Box, FormControl, FormControlLabel, Switch} from '@mui/material'
import {ChangeEvent, useState} from 'react'

export const MuiSwitch = () => {
    const [checked, setChecked] = useState(false)
    console.log({checked})

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    return (
        <Box>
            <FormControl>
                <FormControlLabel
                    control={<Switch color='secondary' size='small' checked={checked} onChange={handleChange}/>}
                    label='Dark Mode'/>
            </FormControl>
        </Box>
    )
}