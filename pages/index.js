//import styled from 'styled-components'
import MainGrid from '../src/componetes/MainGrid'
import Box from '../src/componetes/Box'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutComuns'
import {ProfileRelationsBoxWrapper} from '../src/componetes/ProfileRelation'

function ProfileSiderbar(propiedade){
  console.log(propiedade)
  return(
    <Box >
      <img src={`https://github.com/${propiedade.githubUser}.png`} style={{borderRadius:'8px'}}/>
      <hr/>
      <p>
        <a className="boxLink" href={`https://github.com/${propiedade.githubUser}`}>
        @{propiedade.githubUser}
        </a>
      </p>
      <hr/>
    <AlurakutProfileSidebarMenuDefault/>
    </Box>
  )
}

/*Para defini uma class tem que ser com  -className-*/
/* css inline no react style={{borderRadius:'8px'}}*/
/*para acessa uma variavel no meio do codigo html so usar {e colocar variavel} ex:src={`https://github.com/${githubUser}.png`}*/

/*<></> para agrupa duas tag em uma mesma função*/
export default function Home() {
  const githubUser = 'emersoncabral2021'  
  const PessoasFavoritas = [
  'juunegreiros',
  'omariosouto',
  'peas',
  'rafaballerini',
  'marcobrunodev',
  'fellipefialho'
]
const JogosFavoritos = [
  
]
const SeriesFavoritas = [
 
]

  return (
  <>
  <AlurakutMenu/>
  <MainGrid>
    <div className="perfil" style={{gridArea:'perfil'}}>
      <ProfileSiderbar githubUser={githubUser}/>
    </div>
    
    <div className="principal" style={{gridArea:'principal'}}>
       <Box >
        <h1 className="title">
          Bem vindo(a)
        </h1>
      <OrkutNostalgicIconSet/>
    </Box>
    </div>
   
    <div className="comunidade" style={{gridArea:'comunidade'}}>
      <Box>
        Comunidade
      </Box>
      <Box>
        <ProfileRelationsBoxWrapper>
      <h2 className="smallTittle">
            Pessoas da Comunidade ({PessoasFavoritas.length})
      </h2>

      <ul>
      {PessoasFavoritas.map((itematual)=>{
        return (
          <li>
          <a href={`/users/${itematual}`} key={itematual}>
          <img src={`https://github.com/${itematual}.png`}/>
          <span>{itematual}</span>
          </a>
          </li>
        )
      })}
      </ul>
      </ProfileRelationsBoxWrapper>
    </Box>
    
    <Box>
        <ProfileRelationsBoxWrapper>
      <h2 className="smallTittle">
           Jogos favoritos ({JogosFavoritos.length})
      </h2>

      <ul>
      {JogosFavoritos.map((itematual)=>{
        return (
          <li>
          <a href={`/users/${itematual}`} key={itematual}>
          <img src={`https://github.com/${itematual}.png`}/>
          <span>{itematual}</span>
          </a>
          </li>
        )
      })}
      </ul>
      </ProfileRelationsBoxWrapper>
    </Box>

    <Box>
        <ProfileRelationsBoxWrapper>
      <h2 className="smallTittle">
           Séries favoritas ({SeriesFavoritas.length})
      </h2>

      <ul>
      {SeriesFavoritas.map((itematual)=>{
        return (
          <li>
          <a href={`/users/${itematual}`} key={itematual}>
          <img src={`https://github.com/${itematual}.png`}/>
          <span>{itematual}</span>
          </a>
          </li>
        )
      })}
      </ul>
      </ProfileRelationsBoxWrapper>
    </Box>
    </div>
  </MainGrid>
  </>
  )
};
