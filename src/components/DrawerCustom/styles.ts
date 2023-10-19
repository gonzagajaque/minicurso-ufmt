import styled from 'styled-components/native';
import { DefaultTheme } from '../../styles/default';

export const Container = styled.View`
  flex: 1;
  padding: 15px 0px;
  background-color: #04166F;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const HeaderStyle = {
  Title: styled.Text`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[16]};
    color: #fff;
    padding: 0px 15px;
    font-family: 'Agrandir';
    margin-top: 10px;
  `,
  Content: styled.View``,
  Footer: styled.View`
    margin-top: auto;
    align-items: center;
  `,
  Center: styled.View`
    margin-top: 20px;
    padding-left: 5px;
  `,
  Img: styled.Image`
    height: 230px;
    width: 90%;
  `,
  Text: styled.Text`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[12]};
    color: #fff;
    font-family: 'Agrandir';
    margin: 0 16px;
  `,
  Item: styled.TouchableOpacity`
    padding: 6px 0px;
    align-items: center;
    flex-direction: row;
  `,
  Name: styled.Text`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[16]};
    font-family: 'Agrandir';
    color: #fff;
    margin-left: 10px;
  `,
};
