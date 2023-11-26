import {Autocomplete, Stack, TextField} from '@mui/material'
import {useState} from 'react'

type Skill = {
    id: string,
    label: string,
}

export const MuiAutoComplete = () => {
    const skills = ['HTML', 'CSS', 'Javascript', 'Typescript', 'React']
    const skillOptions = skills.map((skill, index) => ({
        id: index + 1,
        label: skill,
    }))
    const [value, setValue] = useState<string | null>(null)
    const [skill, setSkill] = useState<Skill | null>(null)
    console.log({value})
    console.log({skill})

    return (
        <Stack spacing={2} width='250px'>
            <Autocomplete
                renderInput={(params) => <TextField {...params} label='Skills' placeholder='Choose your skill'/>}
                options={skills}
                value={value}
                onChange={(_event: never, newValue: string | null) => setValue(newValue)}
                freeSolo
            />

            <Autocomplete
                renderInput={(params) => <TextField {...params} label='Skills' placeholder='Choose your skill'/>}
                options={skillOptions}
                value={skill}
                onChange={(_event: never, newValue: Skill | null) => setSkill(newValue)}
                freeSolo
            />
        </Stack>
    )
}