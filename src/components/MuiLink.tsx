import {Link, Stack, Typography} from '@mui/material'

export const MuiLink = () => {
    return (
        <Stack spacing={2} m={4} direction='row'>
            <Typography variant='body2'>
                <Link href='/#'>Link</Link>
            </Typography>
            <Typography variant='h6'>
                <Link href='/#' color='secondary' underline='hover'>Secondary</Link>
            </Typography>
        </Stack>
    )
}