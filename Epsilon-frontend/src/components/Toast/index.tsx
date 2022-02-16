import { ReactNode, useState } from 'react';
import * as Styled from './styles';
import { MdInfo,MdWarning,MdError} from "react-icons/md";
import { useTheme } from '../../hooks/useTheme';

type ToastTypes = {
  children: ReactNode,
  type:"info" | "error" | "warning",
  className?:"animation"| string,
}


export const Toast = (props: ToastTypes) => {

  const { toggleTheme, isLight} = useTheme();
  const [theme, setTheme] = useState('hidden');

  const handleClick = ()=> {
    setTheme('switch');
    toggleTheme();
    setTimeout(() => {
      setTheme('hidden');
    }, 2000);
  }
  return (
    <Styled.Container className={`${props.type} ${props.className}`}>
      <p> 
        {props.type==="info" && <MdInfo size={"2.3rem"}/>}
        {props.type==="warning" && <MdWarning size={"2.3rem"}/>}
        {props.type==="error" && <MdError size={"2.3rem"}/>}
        {props.children}
      </p>
    </Styled.Container>
  )
}