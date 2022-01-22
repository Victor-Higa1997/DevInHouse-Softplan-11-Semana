import { Box, Button, Div, Ini } from '../card/Card.styles'

export const Card = ({ func, item }) => {
    /*  const [seguir, setSeguir] = useState(false) */
    return (
        <>
            <Box>
                <Div>

                    <Ini>
                        <p>VH</p>
                    </Ini>
                    <div>
                        <p>{ item.nome }</p>
                        <p>{ item.descricao }</p>
                    </div>

                    <Button seguindo={item.seguindo}
                    onClick={func}>{item.seguindo?'desseguir':'seguir'}</Button>

                </Div>
            </Box>

        </>
    )
}