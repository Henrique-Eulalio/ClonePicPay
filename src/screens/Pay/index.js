import React from 'react';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

import {
    Wrapper,
    Header,
    MenuContainer,
    NameMenu,
    Divider,
    ServicesContainer,
    Title,
    ServicesContent,
    Img,
    ServiceTitle,
    ServiceImage,
    ServiceContent,
    ServiceDescription,
} from './styles';

import img1 from '../../Images/01.png';
import img8 from '../../Images/08.png';
import img11 from '../../Images/11.png';
import img6 from '../../Images/06.png';
import img7 from '../../Images/07.png';

export default function Home(){
    return (
        <Wrapper>
            <Header>
                <MaterialCommunityIcons name="qrcode-scan" size={30} color="#43cea2"/>
            </Header>

            <MenuContainer>
                <NameMenu>
                    Principais
                </NameMenu>

                
         
                <NameMenu>
                    Locais
                </NameMenu>
                <NameMenu>
                    Store
                </NameMenu>
            </MenuContainer>
            <Divider />

            <ServicesContainer>
                <Title>Serviços</Title>

                <ServicesContent>
                    <ServiceImage>
                        <Img source={img8} />
                    </ServiceImage>
                    <ServiceContent>
                        <ServiceTitle>
                            Pagar Pessoas
                        </ServiceTitle>
                        <ServiceDescription>
                            Pague todos os seus amigos que também estão no PicPay.
                        </ServiceDescription>
                        
                    </ServiceContent>
                </ServicesContent>

                <ServicesContent>
                <ServiceImage>
                    <Img source={img11}/>
                </ServiceImage>
                <ServiceContent>
                    <ServiceTitle>
                        Pagar nas Maquininhas
                    </ServiceTitle>
                    <ServiceDescription>
                        Pague em máquinas Cielo, Getnet e Rede escaneando o QR code na máquina.
                    </ServiceDescription>
                    </ServiceContent>
                </ServicesContent>

                <ServicesContent>
                <ServiceImage>
                    <Img source={img6}/>
                </ServiceImage>
                <ServiceContent>
                    <ServiceTitle>
                        Pagar Conta
                    </ServiceTitle>
                    <ServiceDescription>
                        Pague sua conta de luz, água e boletos bancários etc.
                    </ServiceDescription>
                    </ServiceContent>
                </ServicesContent>

                <ServicesContent>
                <ServiceImage>
                    <Img source={img7}/>
                </ServiceImage>
                <ServiceContent>
                    <ServiceTitle>
                        Cobrar
                    </ServiceTitle>
                    <ServiceDescription>
                        Cobre um amigo
                    </ServiceDescription>
                    </ServiceContent>
                </ServicesContent>

                <ServicesContent>
                <ServiceImage>
                    <Img source={img1}/>
                </ServiceImage>
                <ServiceContent>
                    <ServiceTitle>
                        Recarga de Celular
                    </ServiceTitle>
                    <ServiceDescription>
                        Vivo, Claro, Ti, Oi, Nextel, Algar, Sercomtel, Correrios
                    </ServiceDescription>
                    </ServiceContent>
                </ServicesContent>
            </ServicesContainer>
        </Wrapper>
    );
}