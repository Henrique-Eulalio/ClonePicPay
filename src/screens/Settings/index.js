import React from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import { 
    Wrapper, 
    Header,
    HeaderContainer, 
    Avatar, 
    PhotoAvatar, 
    NameAvatar, 
    NameAvatarDescription, 
    SeeAvatar, 
    SeeAvatarLabel,
    MyAccountLabel,
    Help,
    LabelContainer,
    LabelEmailContent,
    LabelEmailTexts,
    LabelTitle,
    LabelContent,
    LabelContentEmail,
    Divider,
} from './styles';

import avatar2 from '../../Images/avatar2.jpeg';

export default function Settings(){
    return (
        <Wrapper>
            <Header
                 colors={['#43c2a2', '#00c6ff']}
            >
                <Help>Ajuda</Help>
                <HeaderContainer>
                    <Avatar>
                        <PhotoAvatar source={avatar2}/>
                        <NameAvatar>@henrique.eulalio</NameAvatar>
                        <NameAvatarDescription>Henrique Eulálio</NameAvatarDescription>
                        <SeeAvatar>
                            <SeeAvatarLabel>Ver meu perfil</SeeAvatarLabel>
                            <Ionicons name="ios-arrow-forward" color="#fff" size={14}/>
                        </SeeAvatar>
                    </Avatar>
                </HeaderContainer>
                <MyAccountLabel>Minha Conta</MyAccountLabel>
            </Header>

            <LabelContainer>
                <LabelTitle>
                    Meu PicPay
                </LabelTitle>
                <LabelContent>
                    @henrique.eulalio
                </LabelContent>

                <Divider />

                <LabelTitle>
                    Meu número
                </LabelTitle>
                <LabelContent>
                    (**) *****-9573
                </LabelContent>

                <Divider />

            <LabelEmailContent>
                <LabelEmailTexts>
                    <LabelTitle>
                        Meu E-mail
                    </LabelTitle>
                    <LabelContentEmail>
                        k***********3@g***l.com
                    </LabelContentEmail>
                </LabelEmailTexts>

                <AntDesign name="exclamationcircle" size={17} color="#43c2a2" />
            </LabelEmailContent>    

                <Divider />

                <LabelTitle>
                    Dados pessoais
                </LabelTitle>
                <LabelContent>
                   Nome, CPF e data de nascimento
                </LabelContent>

                <Divider />

            </LabelContainer>
        </Wrapper>
    );
};
