import styled from 'styled-components'

//const Title = styled.h1`
  //font-size: 50px;
  //color: ${({ theme }) => theme.colors.primary};
//`
const Box = styled.div`
  background: white;
  border-radiua: 8px;
  
`;
const MainGrind = styled.main`
  display:grid;
  grid-gap:10px;
  padding:16px;
  @media(min-width:860px){
    grid-template-areas:"perfil principal comunidade";
    grid-template-columns:160px 1fr 312px;
  }
  
`;
export default function Home() {
  return (
  <MainGrind>
    <div style={{gridArea:'perfil'}}>
      <Box >
      Imagem
    </Box>
    </div>
    
    <div style={{gridArea:'principal'}}>
       <Box >
      Bem vindo
    </Box>
    </div>
   
    <div style={{gridArea:'comunidade'}}>
      <Box>
        Comunidade
      </Box>
      <Box >
      Pessoas da Comunidade
    </Box>
    </div>
    
    
    
  </MainGrind>)
}
