import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const Formulario = () => {
    const handleSubmit = (values, { setSubmitting }) =>{
        setTimeout(()=>{
            setSubmitting(false)
            console.log(values)
        }, 1000)

    }

    const schema= Yup.object().shape({
        nome: Yup.string().required('O campo nome é obrigatório!'),
        email: Yup.string().email().required('E-mail no formato inválido!'),
        endereco: Yup.object().shape({
            rua: Yup.string().required('O campo rua é obrigatório!'),
            numero: Yup.string().required('O campo numero é obrigatório!'),
            bairro: Yup.string().required('O campo bairro é obrigatório!'),
            cidade: Yup.string().required('O campo cidade é obrigatório!'),
            estado: Yup.string().required('O campo estado é obrigatório!'),
        })
        
    })

    const initialValues = {
        nome: '',
        data: '',
        email: '',
        cel: '',
        endereco: {
            rua: '',
            numero:'',
            complemento: '',
            bairro: '',
            cidade: '',
            estado: '',
        }
    }

    return (
        <>

            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
                {({isSubmitting, resetForm, isValid}) => (
                    <Form>
                        {console.log('valores', isValid)}

                        <section>
                            <p>Nome:</p>
                            <Field name='nome' placeholder='Nome'/>
                            <ErrorMessage name='nome' />
                        </section>
                        <section>
                            <p>Data de nascimento:</p>
                            <Field name='data' placeholder='Data' type='date' />
                        </section>
                        <section>
                            <p>Email:</p>
                            <Field name='email' placeholder='E-mail' type='email' />
                            <ErrorMessage name='email' />
                        </section>
                        <section>
                            <p>Cel:</p>
                            <Field name='cel' placeholder='Celular' type='text' />
                        </section>
                        <section>
                            <p>Endereço:</p>
                            <Field name='endereco.rua' placeholder='Endereço' type='text' />
                            <ErrorMessage name='endereco.rua' />
                        </section>
                        <section>
                            <p>Número:</p>
                            <Field name='endereco.numero' placeholder='Numero' type='text' />
                            <ErrorMessage name='endereco.numero' />
                        </section>
                        <section>
                            <p>Complemento:</p>
                            <Field name='endereco.complemento' placeholder='Complemento' type='text' />
                        </section>
                        <section>
                            <p>Bairro:</p>
                            <Field name='endereco.bairro' placeholder='Bairro' type='text' />
                            <ErrorMessage name='endereco.bairro' />
                        </section>
                        <section>
                            <p>Cidade:</p>
                            <Field name='endereco.cidade' placeholder='Cidade' type='text' />
                            <ErrorMessage name='endereco.cidade' />
                        </section>
                        <section>
                            <p>Estado:</p>
                            <Field name='endereco.estado' placeholder='Estado' type='text' />
                            <ErrorMessage name='endereco.estado' />
                        </section>

                        <button type='submit' disabled={isSubmitting || !isValid}>Cadastrar</button>
                        <button onClick={resetForm} >Limpar</button>


                    </Form>

                )}

            </Formik>
        </>
    )
}