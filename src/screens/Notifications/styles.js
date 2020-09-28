import styled from 'styled-components/native';

export const Wrapper = styled.View`
    background: #000;
    flex: 1;
    padding-top: 18px;
`;

export const Header = styled.SafeAreaView`
    color: #1e222b;
    height: 45px;
    padding: 0 30px;
    flex-direction: row;
    justify-content: space-between;
`;

export const LeftSide = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const RightSide = styled.Text`
    color: #43cea2;
    font-size: 14px;
`;

export const Body = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const CenterText = styled.Text`
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
`;