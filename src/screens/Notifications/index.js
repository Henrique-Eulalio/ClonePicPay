import React from 'react';

import { 
    Wrapper, 
    Header, 
    LeftSide, 
    RightSide,
    NotificationsContainer,
    NotificationContent,
    NotificationText,
    NotificationDate,
    Divider,
} from './styles';

export default function Home() {
    return (
        <Wrapper>
            <Header>
                <LeftSide>Notificações</LeftSide>
                <RightSide>Configurar</RightSide>
            </Header>

            <NotificationsContainer>
                <NotificationContent>
                    <NotificationText>
                        Pague um amigo pela primeira vez com PicPay hoje e ganhe R$20 de volta! Toque para saber mais.
                    </NotificationText>
                    <NotificationDate>
                        Hoje às 10:48
                    </NotificationDate>
                </NotificationContent>

                <Divider />

                <NotificationContent>
                    <NotificationText>
                        Que tal R$20 de volta para começar a usar o PicPay? Toque para saber mais.
                    </NotificationText>
                    <NotificationDate>
                        27 de set às 22:04
                    </NotificationDate>
                </NotificationContent>
            </NotificationsContainer>
        </Wrapper>
    );
}