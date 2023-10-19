import React from 'react';
import { Linking, ScrollView } from 'react-native';
import { ContainerPage } from '../../../components/commons';
import Marker from '../../../components/MarkerProps';
import BackHeader from '../../_headers/Back';
import { Content, ContentText, Separator, Title } from '../Modulo1/styles';
import Button from '../../../components/Button';

export const urlMatematicaElementar =
'https://www.youtube.com/watch?v=nIN5_nHGk4w&list=PL5TJqBvpXQv7BlKLVpzrzag2VtlQ2gjV2'

const Modulo2 = () => {
    return (
        <ContainerPage>
            <BackHeader />
            <Marker title="Módulo II" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingHorizontal: 16 }}
            >
                <Title>Relação entre matemática elementar e a introdução à programação</Title>
                <Content>
                    <ContentText>
                        A matemática e a programação estão interligadas, com a
                        matemática servindo de base para a programação, especialmente na
                        criação de algoritmos. Um algoritmo é essencial na programação,
                        e um programa de computador é basicamente um conjunto de instruções
                        que segue um algoritmo. A matemática ensina a lógica, que é crucial
                        para entender e criar algoritmos. (Mathias, 2017, p. 12, 13, 14).
                    </ContentText>
                </Content>
                <Button
                    label="Aprenda Matemática Elementar para Computação aqui!"
                    color='primary'
                    onPress={() => {
                        Linking.openURL(urlMatematicaElementar)
                    }}
                    variantType='linear'
                    style={{
                        marginTop: 30
                    }}
                />
                <Separator />
            </ScrollView>
        </ContainerPage>
    );
};

export default Modulo2;
