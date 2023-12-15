import {Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText} from '@mui/material'
import {MailRounded} from '@mui/icons-material'

export const MuiList = () => {
    return (
        <Box p={4} sx={{width: '400px', bgcolor: '#ffe082'}}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemAvatar><Avatar><MailRounded/></Avatar></ListItemAvatar>
                        <ListItemText primary='List Item 1' secondary='Secondary Text 1'/>
                    </ListItemButton>
                </ListItem>
                <Divider/>

                <ListItem>
                    <ListItemAvatar><Avatar><MailRounded/></Avatar></ListItemAvatar>
                    <ListItemText primary='List Item 2' secondary='Secondary Text 2'/>
                </ListItem>
                <Divider/>

                <ListItem>
                    <ListItemAvatar><Avatar><MailRounded/></Avatar></ListItemAvatar>
                    <ListItemText primary='List Item 3' secondary='Secondary Text 3'/>
                </ListItem>
                <Divider/>

                <ListItem>
                    <ListItemAvatar><Avatar><MailRounded/></Avatar></ListItemAvatar>
                    <ListItemText primary='List Item 4' secondary='Secondary Text 4'/>
                </ListItem>
            </List>
        </Box>
    )
}