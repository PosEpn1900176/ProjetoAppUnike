import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { Container, Header, Content, ListItem, Left } from 'native-base';

const styleMenu = StyleSheet.create({
  btnMenu: {
    margin: 45,
    backgroundColor: 'red',
    color: 'yellow',
    justifyContext: 'center',
    flex: 1
  }
});

const MenuPresentation = props => {
  return (
    <Container>
      <Header />
      <Content>
        <ListItem icon>
          <Left>
            <Button
              title="Atendimentos Pendentes"
              style={styleMenu.btnMenu}
              onPress={props.onAtendimentosPendentes}
            />
          </Left>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button
              title="Atendimentos Realizados"
              style={styleMenu.btnMenu}
              onPress={props.onAtendimentosRealizados}
            />
          </Left>
        </ListItem>
        <ListItem>
          <Left>
            <Button
              title="Buscar por Atendimentos"
              style={styleMenu.btnMenu}
              onPress={props.onBuscarAtendimentos}
            />
          </Left>
        </ListItem>
        <ListItem>
          <Left>
            <Button
              title="Lista de Serviços Recusados"
              style={styleMenu.btnMenu}
              onPress={props.onListaServicos}
            />
          </Left>
        </ListItem>
        <ListItem>
          <Left>
            <Button
              title="Alterar Perfil"
              style={styleMenu.btnMenu}
              onPress={props.onAterarPerfil}
            />
          </Left>
        </ListItem>
        <ListItem>
          <Left>
            <Button title="Sair" style={styleMenu.btnMenu} onPress={props.onLogin} />
          </Left>
        </ListItem>
      </Content>
    </Container>
  );
};

export default MenuPresentation;
