import {Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import {CheckBox, CheckBoxOutlineBlankRounded} from '@mui/icons-material'
import {useState} from "react";

const tableData = [
    {
        'roll': 1,
        'name': 'Arron',
        'last_name': 'Swine',
        'email': 'aswine0@google.fr',
        'gender': 'Male',
        'isPresent': true,
        'ip_address': '5.184.208.200'
    },
    {
        'roll': 2,
        'name': 'Hendrik',
        'last_name': 'Helling',
        'email': 'hhelling1@scientificamerican.com',
        'gender': 'Male',
        'isPresent': false,
        'ip_address': '207.87.87.185'
    },
    {
        'roll': 3,
        'name': 'Goddard',
        'last_name': 'Dodell',
        'email': 'gdodell2@plala.or.jp',
        'gender': 'Male',
        'isPresent': true,
        'ip_address': '74.29.247.22'
    },
    {
        'roll': 4,
        'name': 'Allyce',
        'last_name': 'Egdal',
        'email': 'aegdal3@taobao.com',
        'gender': 'Female',
        'isPresent': true,
        'ip_address': '54.97.195.151'
    },
    {
        'roll': 5,
        'name': 'Galen',
        'last_name': 'Elcum',
        'email': 'gelcum4@printfriendly.com',
        'gender': 'Male',
        'isPresent': true,
        'ip_address': '170.33.183.97'
    },
    {
        'roll': 6,
        'name': 'Bobbi',
        'last_name': 'Allkins',
        'email': 'ballkins5@state.tx.us',
        'gender': 'Female',
        'isPresent': false,
        'ip_address': '177.22.255.117'
    },
    {
        'roll': 7,
        'name': 'Parke',
        'last_name': 'Eymer',
        'email': 'peymer6@g.co',
        'gender': 'Female',
        'isPresent': true,
        'ip_address': '201.244.5.118'
    },
    {
        'roll': 8,
        'name': 'Gerhardt',
        'last_name': 'Fibben',
        'email': 'gfibben7@timesonline.co.uk',
        'gender': 'Male',
        'isPresent': false,
        'ip_address': '30.37.54.211'
    },
    {
        'roll': 9,
        'name': 'Bertie',
        'last_name': 'Blay',
        'email': 'bblay8@cam.ac.uk',
        'gender': 'Female',
        'isPresent': false,
        'ip_address': '95.27.92.84'
    },
    {
        'roll': 10,
        'name': 'Alisander',
        'last_name': 'McParlin',
        'email': 'amcparlin9@wisc.edu',
        'gender': 'Male',
        'isPresent': true,
        'ip_address': '69.84.70.73'
    },
    {
        'roll': 11,
        'name': 'Anastasia',
        'last_name': 'Tomashov',
        'email': 'atomashova@lulu.com',
        'gender': 'Female',
        'isPresent': false,
        'ip_address': '6.46.11.40'
    },
    {
        'roll': 12,
        'name': 'Codie',
        'last_name': 'De Dei',
        'email': 'cdedeib@mozilla.com',
        'gender': 'Female',
        'isPresent': false,
        'ip_address': '252.183.79.93'
    },
    {
        'roll': 13,
        'name': 'Wolfy',
        'last_name': 'Poleye',
        'email': 'wpoleyec@clickbank.net',
        'gender': 'Male',
        'isPresent': true,
        'ip_address': '22.207.203.79'
    },
    {
        'roll': 14,
        'name': 'Kleon',
        'last_name': 'Aires',
        'email': 'kairesd@phoca.cz',
        'gender': 'Male',
        'isPresent': false,
        'ip_address': '133.144.158.50'
    },
    {
        'roll': 15,
        'name': 'Johnny',
        'last_name': 'Ducker',
        'email': 'jduckere@discuz.net',
        'gender': 'Male',
        'isPresent': true,
        'ip_address': '9.118.2.153'
    },
    {
        'roll': 16,
        'name': 'Malory',
        'last_name': 'Garroway',
        'email': 'mgarrowayf@people.com.cn',
        'gender': 'Female',
        'isPresent': false,
        'ip_address': '167.253.182.119'
    },
    {
        'roll': 17,
        'name': 'Ava',
        'last_name': 'Tring',
        'email': 'atringg@fda.gov',
        'gender': 'Female',
        'isPresent': false,
        'ip_address': '122.188.222.142'
    },
    {
        'roll': 18,
        'name': 'Drake',
        'last_name': 'Fosserd',
        'email': 'dfosserdh@ycombinator.com',
        'gender': 'Male',
        'isPresent': false,
        'ip_address': '37.201.69.58'
    },
    {
        'roll': 19,
        'name': 'Ned',
        'last_name': 'Stanett',
        'email': 'nstanetti@dot.gov',
        'gender': 'Male',
        'isPresent': false,
        'ip_address': '41.212.19.163'
    },
    {
        'roll': 20,
        'name': 'Sholom',
        'last_name': 'Le Fevre',
        'email': 'slefevrej@sohu.com',
        'gender': 'Male',
        'isPresent': false,
        'ip_address': '252.119.94.34'
    },
    {
        'roll': 21,
        'name': 'Bobbee',
        'last_name': 'Angrove',
        'email': 'bangrovek@time.com',
        'gender': 'Female',
        'isPresent': false,
        'ip_address': '241.28.45.50'
    },
    {
        'roll': 22,
        'name': 'Alvis',
        'last_name': 'Abbs',
        'email': 'aabbsl@free.fr',
        'gender': 'Male',
        'isPresent': false,
        'ip_address': '241.227.197.2'
    },
    {
        'roll': 23,
        'name': 'Tucky',
        'last_name': 'Honeywood',
        'email': 'thoneywoodm@dagondesign.com',
        'gender': 'Male',
        'isPresent': false,
        'ip_address': '217.244.11.191'
    },
    {
        'roll': 24,
        'name': 'Janifer',
        'last_name': 'McGinty',
        'email': 'jmcgintyn@wordpress.com',
        'gender': 'Female',
        'isPresent': false,
        'ip_address': '27.142.241.47'
    },
    {
        'roll': 25,
        'name': 'Seumas',
        'last_name': 'Saddleton',
        'email': 'ssaddletono@google.nl',
        'gender': 'Male',
        'isPresent': false,
        'ip_address': '134.27.139.30'
    },
    {
        'roll': 26,
        'name': 'Allyn',
        'last_name': 'Parry',
        'email': 'aparryp@elegantthemes.com',
        'gender': 'Female',
        'isPresent': false,
        'ip_address': '62.110.80.45'
    },
    {
        'roll': 27,
        'name': 'Cass',
        'last_name': 'Mowne',
        'email': 'cmowneq@chronoengine.com',
        'gender': 'Female',
        'isPresent': false,
        'ip_address': '155.130.69.109'
    },
    {
        'roll': 28,
        'name': 'Nada',
        'last_name': 'Ashwell',
        'email': 'nashwellr@ycombinator.com',
        'gender': 'Female',

        'ip_address': '17.25.56.98'
    },
    {
        'roll': 29,
        'name': 'Bertram',
        'last_name': 'Matus',
        'email': 'bmatuss@cargocollective.com',
        'gender': 'Male',
        'isPresent': false,
        'ip_address': '13.163.73.103'
    },
    {
        'roll': 30,
        'name': 'Lina',
        'last_name': 'Markwell',
        'email': 'lmarkwellt@photobucket.com',
        'gender': 'Female',
        'isPresent': false,
        'ip_address': '202.52.224.99'
    }
]

export const AttendanceDemo = () => {
    const [tableDataa, setTableDataa] = useState(tableData)

    const handleisPresent = (index: number) => {
        const newData = [...tableDataa]
        newData[index] = {
            ...newData[index],
            isPresent: !newData[index].isPresent,
        }
        setTableDataa(newData)
    }

    return (
        <Stack p={4}>
            <TableContainer component={Paper} sx={{maxHeight: '90vh'}}>
                <Table aria-label='simple table' stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>Roll</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>Name</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>Email</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>Gender</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            tableDataa.map((tableDatum, index) => (
                                    <TableRow key={tableDatum.roll}
                                              sx={{'&:last-child td, &:last-child th': {border: 0}, cursor: 'pointer'}}
                                              onClick={() => {
                                                  console.log(tableDatum.name)
                                                  handleisPresent(index)
                                              }}>
                                        <TableCell>
                                            {
                                                tableDatum.isPresent ? <CheckBox color='success'/> :
                                                    <CheckBoxOutlineBlankRounded/>
                                            }
                                        </TableCell>
                                        <TableCell>{tableDatum.roll}</TableCell>
                                        <TableCell>{tableDatum.name}</TableCell>
                                        <TableCell>{tableDatum.email}</TableCell>
                                        <TableCell>{tableDatum.gender}</TableCell>
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