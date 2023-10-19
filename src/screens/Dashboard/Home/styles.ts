import styled from 'styled-components/native';
import { DefaultTheme } from '../../../styles/default';

export const BannerStyle = {
  Container: styled.ScrollView`
    gap: 15px;
  `,
  Image: styled.Image`
    width: 100%;
    height: 150px;
    border-radius: 5px;
  `,
  Card: styled.TouchableOpacity`
    margin-right: 15px;
    width: 240px;
  `,
  Title: styled.Text`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[14]};
    font-weight: 400;
    text-align: center;
    margin-top: 10px;
    font-family: 'Agrandir';
    color: #737373;
  `,
};

export const Divulgue = {
  Content: styled.View`
    width: 90%;
    padding: 15px 10px;
    margin-top: 25px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: ${({ theme }: { theme: DefaultTheme }) =>
      theme.secondary};
  `,
  Row: styled.View`
    flex-direction: row;
    gap:15px;
  `,
  Title: styled.Text`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[16]};
    font-weight: 800;
    color: white;
  `,
  Description: styled.Text`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[16]};
    font-weight: 400;
    margin-top: 10px;
    color: white;
  `,
};

export const NewsContent = styled.View`
  gap: 10px;
`;

export const LineRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

export const Card = styled.TouchableOpacity`
  width: 32%;
  height: 100px;
  border-radius: 5px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-bottom: 12px;
`;

export const TitleCard = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[10]};
  color: white;
`;

export const NoticeStyle = {
  Content: styled.View`
    gap: 15px;
  `,
  Bullet: styled.View`
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.secondary};

    width: 25px;
    height: 25px;
    border-radius: 100px;
  `,
  Text: styled.Text`
    color: #737373;
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[14]};
    font-weight: 500;
    font-family: 'Agrandir';
    margin-left: 10px;
  `,
  Title: styled.Text`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[20]};
    font-weight: 500;
    font-family: 'Agrandir';
    color: ${({ theme }: { theme: DefaultTheme }) => theme.text};
  `,
  Image: styled.Image`
    width: 90%;
    height: 100px;
    border-radius: 5px;
  `,
  Card: styled.TouchableOpacity`
    flex-direction: row;
    margin-right: 15px;
    width: 200px;
    margin-top: 15px;
  `,
};

export const Barra = styled.View`
    width: 30%;
    height: 2px;
    background: ${({ theme }: { theme: DefaultTheme }) => theme.secondary};
    align-items: center;
    justify-content: center;
    margin-top: -10px;
    margin-right: 35px
`;

export const ViewRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const ContainerTitle = styled.View`
    border-radius: 10px;
    padding: 16px;
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};

`;