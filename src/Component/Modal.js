import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {


    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            textAlign: 'center',
                            marginBottom: '30px'
                        }}
                    >
                        BRANCH DETAIL
                    </Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <strong >Access Role : </strong>
                            <span>{props.data.AccessRole}</span>
                        </Grid>
                        <Grid item xs={6}>
                            <strong >Account Name: </strong>
                            <span>{props.data.AccountName}</span>
                        </Grid>
                        <Grid item xs={6}>
                            <strong >Address: </strong>
                            <span>{props.data.AddressLine1}{props.data.AddressLine2}</span>
                        </Grid>
                        <Grid item xs={6}>
                            <strong >Attention: </strong>
                            <span>{props.data.Attention}</span>
                        </Grid>
                        <Grid item xs={6}>
                            <strong >City: </strong>
                            <span>{props.data.City}</span>
                        </Grid>
                        <Grid item xs={6}>
                            <strong >Country: </strong>
                            <span>{props.data.DefaultCountry}</span>
                        </Grid>
                        <Grid item xs={6}>
                            <strong >Email: </strong>
                            <span>{props.data.Email}</span>
                        </Grid>
                        <Grid item xs={6}>
                            <strong >Entity Usage Type: </strong>
                            <span>{props.data.EntityUsageType}</span>
                        </Grid>
                        <Grid item xs={6}>
                            <strong >Last Modified: </strong>
                            <span>{props.data.LastModifiedDateTime}</span>
                        </Grid>
                        <Grid item xs={6}>
                            <strong >Legal Name: </strong>
                            <span>{props.data.LegalName}</span>
                        </Grid>
                        <Grid item xs={6}>
                            <strong >Screen No: </strong>
                            <span>{props.data.ScreenNo}</span>
                        </Grid>
                        <Grid item xs={6}>
                            <strong >Tax Registration: </strong>
                            <span>{props.data.TaxRegistrationID}</span>
                        </Grid>
                        <Grid item xs={6}>
                            <strong >Web: </strong>
                            <span>{props.data.Web}</span>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
