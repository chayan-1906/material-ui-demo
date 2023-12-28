import {BottomNavigation, BottomNavigationAction} from '@mui/material'
import {FavoriteRounded, HomeRounded, PersonRounded} from '@mui/icons-material'
import {useState} from 'react'

export const MuiBottomNavbar = () => {
    const [value, setValue] = useState(0)

    return (
        <BottomNavigation sx={{width: '100%', position: 'absolute', bottom: 0}}
                          value={value}
                          showLabels
                          onChange={(_, newValue) => setValue(newValue)}>
            <BottomNavigationAction label='Home' icon={<HomeRounded/>}/>
            <BottomNavigationAction label='Favorites' icon={<FavoriteRounded/>}/>
            <BottomNavigationAction label='Person' icon={<PersonRounded/>}/>
        </BottomNavigation>
    )
}
