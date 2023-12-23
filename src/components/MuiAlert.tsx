import {Alert, AlertTitle, Button, Stack} from '@mui/material'
import {ChecklistOutlined} from '@mui/icons-material'

export const MuiAlert = () => {
    return (
        <Stack p={4} spacing={2}>
            <Alert severity='error'>This is an error alert</Alert>
            <Alert severity='warning'>This is an warning alert</Alert>
            <Alert severity='info'>This is an info alert</Alert>
            <Alert severity='success'>This is a success alert</Alert>

            <Alert variant='outlined' severity='error'>This is an error alert</Alert>
            <Alert variant='outlined' severity='warning'>This is an warning alert</Alert>
            <Alert variant='outlined' severity='info'>This is an info alert</Alert>
            <Alert variant='outlined' severity='success'>This is a success alert</Alert>

            <Alert variant='filled' severity='error' onClose={() => alert('Close alert')}>
                <AlertTitle>Error</AlertTitle>
                This is an error alert
            </Alert>
            <Alert variant='filled' severity='warning'><AlertTitle>Warning</AlertTitle>This is an warning alert</Alert>
            <Alert variant='filled' severity='info'><AlertTitle>Info</AlertTitle>This is an info alert</Alert>
            <Alert variant='filled' severity='success' icon={<ChecklistOutlined/>}
                   action={<Button color='inherit' size='small'>UNDO</Button>}>
                <AlertTitle>Success</AlertTitle>
                This is a success alert
            </Alert>
        </Stack>
    )
}