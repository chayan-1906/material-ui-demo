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
import {MuiCard} from './components/MuiCard.tsx';
import {MuiAccordion} from './components/MuiAccordion.tsx';
import {MuiImageList} from "./components/MuiImageList.tsx";

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
                    <Route path='/autocomplete' element={<MuiAutoComplete/>}/>
                    <Route path='/box' element={<MuiBox/>}/>
                    <Route path='/card' element={<MuiCard/>}/>
                    <Route path='/accordion' element={<MuiAccordion/>}/>
                    <Route path='/images' element={<MuiImageList/>}/>
                    <Route path='*' element={<Navigate to='/' replace/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
