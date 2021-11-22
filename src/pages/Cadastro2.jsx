import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const Cadastro2 = () => {
    const [nome, setNome] = useState()
    return (
        <>
            <Box sx={{marginTop: '15px'}}>
                <TextField 
                id="outlined-basic" 
                label="Nome" 
                variant="outlined" 
                onChange= {(e) => setNome (e.target.value)} />
            </Box>
            
            {nome}

        </>
    )
}

export default Cadastro2