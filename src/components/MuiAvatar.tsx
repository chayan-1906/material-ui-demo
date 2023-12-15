import {Avatar, AvatarGroup, Stack} from '@mui/material'

export const MuiAvatar = () => {
    return (
        <Stack spacing={4} p={4}>
            <Stack direction='row' spacing={1}>
                <Avatar sx={{bgcolor: 'primary.light'}}>BW</Avatar>
                <Avatar sx={{bgcolor: 'success.main'}}>CK</Avatar>
            </Stack>

            <Stack direction='row'>
                <AvatarGroup max={3}>
                    <Avatar sx={{bgcolor: 'primary.light'}}>BW</Avatar>
                    <Avatar sx={{bgcolor: 'success.main'}}>CK</Avatar>
                    <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' alt='Jane Doe'/>
                    <Avatar src='https://randomuser.me/api/portraits/women/51.jpg' alt='John Doe'/>
                </AvatarGroup>
            </Stack>

            <Stack direction='row' spacing={1}>
                <Avatar variant='rounded' sx={{bgcolor: 'primary.light', width: 48, height: 48}}>BW</Avatar>
                <Avatar variant='square' sx={{bgcolor: 'success.main', width: 48, height: 48}}>CK</Avatar>
            </Stack>
        </Stack>
    )
}