import {Box, Stack, styled} from '@mui/material'

const StyledBox = styled(Box)(({theme})=>({
    height: '250px',
    width: '250px',
    // backgroundColor: theme.status.danger,
    // backgroundColor: theme.palette.neutral?.main,
    backgroundColor: theme.palette.neutral?.darker,
}))

const MuiResponsiveness = () => {
    return (
        <Stack p={4} bgcolor='lightcoral' sx={{
            height: '300px',
            width: {
                xs: 100,
                sm: 200,
                md: 300,
                lg: 400,
                xl: 500,
            }
        }}>
            <StyledBox/>
        </Stack>
    )
}

export default MuiResponsiveness