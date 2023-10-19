import React from 'react';
import { Dimensions, View, ScrollView } from 'react-native';
import Marker from '../../../components/MarkerProps';
import { ContainerPage } from '../../../components/commons';
import BackHeader from '../../_headers/Back';
import WebView from 'react-native-webview';
import { Title } from '../Modulo1/styles';

const videos = [
    { title: "Funções", url: "https://www.youtube.com/embed/k2-wVKJvsqs" },
    { title: "Função Logarítmica", url: "https://www.youtube.com/embed/ZqJGZ1gRh-U" },
    { title: "O Teorema fundamental da aritmética", url: "https://www.youtube.com/embed/CTuofyXZLqk" },
    { title: 'Trigonometria', url: "https://www.youtube.com/embed/mtF08g2krmw" },
    { title: "Probabilidade", url: "https://www.youtube.com/embed/emLQXV1eIck" },
    { title: "Algoritmos", url: "https://www.youtube.com/embed/8WU_E9tNnEw" },
    { title: "Hora da programação", url: "https://www.youtube.com/embed/VctijQUSLfU" },
];

const Aulas = () => {
    return (
        <ContainerPage>
            <BackHeader />
            <Marker title="Aulas Auxiliares" />
            <ScrollView>
                {videos.map((video, index) => (
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                        key={index}
                    >
                        <Title style={{
                            fontSize: 16,
                            marginBottom: 4,
                        }}>{video?.title}</Title>
                        <View style={{
                            width: Dimensions.get('window').width - 32,
                            height: 250,
                            borderRadius: 8,
                            overflow: 'hidden',
                            marginBottom: 16
                        }}>
                            <WebView source={{ uri: video?.url }} allowsFullscreenVideo={true} />
                        </View>
                    </View>
                ))}
            </ScrollView>
        </ContainerPage>
    );
}

export default Aulas;
