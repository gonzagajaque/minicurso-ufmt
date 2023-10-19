import React from 'react';
import styled from 'styled-components/native';
import { DefaultTheme } from 'styles/default';

interface MarkerProps {
  title: string;
}

const MarkerContainer = styled.View`
  width: 200px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 10px;
  align-self: flex-start;
`;

const MarkerText = styled.Text`
  color: white;
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.size[20]};
  font-family: 'Agrandir';
  margin-left: 10px;
`;

const Marker: React.FC<MarkerProps> = ({ title }) => {
  return (
    <MarkerContainer>
      <MarkerText>{title}</MarkerText>
    </MarkerContainer>
  );
};

export default Marker;
