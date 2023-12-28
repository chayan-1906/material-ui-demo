import {Stack} from '@mui/material'
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from '@mui/lab'

export const MuiTimeline = () => {
    return (
        <Stack p={4}>
            <Timeline position='left'>
                <TimelineItem>
                    <TimelineOppositeContent color='text.secondary'>09:30 am</TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color='secondary' variant='outlined'/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        City A
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent color='text.secondary'>10:00 am</TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color='secondary' variant='outlined'/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        City B
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent color='text.secondary'>10:30 am</TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color='secondary' variant='outlined'/>
                    </TimelineSeparator>
                    <TimelineContent>
                        City C
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Stack>
    )
}