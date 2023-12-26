import {Box, Stack, Tab} from '@mui/material'
import {TabContext, TabList, TabPanel} from '@mui/lab'
import {useState} from 'react'
import {FavoriteRounded} from "@mui/icons-material";

export const MuiTabs = () => {
    const [activeTab, setActiveTab] = useState('1')

    const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
        setActiveTab(newValue)
    }

    return (
        <Stack p={4}>
            <TabContext value={activeTab}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <TabList
                        aria-label='Tabs example'
                        onChange={handleTabChange}
                        textColor='secondary'
                        indicatorColor='secondary'
                        // centered
                        variant='scrollable'
                        scrollButtons='auto'>
                        <Tab label='Tab One' value='1' icon={<FavoriteRounded/>} iconPosition='start'/>
                        <Tab label='Tab Two' value='2' disabled/>
                        <Tab label='Tab Three' value='3'/>
                        <Tab label='Tab Four' value='4'/>
                        <Tab label='Tab Five' value='5'/>
                        <Tab label='Tab Six' value='6'/>
                    </TabList>
                </Box>
                <TabPanel value='1'>Panel One</TabPanel>
                <TabPanel value='2'>Panel Two</TabPanel>
                <TabPanel value='3'>Panel Three</TabPanel>
            </TabContext>
        </Stack>
    )
}