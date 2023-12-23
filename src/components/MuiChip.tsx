import {Avatar, Chip, Stack} from "@mui/material";
import {Face2} from "@mui/icons-material";
import {useState} from "react";

export const MuiChip = () => {
    const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3'])

    const handleDelete = (chipToDelete: string) => {
        setChips(chips => chips.filter(chip => chip !== chipToDelete))
    }

    return (
        <Stack direction='row' spacing={1} p={4}>
            <Chip label='Chip' color='primary' size='small' icon={<Face2/>}/>
            <Chip label='Chip Outlined' color='secondary' size='small' variant='outlined' avatar={<Avatar>V</Avatar>}/>
            <Chip label='Click' color='success' onClick={() => alert('clicked')}/>
            <Chip label='Delete' color='error' onClick={() => alert('clicked')}
                  onDelete={() => alert('Delete Handler clicked')}/>

            {
                chips.map((chip) => {
                    return (
                        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)}/>
                    )
                })
            }
        </Stack>
    )
}