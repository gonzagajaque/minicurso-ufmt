import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';
import { defaultTheme } from '../../styles/default';

interface ButtonProps extends TouchableOpacityProps {
  loading?: boolean;
  label: string;
  small?: boolean;
  color:
    | 'gray'
    | 'primary'
    | 'danger'
    | 'secondary'
    | 'secondaryDark'
    | 'success'
    | 'warning';
  variantType?: 'linear' | 'block' | 'outline' | 'inline';
  fullWidth?: boolean;
}

const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  height: 50px;
  ${({ fullWidth }) => fullWidth ? 'width: 100%' : ''}
  ${({ disabled, loading }) => (disabled || loading) && 'opacity:  0.5;'}
  ${({ color, theme, variantType }) => {
    if (variantType === 'block') {
      return css`
        border-radius: 100px;
        align-items: center;
        padding: 0px 35px;
        justify-content: center;
        background-color: ${theme.buttons[color].background};
      `;
    }
    if (variantType === 'outline') {
      return css`
        border-radius: 8px;
        border-width: 1px;
        align-items: center;
        padding: 0px 15px;
        justify-content: center;
        border-color: ${theme.buttons[color].background};
      `;
    }
    return css`
      flex-wrap: wrap;
      flex-direction: row;
      color: ${theme.buttons[color].background};
    `;
  }}
  ${({ small }) =>
    small &&
    css`
      height: 30px;
    `}
`;

const ButtonLabel = styled.Text<{
  color: ButtonProps['color'];
  variantType: ButtonProps['variantType'];
  small: ButtonProps['small'];
}>`
  font-size: ${({ theme }) => theme.fonts.size[16]};
  font-weight: 500;
  font-family: 'Agrandir';
  ${({ color, theme, variantType }) => {
    if (variantType === 'block') {
      return css`
        color: ${theme.buttons[color].foreground};
      `;
    }
    return css`
      color: ${theme.buttons[color].background};
    `;
  }}
  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fonts.size[12]};
    `}
`;

const Button: React.FC<ButtonProps> = ({
  label,
  small,
  variantType = 'block',
  disabled,
  color = 'primary',
  fullWidth = false,
  onPress,
  loading,
  ...props
}) => {
  return (
    <ButtonContainer
      small={small}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      loading={loading}
      color={color}
      variantType={variantType}
      onPress={onPress}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          color={
            variantType === 'block' ? 'white' : defaultTheme.primary
          }
        />
      ) : (
        <ButtonLabel small={small} color={color} variantType={variantType}>
          {label}
        </ButtonLabel>
      )}
    </ButtonContainer>
  );
};

export default Button;
