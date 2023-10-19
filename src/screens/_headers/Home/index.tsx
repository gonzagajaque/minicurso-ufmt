import React from 'react';
import { TouchableOpacity } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Container, Content } from './styles';
import { useNavigation } from '@react-navigation/native';

const HomeHeader = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Content>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <FontAwesome5 name="bars" size={25} color={'#737373'} />
        </TouchableOpacity>
      </Content>
    </Container>
  );
};

export default HomeHeader;
