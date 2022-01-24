import { Box, Button, Div, Ini, LogoIniciais, P } from '../card/Card.styles'

export const Card = ({ func, item, status }) => {
    /*  const [seguir, setSeguir] = useState(false) */
    return (
        <>
            <Box>
                <Div dark={status}>

                    <Ini>
                        <LogoIniciais dark={status}>VH</LogoIniciais>
                    </Ini>
                    <div>
                        <P dark={status}>{ item.nome }</P>
                        <P dark={status}>{ item.descricao }</P>
                    </div>

                    <Button seguindo={item.seguindo}
                    onClick={func}>{item.seguindo?'desseguir':'seguir'}</Button>

                </Div>
            </Box>

        </>
    )
}