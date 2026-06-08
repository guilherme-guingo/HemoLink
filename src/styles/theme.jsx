// Nesse arquivo em especifico, favor comentar uma explicação breve sobre a escolha das cores e nomeação das variaveis, para que outros desenvolvedores possam entender o raciocínio por trás da paleta de cores escolhida.

export const theme = {
  colors: {
    // Cores de Marca e Ação
    primary: "#C8102E", // Vermelho principal (Botões, logo, destaques)
    primaryHover: "#A50D24", // Um tom um pouco mais escuro para o hover dos botões
    secondary: "#1E293B", // Azul escuro corporativo (Pode ser usado em detalhes institucionais)
    terciary: "#F8FAFC", // Azul clarinho para fundos de blocos ou detalhes suaves)

    // Fundos (Backgrounds e Surfaces)
    background: "#F8F9FA", // Fundo geral do site (cinza bem clarinho/off-white)
    // background: "#ECF5FE", // Fundo de container para destaque/detalhe(cinza claro)
    // background: "#e2e8f0", // Fundo de container para destaque/detalhe(uma variação do cinza claro)
    surface: "#FFFFFF", // Fundo dos cards, painéis e formulários (branco puro)#
    surfaceSecondary: "#ECF5FE", // Fundo azuladinho bem claro (usado para blocos de destaque suaves)

    // Tipografia
    textTitle: "#001E2F", // Azul escuro quase preto para Títulos Grandes e fortes
    textBase: "#50606F", // Cinza chumbo para textos corridos (melhor leitura que o preto puro)
    textMuted: "#6C757D", // Cinza médio para legendas, placeholders e textos secundários

    textInverseTitle: "#FFFFFF",
    textInverseBase: "#F8FAFC",
    textInverseMuted: "#CBD5E1",

    // Bordas e Divisores
    border: "#D2DBE4", // Cinza azulado para bordas de cards e linhas divisórias

    // Status e Alertas (Perfeito para a Dashboard do Hospital)
    status: {
      success: "#00A86B", // Verde (Estoque Estável)
      warning: "#FF8C00", // Laranja (Estoque em Alerta)
      danger: "#C8102E", // Vermelho (Estoque Crítico / Solicitação Urgente)
      neutral: "#466585", // Azul claro (Estoque neutro/intermediario)
    },
  },

  // Opcional: padronização dos arredondamentos dos cards
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "16px", // Para os cards maiores da dashboard
    full: "9999px", // Para pílulas e avatares
  },
};
