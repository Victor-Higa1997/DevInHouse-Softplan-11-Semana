import { Button, Nav } from "./Perfil.style"


export const Perfil = ({ mudarTema, status }) => {
    return (

        <Nav dark={status}>My app
            
            <Button dark={status}
                onClick={mudarTema}>
                { !status? 'Dark': 'Light' }
            </Button>
        </Nav>
    )
}