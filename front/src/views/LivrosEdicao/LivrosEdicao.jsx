import {useEffect , useState} from 'react'
import Header from '../../components/Header/Header'
import "./index.scss"
import SubmenuLivros from '../../components/SubmenuLivros/SubmenuLivros'
import { useParams } from 'react-router-dom'
import { LivrosService } from '../../api/LivrosService'

const LivrosEdicao = () => {  
  let {livroId} = useParams();

  const [livro, setLivro] = useState([])

  async function getLivro(){
    const {data} = await LivrosService.getLivro(livroId);
    setLivro(data)
  }

  async function editLivro(){
    const body = {
        id:livro.id,
        title:livro.title,
        pages: Number(livro.pages),
        isbn: livro.isbn,
        publisher: livro.publisher
      }
    if(livro.id!=undefined && livro.id!='' && livro.title!=undefined && livro.title!='' && livro.pages!=undefined && livro.pages!='' && livro.isbn !=undefined && livro.isbn !='' && livro.publisher !=undefined && livro.publisher !=''){
      await LivrosService.updateLivro(Number(livro.id),body)
      .then(({data})=>{
        alert(data.message)
      })
      .catch(({response:{data,status}})=>{
        alert(`${status} - ${data}`)      
      });
    }  

  }

  useEffect(() => {
    getLivro()    
  }, [])  

  return (
  <>
    <Header/>    
    <SubmenuLivros/>
    <div className='livrosCadastro'>
        <h1>Edição de Livros</h1>
        <div>
          <form id="formulario">
            <div className='form-group'>
              <label>Id</label>
              <input type="text" disabled required onChange={(event)=>{ setLivro({...livro, id: event.target.value})}} value={livro.id || ''}></input>
            </div>
            <div className='form-group'>
              <label>title</label>
              <input type="text" required onChange={(event)=>{ setLivro({...livro, title: event.target.value})}} value={livro.title || ''} ></input>
            </div>
            <div className='form-group'>
              <label>Número de Páginas</label>
              <input type="text"  required onChange={(event)=>{ setLivro({...livro, pages: event.target.value})}} value={livro.pages || ''}></input>
            </div>
            <div className='form-group'>
              <label>ISBN</label>
              <input type="text"  required onChange={(event)=>{ setLivro({...livro, isbn: event.target.value})}} value={livro.isbn || ''}></input>
            </div>
            <div className='form-group'>
              <label>publisher</label>
              <input type="text"  required onChange={(event)=>{ setLivro({...livro, publisher: event.target.value})}} value={livro.publisher || ''}></input>
            </div> 
            <div className='form-group'>
              <button onClick={()=>{
              editLivro()
            }}>Atualizar Livro</button>  
            </div>                   
          </form>
          </div>        
    </div>
  </>)
  
}

export default LivrosEdicao