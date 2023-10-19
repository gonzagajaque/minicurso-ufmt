import styled from 'styled-components/native';
import { DefaultTheme } from '../../../styles/default';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[18]};
  color: #000;
  margin-bottom: 10px;
`;

export const Separator = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #0097b2;
  margin: 10px 0;
`;

export const Content = styled.View`
`;

export const ContentText = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[14]};
  color: #000;
  text-align: justify;
`;
