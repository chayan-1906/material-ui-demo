import {Box, Drawer, IconButton, Typography} from '@mui/material'
import React, {useState} from 'react'
import {MenuRounded} from '@mui/icons-material'

export const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<undefined | boolean>(false)

    return (
        <React.Fragment>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'
                        onClick={() => setIsDrawerOpen(true)}>
                <MenuRounded/>
            </IconButton>
            <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box p={2} width='250px' textAlign='center' role='presentation'>
                    <Typography variant='h6' component='div'>Side Panel</Typography>
                </Box>
            </Drawer>
        </React.Fragment>
    )
}