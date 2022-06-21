import './styles.css';
import { Form, Button } from 'react-bootstrap'
import { AdicionarH2 } from './styles';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { API } from "../../services/api"

const validationPost = yup.object().shape({
    username: yup.string().required("O campo username é obrigatório"),
    password: yup.string().required("O campo senha é obrigatório!"),
    cpf:yup.string().required("O campo CPF é obrigatório!"),
    nome:yup.string().required("O campo nome é obrigatório!"),
    telefone:yup.string().required("O campo telefone é obrigatório")
});

export const Cadastro=()=>{
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    });
    const onSubmitAdd = async (data) => { 
        const dados={
            cpf:data.cpf,
            nome:data.nome,
            telefone:data.telefone,
            dataDeNascimento:data.dataDeNascimento,
            user:{
                username:data.username,
                password:data.password,
                email:data.email
            }
        }
                reset();
                try {
                    console.log(dados)
                    const response = await API.post(`/client`, dados)
                    console.log("criou")

                } catch (error) {
                    console.log(error.message)
                }
    }
    return(
            <>
                <Form onSubmit={handleSubmit(onSubmitAdd)}>
                    <AdicionarH2>Cadastro</AdicionarH2>
                    <fieldset style={{ border: "1px solid green" }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" name="username"{...register("username")} />
                            <p className="error-message"> {errors.username?.message}</p>
                            <br />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" placeholder="Password" name="password" {...register("password")} />
                            <p className="error-message"> {errors.password?.message}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" placeholder="CPF" name="cpf" {...register("cpf")} />
                            <p className="error-message"> {errors.cpf?.message}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="text" placeholder="Telefone" name="telefone" {...register("telefone")} />
                            <p className="error-message"> {errors.telefone?.message}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Nome" name="nome" {...register("nome")} />
                            <p className="error-message"> {errors.nome?.message}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Email" name="email" {...register("email")} />
                            <p className="error-message"> {errors.email?.message}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Data de Nascimento</Form.Label>
                            <Form.Control type="text" placeholder="Data de Nascimento" name="dataDeNascimento" {...register("dataDeNascimento")} />
                            <p className="error-message"> {errors.email?.message}</p>
                        </Form.Group>
                        <Button type="submit" style={{ background: "green" }}>Enviar</Button>
                    </fieldset>
                </Form>
            </>
    )
}
