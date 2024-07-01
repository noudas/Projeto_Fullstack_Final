import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const GetByCodigo = () => {
    const [codigo, setCodigo] = useState(null);
    const [descricao, setDescricao] = useState('');
    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [responsePessoa, responseDescricao, responseVideo] = await Promise.all([
                    axios.get("http://10.0.2.2:5000/v2/api/pessoa/123"),
                    axios.get("http://10.0.2.2:5000/v2/api/descricao/123"),
                    axios.get("http://10.0.2.2:5000/v2/api/video/123")
                ]);
                
                

                const combinedData = {
                    codigo: responsePessoa.data.codigo,
                    nome: responsePessoa.data.nome,
                    imagem: responsePessoa.data.imagem,
                    descricao: responseDescricao.data.descricao.descricao
                };
                setCodigo(combinedData.codigo);
                setNome(combinedData.nome);
                setDescricao(combinedData.descricao);
                setImagem(combinedData.imagem);
                
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data');
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
    }, [codigo, nome, descricao, imagem]);

    return (
        <View style={styles.container}>
            {error ? (
                <Text style={styles.text}>Error: {error}</Text>
            ) : codigo && descricao && nome && imagem ? (
                <>
                    <Text style={styles.text}>{`Codigo: ${codigo}`}</Text>
                    <Text style={styles.text}>{`Nome: ${nome}`}</Text>
                    <Image
                        source={{ uri: imagem }}
                        style={styles.image}
                        onError={(e) => console.log('Failed to load image', e)}
                    />
                    <Text style={styles.text}>{`Descricao: ${descricao}`}</Text>

                </>
            ) : (
                <Text>Carregando...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height:"100%",
        width:"100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    image: {
        width: 200,
        height: 200,
    },
});

export default GetByCodigo;