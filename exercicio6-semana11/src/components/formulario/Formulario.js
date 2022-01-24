import { Field, Form, Formik } from 'formik'
import { Button, Container, Div } from './Formulario.styles'

export const Formulario = ({setDados, dados}) => {
    const handleSubmit = (values, { setSubmitting }) =>{
        setTimeout(()=>{
            setSubmitting(false)

            setDados(values)
            console.log(dados)
            console.log(values)
        }, 1000)
    }

    return (
        <>
            <Container>
                <Div>
                    <Formik onSubmit={handleSubmit} initialValues={{nome: '', descricao:''}}>

                        {({ isSubmitting, resetForm, isValid }) => (
                            <Form>

                                <p>Nome</p>
                                <Field name='nome' placeholder='Nome' />

                                <p>Descrição</p>
                                <Field name='descricao' placeholder='Descrição' />

                                <div>
                                    <Button type='submit'>Salvar</Button>
                                </div>


                            </Form>
                        )}
                    </Formik>
                </Div>
            </Container>
        </>
    )
}