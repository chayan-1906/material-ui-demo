import {Box} from '@mui/material'
import {MuiNavbarMenu} from './components/MuiNavbarMenu.tsx'
import {Outlet, useLocation} from 'react-router-dom'
import {useEffect, useState} from 'react'

interface RouteTitles {
    [key: string]: string;
}

const SharedLayout = () => {
    const [appbarTitle, setAppbarTitle] = useState<string>('MUI Components')

    const location = useLocation()
    useEffect(() => {
        const routeTitles: RouteTitles = {
            '/': 'MUI Components',
            '/typography': 'MUI Typography',
            '/button': 'MUI Button',
            '/textfield': 'MUI Textfield',
            '/select': 'MUI Select',
            '/radio': 'MUI Radio',
            '/checkbox': 'MUI Checkbox',
            '/switch': 'MUI Switch',
            '/autocomplete': 'MUI Autocomplete',
            '/box': 'MUI Box',
            '/card': 'MUI Card',
            '/accordion': 'MUI Accordion',
            '/images': 'MUI Images',
            '/link': 'MUI Link',
            '/breadcrumbs': 'MUI Breadcrumbs',
            '/drawer': 'MUI Drawer',
            '/bottom-navbar': 'MUI Bottom Navbar',
            '/avatar': 'MUI Avatar',
            '/badge': 'MUI Badge',
            '/list': 'MUI List',
            '/chip': 'MUI Chip',
            '/tooltip': 'MUI Tooltip',
            '/table': 'MUI Table',
            '/alert': 'MUI Alert',
            '/snackbar': 'MUI Snackbar',
            '/dialog': 'MUI Dialog',
            '/progress': 'MUI Progress',
            '/skeleton': 'MUI Skeleton',
            '/loading-button': 'MUI Loading Button',
            '/date': 'MUI Date',
            '/tabs': 'MUI Tabs',
            '/timeline': 'MUI Timeline',
            '/masonry': 'MUI Masonry',
            '/responsiveness': 'MUI Responsiveness',
        }

        const currentRoute = Object.keys(routeTitles).find(route => location.pathname.endsWith(route))
        if (currentRoute) {
            document.title = routeTitles[currentRoute]
            setAppbarTitle(routeTitles[currentRoute])
        }
    }, [location])

    return (
        <Box>
            <MuiNavbarMenu title={appbarTitle}/>
            <Outlet/>
        </Box>
    )
}

export default SharedLayout