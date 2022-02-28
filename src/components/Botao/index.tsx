import React from 'react';
import { IBotao } from '../../types/types';
import style from './Botao.module.scss';

const Botao = ({ children, type="button", onClick }: IBotao ) => {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
     {children}
    </button>
  )
}

export default Botao;