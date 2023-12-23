import {Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'

const tableData = [
    {
        'id': 1,
        'first_name': 'Arron',
        'last_name': 'Swine',
        'email': 'aswine0@google.fr',
        'gender': 'Male',
        'ip_address': '5.184.208.200'
    },
    {
        'id': 2,
        'first_name': 'Hendrik',
        'last_name': 'Helling',
        'email': 'hhelling1@scientificamerican.com',
        'gender': 'Male',
        'ip_address': '207.87.87.185'
    },
    {
        'id': 3,
        'first_name': 'Goddard',
        'last_name': 'Dodell',
        'email': 'gdodell2@plala.or.jp',
        'gender': 'Genderfluid',
        'ip_address': '74.29.247.22'
    },
    {
        'id': 4,
        'first_name': 'Allyce',
        'last_name': 'Egdal',
        'email': 'aegdal3@taobao.com',
        'gender': 'Female',
        'ip_address': '54.97.195.151'
    },
    {
        'id': 5,
        'first_name': 'Galen',
        'last_name': 'Elcum',
        'email': 'gelcum4@printfriendly.com',
        'gender': 'Male',
        'ip_address': '170.33.183.97'
    },
    {
        'id': 6,
        'first_name': 'Bobbi',
        'last_name': 'Allkins',
        'email': 'ballkins5@state.tx.us',
        'gender': 'Female',
        'ip_address': '177.22.255.117'
    },
    {
        'id': 7,
        'first_name': 'Parke',
        'last_name': 'Eymer',
        'email': 'peymer6@g.co',
        'gender': 'Non-binary',
        'ip_address': '201.244.5.118'
    },
    {
        'id': 8,
        'first_name': 'Gerhardt',
        'last_name': 'Fibben',
        'email': 'gfibben7@timesonline.co.uk',
        'gender': 'Male',
        'ip_address': '30.37.54.211'
    },
    {
        'id': 9,
        'first_name': 'Bertie',
        'last_name': 'Blay',
        'email': 'bblay8@cam.ac.uk',
        'gender': 'Bigender',
        'ip_address': '95.27.92.84'
    },
    {
        'id': 10,
        'first_name': 'Alisander',
        'last_name': 'McParlin',
        'email': 'amcparlin9@wisc.edu',
        'gender': 'Male',
        'ip_address': '69.84.70.73'
    },
    {
        "id": 11,
        "first_name": "Anastasia",
        "last_name": "Tomashov",
        "email": "atomashova@lulu.com",
        "gender": "Female",
        "ip_address": "6.46.11.40"
    },
    {
        "id": 12,
        "first_name": "Codie",
        "last_name": "De Dei",
        "email": "cdedeib@mozilla.com",
        "gender": "Polygender",
        "ip_address": "252.183.79.93"
    },
    {
        "id": 13,
        "first_name": "Wolfy",
        "last_name": "Poleye",
        "email": "wpoleyec@clickbank.net",
        "gender": "Male",
        "ip_address": "22.207.203.79"
    },
    {
        "id": 14,
        "first_name": "Kleon",
        "last_name": "Aires",
        "email": "kairesd@phoca.cz",
        "gender": "Male",
        "ip_address": "133.144.158.50"
    },
    {
        "id": 15,
        "first_name": "Johnny",
        "last_name": "Ducker",
        "email": "jduckere@discuz.net",
        "gender": "Male",
        "ip_address": "9.118.2.153"
    },
    {
        "id": 16,
        "first_name": "Malory",
        "last_name": "Garroway",
        "email": "mgarrowayf@people.com.cn",
        "gender": "Female",
        "ip_address": "167.253.182.119"
    },
    {
        "id": 17,
        "first_name": "Ava",
        "last_name": "Tring",
        "email": "atringg@fda.gov",
        "gender": "Female",
        "ip_address": "122.188.222.142"
    },
    {
        "id": 18,
        "first_name": "Drake",
        "last_name": "Fosserd",
        "email": "dfosserdh@ycombinator.com",
        "gender": "Male",
        "ip_address": "37.201.69.58"
    },
    {
        "id": 19,
        "first_name": "Ned",
        "last_name": "Stanett",
        "email": "nstanetti@dot.gov",
        "gender": "Male",
        "ip_address": "41.212.19.163"
    },
    {
        "id": 20,
        "first_name": "Sholom",
        "last_name": "Le Fevre",
        "email": "slefevrej@sohu.com",
        "gender": "Male",
        "ip_address": "252.119.94.34"
    },
    {
        "id": 21,
        "first_name": "Bobbee",
        "last_name": "Angrove",
        "email": "bangrovek@time.com",
        "gender": "Female",
        "ip_address": "241.28.45.50"
    },
    {
        "id": 22,
        "first_name": "Alvis",
        "last_name": "Abbs",
        "email": "aabbsl@free.fr",
        "gender": "Male",
        "ip_address": "241.227.197.2"
    },
    {
        "id": 23,
        "first_name": "Tucky",
        "last_name": "Honeywood",
        "email": "thoneywoodm@dagondesign.com",
        "gender": "Male",
        "ip_address": "217.244.11.191"
    },
    {
        "id": 24,
        "first_name": "Janifer",
        "last_name": "McGinty",
        "email": "jmcgintyn@wordpress.com",
        "gender": "Female",
        "ip_address": "27.142.241.47"
    },
    {
        "id": 25,
        "first_name": "Seumas",
        "last_name": "Saddleton",
        "email": "ssaddletono@google.nl",
        "gender": "Male",
        "ip_address": "134.27.139.30"
    },
    {
        "id": 26,
        "first_name": "Allyn",
        "last_name": "Parry",
        "email": "aparryp@elegantthemes.com",
        "gender": "Female",
        "ip_address": "62.110.80.45"
    },
    {
        "id": 27,
        "first_name": "Cass",
        "last_name": "Mowne",
        "email": "cmowneq@chronoengine.com",
        "gender": "Female",
        "ip_address": "155.130.69.109"
    },
    {
        "id": 28,
        "first_name": "Nada",
        "last_name": "Ashwell",
        "email": "nashwellr@ycombinator.com",
        "gender": "Female",
        "ip_address": "17.25.56.98"
    },
    {
        "id": 29,
        "first_name": "Bertram",
        "last_name": "Matus",
        "email": "bmatuss@cargocollective.com",
        "gender": "Male",
        "ip_address": "13.163.73.103"
    },
    {
        "id": 30,
        "first_name": "Lina",
        "last_name": "Markwell",
        "email": "lmarkwellt@photobucket.com",
        "gender": "Female",
        "ip_address": "202.52.224.99"
    }
]

export const MuiTable = () => {
    return (
        <Stack p={4}>
            <TableContainer component={Paper} sx={{maxHeight: '600px'}}>
                <Table aria-label='simple table' stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell align='center'>Email</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            tableData.map((tableDatum) => (
                                    <TableRow key={tableDatum.id} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                        <TableCell>{tableDatum.id}</TableCell>
                                        <TableCell>{tableDatum.first_name}</TableCell>
                                        <TableCell>{tableDatum.last_name}</TableCell>
                                        <TableCell align='center'>{tableDatum.email}</TableCell>
                                    </TableRow>
                                )
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    )
}