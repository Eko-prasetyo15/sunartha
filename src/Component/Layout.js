import React from 'react';
import PropTypes from "prop-types";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MenuAppBar from './Navbar';
import { ToastContainer } from 'react-toastify';


const propTypes = {
    children: PropTypes.node.isRequired,
};

const defaultProps = {};

export default function Layout(props) {
    const { children } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <MenuAppBar />
            <Container fixed>
                <Box mt={3}>{children}</Box>
                <ToastContainer/>
            </Container>
        </React.Fragment>
    );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;