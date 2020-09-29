import styled from 'styled-components/native';

export const Wrapper = styled.View`
    background: #000;
    flex: 1;
    padding-top: 18px;
`;

export const Header = styled.SafeAreaView`
    color: #1e222b;
    height: 45px;
    padding: 0 15px;
    flex-direction: row;
    justify-content: space-between;
`;

export const LeftSide = styled.Text`
    color: #fff;
    font-size: 17px;
    font-weight: bold;
`;

export const RightSide = styled.Text`
    color: #43cea2;
    font-size: 14px;
`;

export const NotificationsContainer = styled.View`
    background: #1e222b;
`;
export const NotificationContent = styled.View`
    height: 100px;
    padding: 10px 10px;
`;

export const NotificationText = styled.Text`
    color: #fff;
    font-size: 15px;
    margin-bottom: 10px;
`;

export const NotificationDate = styled.Text`
    color: rgba(255, 255, 255, 0.6);
    font-size: 12px;
`;

export const Divider = styled.View`
    background:  rgba(255, 255, 255, 0.2);
    height: 1px;
    width: 380px;
    margin-left: 12px;
`;