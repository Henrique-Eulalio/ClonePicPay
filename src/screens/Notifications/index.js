import React from 'react';

import { Wrapper, Header, LeftSide, RightSide, Body, CenterText } from './styles';

export default function Home() {
    return (
        <Wrapper>
            <Header>
                <LeftSide>Notificações</LeftSide>
                <RightSide>Configurar</RightSide>
            </Header>

            <Body>
                <CenterText>Você não possui notificações ainda!</CenterText>
            </Body>
        </Wrapper>
    );
}