import React from 'react';
import { Linking, ScrollView } from 'react-native';
import {
    Title,
    Separator,
    Content,
    ContentText,
} from './styles';
import { ContainerPage } from '../../../components/commons';
import Marker from '../../../components/MarkerProps';
import BackHeader from '../../_headers/Back';
import Button from '../../../components/Button';

const urlMatematicaElementar =
    'https://www.youtube.com/channel/UCavKhDLuVuiRqZHdqmefdzg'

const urlLogicaProgramacao =
    'https://www.youtube.com/watch?v=8mei6uVttho&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV'

const Modulo1 = () => {

    const handleDownloadPDF = (url: string) => {
        Linking.openURL(url);
    }

    return (
        <ContainerPage>
            <BackHeader />
            <Marker title="Módulo I" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingHorizontal: 16 }}
            >
                <Title>Conceitos da matemática elementar</Title>

                <Content>
                    <ContentText>
                        A matemática elementar compreende os princípios matemáticos fundamentais
                        introduzidos nas séries iniciais da educação, proporcionando aos alunos
                        uma base sólida em conceitos matemáticos básicos, habilitando-os a realizar
                        cálculos simples, resolver problemas cotidianos e compreender noções de
                        quantidade, medida e forma. Em essência, a matemática elementar representa o
                        alicerce essencial de habilidades e conceitos matemáticos que todos os estudantes
                        adquirem desde o início de sua educação, estabelecendo as bases necessárias
                        para a aprendizagem posterior.{"\n"}
                    </ContentText>
                    <Button
                        color='primary'
                        label="Conheça um canal gratuito para estudar Matemática Elementar aqui!"
                        onPress={() => {
                            handleDownloadPDF(urlMatematicaElementar)
                        }}
                        variantType='linear'
                    />
                </Content>
                <Separator />
                <Title>Conceitos de Introdução à Programação</Title>
                <Content>
                    <ContentText>
                        A introdução à programação marca o ponto de partida no aprendizado da
                        criação de código de computador, introduzindo os conceitos e fundamentos básicos.
                        Um dos conceitos essenciais é o de algoritmos, que são sequências de ações
                        bem definidas para atingir objetivos específicos. Algoritmos são a base da lógica
                        e servem como a linguagem fundamental da programação. Dependendo da linguagem
                        de programação utilizada, algoritmos podem ser usados para criar software e desenvolver
                        soluções eficientes para problemas do cotidiano. Os algoritmos, sendo conjuntos ordenados
                        de operações, são cruciais na programação e na ciência da computação, encontrando
                        aplicação em diversas áreas e campos, incluindo linguagens de programação como Python,
                        Java, C++, e muitas outras.{"\n"}
                    </ContentText>
                    <Button
                        color='primary'
                        label="Conheça um canal gratuito para estudar Lógica de Programação aqui!"
                        onPress={() => {
                            handleDownloadPDF(urlLogicaProgramacao)
                        }}
                        variantType='linear'
                    />
                </Content>
            </ScrollView>
        </ContainerPage>
    );
};

export default Modulo1;
