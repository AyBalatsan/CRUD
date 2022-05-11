import { useState, useEffect, FC } from 'react';
import styled from 'styled-components';

const listUsers = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementine Bauch" },
  { id: 4, name: "Patricia Lebsack" },
  { id: 5, name: "Chelsey Dietrich" },
  { id: 6, name: "Dennis Schulist" },
  { id: 7, name: "Kurtis Weissnat" },
  { id: 8, name: "Nicholas Runolfsdottir V" },
  { id: 9, name: "Glenna Reichert" },
  { id: 10, name: "Clementina DuBuque" }
]

const MainPage = () => {
  const [users, setUser] = useState(listUsers)
  const [valueField, setValueField] = useState('')
  const [valueFieldAddUser, setValueFieldAddUser] = useState('')

  const filteredUsers = users.filter(user => {
    return user.name.toLocaleLowerCase().includes(valueField.toLocaleLowerCase())
  })

  const addUser = (event: { key: string; }) => {
    if (event.key === 'Enter' && valueFieldAddUser !== '') {
      setUser([...users, { id: Date.now(), name: valueFieldAddUser }])
      setValueFieldAddUser('')
      
    }
  }

  return (
    <AppSell>
      <form>
        <InputDefault
          type='text'
          placeholder='Search in the user'
          onChange={(event) => setValueField(event.target.value)}
        />
      </form>
      <Title>Список пользователей</Title>      
      <InputDefault
        type='text'
        placeholder='Add user'
        value={valueFieldAddUser}
        onChange={(event) => setValueFieldAddUser(event.target.value)}
        onKeyPress={addUser}
      />
      <List>
        {filteredUsers.map((user) => (
          <Item key={user.id}>
            <p>{user.name}</p>
            <ShellButton>
              <button><img src="/edit.png" alt="edit"/></button>
              <button><img src="/delete.png" alt="del"/></button>
            </ShellButton>
          </Item>
        ))}
      </List>
    </AppSell>
  )
}

export default MainPage;

const AppSell = styled.div`
  width: 100%;
  min-height: 80vh;
  background-color: antiquewhite;
  padding: 30px 20px;
  position: relative;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  text-align: center;
  color: #1b1b1b;
`
const List = styled.ol`
  list-style-type: none; 
	counter-reset: num;
	margin: 0 0 0 35px;
	padding: 15px 0 5px 0;
	font-size: 18px;
  & li {
    position: relative;	
    margin: 0 0 0 0;
    padding: 0 0 10px 0;
  }
  & li:before {
	content: counter(num) '.'; 
	counter-increment: num;
	display: inline-block;	
	position: absolute;
	top: 0px;
	left: -26px;
	width: 20px;    
	color: #ef6780;
	text-align: right;
}
`
const Item = styled.li`
  max-width: 360px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p{
    max-width: 85%;
  }
`
const InputDefault = styled.input`
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  height: 3rem;
  width: 240px;
  font-size: 16px;
  margin: 0 0 8px 0;
  padding: 0;
  box-shadow: none;
  box-sizing: content-box;
  transition: box-shadow .3s, border .3s;
  &:focus{
    border-bottom: 1px solid #26a69a;
    box-shadow: 0 1px 0 0 #26a69a;
  }
`
const ShellButton = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`