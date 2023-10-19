import styled from 'styled-components/native';
import { DefaultTheme } from '../../../styles/default';

export const NoticeStyle = {
  Content: styled.View`
    gap: 15px;
    align-items: center;
    border-radius: 10px;
  `,
  Title: styled.Text`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[20]};
    font-family: 'Agrandir';
    color: #fff;
    position: absolute;
    text-align: center;
  `,
  Card: styled.TouchableOpacity`
    background-color: #000;
    width: 93%;
    height: 150px;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-top: 10px;
    border-radius: 10px;
  `,
};