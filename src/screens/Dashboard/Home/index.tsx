import React from 'react';
import HomeHeader from '../../../screens/_headers/Home';
import { ContainerPage, ContentScroll, Title } from '../../../components/commons';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Linking,
} from 'react-native';
import { defaultTheme } from '../../../styles/default';
import Button from '../../../components/Button';
import { ContainerTitle } from './styles';

const modules = [
  { title: 'Módulo 1' },
  { title: 'Módulo 2' },
  { title: 'Módulo 3' },
  { title: 'Módulo 4' }
];

const linkPDF = 'https://drive.google.com/drive/folders/1CC35W0SUv7qjoP9yKqU6LCM8ugIPQ3We?usp=share_link'

const Home = ({ navigation }) => {

  const handleDownloadPDF = () => {
    Linking.openURL(linkPDF);
  }

  return (
    <ContainerPage>
      <HomeHeader />
      <ContentScroll>
        <View style={styles.container}>
          <ContainerTitle>
            <Title style={styles.mainTitle}>
              Nosso mini curso visa proporcionar direção, motivação, eficiência e alinhamento com
              os objetivos, oferecendo uma estrutura organizada para o desenvolvimento de
              habilidades e conhecimento nas disciplinas abordadas.
              O principal propósito do aplicativo é otimizar o processo de aprendizagem, auxiliando
              os aprendizes e alcançarem seus objetivos de forma dinâmica e eficaz.{"\n"}
            </Title>
            <Title style={styles.mainTitle}>
              “A criatividade é a inteligência se divertindo"{"\n"}
              Albert Einstein {"\n\n\n"}Grupo Matemágicos
            </Title>
          </ContainerTitle>
          <View style={styles.buttonContainer}>
            <View style={styles.column}>
              {modules.slice(0, 2).map((module, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.circularButton}
                  onPress={() => navigation.navigate(`Modulo${index + 1}`)}
                >
                  <Text style={styles.buttonText}>{module.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.column}>
              {modules.slice(2, 4).map((module, index) => (
                <TouchableOpacity
                  key={index + 2}
                  style={styles.circularButton}
                  onPress={() => navigation.navigate(`Modulo${index + 3}`)}
                >
                  <Text style={styles.buttonText}>{module.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <Button
            color='secondaryDark'
            label="Clique para baixar o E-book completo!"
            onPress={handleDownloadPDF}
            variantType='outline'
            style={{
              justifyContent: 'center',
              marginTop: 16
            }}
          />
          <Button
            color='secondaryDark'
            label="Aulas Complementares"
            onPress={() => navigation.navigate('Aulas')}
            variantType='outline'
            style={{
              justifyContent: 'center',
              marginTop: 16
            }}
          />
        </View>
      </ContentScroll>
    </ContainerPage>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginBottom: 30,
    borderRadius: 10
  },
  mainTitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'justify',
    backgroundColor: defaultTheme.primary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  column: {
    width: '48%',
    alignItems: 'center',
  },
  circularButton: {
    width: '100%',
    height: 80,
    backgroundColor: defaultTheme.terciary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    marginHorizontal: 10,
    padding: 6,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default Home;
