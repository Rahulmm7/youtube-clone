import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'

import { demoProfilePicture } from '../utils/constants'


const ChannelCard = ({ channelDetail }) => {
    return (
        <Box
            sx={{
                borderRadius: '0',
                boxShadow: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // width: { xs: '356px', md: '320px' },
                height: '326px',
                margin: 'auto'

            }}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{
                    display: "flex", flexDirection: 'coloum',
                    justifyContent: "center", alignItems: "center",
                    textAlign: "center"
                    , color: "#fff"
                }}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            borderRadius: '50%',
                            height: '180px',
                            width: '180px',
                            mb: '2',
                            border: '1px solid #1e1e1e'
                        }}
                    />
                    <Typography variant='h6'>
                        {channelDetail?.snippet?.channelTitle}
                        <CheckCircle sx={{
                            fontSize: '14px',
                            color: 'gray', ml: '5px'
                        }} />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers

                        </Typography>
                    )}

                </CardContent>

            </Link>

        </Box>
    )
}

export default ChannelCard