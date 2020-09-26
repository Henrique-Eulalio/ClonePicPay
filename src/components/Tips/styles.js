import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() =>({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
}))`
    margin-top: 25px;
`;