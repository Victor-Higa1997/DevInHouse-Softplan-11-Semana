import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Button, Container, Div } from './Formulario.styles';
import * as Yup from 'yup';

export const Formulario = ({ setDados, dados, addForm }) => {
    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            setSubmitting(false)

            addForm(values)

            console.log(dados)
            console.log(setDados)
        }, 1000)
    }

    const schema = Yup.object().shape({
        nome: Yup.string().max(10, 'Tamanho máximo do campo 10!').required('Campo obrigatório!'),
        descricao: Yup.string().min(10, 'Tamanho minimo do campo 10!').required('Campo obrigatório!')

    })

    return (
        <>
            <Container>
                <Div>
                    <Formik onSubmit={handleSubmit} validationSchema={schema} initialValues={{ nome: '', descricao: '' }}>
                        {({ isSubmitting, resetForm, isValid }) => (
                            <Form>

                                <p>Nome</p>
                                <Field name='nome' placeholder='Nome' />
                                <ErrorMessage name='nome' />
                                <p>Descrição</p>
                                <Field name='descricao' placeholder='Descrição' />
                                <ErrorMessage name='descricao' />
                                <div>
                                    <Button type='submit' disabled={isSubmitting || !isValid}>Salvar</Button>
                                </div>


                            </Form>
                        )}
                    </Formik>
                </Div>
            </Container>
        </>
    )
}