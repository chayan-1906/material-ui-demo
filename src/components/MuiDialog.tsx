import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack} from '@mui/material'
import {useState} from 'react'

export const MuiDialog = () => {
    const [openDialog, setOpenDialog] = useState(false)

    const handleClose = () => {
        setOpenDialog(false)
    }

    return (
        <Stack p={4}>
            <Button onClick={() => setOpenDialog(true)}>Open Dialog</Button>
            <Dialog open={openDialog} aria-labelledby='dialog-title' aria-describedby='dialog-content'
                    onClose={handleClose}>
                <DialogTitle id='dialog-title' textAlign='center'>Submit the test?</DialogTitle>
                <DialogContent id='dialog-content'>
                    Are you sure you want to submit the test? You will not be able to edit after submitting
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button autoFocus>Submit</Button>
                </DialogActions>
            </Dialog>
        </Stack>
    )
}