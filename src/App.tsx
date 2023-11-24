import './App.css'
import {MuiTypography} from './components/MuiTypography.tsx'
import {MuiButton} from './components/MuiButton.tsx'
import {MuiTextField} from './components/MuiTextField.tsx'
import {MuiSelect} from './components/MuiSelect.tsx'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import {Home} from './Home.tsx'

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
                    <Route path='*' element={<Navigate to="/" replace/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
