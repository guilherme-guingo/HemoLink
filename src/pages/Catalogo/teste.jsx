// import {
//   ContainerTitulo,
//   Titulo,
//   Subtitulo,
//   TituloDiv,
//   ContainerFiltro,
//   FiltroDiv,
//   BuscaDiv,
//   Input,
//   ContainerCard,
//   CardDiv,
//   ImagemDiv,
//   ImagemHospital,
//   ConteudoDiv,
//   Necessidade,
//   InfoEstoqueDiv,
//   ProgressoDiv,
//   PorcentagemDiv,
//   Situacao,
//   ContainerVerMais,
//   BotaoVerMais,
//   ContainerBack,
//   NaoEncontrouDiv,
//   SubTexto,
//   BotaoBuscar,
//   TextoFiltro,
//   FavoritarDiv,
//   BotaoFavoritar,
//   BotaoConhecer,
//   BotaoFalarConosco,
//   LoadingContainer,
//   NaoEncontouFilhoDiv,
//   TituloTexto,
// } from "./style";
// import React from "react";
// import { useFavoritos } from "../../contexts/FavoritesContext";
// import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa6";
// import { RiContactsLine } from "react-icons/ri";
// import { FaRegAddressCard } from "react-icons/fa6";

// const CardCatalogo = ({ dados, percentage, obterTiposSanguineosCriticos }) => {
//   const { favoritar, isFavorito } = useFavoritos();
//   return (
//     <CardDiv key={dados.id}>
//       <ImagemDiv>
//         {dados.image && (
//           <ImagemHospital src={dados.image} alt="Imagem de um Hospital" />
//         )}
//         <Necessidade porcentagem={percentage}>
//           {percentage <= 30
//             ? `Urgência: ${obterTiposSanguineosCriticos(dados.bloodStock)}`
//             : `Necessita: ${obterTiposSanguineosCriticos(dados.bloodStock)}`}
//         </Necessidade>
//       </ImagemDiv>
//       <ConteudoDiv>
//         <h3 style={{ marginBottom: 10 }}>{dados.name}</h3>
//         <p style={{ marginBottom: 15 }}>
//           📍 ​{dados.city} - {dados.state}
//         </p>
//         <InfoEstoqueDiv>
//           <span style={{ fontSize: 12 }}>Estoque Geral</span>
//           <Situacao
//             style={{ fontSize: 12, fontWeight: 600 }}
//             porcentagem={percentage}
//           >
//             {percentage <= 30
//               ? `Critico (${percentage}%)`
//               : `${percentage}` <= 50
//                 ? `Alerta (${percentage}%)`
//                 : `Regular (${percentage}%)`}
//           </Situacao>
//         </InfoEstoqueDiv>

//         <ProgressoDiv>
//           <PorcentagemDiv porcentagem={percentage} />
//         </ProgressoDiv>
//       </ConteudoDiv>
//       <FavoritarDiv>
//         <BotaoFavoritar onClick={() => favoritar(dados)}>
//           {isFavorito(dados.id) ? <FaHeart /> : <FaRegHeart />}
//         </BotaoFavoritar>
//       </FavoritarDiv>
//       <div>
//         <a href={`/hospital/${dados.id}`}>
//           <BotaoConhecer>
//             <RiContactsLine />
//             Conhecer esta Unidade
//           </BotaoConhecer>
//         </a>
//       </div>
//     </CardDiv>
//   );
// };

// export default CardCatalogo;
