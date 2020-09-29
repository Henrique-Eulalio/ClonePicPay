import styled from 'styled-components/native';

export const Wrapper = styled.View`
    background: #000;
    flex: 1;
    padding-top: 18px;
    padding-right: 20px;
`;

export const Header = styled.SafeAreaView`
    color: #1e222b;
    height: 45px;
    padding: 0 15px;
`;

export const MenuContainer = styled.View`
    padding: 10px 20px;
    flex-direction: row;
    justify-content: space-between;
`;

export const NameMenu = styled.Text`
    color: #fff;
    font-size: 18px;
`;

export const Divider = styled.View`
    background: #43cea2;
    height: 1px;
    width: 120px;
`;

export const ServicesContainer = styled.View`
    margin-right: 50px;
    
`;

export const Title = styled.Text`
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
    padding: 15px 10px;
`;

export const ServicesContent = styled.View`
    padding: 10px 10px;
    flex-direction: row;
    align-items: center;
    
`;

export const Img = styled.Image`

`;

export const ServiceTitle = styled.Text`
    color: #fff;
    font-size: 14px;
`;

export const ServiceDescription = styled.Text`
    color: rgba(255, 255, 255, 0.8);
    font-size: 12px;
`;


export const ServiceImage = styled.View`

`;
export const ServiceContent = styled.View`
    padding: 5px 15px;
`;
