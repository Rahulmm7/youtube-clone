import { Paper, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from '@mui/icons-material'

const Searchbar = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const handleSubmit = (e) => {

        if (searchTerm) {
            e.preventDefault();
            navigate(`/search/${searchTerm}`);
            setSearchTerm("");
        }
    }
    return (
        <Paper
            component={"form"}
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: '2px',
                boxShadow: 'none',
                mr: { sm: 5 }
            }}
        >
            <input className='search-bar'
                value={searchTerm}
                placeholder='Search...'
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type='submit'
                sx={{ p: '10px', color: 'red' }}>
                <Search />
            </IconButton>

        </Paper>
    )
}

export default Searchbar