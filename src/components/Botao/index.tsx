import React from 'react';
import style from './Botao.module.scss';

const Botao = ({ children, type="button", onClick }: { children?: string, onClick?: () => void, type?: "button" | "submit" | "reset" | undefined} ) => {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
     {children}
    </button>
  )
}

export default Botao;