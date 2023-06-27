import React from "react";

import { AbBotao, AbBotaoProps } from '../src'

import {ComponentMeta, ComponentStory}  from "@storybook/react"

export default{
    title: 'Componentes/abBotao',
    component: AbBotao

} as ComponentMeta<typeof AbBotao>

const Template: ComponentStory<typeof AbBotao> = (args) => <AbBotao {...args}/>;

export const Primario = Template.bind(({}));

Primario.args = {
    texto: 'Ab Botao Primario',
    tipo: 'primario'
} as AbBotaoProps;

export const Secundario = Template.bind(({}));

Secundario.args = {
    texto: 'Ab Botao Secundario',
    tipo: 'primario'
} as AbBotaoProps;