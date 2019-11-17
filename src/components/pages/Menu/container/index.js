import React from 'react';
import MenuPresentation from './presentation';

const MenuContainer = props => {
  return (
    <MenuPresentation
      onAtendimentosPendentes={handleAtendimentosPendentes}
      onAtendimentosRealizados={handleAtendimentosRealizados}
      onBuscarAtendimentos={handleBuscarAtendimentos}
      onListaServicos={handleListaServicos}
      onAlterarPerfil={handleAterarPerfil}
      onLogin={handleLogin}
    />
  );
};

function handleAtendimentosPendentes() {
  props.navigation.navigate('AtendimentosPendentes');
}

function handleAtendimentosRealizados() {
  props.navigation.navigate('AtendimentosRealizados');
}

function handleBuscarAtendimentos() {
  props.navigation.navigate('BuscarAtendimentos');
}

function handleListaServicos() {
  props.navigation.navigate('ListarServicos');
}

function handleAterarPerfil() {
  props.navigation.navigate('AlterarPerfil');
}

function handleLogin() {
  props.navigation.navigate('Login');
}

export default MenuContainer;
