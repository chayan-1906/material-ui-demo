import {Box, Breadcrumbs, Link, Typography} from '@mui/material'
import {NavigateNextRounded} from '@mui/icons-material'

export const MuiBreadcrumbs = () => {
    return (
        <Box m={2}>
            <Breadcrumbs aria-label='breadcrumb' separator={<NavigateNextRounded fontSize='small'/>} maxItems={2}
                         itemsAfterCollapse={2} itemsBeforeCollapse={1}>
                <Link href='/#' underline='hover'>Home</Link>
                <Link href='/#' underline='hover'>Catalog</Link>
                <Link href='/#' underline='hover'>Accessories</Link>
                <Typography color='text.primary'>Shoes</Typography>
            </Breadcrumbs>
        </Box>
    )
}