import React from 'react';
import { Linking, ScrollView } from 'react-native';
import { ContainerPage } from '../../../components/commons';
import Marker from '../../../components/MarkerProps';
import BackHeader from '../../_headers/Back';
import { Content, ContentText, Separator, Title } from '../Modulo1/styles';
import Button from '../../../components/Button';

const urlCapes =
    'https://www-periodicos-capes-gov-br.ezl.periodicos.capes.gov.br/index.php?'

const urlScielo =
    'https://www.scielo.br/'

const urlGoogleAcademico =
    'https://scholar.google.com.br/?hl=pt'

const Modulo4 = () => {

    const openURL = (url: string) => {
        Linking.openURL(url);
    }

    return (
        <ContainerPage>
            <BackHeader />
            <Marker title="Módulo IV" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingHorizontal: 16 }}
            >
                <Title>Tecnologias educacionais na aprendizagem matemática</Title>
                <Content>
                    <ContentText>
                        A tecnologia educacional é uma ferramenta projetada para melhorar o
                        ensino e a aprendizagem, envolvendo alunos e professores. Na aprendizagem de matemática,
                        a tecnologia desempenha um papel vital, oferecendo benefícios como:{"\n\n"}
                        Aplicativos e Software Educacional: Eles tornam o aprendizado de matemática mais interativo e envolvente.
                        {"\n\n"}- Plataformas de Aprendizado Online: Facilitam o ensino à distância e o acesso a recursos educacionais.
                        {"\n\n"}- Simulações e Modelos: Ajudam os alunos a visualizar conceitos matemáticos complexos.
                        {"\n\n"}- Aprendizado Adaptativo: Personaliza o ensino com base no desempenho individual.
                        {"\n\n"}- Realidade Virtual e Aumentada: Permite a exploração de conceitos em ambientes virtuais.
                        {"\n\n"}- Ferramentas de Avaliação Online: Simplificam a avaliação.
                        {"\n\n"}- Vídeos Educativos: Explicam conceitos de matemática de forma clara.
                        {"\n\n"}- Gamificação: Torna o aprendizado de matemática mais divertido.
                        {"\n\n"}- Análise de Dados: Usa dados para melhorar o ensino.
                        {"\n\n"}A tecnologia educacional torna o aprendizado interessante e personalizado,
                        mas os educadores devem integrá-la de forma eficaz com os objetivos de ensino
                        e aprendizagem. (SANTOS et al, 2022).
                    </ContentText>
                </Content>
                <Separator />
                <Title>A importância da pesquisa nos cursos de nível superior</Title>
                <Content>
                    <ContentText>
                        A pesquisa desempenha um papel fundamental na educação,
                        especialmente na era da tecnologia. Para realizar pesquisas
                        acadêmicas de forma segura e confiável, é essencial não apenas
                        buscar conhecimento, mas também avaliar rigorosamente as fontes
                        e as licenças dos materiais utilizados, especialmente ao criar
                        artigos e materiais de aprendizagem.{"\n\n"}
                        Docentes de Metodologia de Pesquisa têm se preocupado em encontrar métodos mais
                        eficazes para ensinar e aprender pesquisa. O uso de ferramentas tecnológicas oferece
                        várias opções para buscar informações, mas a confiabilidade das fontes é crucial.
                        Para garantir a confiabilidade da pesquisa acadêmica, recomenda-se o uso de
                        plataformas confiáveis, tais como:
                        {"\n\n"}Periódicos Capes: Uma biblioteca virtual que reúne e disponibiliza a produção
                        científica internacional para instituições de ensino e pesquisa no Brasil.
                        {"\n\n"}SciELO: Um site com uma ampla variedade de artigos acadêmicos,
                        amplamente utilizado em pesquisas.
                        {"\n\n"}Google Acadêmico: Uma ferramenta simples e prática para
                        pesquisar diversos tipos de materiais
                        (Soares e Severino, 2018, p.374; Soubhia, Garanhani, Dessunti, 2007).
                    </ContentText>
                </Content>
                <Button
                    label="Conheça o Periódicos Capes aqui!"
                    color='primary'
                    onPress={() => {
                        openURL(urlCapes)
                    }}
                    variantType='linear'
                    style={{
                        marginTop: 30
                    }}
                />
                <Button
                    label="Conheça o SciELO aqui!"
                    color='primary'
                    onPress={() => {
                        openURL(urlScielo)
                    }}
                    variantType='linear'
                />
                <Button
                    label="Conheça o Google Acadêmico aqui!"
                    color='primary'
                    onPress={() => {
                        openURL(urlGoogleAcademico)
                    }}
                    variantType='linear'
                />
                <Separator />
            </ScrollView>
        </ContainerPage>
    );
};

export default Modulo4;
