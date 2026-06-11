import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useAuth } from '../../contexts/AuthContext'
import { Input } from '../../components/Input'
import { MainButton } from '../../components/MainButton'
import { FormCard } from '../../components/FormCard'
import { Container, FooterMessage, SwitchLink, FixedBackButton } from './style'

const BASE_URL = 'https://6a2879f44e1e783349a58ef3.mockapi.io/user'

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      const response = await axios.get(BASE_URL)
      const usuario = response.data.find((item) => item.email === email && item.senha === senha)
      
      if (!usuario) {
        toast.error('Email ou senha inválidos')
        setIsLoading(false)
        return
      }
      
      login(usuario)
      toast.success(`Bem-vindo, ${usuario.nome}!`)
      
      if (usuario.email === 'admin@hemolink.com') {
        navigate('/adminDashboard')
      } else {
        navigate('/perfil')
      }
    } catch (error) {
      toast.error('Não foi possível fazer login')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <FixedBackButton location="/">Voltar</FixedBackButton>
      
      <FormCard title="Login" onSubmit={handleSubmit}>
        <Input 
          id="email" 
          label="Email" 
          type="email" 
          value={email} 
          onChange={(event) => setEmail(event.target.value)} 
          disabled={isLoading}
          required 
        />
        
        <Input 
          id="senha" 
          label="Senha" 
          type="password" 
          value={senha} 
          onChange={(event) => setSenha(event.target.value)} 
          disabled={isLoading}
          required 
        />
        
        <MainButton type="submit" disabled={isLoading}>
          {isLoading ? 'Carregando...' : 'Entrar'}
        </MainButton>
        
        <FooterMessage>
          Não tem uma conta?
          <SwitchLink to="/cadastro">Cadastre-se</SwitchLink>
        </FooterMessage>
      </FormCard>
    </Container>
  )
}