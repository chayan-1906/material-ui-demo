import {Badge, Stack} from '@mui/material'
import {MailRounded} from '@mui/icons-material'

export const MuiBadge = () => {
    return (
        <Stack direction='row' spacing={2} p={4}>
            <Badge badgeContent={5} color='primary'>
                <MailRounded/>
            </Badge>

            <Badge badgeContent={0} color='secondary' showZero>
                <MailRounded/>
            </Badge>

            <Badge badgeContent={100} color='error' showZero>
                <MailRounded/>
            </Badge>

            <Badge badgeContent={1000} color='error' showZero max={1100}>
                <MailRounded/>
            </Badge>

            <Badge variant='dot' color='warning' invisible={false}>
                <MailRounded/>
            </Badge>
        </Stack>
    )
}