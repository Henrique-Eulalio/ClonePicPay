import React from 'react';

import { Container, Option, Img, Label } from './styles';

import img1 from '../../Images/01.png';
import img2 from '../../Images/02.png';
import img3 from '../../Images/03.png';
import img4 from '../../Images/04.png';
import img5 from '../../Images/05.png';
import img6 from '../../Images/06.png';
import img7 from '../../Images/07.png';

const items = [
    {
        key: String(Math.random()),
        img: img1,
        label: 'Recarga',
    },
    {
        key: String(Math.random()),
        img: img2,
        label: 'Uber',
    },
    {
        key: String(Math.random()),
        img: img3,
        label: 'Ônibus',
    },
    {
        key: String(Math.random()),
        img: img4,
        label: 'TV',
    },
    {
        key: String(Math.random()),
        img: img5,
        label: 'Doações',
    },
    {
        key: String(Math.random()),
        img: img6,
        label: 'Barras',
    },
    {
        key: String(Math.random()),
        img: img7,
        label: 'FAQ',
    },
]

export default function Suggestions(){
    return (
        <Container>
            {items.map((item) => (
                <Option key={item.key}>
                    <Img source={item.img} />
                    <Label>{item.label}</Label>
                </Option>
            ))}
        </Container>
    );
}