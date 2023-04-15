import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsers, usersSelect} from "../../redux/slices/usersSlice";
import {Box, CircularProgress, List} from "@mui/material";
import UserCard from "../../components/UserCard/UserCard";

const MainPage = () => {
    const dispatch = useDispatch()
    const {users, load} = useSelector(usersSelect)


    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    return (
        <Box>
            <List>
                {
                    !load
                    ?
                    users.map(i => <UserCard card={i}/>)
                    :
                    <Box>
                        <CircularProgress color='primary'/>
                    </Box>
                }
            </List>
        </Box>
    );
};

export default MainPage;