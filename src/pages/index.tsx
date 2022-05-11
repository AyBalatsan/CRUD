import { useState, useEffect, FC } from 'react';
import styled from 'styled-components';
import { iListUser, iEditUser } from "../types";



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
  const [userData, setUserData] = useState('')
  const [users, setUsers] = useState<iListUser[]>(listUsers)
  const [valueField, setValueField] = useState('')
  const [editUserData, setEditUserData] = useState<iEditUser>({
    isEdit: false,
    userID: null
  })
  const isFilledFields = userData
  const filteredUsers = users.filter(user => {
    return user.name.toLocaleLowerCase().includes(valueField.toLocaleLowerCase())
  })

  const handleSubmitUser = (event: any) => {
    event.preventDefault()
    if (isFilledFields) {   
      if (editUserData.isEdit && editUserData.userID) {
        const editedData = users
        
        editedData.map(user => user.id == editUserData.userID ? user.name = userData : user.name)
        setUsers(editedData)
        setEditUserData({
          isEdit: false,
          userID: null
        })
        setUserData('') 
      } else {
        setUsers([...users, { id: Date.now(), name: userData }])
        setUserData('')        
      }   
    }
  }



  const handleEditClick = (name: string, id: number) => {
    setUserData(name)
    setEditUserData({
      isEdit: true,
      userID: id
    })  
  }



  const handleCleanClick = () => setUserData('')
  const handleRemoveClick = (idRemove:number) => {
    setUsers(users.filter((user)=>user.id !== idRemove))
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
      <ShellList>
        <List>
          {filteredUsers.map((user) => (
            <Item key={user.id}>
              <p>{user.name}</p>
              <ShellButton>
                <button onClick={() => handleEditClick(user.name, user.id)}><img src="/edit.png" alt="edit" /></button>
                <button onClick={() => handleRemoveClick(user.id)}><img src="/delete.png" alt="del" /></button>
              </ShellButton>
            </Item>
          ))}
        </List>
        <FormManagement onSubmit={handleSubmitUser} onReset={handleCleanClick}>
          <InputDefault
            type='text'
            placeholder='Add user'
            value={userData}
            onChange={(event) => setUserData(event.target.value)}
          />
          <ShellButton>
            <ButtonCustom type='reset' color='#ff3f1d'>Reset</ButtonCustom>
            <ButtonCustom disabled={!isFilledFields} color='#26a69a' >{editUserData.isEdit ? 'Edit' : 'Add'}</ButtonCustom>
          </ShellButton>
        </FormManagement>

      </ShellList>
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
const ShellList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
  margin-top: 50px;  
`
const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 80px;
  list-style-type: none; 
	counter-reset: num;
	margin: 0 0 0 35px;
	padding: 15px 0px 5px 30px;
	font-size: 18px;
  max-width: 650px;
  
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
	top: 2px;
	left: -26px;
	width: 20px;    
	color: #ef6780;
	text-align: right;
}
`
const Item = styled.li`
  max-width: 260px;
  height: 37px;
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
const FormManagement = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  padding: 20px 15px;
`
const ButtonCustom = styled.button`
  padding: 4px 12px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: #e78300;
  border-radius: 5px;
  transition: all 0.6s;
  &:hover{    
    background: ${props => props.color};
  }
  &:disabled{
    background-color: #fab55a;
    cursor: auto;
  }
`