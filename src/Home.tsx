import {Link} from 'react-router-dom'
import {Button, Grid} from '@mui/material'
import {
    AccountCircleRounded,
    AddAlertRounded,
    BadgeTwoTone,
    CalendarMonthRounded,
    CheckBoxRounded,
    Collections,
    FormatSizeRounded,
    LaunchRounded,
    MenuRounded,
    RadioButtonCheckedTwoTone,
    SelectAllRounded,
    Stars,
    TableViewRounded,
    TextFieldsRounded,
    ToggleOnRounded,
    ViewListRounded
} from '@mui/icons-material'
import './App.css'

const Home = () => {
    const pages = [
        {
            path: '/typography', component: () => (
                <Button variant='contained' color='success' startIcon={<FormatSizeRounded/>}
                        sx={{marginBottom: '16px'}}>
                    MUI Typography
                </Button>
            )
        },
        {
            path: '/button', component: () => (
                <Button variant='outlined' color='primary' sx={{marginBottom: '16px'}}>MUI Button</Button>
            )
        },
        {
            path: '/textfield', component: () => (
                <Button variant='contained' color='warning' startIcon={<TextFieldsRounded/>}
                        sx={{marginBottom: '16px'}}>
                    MUI TextField
                </Button>
            )
        },
        {
            path: '/select', component: () => (
                <Button variant='outlined' color='info' startIcon={<SelectAllRounded/>} sx={{marginBottom: '16px'}}>
                    MUI Select
                </Button>
            )
        },
        {
            path: '/radio-button', component: () => (
                <Button variant='contained' color='error' startIcon={<RadioButtonCheckedTwoTone/>}
                        sx={{marginBottom: '16px'}}>
                    MUI Radio Button
                </Button>
            )
        },
        {
            path: '/checkbox', component: () => (
                <Button variant='outlined' color='secondary' startIcon={<CheckBoxRounded/>}
                        sx={{marginBottom: '16px'}}>
                    MUI Checkbox
                </Button>
            )
        },
        {
            path: '/switch', component: () => (
                <Button variant='outlined' color='success' startIcon={<ToggleOnRounded/>} sx={{marginBottom: '16px'}}>
                    MUI Switch
                </Button>
            )
        },
        {
            path: '/rating', component: () => (
                <Button variant='contained' color='primary' startIcon={<Stars/>} sx={{marginBottom: '16px'}}>
                    MUI Rating
                </Button>
            )
        },
        {
            path: '/autocomplete', component: () => (
                <Button variant='outlined' color='warning' sx={{marginBottom: '16px'}}>
                    MUI Autocomplete
                </Button>
            )
        },
        {
            path: '/box', component: () => (
                <Button variant='contained' color='info' sx={{marginBottom: '16px'}}>
                    MUI Box/Stack/Grid
                </Button>
            )
        },
        {
            path: '/card', component: () => (
                <Button variant='outlined' color='error' sx={{marginBottom: '16px'}}>
                    MUI Card
                </Button>
            )
        },
        {
            path: '/accordion', component: () => (
                <Button variant='contained' color='secondary' sx={{marginBottom: '16px'}}>
                    MUI Accordion
                </Button>
            )
        },
        {
            path: '/images', component: () => (
                <Button variant='contained' color='success' sx={{marginBottom: '16px'}} startIcon={<Collections/>}>
                    MUI Image List
                </Button>
            )
        },
        {
            path: '/navbar-menu', component: () => (
                <Button variant='outlined' color='primary' sx={{marginBottom: '16px'}}>
                    MUI Navbar
                </Button>
            )
        },
        {
            path: '/link', component: () => (
                <Button variant='contained' color='warning' startIcon={<LaunchRounded/>} sx={{marginBottom: '16px'}}>
                    MUI Link
                </Button>
            )
        },
        {
            path: '/breadcrumbs', component: () => (
                <Button variant='outlined' color='info' sx={{marginBottom: '16px'}}>
                    MUI Breadcrumbs
                </Button>
            )
        },
        {
            path: '/drawer', component: () => (
                <Button variant='contained' color='error' startIcon={<MenuRounded/>} sx={{marginBottom: '16px'}}>
                    MUI Drawer
                </Button>
            )
        },
        {
            path: '/bottom-navbar', component: () => (
                <Button variant='contained' color='secondary' sx={{marginBottom: '16px'}}>
                    MUI Bottom Navbar
                </Button>
            )
        },
        {
            path: '/avatar', component: () => (
                <Button variant='outlined' color='success' sx={{marginBottom: '16px'}}
                        startIcon={<AccountCircleRounded/>}>
                    MUI Avatar
                </Button>
            )
        },
        {
            path: '/badge', component: () => (
                <Button variant='contained' color='primary' startIcon={<BadgeTwoTone/>} sx={{marginBottom: '16px'}}>
                    MUI Badge
                </Button>
            )
        },
        {
            path: '/list', component: () => (
                <Button variant='outlined' color='warning' sx={{marginBottom: '16px'}} startIcon={<ViewListRounded/>}>
                    MUI List
                </Button>
            )
        },
        {
            path: '/chip', component: () => (
                <Button variant='contained' color='info' sx={{marginBottom: '16px'}}>
                    MUI Chip
                </Button>
            )
        },
        {
            path: '/tooltip', component: () => (
                <Button variant='outlined' color='error' sx={{marginBottom: '16px'}}>
                    MUI Tooltip
                </Button>
            )
        },
        {
            path: '/table', component: () => (
                <Button variant='contained' color='secondary' sx={{marginBottom: '16px'}}
                        startIcon={<TableViewRounded/>}>
                    MUI Table
                </Button>
            )
        },
        {
            path: '/alert', component: () => (
                <Button variant='contained' color='success' sx={{marginBottom: '16px'}} startIcon={<AddAlertRounded/>}>
                    MUI Alert
                </Button>
            )
        },
        {
            path: '/snackbar', component: () => (
                <Button variant='outlined' color='primary' sx={{marginBottom: '16px'}}>
                    MUI Snackbar
                </Button>
            )
        },
        {
            path: '/dialog', component: () => (
                <Button variant='contained' color='warning' sx={{marginBottom: '16px'}}>
                    MUI Dialog
                </Button>
            )
        },
        {
            path: '/progress', component: () => (
                <Button variant='outlined' color='info' sx={{marginBottom: '16px'}}>
                    MUI Progress
                </Button>
            )
        },
        {
            path: '/skeleton', component: () => (
                <Button variant='contained' color='error' sx={{marginBottom: '16px'}}>
                    MUI Skeleton
                </Button>
            )
        },
        {
            path: '/loading-button', component: () => (
                <Button variant='contained' color='secondary' sx={{marginBottom: '16px'}}>
                    MUI Loading Button
                </Button>
            )
        },
        {
            path: '/date-time-picker', component: () => (
                <Button variant='outlined' color='success' sx={{marginBottom: '16px'}}
                        startIcon={<CalendarMonthRounded/>}>
                    MUI Date Time DateRange Picker
                </Button>
            )
        },
        {
            path: '/tabs', component: () => (
                <Button variant='contained' color='primary' sx={{marginBottom: '16px'}}>
                    MUI Tabs
                </Button>
            )
        },
        {
            path: '/timeline', component: () => (
                <Button variant='outlined' color='warning' sx={{marginBottom: '16px'}} startIcon={<ViewListRounded/>}>
                    MUI Timeline
                </Button>
            )
        },
        {
            path: '/masonry', component: () => (
                <Button variant='contained' color='info' sx={{marginBottom: '16px'}}>
                    MUI Masonry
                </Button>
            )
        },
        {
            path: '/responsiveness', component: () => (
                <Button variant='outlined' color='error' sx={{marginBottom: '16px'}}>
                    MUI Responsiveness
                </Button>
            )
        },
        {
            path: '/attendance', component: () => (
                <Button variant='outlined' color='error' sx={{marginBottom: '16px'}}>
                    Attendance Demo
                </Button>
            )
        }
    ]

    return (
        <Grid container spacing={2} p={4} justifyContent='space-around'>
            {pages.map((page, index) => (
                <Grid item key={index}>
                    <Link to={page.path}>{page.component()}</Link>
                </Grid>
            ))}
        </Grid>
    )
}

export default Home