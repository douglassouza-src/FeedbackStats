import React from "react";
import ReactDOM from 'react-dom/client';
import Grid from '@mui/material/Grid'
import Grafico from "./Grafico";
import Formulario from "./Formulario";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Grid container spacing={0} justifyContent={'center'} >
    <Grafico />
    <Formulario />
  </Grid>
);





