import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import Trash from './assets/trash.svg'
import api from './services/api'

function App() {
const [users, setUsers] = useState([]);

const inputName = useRef();
const inputAge = useRef();
const inputEmail = useRef()

async function getUsers() {
  const usersFromApi = await api.get('/users');
  setUsers(usersFromApi.data);
}

async function createUsers() {
  const emailExiste = users.some(user => user.email === inputEmail.current.value)

  if (emailExiste) {
    alert('Erro: O email cadastrado já existe! Tente novamente');
    return;
  }

  await api.post('/users', {
    name: inputName.current.value,
    age: inputAge.current.value,
    email: inputEmail.current.value
  });
  getUsers()
}

async function deleteUsers(id) {
  await api.delete(`/users/${id}`)

  getUsers()
} 

useEffect (() => {
  getUsers()
}, [])


  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='name' type='text' ref={inputName}/>
        <input placeholder='Idade' age='age' type='number' ref={inputAge}/>
        <input placeholder='E-mail' email='email' type='email' ref={inputEmail}/>
        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>
    
      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome:  <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button className='button-secondary' onClick={() => deleteUsers(user.id)}>
            <img src={Trash}/>
          </button>
        </div>
      ))}
      <footer className='footer'>
        <p>@2025 Para fins de estudo e prática.</p>
      </footer>
      </div>
  );
}

export default App