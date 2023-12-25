import {CircularProgress, LinearProgress, Stack} from '@mui/material'

export const MuiProgress = () => {
    return (
        <Stack p={4} spacing={4}>
            <CircularProgress/>
            <CircularProgress color='success'/>
            <CircularProgress color='error' variant='determinate' value={60}/>

            <LinearProgress/>
            <LinearProgress color='success'/>
            <LinearProgress color='error' variant='determinate' value={60}/>
        </Stack>
    )
}