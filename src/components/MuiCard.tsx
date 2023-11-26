import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material'

export const MuiCard = () => {
    return (
        <Box width='300px'>
            <Card>
                <CardMedia component='img' height='140' image='https://source.unsplash.com/random'
                           alt='unsplash image'/>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        React
                    </Typography>
                    <Typography variant='body2' color='text.secondary' component='div'>
                        React is a javascript library for the building user interfaces. React can be used as a base in
                        the development of single-page or mobile applications
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    )
}