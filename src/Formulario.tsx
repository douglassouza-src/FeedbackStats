import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';



export default function Formulario() {
  return (
    <div style={{textAlign: 'center', margin: '80px' }} >

      <Box sx={{ width: 250 }}>
        <Typography color="#bdbcbc">Proativo</Typography>     
        <Slider defaultValue={3} step={1} marks min={1} max={10}/></Box>

      <Box sx={{ width: 250 }}>
        <Typography color="#bdbcbc">Criativo</Typography>     
        <Slider defaultValue={6} step={1} marks min={1} max={10}/></Box>

      <Box sx={{ width: 250 }}>
        <Typography color="#bdbcbc">Resiliente</Typography>     
        <Slider defaultValue={4} step={1} marks min={1} max={10}/></Box>

      <Box sx={{ width: 250 }}>
        <Typography color="#bdbcbc">Responsável</Typography>     
        <Slider defaultValue={7} step={1} marks min={1} max={10}/></Box>

      <Box sx={{ width: 250 }}>
        <Typography color="#bdbcbc">Comunicativo</Typography>     
        <Slider defaultValue={3} step={1} marks min={1} max={10}/></Box>
        
    </div>
  );
}