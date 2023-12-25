import {Stack} from '@mui/material'
import {LoadingButton} from '@mui/lab'
import {SaveRounded} from '@mui/icons-material'

export const MuiLoadingButton = () => {
    return (
        <Stack p={4} direction='row' spacing={2}>
            <LoadingButton variant='outlined'>Submit</LoadingButton>
            <LoadingButton loading variant='outlined'>Submit</LoadingButton>
            <LoadingButton variant='outlined' loadingIndicator='Loading...'>Fetch Data</LoadingButton>
            <LoadingButton loading variant='outlined' loadingIndicator='Loading...'>Fetch Data</LoadingButton>
            <LoadingButton variant='outlined' loadingPosition='start' startIcon={<SaveRounded/>}>Save</LoadingButton>
            <LoadingButton loading variant='outlined' loadingPosition='start' startIcon={<SaveRounded/>}>Save</LoadingButton>
        </Stack>
    )
}