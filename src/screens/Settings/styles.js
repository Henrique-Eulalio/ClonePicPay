import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
    background: #000;
    flex: 1;
`;

export const Header = styled(LinearGradient)`
    height: 300px;
`;  

export const Help = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: right;
    margin-top: 10px;
    margin-right: 15px;
`;

export const HeaderContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;  

export const Avatar = styled.View`
    align-items: center;
    justify-content: center;
`;  

export const PhotoAvatar = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 60px;
`;  

export const NameAvatar = styled.Text`
    color: rgba(255, 255, 255, 1);
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
`;  

export const NameAvatarDescription = styled.Text`
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
    margin-top: 5px;
`;  

export const SeeAvatar = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 2px;
`;  

export const SeeAvatarLabel = styled.Text`
    color: #fff;
    margin-right: 5px;
    font-size: 14px;
    font-weight: 600;
`; 

export const MyAccountLabel = styled.Text`
    color: #fff;
    font-size: 13px;
    margin-left: 15px;
    margin-bottom: 10px;
`;

export const LabelContainer = styled.View`
    margin-left: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const LabelTitle = styled.Text`
    color: #fff;
    font-size: 15px;
    font-weight: bold;
`;

export const LabelContent = styled.Text`
    color: rgba(255, 255, 255, 0.6);
    font-size: 13px;
`;

export const Divider = styled.View`
    background:  rgba(255, 255, 255, 0.4);
    height: 1px;
    width: 380px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const LabelContentEmail = styled.Text`
    color: #43c2a2;
`;

export const LabelEmailContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-right: 20px;
`;

export const LabelEmailTexts = styled.View`

`;


