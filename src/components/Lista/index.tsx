import React from 'react';
import { ILista } from '../../types/types';
import Item from './Item';
import style from './Lista.module.scss';
 
const Lista = ({ tarefas, selecionaTarefa }: ILista) => {

  return (
    <aside className={style.listaTarefas}>
      <h2 > Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
          selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;