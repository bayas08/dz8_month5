import React from 'react';
import {Box, ListItem, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

const UserCard = ({card}) => {
    return (
        <ListItem className='li' key={card?.id}>
            <NavLink to={`/about/${card?.id}`}>
                <Box className='card'>
                    <Typography variant='h2'>{card?.name}</Typography>
                </Box>
            </NavLink>
        </ListItem>
    );
};

export default UserCard;