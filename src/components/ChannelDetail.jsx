import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos, ChannelCard } from './'


const ChannelDetail = () => {
    const { id } = useParams();
    // useEffect(() => {
    //     fetchFromAPI
    // }, [id])

    // return (
    // )
}

export default ChannelDetail