import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';




const ListarPessoas = () => {
    
    const [people, setPeople] = useState([]);
    const [error, setError] = useState('');
    const navigation = useNavigation();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const peopleResponse = await axios.get("http://10.0.2.2:5000/v2/api/lista");
                const peopleData = peopleResponse.data;

                // Assuming each person object has a 'codigo' property
                const descriptionPromises = peopleData.map(async (person) => {
                    const descriptionResponse = await axios.get(`http://10.0.2.2:5000/v2/api/descricao/${person.codigo}`);
                    return {...person, descricao: descriptionResponse.data.descricao.descricao };
                });

                const peopleWithDescriptions = await Promise.all(descriptionPromises);
                setPeople(peopleWithDescriptions);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data');
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <Text>Error: {error}</Text>;
    }

    return (
        <FlatList
            data={people}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('YoutubeSobrevivente', { codigo: item.codigo })}>
                    <Text style={styles.text}>{`Codigo: ${item.codigo}`}</Text>
                    <Text style={styles.text}>{`Nome: ${item.nome}`}</Text>
                    <Image
                        source={{ uri: item.imagem }}
                        style={styles.image}
                        onError={(e) => console.log('Failed to load image', e)}
                    />
                    <Text style={styles.text}>{`Descricao: ${item.descricao}`}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.codigo.toString()}
            style={styles.list}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    text: {
        fontSize: 16,
        color: "white",
        marginBottom: 5,
    },
    image: {
        marginTop:10,
        marginBottom:10,
        width: 200,
        height: 200,
    },
    list: {
        marginTop: 20,
    },
});

export default ListarPessoas;
