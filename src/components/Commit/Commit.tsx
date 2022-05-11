import { FC, useState } from 'react';
import styled from 'styled-components';
import { InputDefault } from '../../styles/input/InputDefault';

interface CommitProps {
  id: number
  commit: string
  deleteCommit: { (id: number): void }
  editCommit: { (id: number, text: string): void }
}

const Commit: FC<CommitProps> = ({
  commit,
  id,
  deleteCommit,
  editCommit
}) => {
  const [commitValue, setCommitValue] = useState(commit)


  return (
    <CommitItem>
      <InputDefault
        type="text"
        defaultValue={commitValue}
        onChange={event => setCommitValue(event.target.value)}
        onKeyPress={() => editCommit(id, commitValue)}
      />
      <ShellButton>
        <button><img src="/delete.png" alt="del" onClick={() => deleteCommit(id)} /></button>
      </ShellButton>
    </CommitItem>
  )
}

export default Commit

const CommitItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;  
`
const ShellButton = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`