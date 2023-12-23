import {IconButton, Stack, Tooltip} from '@mui/material'
import {DeleteRounded} from '@mui/icons-material'

export const MuiTooltip = () => {
    return (
        <Stack p={6} direction='row'>
            <Tooltip title='Delete' placement='top' arrow enterDelay={500} leaveDelay={200}>
                <IconButton>
                    <DeleteRounded color='error'/>
                </IconButton>
            </Tooltip>
        </Stack>
    )
}