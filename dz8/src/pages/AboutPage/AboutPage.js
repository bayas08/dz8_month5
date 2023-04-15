import React, {useEffect} from 'react';
import {Box, Button, CircularProgress, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getUser, userSelect} from "../../redux/slices/userSlice";
import {useNavigate, useParams} from "react-router-dom";

const AboutPage = () => {
    const dispatch = useDispatch()
    const {user, load} = useSelector(userSelect)
    const {id} = useParams()
    const navigate = useNavigate()

    const back = () => navigate(-1)


    useEffect(() => {
        dispatch(getUser(id))
    }, [dispatch, id])
    return <>
        {
            !load
            ?
            <Box>
                <Button variant='contained' onClick={back}>Back</Button>
                <Typography variant='h2'>{user?.name}</Typography>
                <Typography>{user?.username}</Typography>
                <Typography>{user?.email}</Typography>
                <Box>Addres:
                    <Typography>Street: {user?.address?.street}</Typography>
                    <Typography>City: {user?.address?.city}</Typography>
                </Box>
                <Box>Phone:
                    <Typography>{user?.phone}</Typography>
                </Box>
            </Box>
            :
            <Box>
                <CircularProgress color='secondary'/>
            </Box>
        }
    </>
};

export default AboutPage;