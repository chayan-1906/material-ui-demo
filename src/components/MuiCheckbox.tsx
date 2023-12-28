import {Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel} from '@mui/material'
import {ChangeEvent, useState} from 'react'
import {Bookmark, BookmarkBorder} from '@mui/icons-material'

export const MuiCheckbox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false)
    const [skills, setSkills] = useState<string[]>([])

    console.log({acceptTnC})
    console.log({skills})

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked)
    }

    const handleSkillChange = (event: ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if (index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value))
        }
    }

    return (
        <Box>
            <Box>
                <FormControlLabel
                    control={<Checkbox size='small' color='secondary' checked={acceptTnC} onChange={handleChange}/>}
                    label={'I accept terms and conditions'}/>
            </Box>

            <Box>
                <Checkbox icon={<BookmarkBorder/>} checkedIcon={<Bookmark/>} checked={acceptTnC}
                          onChange={handleChange}/>
            </Box>

            <Box>
                <FormControl error>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox value='html' checked={skills.includes('html')}
                                               color='warning'
                                               onChange={handleSkillChange}/>}
                            label={'HTML'}/>
                        <FormControlLabel control={<Checkbox value='css' checked={skills.includes('css')}
                                                             color='secondary'
                                                             onChange={handleSkillChange}/>}
                                          label={'CSS'}/>
                        <FormControlLabel
                            control={<Checkbox value='flutter' checked={skills.includes('flutter')}
                                               color='success'
                                               onChange={handleSkillChange}/>}
                            label={'Flutter'}/>
                        <FormControlLabel
                            control={<Checkbox value='javascript' checked={skills.includes('javascript')}
                                               color='default'
                                               onChange={handleSkillChange}/>}
                            label={'Javascript'}/>
                    </FormGroup>
                    <FormHelperText>Invalid selection</FormHelperText>
                </FormControl>
            </Box>
        </Box>
    )
}