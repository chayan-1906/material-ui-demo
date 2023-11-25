import {Rating, Stack} from '@mui/material'
import {ChangeEvent, useState} from 'react'
import {FavoriteBorderRounded, FavoriteRounded} from '@mui/icons-material'

export const MuiRating = () => {
    const [value, setValue] = useState<number | null>(3)
    console.log({value})

    const handleChange = (event: ChangeEvent<NonNullable<unknown>>, newValue: number | null) => {
        setValue(newValue)
    }

    return (
        <Stack spacing={2} width='200px'>
            <Rating value={value} onChange={handleChange} precision={0.5} size='large'
                    icon={<FavoriteRounded fontSize='inherit' color='error'/>}
                    emptyIcon={<FavoriteBorderRounded fontSize='inherit'/>}
                    readOnly
                    // highlightSelectedOnly
            />
        </Stack>
    )
}