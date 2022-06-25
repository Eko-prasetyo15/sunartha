import axios from 'axios'
import history from '../history'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const URL_LOGIN = `${process.env.REACT_APP_BASE_URL}/auth/login`;
const URL_BRANCH = `${process.env.REACT_APP_BASE_URL}/BranchReps`;

export const handlePush = (location) => {
    setTimeout(() => {
        history.push(location)
        window.location.reload()
    }, 2000);
}

export const isLoading = () => ({
    type: "IS_LOADING",
});
const request = axios.create({
    baseURL: URL,
});
const postDataSuccess = (datas) => ({
    type: 'POST_DATA_SUCCESS',
    datas,
});
const postDataFailure = (err) => ({
    type: 'POST_DATA_FAILURE',
    err,
});
const getBranchSuccess = (datas) => ({
    type: 'GET_BRANCH_SUCCESS',
    datas,
});
const getBranchFailure = (err) => ({
    type: 'GET_BRANCH_FAILURE',
    err,
});

export const postLogin = (username, password) => {
    return (dispatch) => {
        dispatch(isLoading())
        return request.post(URL_LOGIN, {
            username: username,
            password: password,
        },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(function (response) {
                dispatch(postDataSuccess(response.data));
                if (response) {
                    localStorage.setItem('auth-token', response.data.token)
                    localStorage.setItem('user-auth', response.data.employeeName)
                    toast.success('Login berhasil')
                    setTimeout(() => {
                        handlePush("/branch-list")
                    }, 200);
                }
            })
            .catch(function (error) {
                const err = error.response.data.errors[0]
                dispatch(postDataFailure(error))
                if (error.response.status === 400) {
                    toast.error(err, { theme: "colored" })
                }
                else if (error.response.status === 500) {
                    toast.error(err, { theme: "colored" })
                }
                else if (error.response.status === 401) {
                    toast.error(err, { theme: "colored" })
                }
                else if (error.response.status === 403) {
                    toast.error(err, { theme: "colored" })
                }
            })
            .finally(() => {
                setTimeout(() => {
                    dispatch(isLoading());
                }, 3000);
            });
    };
};

export const getBranch = (token) => {
    return (dispatch) => {
        dispatch(isLoading())
        return request.get(URL_BRANCH,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : `Bearer ${token}`
                },
            })
            .then(function (response) {
                dispatch(getBranchSuccess(response.data));
            })
            .catch(function (error) {
                const err = error.response.statusText
                dispatch(getBranchFailure(error))
                if (error.response.status === 400) {
                    toast.error(err, { theme: "colored" })
                }
                else if (error.response.status === 500) {
                    toast.error(err, { theme: "colored" })
                }
                else if (error.response.status === 401) {
                    toast.error(err, { theme: "colored" })
                    localStorage.removeItem("auth-token");
                }
                else if (error.response.status === 403) {
                    toast.error(err, { theme: "colored" })
                }
            })
            .finally(() => {
                setTimeout(() => {
                    dispatch(isLoading());
                }, 3000);
            });
    };
};



