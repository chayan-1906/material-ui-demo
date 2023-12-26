import {Link} from 'react-router-dom'
import {Box, Button,  Stack} from '@mui/material'
import {
    AccountCircleRounded,
    AddAlertRounded,
    BadgeTwoTone,
    CalendarMonthRounded,
    CheckBoxRounded,
    Collections,
    LaunchRounded,
    MenuRounded,
    RadioButtonCheckedTwoTone,
    SelectAllRounded,
    SmartButtonRounded,
    Stars,
    TableViewRounded,
    TextFieldsRounded,
    Textsms,
    ToggleOnRounded,
    ViewListRounded
} from '@mui/icons-material'
import './App.css'

export const Home = () => {
    return (
        <Box display='flex' justifyContent='center' p={4}>
            <Stack>
                <Stack spacing={4} direction='row'>
                    <Link to='/typography'>
                        <Button variant='contained' color='success' startIcon={<Textsms/>}
                                sx={{marginBottom: '16px'}}>MUI Typography</Button>
                    </Link>
                    <Link to='/button'>
                        <Button variant='outlined' color='primary' startIcon={<SmartButtonRounded/>}
                                sx={{marginBottom: '16px'}}>MUI Button</Button>
                    </Link>
                    <Link to='/textfield'>
                        <Button variant='contained' color='warning' startIcon={<TextFieldsRounded/>}
                                sx={{marginBottom: '16px'}}>MUI TextField</Button>
                    </Link>
                    <Link to='/select'>
                        <Button variant='outlined' color='info' startIcon={<SelectAllRounded/>}
                                sx={{marginBottom: '16px'}}>MUI Select</Button>
                    </Link>
                    <Link to='/radio-button'>
                        <Button variant='contained' color='error' startIcon={<RadioButtonCheckedTwoTone/>}
                                sx={{marginBottom: '16px'}}>MUI Radio Button</Button>
                    </Link>
                    <Link to='/checkbox'>
                        <Button variant='outlined' color='secondary' startIcon={<CheckBoxRounded/>}
                                sx={{marginBottom: '16px'}}>MUI Checkbox</Button>
                    </Link>
                </Stack>

                <Stack spacing={4} direction='row'>
                    <Link to='/switch'>
                        <Button variant='outlined' color='success' startIcon={<ToggleOnRounded/>}
                                sx={{marginBottom: '16px'}}>MUI Switch</Button>
                    </Link>
                    <Link to='/rating'>
                        <Button variant='contained' color='primary' startIcon={<Stars/>}
                                sx={{marginBottom: '16px'}}>MUI Rating</Button>
                    </Link>
                    <Link to='/autocomplete'>
                        <Button variant='outlined' color='warning' sx={{marginBottom: '16px'}}>MUI Autocomplete</Button>
                    </Link>
                    <Link to='/box'>
                        <Button variant='contained' color='info' sx={{marginBottom: '16px'}}>MUI Box/Stack/Grid</Button>
                    </Link>
                    <Link to='/card'>
                        <Button variant='outlined' color='error' sx={{marginBottom: '16px'}}>MUI Card</Button>
                    </Link>
                    <Link to='/accordion'>
                        <Button variant='contained' color='secondary' sx={{marginBottom: '16px'}}>MUI Accordion</Button>
                    </Link>
                </Stack>

                <Stack spacing={4} direction='row'>
                    <Link to='/images'>
                        <Button variant='contained' color='success' sx={{marginBottom: '16px'}} startIcon={<Collections/>}>MUI Image List</Button>
                    </Link>
                    <Link to='/navbar-menu'>
                        <Button variant='outlined' color='primary' sx={{marginBottom: '16px'}}>MUI Navbar</Button>
                    </Link>
                    <Link to='/link'>
                        <Button variant='contained' color='warning' startIcon={<LaunchRounded/>}
                                sx={{marginBottom: '16px'}}>MUI Link</Button>
                    </Link>
                    <Link to='/breadcrumbs'>
                        <Button variant='outlined' color='info' sx={{marginBottom: '16px'}}>MUI Breadcrumbs</Button>
                    </Link>
                    <Link to='/drawer'>
                        <Button variant='contained' color='error' startIcon={<MenuRounded/>}
                                sx={{marginBottom: '16px'}}>MUI Drawer</Button>
                    </Link>
                    <Link to='/bottom-navbar'>
                        <Button variant='contained' color='secondary' sx={{marginBottom: '16px'}}>MUI Bottom
                            Navbar</Button>
                    </Link>
                </Stack>

                <Stack spacing={8} direction='row'>
                    <Link to='/avatar'>
                        <Button variant='outlined' color='success' sx={{marginBottom: '16px'}}
                                startIcon={<AccountCircleRounded/>}>MUI Avatar</Button>
                    </Link>
                    <Link to='/badge'>
                        <Button variant='contained' color='primary' startIcon={<BadgeTwoTone/>}
                                sx={{marginBottom: '16px'}}>Mui Badge</Button>
                    </Link>
                    <Link to='/list'>
                        <Button variant='outlined' color='warning' sx={{marginBottom: '16px'}}
                                startIcon={<ViewListRounded/>}>MUI List</Button>
                    </Link>
                    <Link to='/chip'>
                        <Button variant='contained' color='info' sx={{marginBottom: '16px'}}>MUI Chip</Button>
                    </Link>
                    <Link to='/tooltip'>
                        <Button variant='outlined' color='error' sx={{marginBottom: '16px'}}>MUI Tooltip</Button>
                    </Link>
                    <Link to='/table'>
                        <Button variant='contained' color='secondary' sx={{marginBottom: '16px'}}
                                startIcon={<TableViewRounded/>}>MUI Table</Button>
                    </Link>
                </Stack>

                <Stack spacing={4} direction='row'>
                    <Link to='/alert'>
                        <Button variant='contained' color='success' sx={{marginBottom: '16px'}}
                                startIcon={<AddAlertRounded/>}>MUI Alert</Button>
                    </Link>
                    <Link to='/snackbar'>
                        <Button variant='outlined' color='primary' sx={{marginBottom: '16px'}}>MUI Snackbar</Button>
                    </Link>
                    <Link to='/dialog'>
                        <Button variant='contained' color='warning' sx={{marginBottom: '16px'}}>MUI Dialog</Button>
                    </Link>
                    <Link to='/progress'>
                        <Button variant='outlined' color='info' sx={{marginBottom: '16px'}}>MUI Progress</Button>
                    </Link>
                    <Link to='/skeleton'>
                        <Button variant='contained' color='error' sx={{marginBottom: '16px'}}>MUI Skeleton</Button>
                    </Link>
                    <Link to='/loading-button'>
                        <Button variant='contained' color='secondary' sx={{marginBottom: '16px'}}>MUI Loading
                            Button</Button>
                    </Link>
                </Stack>

                <Stack spacing={8} direction='row'>
                    <Link to='/date-time-picker'>
                        <Button variant='outlined' color='success' sx={{marginBottom: '16px'}}
                                startIcon={<CalendarMonthRounded/>}>Mui Date Time DateRange Picker</Button>
                    </Link>
                    <Link to='/tabs'>
                        <Button variant='contained' color='primary' sx={{marginBottom: '16px'}}>Mui Tabs</Button>
                    </Link>
                    <Link to='/'>
                        <Button variant='outlined' color='warning' sx={{marginBottom: '16px'}}
                                startIcon={<ViewListRounded/>}>MUI List???</Button>
                    </Link>
                    <Link to='/'>
                        <Button variant='contained' color='info' sx={{marginBottom: '16px'}}>MUI Chip???</Button>
                    </Link>
                    <Link to='/'>
                        <Button variant='outlined' color='error' sx={{marginBottom: '16px'}}>MUI Tooltip???</Button>
                    </Link>
                    <Link to='/'>
                        <Button variant='contained' color='secondary' sx={{marginBottom: '16px'}}
                                startIcon={<TableViewRounded/>}>MUI TABLE???</Button>
                    </Link>
                </Stack>
            </Stack>
        </Box>
    )
}