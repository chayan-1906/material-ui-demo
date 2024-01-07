import {Box, InputAdornment, Stack, styled, TextField} from '@mui/material'
import {useCallback, useState} from 'react'

const StyledWrapper = styled(Box)((_) => ({
    display: 'flex',
}))

export const MuiTextField = () => {
    const [value, setValue] = useState('')

    const handleInputChange = useCallback((e: any) => {
        setValue(e.target.value)
    }, [])

    return (
        <Stack p={4} spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant='outlined'/>
                <TextField label='Name' variant='filled'/>
                <TextField label='Name' variant='standard'/>
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField label='Small secondary' size='small' color='secondary'/>
            </Stack>

            {/*<Stack direction='row' spacing={2}>*/}
            <StyledWrapper>
                <TextField
                    label='Form Input'
                    value={value}
                    onChange={handleInputChange}
                    required
                    error={!value}
                    helperText={!value ? 'Required' : 'Do not share your password with anyone'}
                />
                <TextField
                    label='Password'
                    type='password'
                    helperText='Do not share your password with anyone'
                    disabled
                />
                <TextField label='Read Only' InputProps={{readOnly: true}}/>
            </StyledWrapper>

            <Stack direction='row' spacing={2}>
                <TextField label='Amount' InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }}/>
                <TextField label='Weight' InputProps={{
                    endAdornment: <InputAdornment position='end'>kg</InputAdornment>
                }}/>
            </Stack>
        </Stack>
    )
}
