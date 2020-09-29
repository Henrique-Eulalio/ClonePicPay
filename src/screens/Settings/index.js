import React from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import { 
    Wrapper, 
    Container,
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
    LabelTitleColor,
    LabelContent,
    LabelTitleNoColor,
    LabelContentColor,
    LabelContentEmail,
    LabelTitleColorExit,
    LabelContentColorExit,
    Divider,
} from './styles';

import avatar2 from '../../Images/avatar2.jpeg';

export default function Settings(){
    return (
        <Wrapper>
            <Container>
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
                <LabelTitleNoColor>
                <LabelTitle>
                    Meu PicPay
                </LabelTitle>
                <LabelContent>
                    @henrique.eulalio
                </LabelContent>
                </LabelTitleNoColor>

                <Divider />

                <LabelTitleNoColor>
                <LabelTitle>
                    Meu número
                </LabelTitle>
                <LabelContent>
                    (**) *****-9573
                </LabelContent>
                </LabelTitleNoColor>

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

                <LabelTitleNoColor>
                <LabelTitle>
                    Dados pessoais
                </LabelTitle>
                <LabelContent>
                   Nome, CPF e data de nascimento
                </LabelContent>
                </LabelTitleNoColor>

                <Divider />

                <LabelTitleNoColor>
                <LabelTitle>
                    Conta Bancária
                </LabelTitle>
                </LabelTitleNoColor>
            
                <Divider />

                <LabelTitleNoColor>
                <LabelTitle>
                   Taxas e limites
                </LabelTitle>
                </LabelTitleNoColor>

                <Divider />

                <LabelTitleNoColor>
                <LabelTitle>
                    Meus endereços
                </LabelTitle>
                </LabelTitleNoColor>

                <Divider />

                <LabelTitleNoColor>
                <LabelTitle>
                   Meus favoritos
                </LabelTitle>
                </LabelTitleNoColor>
                
                <Divider />

                <LabelTitleNoColor>
                <LabelTitle>
                   Atualizar cadastro
                </LabelTitle>
                </LabelTitleNoColor>
                
               

            <LabelContentColor>
                <LabelTitleColor>   
                    Promoções
                </LabelTitleColor>
            </LabelContentColor>    

                

                <LabelTitleNoColor>
                <LabelTitle>
                   Usar código promocional
                </LabelTitle>
                </LabelTitleNoColor>

                

            <LabelContentColor>
                <LabelTitleColor>
                    Minhas assinaturas
                </LabelTitleColor>
            </LabelContentColor>    

                

                <LabelTitleNoColor>
                <LabelTitle>
                   Ver Minhas Assinaturas
                </LabelTitle>
                </LabelTitleNoColor>

                

            <LabelContentColor>
                <LabelTitleColor>
                    Para o meu negócio
                </LabelTitleColor>
            </LabelContentColor>    

                

                <LabelTitleNoColor>                
                <LabelTitle>
                   PicPay PRO
                </LabelTitle>
                </LabelTitleNoColor>

                <Divider />

                <LabelTitleNoColor>
                <LabelTitle>
                   Para estabelecimentos
                </LabelTitle>
                </LabelTitleNoColor>

                <Divider />

                <LabelTitleNoColor>
                <LabelTitle>
                   Venda por assinaturas
                </LabelTitle>
                </LabelTitleNoColor>

                

            <LabelContentColor>
                <LabelTitleColor>
                    Configurações
                </LabelTitleColor>
            </LabelContentColor>

                

                <LabelTitleNoColor>
                <LabelTitle>
                   Usar digital para pagar
                </LabelTitle>
                </LabelTitleNoColor>

                <Divider />

                <LabelTitleNoColor>
                <LabelTitle>
                  Alterar senha
                </LabelTitle>
                </LabelTitleNoColor>

                <Divider />

                <LabelTitleNoColor>
                <LabelTitle>
                  Privacidade
                </LabelTitle>
                </LabelTitleNoColor>

                <Divider />

                <LabelTitleNoColor>
                <LabelTitle>
                   Notificações
                </LabelTitle>
                </LabelTitleNoColor>

                <Divider />

                <LabelTitleNoColor>
                <LabelTitle>
                   Contas vinculadas
                </LabelTitle>
                </LabelTitleNoColor>

                

            <LabelContentColor>
                <LabelTitleColor>
                    Geral
                </LabelTitleColor>
            </LabelContentColor>

                

                <LabelTitleNoColor>
                <LabelTitle>
                   Precisa de ajuda?
                </LabelTitle>
                </LabelTitleNoColor>

                <Divider />

                <LabelTitleNoColor>
                <LabelTitle>
                   Sobre o PicPay
                </LabelTitle>
                </LabelTitleNoColor>

                <Divider />

                <LabelTitleNoColor>
                <LabelTitle>
                   Desativar minha conta
                </LabelTitle>
                </LabelTitleNoColor>

            <LabelContentColorExit>
                <LabelTitleColorExit>
                    Sair
                </LabelTitleColorExit>
            </LabelContentColorExit>

            </LabelContainer>
            </Container>
        </Wrapper>
    );
};
