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

function App() {
    return (
        <div className='App'>
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
                    <Route path='*' element={<Navigate to='/' replace/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
