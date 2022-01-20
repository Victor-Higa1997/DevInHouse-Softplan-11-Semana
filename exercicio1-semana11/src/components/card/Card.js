import { useState } from 'react'
import { Box, Button, Div, Ini } from '../card/Card.styles'
import { Theme } from '../thema/Theme'

export const Card = () => {
    const [seguir, setSeguir] = useState(false)
    return (
        <>
            <Box>
                <Div>

                    <Ini>
                        <p>VH</p>
                    </Ini>
                    <div>
                        <p>Victor Higa</p>
                        <p>Descrição: teste</p>
                    </div>


                    {
                        seguir === false ? (<div><Button style={{backgroundColor: Theme.seguir.background}} 
                            onClick={() => setSeguir(true)}>Seguir</Button></div>)
                            :
                            (<div><Button style={{backgroundColor: Theme.desseguir.background}} 
                            onClick={()=> setSeguir(false)}>Desseguir</Button></div>)
                    }

                </Div>
            </Box>

        </>
    )
}