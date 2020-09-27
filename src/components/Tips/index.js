import React from 'react';

import { Container, Option, Title, Img } from './styles';

import img8 from '../../Images/08.png';
import img9 from '../../Images/09.png';
import img10 from '../../Images/10.png';
import img11 from '../../Images/11.png';
import img12 from '../../Images/12.png';

const items = [
    {
        key: String(Math.random()),
        img: img8,
        title: 'Pague suas contas sem sair de casa', 
        bgColor: '#172c4a',
    },
    {
        key: String(Math.random()),
        img: img9,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#6a0159', 
    },
    {
        key: String(Math.random()),
        img: img10,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#4139c8', 
    },
    {
        key: String(Math.random()),
        img: img11,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#ba2f76', 
    },
    {
        key: String(Math.random()),
        img: img12,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#172c4a', 
    },
];
 
export default function Tips(){
    return (
        <Container>
           {items.map((item) => (
                <Option key={item.key} bgColor={item.bgColor}>
                <Title>{item.title}</Title>

                <Img source={item.img} />
            </Option>
           ))}
        </Container>
    );
}