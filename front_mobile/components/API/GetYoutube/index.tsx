import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import YoutubeEmbed from '../../Youtube'; // Assuming YoutubeEmbed is in the same directory

const GetYoutubeSobrevivente = () => {
    const route = useRoute();
    const { codigo } = route.params;
    const [nome, setNome] = useState('');
    const [transcricao, setTranscricao] = useState('');
    const [url, setUrl] = useState('');
    const [videoId, setVideoId] = useState('');

    useEffect(() => {
        const fetchDetalhe = async () => {
            try {
                const videoResponse = await axios.get(`http://10.0.2.2:5000/v2/api/video/${codigo}`);
                const responsePessoa = await axios.get(`http://10.0.2.2:5000/v2/api/pessoa/${codigo}`);
                setNome(responsePessoa.data.nome);
                setTranscricao(videoResponse.data.video.transcricao);
                const fetchedUrl = videoResponse.data.video.url;
                setUrl(fetchedUrl);
                const id = new URLSearchParams(new URL(fetchedUrl).search).get('v');
                setVideoId(id); // Set extracted video ID
            } catch (error) {
                console.error('Error fetching detail:', error);
            }
        };

        fetchDetalhe();
    }, [codigo]);

    return (
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.titulo}>{`${nome}`}</Text>
            <Text style={styles.texto}>{`#${codigo}`}</Text>
            <Text style={styles.video}>{videoId && <YoutubeEmbed embedId={videoId} />}</Text>
            <Text style={styles.trans}>{`Transcricao: ${transcricao}`}</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    titulo:{
        color: "white",
        marginTop:10,
        marginLeft:30,
        fontSize: 48,
        textAlign: 'left',
    },
    texto:{
        marginLeft:30,
        marginRight:30,
        color: "white",
        fontSize: 24,
        marginBottom:20,
    },
    trans:{
        marginTop:20,
        marginLeft:30,
        marginRight:30,
        color: "white",
        fontSize: 16,
        marginBottom:20,
    },

});

export default GetYoutubeSobrevivente;
