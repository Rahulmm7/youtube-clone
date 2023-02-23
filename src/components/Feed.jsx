import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Sidebar, Videos } from './'



const Feed = () => {
    return (

        <Stack sx={{
            flexDirection: { sx: "column", md: "row" }
        }}>
            <Box sx={{
                height: { sx: "auto", md: "92vh" },
                borderRight: "1px solid #3d3d3d",
                px: { sx: 0, md: 2 }
            }}>
                <Sidebar />
                <Typography className='copyright'>
                    Copyright 2023 Rahul M Mm
                </Typography>

            </Box>
            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: '2' }}>
                <Typography
                    variant='h4' fontWeight={'bold'}
                    marginBottom='2'>
                    New <span style={{ color: '#f31503' }}>videos</span>
                </Typography>
            </Box>
            <Videos />

        </Stack>
    )
}

export default Feed