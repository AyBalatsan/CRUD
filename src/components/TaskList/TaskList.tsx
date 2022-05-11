import { FC } from 'react';
import { TaskItem } from '..';
import styled from 'styled-components';
import { ListTitle } from '../../types';


const TaskList = () => {
  return (
    <ListTask>
      {/* <TaskItem/> */}
    </ListTask>
  )
}

export default TaskList

const ListTask = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 3fr);
  gap: 20px 30px;
  width: 80%;
  margin: 0 auto 40px;
`