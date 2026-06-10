import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Container, Form, Title, InputGroup, Label, Input, Button, ErrorMessage, FooterMessage, SwitchLink, BackButton } from './style'

const BASE_URL = 'https://6a2879f44e1e783349a58ef3.mockapi.io/user'

export default function Cadastro() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [cpf, setCpf] = useState('')
  const [erro, setErro] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErro('')
    try {
      await axios.post(BASE_URL, {
        nome,
        email,
        senha,
        tipo: 'doador',
        cpf
      })
      navigate('/login')
    } catch (error) {
      setErro('Não foi possível concluir o cadastro')
    }
  }

  return (
    <Container>
      <BackButton to="/">Voltar</BackButton>
      <Form onSubmit={handleSubmit}>
        <Title>Cadastro</Title>
        <InputGroup>
          <Label htmlFor="nome">Nome</Label>
          <Input id="nome" type="text" value={nome} onChange={(event) => setNome(event.target.value)} required />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="senha">Senha</Label>
          <Input id="senha" type="password" value={senha} onChange={(event) => setSenha(event.target.value)} required />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="cpf">CPF</Label>
          <Input id="cpf" type="text" value={cpf} onChange={(event) => setCpf(event.target.value)} required />
        </InputGroup>
        {erro && <ErrorMessage>{erro}</ErrorMessage>}
        <Button type="submit">Criar conta</Button>
        <FooterMessage>
          Já tem uma conta?
          <SwitchLink to="/login">Entre</SwitchLink>
        </FooterMessage>
      </Form>
    </Container>
  )
}
