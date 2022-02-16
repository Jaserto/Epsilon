import { ReactNode } from 'react';
import styled from "styled-components";
import { MdInfo,MdWarning,MdError} from "react-icons/md";

import Menu from '../Sidebar/Menu'


const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 250px;
    margin-top:40px;
    height: 92vh;
    min-height: 640px;
    font-family: 'Public Sans', sans-serif;
    line-height:${({ theme }) => theme.spacings.lg};
    color:${({ theme }) => theme.isLight ? theme.colors.gray.dark : theme.colors.gray.light};
`

const Sidebar = () => {
    return (
      <Wrapper>
        <Menu />
      </Wrapper>
    )
  }
  
  export default Sidebar