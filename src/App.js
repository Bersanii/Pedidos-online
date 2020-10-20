import React, { useState, useEffect } from 'react'
import { Grid, Hidden, Typography, Button, createMuiTheme, responsiveFontSizes, FormLabel, FormControl, ThemeProvider, Checkbox, FormControlLabel, FormGroup,  FormHelperText } from '@material-ui/core';
import Card from './card'
import Card2 from './card2'
import { Box, Divider} from '@material-ui/core'
import { render } from '@testing-library/react';


const bdResponse = [{
  "id": 1,
  "nome": "X-burguer",
  "preco": "R$15.00",
  "descricao": "Pão, Hamburguer e Queijo",
  "tipo": "lanche",
}, {
  "id": 2,
  "nome": "X-bacon",
  "preco": "R$18.00",
  "descricao": "Pão, Hamburguer, Queijo e Bacon",
  "tipo": "lanche",
}, {
  "id": 3,
  "nome": "X-salada",
  "preco": "R$10.00",
  "descricao": "Pão, Hamburguer, Alface e Tomate",
  "tipo": "lanche",
}, {
  "id": 4,
  "nome": "Peperoni",
  "preco": "R$25.00",
  "descricao": "Peperoni e Queijo",
  "tipo": "pizza",
}, {
  "id": 5,
  "nome": "3 queijos",
  "preco": "R$23.00",
  "descricao": "Mussarela, Catupiry e Gorgonzola",
  "tipo": "pizza",
}, {
  "id": 8,
  "nome": "Frango c/ catupiry",
  "preco": "R$25.00",
  "descricao": "Frango e Catupiry",
  "tipo": "pizza",
}, {
  "id": 9,
  "nome": "Coca",
  "preco": "R$5.00",
  "descricao": "",
  "tipo": "refri",
}, {
  "id": 55,
  "nome": "Pepsi",
  "preco": "R$5.00",
  "descricao": "",
  "tipo": "refri",
}]





function App(){
  let theme = createMuiTheme({
    palette: {
      primary: {
        light: '#FFCCBC',
        main: '#FF5722',
        dark: '#E64A19',
        text: '#212121',
      },
      secondary: {
        main: '#FFEB3B',
        text: '#757575'
      },
    },
  });
  theme = responsiveFontSizes(theme)
  
  const [itensToDisplay, setitensToDisplay] = useState(bdResponse)
  const [checked, setChecked] = React.useState({
    lanche: true,
    pizza: true,
    refri: true,
  })

  const handleChange = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };
  
  function resetProdutos() {
    setitensToDisplay(bdResponse)
    console.log("produtos resetados")
  }

  function Display(props){
    return (
      itensToDisplay.map((produto, id) => {
      if(produto.tipo == props.tipoCheked){
        return(
          <Card2 key={id}
                nome={produto.nome}
                descricao={produto.descricao}
                preco={produto.preco}/>
        )
      }
    })
    )
  }

  return(
    <ThemeProvider theme={theme}>
      
      <Grid container spacing={0}>
        <Hidden smDown>
          <Grid item sm={2}>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={checked.lanche} onChange={handleChange} name="lanche" />}
                  label="Lanche"
                />
                <FormControlLabel
                  control={<Checkbox checked={checked.pizza} onChange={handleChange} name="pizza" />}
                  label="Pizza"
                />
                <FormControlLabel
                  control={<Checkbox checked={checked.refri} onChange={handleChange} name="refri" />}
                  label="Refrigerantes"
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Hidden>

        <Grid item xs={12} sm={12} md={10}>
          <Box>

            {checked.lanche === true
            ? <div>
                <h1>Lanches</h1>
                <Display tipoCheked="lanche"/>
              </div>
            : null
            }

            {checked.pizza === true
            ? <div>
                <h1>Pizzas</h1>
                <Display tipoCheked="pizza"/>
              </div>
            : null
            }

            {checked.refri === true
            ? <div>
                <h1>Refrigerantes</h1>
                <Display tipoCheked="refri"/>
              </div>
            : null
            }

            
          </Box>

        </Grid>
      </Grid>
      
      
      

    </ThemeProvider>

  )
}

export default App
