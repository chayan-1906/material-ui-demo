import {Box, Button, Stack} from '@mui/material'
import {Textsms} from '@mui/icons-material'
import {Link} from 'react-router-dom'

export const Home = () => {
    return (
        <Box width='200px'>
            <Stack spacing={2}>
                <Link to='/typography'>
                    <Button variant='contained' color='success' startIcon={<Textsms/>}
                            sx={{marginBottom: '16px'}}>MUI Typography</Button>
                </Link>
                <Link to='/button'>
                    <Button variant='outlined' color='success' startIcon={<Textsms/>}
                            sx={{marginBottom: '16px'}}>MUI Button</Button>
                </Link>
                <Link to='/textfield'>
                    <Button variant='contained' color='success' startIcon={<Textsms/>}
                            sx={{marginBottom: '16px'}}>MUI TextField</Button>
                </Link>
                <Link to='/select'>
                    <Button variant='outlined' color='success' startIcon={<Textsms/>}
                            sx={{marginBottom: '16px'}}>MUI Select</Button>
                </Link>
            </Stack>
        </Box>
    )
}