import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Input } from '../../components/Input'
import { MainButton } from '../../components/MainButton'
import { FormCard } from '../../components/FormCard'
import { Container, FooterMessage, SwitchLink, FixedBackButton } from './style'

const BASE_URL = 'https://6a2879f44e1e783349a58ef3.mockapi.io/user'

export default function Cadastro() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [cpf, setCpf] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      await axios.post(BASE_URL, {
        nome,
        email,
        senha,
        tipo: 'doador',
        cpf
      })
      toast.success('Cadastro realizado com sucesso!')
      navigate('/login')
    } catch (error) {
      toast.error('Não foi possível concluir o cadastro.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <FixedBackButton location="/">Voltar</FixedBackButton>
      
      <FormCard title="Cadastro" onSubmit={handleSubmit}>
        <Input 
          id="nome" 
          label="Nome" 
          type="text" 
          value={nome} 
          onChange={(event) => setNome(event.target.value)} 
          disabled={isLoading}
          required 
        />
        
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
        
        <Input 
          id="cpf" 
          label="CPF" 
          type="text" 
          value={cpf} 
          onChange={(event) => setCpf(event.target.value)} 
          disabled={isLoading}
          required 
        />
        
        <MainButton type="submit" disabled={isLoading}>
          {isLoading ? 'Cadastrando...' : 'Criar conta'}
        </MainButton>
        
        <FooterMessage>
          Já tem uma conta?
          <SwitchLink to="/login">Entre</SwitchLink>
        </FooterMessage>
      </FormCard>
    </Container>
  )
}