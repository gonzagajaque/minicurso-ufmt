import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  justify-content: center;
  background-color: transparent;
  height: 50px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
`;

export const ProfileImageWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(20)}px;
  margin: 0 10px;
  justify-content: space-around;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;

export const ProfileName = styled.Text`
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[18]};
    font-weight: 500;
    font-family: 'Agrandir';
`;
