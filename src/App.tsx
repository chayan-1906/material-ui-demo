import './App.css'
import {MuiTypography} from './components/MuiTypography.tsx'
import {MuiButton} from './components/MuiButton.tsx'
import {MuiTextField} from './components/MuiTextField.tsx'
import {MuiSelect} from './components/MuiSelect.tsx'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import {Home} from './Home.tsx'
import {MuiRadioButton} from './components/MuiRadioButton.tsx'
import {MuiCheckbox} from './components/MuiCheckbox.tsx'
import {MuiSwitch} from './components/MuiSwitch.tsx'
import {MuiRating} from './components/MuiRating.tsx'
import {MuiAutoComplete} from './components/MuiAutoComplete.tsx'
import {MuiBox} from './components/MuiBox.tsx'
import {MuiCard} from './components/MuiCard.tsx'
import {MuiAccordion} from './components/MuiAccordion.tsx'
import {MuiImageList} from './components/MuiImageList.tsx'
import {MuiNavbarMenu} from './components/MuiNavbarMenu.tsx'
import {Box, colors, createTheme, ThemeProvider} from '@mui/material'
import {MuiLink} from './components/MuiLink.tsx'
import {MuiBreadcrumbs} from './components/MuiBreadcrumbs.tsx'
import {MuiDrawer} from './components/MuiDrawer.tsx'
import {MuiBottomNavbar} from './components/MuiBottomNavbar.tsx'
import {MuiAvatar} from './components/MuiAvatar.tsx'
import {MuiBadge} from './components/MuiBadge.tsx'
import {MuiList} from './components/MuiList.tsx'
import {MuiChip} from './components/MuiChip.tsx'
import {MuiTooltip} from './components/MuiTooltip.tsx'
import {MuiTable} from './components/MuiTable.tsx'
import {MuiAlert} from './components/MuiAlert.tsx'
import {MuiSkeleton} from './components/MuiSkeleton.tsx'
import {MuiLoadingButton} from './components/MuiLoadingButton.tsx'
import {MuiProgress} from './components/MuiProgress.tsx'
import {MuiDialog} from './components/MuiDialog.tsx'
import {MuiSnackbar} from './components/MuiSnackbar.tsx'
import {MuiDateTimePicker} from './components/MuiDateTimePicker.tsx'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {MuiTabs} from './components/MuiTabs.tsx'
import {MuiTimeline} from './components/MuiTimeline.tsx'
import {MuiMasonry} from './components/MuiMasonry.tsx'
import MuiResponsiveness from './components/MuiResponsiveness.tsx'

const theme = createTheme(({
    status: {
        danger: '#E53E3E',
    },
    palette: {
        secondary: {
            main: colors.orange[500],
        },
        neutral: {
            main: colors.grey[500],
            darker: colors.grey[700],
        },
    }
}))

function App() {
    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box className='App'>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/typography' element={<MuiTypography/>}/>
                            <Route path='/button' element={<MuiButton/>}/>
                            <Route path='/textfield' element={<MuiTextField/>}/>
                            <Route path='/select' element={<MuiSelect/>}/>
                            <Route path='/radio-button' element={<MuiRadioButton/>}/>
                            <Route path='/checkbox' element={<MuiCheckbox/>}/>
                            <Route path='/switch' element={<MuiSwitch/>}/>
                            <Route path='/rating' element={<MuiRating/>}/>
                            <Route path='/autocomplete' element={<MuiAutoComplete/>}/>
                            <Route path='/box' element={<MuiBox/>}/>
                            <Route path='/card' element={<MuiCard/>}/>
                            <Route path='/accordion' element={<MuiAccordion/>}/>
                            <Route path='/images' element={<MuiImageList/>}/>
                            <Route path='/navbar-menu' element={<MuiNavbarMenu/>}/>
                            <Route path='/link' element={<MuiLink/>}/>
                            <Route path='/breadcrumbs' element={<MuiBreadcrumbs/>}/>
                            <Route path='/drawer' element={<MuiDrawer/>}/>
                            <Route path='/bottom-navbar' element={<MuiBottomNavbar/>}/>
                            <Route path='/avatar' element={<MuiAvatar/>}/>
                            <Route path='/badge' element={<MuiBadge/>}/>
                            <Route path='/list' element={<MuiList/>}/>
                            <Route path='/chip' element={<MuiChip/>}/>
                            <Route path='/tooltip' element={<MuiTooltip/>}/>
                            <Route path='/table' element={<MuiTable/>}/>
                            <Route path='/alert' element={<MuiAlert/>}/>
                            <Route path='/snackbar' element={<MuiSnackbar/>}/>
                            <Route path='/dialog' element={<MuiDialog/>}/>
                            <Route path='/progress' element={<MuiProgress/>}/>
                            <Route path='/skeleton' element={<MuiSkeleton/>}/>
                            <Route path='/loading-button' element={<MuiLoadingButton/>}/>
                            <Route path='/date-time-picker' element={<MuiDateTimePicker/>}/>
                            <Route path='/tabs' element={<MuiTabs/>}/>
                            <Route path='/timeline' element={<MuiTimeline/>}/>
                            <Route path='/masonry' element={<MuiMasonry/>}/>
                            <Route path='/responsiveness' element={<MuiResponsiveness/>}/>
                            <Route path='*' element={<Navigate to='/' replace/>}/>
                        </Routes>
                    </BrowserRouter>
                </Box>
            </LocalizationProvider>
        </ThemeProvider>
    )
}

export default App