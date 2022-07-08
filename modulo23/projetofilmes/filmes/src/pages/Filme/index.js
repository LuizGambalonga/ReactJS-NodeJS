import {useEffect,useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom';
import api from '../../services/api';
import './filme-info.css';
import {toast} from 'react-toastify';
function Filme(){
    const {id} = useParams();
    const navigation = useNavigate();
    const [filme,setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
    async function loadFilmes(){
        await api.get(`/movie/${id}`,{
            params: {
                api_key: "f1f370181f0efc1533e44d1facf53c41",
                language: "pt-BR",
            }
        })
        .then((response)=>{
            setFilme(response.data)
            setLoading(false);
        })
        .catch(()=>{
            navigation("/",{replace: true})
            return;
        })
    }
    loadFilmes()
    return ()=>{
        console.log("component desmontado")
    }
    },[navigation,id])
    function salvarFilme(){
       const minhalista = localStorage.getItem("@filmes");
       let filmesSalvos = JSON.parse(minhalista) || [];
       const hasFilmes = filmesSalvos.some((filmesalvo)=> filmesalvo.id === filme.id)

       if(hasFilmes){
           toast.warn("Este filme já esta salvo na sua lista!")
           return;
       }
       filmesSalvos.push(filme)
       localStorage.setItem("@filmes",JSON.stringify(filmesSalvos))
       toast.success("Filme salvo com sucesso!")

    }
    if(loading){
        return(
        <div className="filme-info">
           <h1>Carregando Detalhes...</h1>
        </div>
        )
    }
    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
          <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>

          <h3>Sinopse</h3>
          <span>{filme.overview}</span>
          <strong>Avaliação</strong>
          <h4>{filme.vote_average} /10</h4>
          <div className="area-buttons">
            <button onClick={salvarFilme}>Salvar</button>
            <button>
                <a target="_blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
            </button>
          </div>
        </div>
       
    )
}
export default Filme;