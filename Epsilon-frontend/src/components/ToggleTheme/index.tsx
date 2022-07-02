import * as Styled from './styles';
import styled from "styled-components";

import {useTheme} from '../../hooks/useTheme';
import { FaToggleOn } from 'react-icons/fa'
import { Toast } from '../Toast';
import { useState } from 'react';

export const Button =styled.button`
  display:flex;
  align-items:center;
  justify-content:center;
  background:transparent;
  margin:0;
  border:none;
  color:${({ theme }:any) => theme.isLight ? theme.colors.purple.light : theme.colors.white.light};
`;

const CheckBoxWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  background:transparent;
  margin:0;
  border:none;

`;
const CheckBoxLabel = styled.label`

  width: 42px;
  height: 24px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:red;
  margin:0;
  border:none;
  color:${({ theme }:any) => theme.isLight ? theme.colors.purple.light : theme.colors.white.light};
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  &:checked + ${CheckBoxLabel} {
   
    background: #0A62EA;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
export const ToggleTheme = ({description, i}:any) => {
  const [enable, setEnable] = useState<boolean>(false);
  const [theme, setTheme] = useState('hidden');
  const handleClick = ()=> {
    setEnable(!enable)
    setTheme('switch');
    setTimeout(() => {
      setTheme('hidden');
    }, 2000);
  }

  return (
    <CheckBoxWrapper>
      {theme==="switch" && <Toast type="info"> {enable? `Habilitado ${description}`:`Deshabilitado ${description}`}!</Toast>}
        <CheckBox id={i} type="checkbox" title={description} onClick={handleClick}/>
        <CheckBoxLabel htmlFor={i}/>
    </CheckBoxWrapper>
  )
}