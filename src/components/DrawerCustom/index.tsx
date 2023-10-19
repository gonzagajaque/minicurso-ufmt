import React from 'react';
import { Container, HeaderStyle } from './styles';
import { View } from 'react-native';
import { Image } from 'react-native';
import { about, home, ufmt } from '../../assets/img';

const DrawerCustom = (props: any) => {
  const navigation = props.navigation;

  let routes = [
    {
      name: 'Home',
      icon: home,
      nav: () => {
        navigation.reset({
          index: 0,
          routes: [
            { name: 'Home' },
          ],
        });
        navigation.navigate('Home');
      },
    },
    {
      name: 'Módulo 1',
      icon: about,
      nav: () => navigation.navigate('Modulo1'),
    },
    {
      name: 'Módulo 2',
      icon: about,
      nav: () =>
        navigation.navigate('Modulo2'),
    },
    {
      name: 'Módulo 3',
      icon: about,
      nav: () =>
        navigation.navigate('Modulo3'),
    },
    {
      name: 'Módulo 4',
      icon: about,
      nav: () => navigation.navigate('Modulo4'),
    },
    {
      name: 'Aulas auxiliares',
      icon: about,
      nav: () => navigation.navigate('Aulas'),
    },
  ];

  return (
    <Container>
      <HeaderStyle.Content>
        <HeaderStyle.Img source={ufmt} resizeMode="contain" />
      </HeaderStyle.Content>
      <HeaderStyle.Title>
        Módulos:
      </HeaderStyle.Title>
      <HeaderStyle.Center>
        {routes.map(el => (
          <HeaderStyle.Item key={el.name} onPress={() => el.nav()}>
            <View
              style={{
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                source={el.icon}
                style={{ width: 18, height: 30 }}
                resizeMode="contain"
              />
            </View>
            <HeaderStyle.Name>{el.name}</HeaderStyle.Name>
          </HeaderStyle.Item>
        ))}
      </HeaderStyle.Center>
      <HeaderStyle.Footer>
        <HeaderStyle.Text>Ciência e Tecnologia</HeaderStyle.Text>
      </HeaderStyle.Footer>
    </Container>
  );
};

export default DrawerCustom;
