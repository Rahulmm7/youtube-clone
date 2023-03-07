import { Button, Stack } from '@mui/material'
import { categories } from '../utils/constants'




const Sidebar = ({ selectedCategory, setselectedCategory }) => (



    <Stack direction='row'
        sx={{
            overflowY: "auto",
            height: { sx: 'auto', md: '95%' },
            flexDirection: { md: 'column' },
            justifyContent: 'flex-start',
            width: 'inherit'

        }}>
        {
            categories.map((category) => (
                <Button
                    className='category-btn'
                    onClick={() => setselectedCategory(category.name)}
                    style={{ background: category.name === selectedCategory && '#fc1503', color: 'white' }}
                    key={category.name}
                    sx={{
                        display: 'flex',
                        justifyContent: 'left'
                    }}
                >
                    <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}> {category.icon}</span>
                    <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}> {category.name}</span>

                </Button>))
        }

    </Stack >

)


export default Sidebar