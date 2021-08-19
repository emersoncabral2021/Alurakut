//import styled from 'styled-components'
import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import MainGrid from '../src/componetes/MainGrid';
import Box from '../src/componetes/Box';
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutComuns';
import {ProfileRelationsBoxWrapper} from '../src/componetes/ProfileRelation';


function ProfileSiderbar(propiedade){
  
  return(
    
    
      <Box as="aside">
      
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

function ProfileRelationBox(propiedades){
  return(
    <ProfileRelationsBoxWrapper >
    <h2 className="smallTittle">
   {propiedades.title} ({propiedades.itens.length})
    </h2>
      <ul>

      </ul>
    
    
    </ProfileRelationsBoxWrapper>
  )
}
export default function Home(props) {
 
  const usuarioAleatorio = props.githubUser;  
  const [comunidades, setcomunidades] = React.useState([])
  
  const jogos = [
    {title:'Genshin Impact',
    image: 'https://static.apksmods.com/images/en/com.miHoYo.GenshinImpact/icon.png'
  },
  {
    title:'Honkai Impact',
    image: 'https://static.apkdojo.com/images/games/honkai-impact-3-icon.png'
  },
  {
    title:'Punishing gray raven',
    image: 'https://storage.qoo-static.com/game/10109/CFWW6p9N3I95us3hVptPCEqk84xl20W0.png'
  },
  {
    title:'Fortnite',
    image: 'https://images-americanas.b2w.io/produtos/01/00/img/1300669/0/1300669064_1GG.jpg'
  }
]
  const PessoasFavoritas = [
  'juunegreiros',
  'omariosouto',
  'peas',
  'rafaballerini',
  'marcobrunodev',
  
]
//0 - Pegar o array de dados do github
const [seguidores, setseguidores] = React.useState([]);
React.useEffect(function(){
  fetch('https://api.github.com/users/peas/followers')
.then(function(respotaDoServidor){
  return respotaDoServidor.json();
})
.then(function(respotaCompleta){
  setseguidores(respotaCompleta)
  })
// API GraphQL
  fetch('https://graphql.datocms.com/',{
    method: 'POST',
    headers: {
      'Authorization':'df4405fff579c50e5540e01f4e346e',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ "query": `query {  
      allCommunits {
      id
      title
      imageUrl
      creadorSlug
    }
  }`})
  })
  .then((response)=> response.json())// pega o retorno do response.json e já retorna
  .then((respotaCompleta)=> {
    const comunidadesvindododato = respotaCompleta.data.allCommunits;
    setcomunidades(comunidadesvindododato)
  })
},[])
//1 - Criar um box que vai ter um map, baseando nos itens do array que pegamos no github


  return (
  <>
  <AlurakutMenu/>
  <MainGrid>
    <div className="perfil" style={{gridArea:'perfil'}}>
      <ProfileSiderbar githubUser={usuarioAleatorio}/>
    </div>
    
    <div className="principal" style={{gridArea:'principal'}}>
       <Box >
        <h1 className="title">
          Bem vindo(a)
        </h1>
      <OrkutNostalgicIconSet/>
    </Box>

    <Box>
      <h2 className="subTittle">
        O que você deseja fazer? 
      </h2>

      <form onSubmit={function handleCriarComunidade(event){
        /* event.preventDefault(); para parar o submit do form*/
        event.preventDefault();
        const DadosDoForm = new FormData(event.target)

        const comunidade = {
          title: DadosDoForm.get('title'),
          imageUrl: DadosDoForm.get('image'),
          creadorslug: usuarioAleatorio
        }

        fetch('/api/comunidades.js',{
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(comunidade)
        })
        .then(async (response)=>{
          const dados = await response.json();
        const comunidade = dados.registroCriado  
        console.log(comunidade)
        const comunidadeAtuaizada = [...comunidades, comunidade]
        
        setcomunidades(comunidadeAtuaizada)
        
        })
     
        

      }}>
    <div>
      <input placeholder="Qual vai ser o nome da sua comunidade?"
      name="title"
      aria-label="Qual vai ser o nome da sua comunidade?"
      type="text"/>
    </div>
    <div>
      <input placeholder="Coloque uma URL para usarmos de capa."
      name="image"
      aria-label="Coloque uma URL para usarmos de capa."
      type="text"/>
    </div>
    <button>
      Criar comunidade
    </button>
      </form>
    </Box>
    </div>
  
    <div className="comunidade" style={{gridArea:'comunidade'}}>
        <ProfileRelationBox title='Seguidores' itens={seguidores}/>

      <Box >
        <ProfileRelationsBoxWrapper >
      <h2 className="smallTittle">
            Comunidade ({comunidades.length})
      </h2>

      <ul>
      {comunidades.map((itematual)=>{
        return (
         
          <li key={itematual.id}>
          <a href={`/users/${itematual.title}`} >
          <img src={itematual.imageUrl}/>
          <span>{itematual.title}</span>
          </a>
          </li>
        )
      })}
      </ul>
      
      </ProfileRelationsBoxWrapper>
      <button>Ver todos</button>
      </Box>
      <Box>
        <h2 className="smallTittle">
            Pessoas da Comunidade ({PessoasFavoritas.length})
      </h2>
        <ProfileRelationsBoxWrapper>
      
        <ul>
              {PessoasFavoritas.map((itematual)=>{
                return (
                  
                  <li key={itematual}>
                  <a href={`https://github.com/${itematual}`} target='_blank'>
                  <img src={`https://github.com/${itematual}.png`}/>
                  <span>{itematual}</span>
                  </a>
                  </li>
                )
              })}
              </ul>
    
        
      </ProfileRelationsBoxWrapper>
      <button>Ver todos</button>
    </Box>
    
    <Box>
        <ProfileRelationsBoxWrapper>
      <h2 className="smallTittle">
           Jogos favoritos ({jogos.length})
      </h2>

      <ul>
      {jogos.map((itematual)=>{
        return (
          <li>
          <a>
          <img src={`${itematual.image}`}/>
          <span>{itematual.title}</span>
          </a>
          </li>
        )
      })}
      </ul>
      </ProfileRelationsBoxWrapper>
      <p><button>Ver todos</button></p>
    </Box>

   
    </div>
  </MainGrid>
  </>
  )
};


export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.USER_TOKEN;
  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
    headers: {
        Authorization: token
      }
  })
  .then((resposta) => resposta.json())

  if(!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  const { githubUser } = jwt.decode(token);
  return {
    props: {
      githubUser
    }, // will be passed to the page component as props
  }
}