import {Autocomplete, Stack, TextField} from '@mui/material'
import {useState} from 'react'

type Skill = {
    id: string,
    label: string,
}

export const MuiAutoComplete = () => {
    const skills = ['HTML', 'CSS', 'Javascript', 'Typescript', 'React']
    const skillOptions = skills.map((skill, index) => ({
        id: `${index + 1}`,
        label: skill,
    }))
    const [value, setValue] = useState<string | null>(null)
    const [skill, setSkill] = useState<Skill | null>(null)
    console.log({value})
    console.log({skill})

    return (
        <Stack p={4} spacing={2} width={300}>
            <Autocomplete
                renderInput={(params) => <TextField {...params} label='Skills' placeholder='Choose your skill'/>}
                options={skills}
                value={value}
                onChange={(_, newValue: string | null) => setValue(newValue)}
                freeSolo
            />

            <Autocomplete
                renderInput={(params) => <TextField {...params} label='Skills' placeholder='Choose your skill'/>}
                options={skillOptions}
                value={skill}
                onChange={(_event: any, newValue: Skill | null) => setSkill(newValue)}
            />
        </Stack>
    )
}