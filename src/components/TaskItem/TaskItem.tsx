import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { InputDefault } from '../../styles/input/InputDefault';
import { Card } from '..';

const TaskItem= () => {    
  return (
    <ItemTaskWrapper>
      <h2></h2>
      <InputDefault
        type="text"      
        placeholder='Todo name'
      />
      <ListTask>        
          {/* <Card /> */}
      </ListTask>
    </ItemTaskWrapper>
  )
}

export default TaskItem

const ListTask = styled.ul`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px 0;
  justify-content: center;
`
const ItemTaskWrapper = styled.li`
  width: 100%;
  min-height: 200px;
  border: 4px solid #f7dab4;
  border-radius: 24px;
  background-color: #faf0e3;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

