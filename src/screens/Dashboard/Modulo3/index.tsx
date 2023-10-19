import React from 'react';
import { Linking, ScrollView } from 'react-native';
import { ContainerPage } from '../../../components/commons';
import Marker from '../../../components/MarkerProps';
import BackHeader from '../../_headers/Back';
import { Content, ContentText, Separator, Title } from '../Modulo1/styles';
import Button from '../../../components/Button';
import { urlMatematicaElementar } from '../Modulo2';

const Modulo3 = () => {
    return (
        <ContainerPage>
            <BackHeader />
            <Marker title="Módulo III" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingHorizontal: 16 }}
            >
                <Title>Tópicos de matemática elementar usados na introdução à programação</Title>
                <Content>
                    <ContentText>
                        Pontos fundamentais da matemática elementar para introdução à programação:
                        {"\n\n"}
                        - Conjuntos{"\n"}
                        - Operações aritméticas{"\n"}
                        - Lógica matemática{"\n"}
                        - Funções{"\n"}
                        - Análise Combinatória{"\n"}
                        - Trigonometria{"\n"}
                        - Probabilidade{"\n"}
                        - Função logarítmica{"\n"}
                        {"\n"}

                        A importância da matemática na programação é variável,
                        dependendo da área de atuação. Programadores de software
                        usam álgebra e lógica, enquanto cientistas de dados e
                        engenheiros de software em áreas específicas necessitam
                        de uma base matemática mais robusta para solucionar
                        problemas complexos.
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

export default Modulo3;
