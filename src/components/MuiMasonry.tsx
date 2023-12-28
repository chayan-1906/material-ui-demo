import {Accordion, AccordionDetails, AccordionSummary, Box, Paper, Stack, Typography} from '@mui/material'
import {Masonry} from '@mui/lab'
import {ExpandMoreRounded} from '@mui/icons-material'

export const MuiMasonry = () => {
    const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80]

    return (
        <Stack p={4}>
            <Box sx={{width: 500, minHeight: 400}}>
                <Masonry columns={4} spacing={1}>
                    {
                        heights.map((height, index) => (
                            <Paper key={index} sx={{
                                // display: 'flex',
                                // justifyContent: 'center',
                                // alignItems: 'center',
                                // height,
                                border: '1px solid',
                            }}>
                                <Accordion sx={{minHeight: height}}>
                                    <AccordionSummary expandIcon={<ExpandMoreRounded/>}>
                                        <Typography>Accordion {index + 1}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>Content</AccordionDetails>
                                </Accordion>
                            </Paper>
                        ))
                    }
                </Masonry>
            </Box>
        </Stack>
    )
}