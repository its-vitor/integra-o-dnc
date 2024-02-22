import {useState} from 'react'
import Header from '../../components/Header/Header'
import "./index.scss"
import SubmenuLivros from '../../components/SubmenuLivros/SubmenuLivros'
import { LivrosService } from '../../api/LivrosService'

const LivrosCadastro = () => {
  
  const [livro, setLivro] = useState([])

  async function createLivro(){
    const body = {
        id:Number(livro.id),
        name:livro.name,
        pages: Number(livro.pages),
        isbn: livro.isbn,
        publisher: livro.publisher
      }
      if(livro.id!=undefined && livro.id!='' && livro.name!=undefined && livro.name!='' && livro.pages!=undefined && livro.pages!='' && livro.isbn !=undefined && livro.isbn !='' && livro.publisher !=undefined && livro.publisher !=''){
      await LivrosService.createLivro(body)
      .then((response)=>{
        alert(response.data.message)
        document.getElementById('formulario').reset
      })
      .catch(({response:{data,status}})=>{
        alert(`${status} - ${data}`)      
      });
    }

  }

  return (
  <>
    <Header/>    
    <SubmenuLivros/>
    <div className='livrosCadastro'>
        <h1>Cadastro de Livros</h1>
        <div>          
          <form id="formulario">
          <div className='form-group'>
            <label>Id</label>
            <input type="text" id='id' required onChange={(event)=>{ setLivro({...livro, id: event.target.value})}} ></input>
          </div>
          <div className='form-group'>
            <label>name</label>
            <input type="text" id='name' required onChange={(event)=>{ setLivro({...livro, name: event.target.value})}}></input>
          </div>
          <div className='form-group'>
            <label>Número de Páginas</label>
            <input type="text" id='pages' required onChange={(event)=>{ setLivro({...livro, pages: event.target.value})}}></input>
          </div>
          <div className='form-group'>
            <label>ISBN</label>
            <input type="text" id='isbn' required onChange={(event)=>{ setLivro({...livro, isbn: event.target.value})}}></input>
          </div>
          <div className='form-group'>
            <label>publisher</label>
            <input type="text" id='publisher' required onChange={(event)=>{ setLivro({...livro, publisher: event.target.value})}}></input>
          </div> 
          <div className='form-group'>
            <button onClick={()=>{
              createLivro()
            }}>Cadastrar Livro</button>  
          </div>         
          </form>
        </div>
    </div>
  </>)
  
}

export default LivrosCadastro