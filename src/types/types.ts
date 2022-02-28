import React from "react";

export interface ITarefa {
  tarefa: string,
  tempo: string,
  selecionado: boolean,
  completado: boolean,
  id: string
}

export interface IRelogio {
  tempo: number | undefined
}

export interface IBotao {
  children?: React.ReactNode,
  onClick?: () => void,
  type?: "button" | "submit" | "reset" | undefined
}

export interface ILista {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export interface IItem extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export interface ICronometro {
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void
}
