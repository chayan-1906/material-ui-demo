import {FormControl, FormControlLabel, Stack, Switch} from '@mui/material'
import {ChangeEvent, useState} from 'react'

export const MuiSwitch = () => {
    const [checked, setChecked] = useState(false)
    console.log({checked})

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    return (
        <Stack p={4}>
            <FormControl>
                <FormControlLabel
                    control={<Switch color='secondary' size='small' checked={checked} onChange={handleChange}/>}
                    label='Dark Mode'/>
            </FormControl>
        </Stack>
    )
}