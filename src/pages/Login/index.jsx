import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../contexts/AuthContext'
import { Container, Form, Title, InputGroup, Label, Input, Button, ErrorMessage, FooterMessage, SwitchLink, BackButton } from './style'

const BASE_URL = 'https://6a2879f44e1e783349a58ef3.mockapi.io/user'

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErro('')
    try {
      const response = await axios.get(BASE_URL)
      const usuario = response.data.find((item) => item.email === email && item.senha === senha)
      if (!usuario) {
        setErro('Email ou senha inválidos')
        return
      }
      login(usuario)
      navigate('/perfil')
    } catch (error) {
      setErro('Não foi possível fazer login')
    }
  }

  return (
    <Container>
      <BackButton to="/">Voltar</BackButton>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="senha">Senha</Label>
          <Input id="senha" type="password" value={senha} onChange={(event) => setSenha(event.target.value)} required />
        </InputGroup>
        {erro && <ErrorMessage>{erro}</ErrorMessage>}
        <Button type="submit">Entrar</Button>
        <FooterMessage>
          Não tem uma conta?
          <SwitchLink to="/cadastro">Cadastre-se</SwitchLink>
        </FooterMessage>
      </Form>
    </Container>
  )
}
