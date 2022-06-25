import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getBranch, handlePush } from '../Redux/Action';
import BasicModal from '../Component/Modal';


export default function BranchList() {
    const isLogin = localStorage.getItem("auth-token")
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({})
  
    useEffect(() => {
        dispatch(getBranch(isLogin))
    }, [isLogin])
    const branch_data = useSelector((state) => state.ReduxData.branch)
    const handleOpen = (row) => {
        setOpen(true);
        setData(row)
    }
    const handleClose = () => setOpen(false);
    return (
        <>
            {isLogin ? (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>No</StyledTableCell>
                                <StyledTableCell align="center">Branch Name</StyledTableCell>
                                <StyledTableCell align="center">Branch ID</StyledTableCell>
                                <StyledTableCell align="center">Addres</StyledTableCell>
                                <StyledTableCell align="center">Attention</StyledTableCell>
                                <StyledTableCell align="center">Screen No</StyledTableCell>
                                <StyledTableCell align="center">Registration ID</StyledTableCell>
                                <StyledTableCell align="center"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {branch_data.map((row, idx) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {idx + 1}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.BranchName}</StyledTableCell>
                                    <StyledTableCell align="center">{row.BranchID}</StyledTableCell>
                                    <StyledTableCell align="left">
                                        <p>{row.BranchDetails.AddressLine1}</p>
                                        <p>{row.BranchDetails.AddressLine2}</p>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.BranchDetails.Attention}</StyledTableCell>
                                    <StyledTableCell align="center">{row.BranchDetails.ScreenNo}</StyledTableCell>
                                    <StyledTableCell align="center">{row.BranchDetails.TaxRegistrationID}</StyledTableCell>
                                    <StyledTableCell align="center"> <Button size="small" onClick={() => handleOpen(row.BranchDetails)}>See Detail</Button></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <BasicModal
                        open={open}
                        handleClose={handleClose}
                        handleOpen={handleOpen} 
                        data={data}/>
                </TableContainer>
            ) : (
                handlePush('/')
            )
            }

        </>
    );
}
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));