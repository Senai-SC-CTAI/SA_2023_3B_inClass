import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios'

interface AbaProps {
    sala: string;
    professor: string;
    horario: string;
    estado: 'fechada' | 'aberta';
    texto?: string;
}

interface Reservation{
    nome: string,
    data_hora: string,
    professor: string,
    comentario: string,
}

const Aba: React.FC<AbaProps> = ({ sala, professor, horario, estado, texto }) => {
    const [expandida, setExpandida] = useState(estado === 'aberta');

    return (
        <View style={styles.abaContainer}>
            <TouchableOpacity
                style={styles.abaHeader}
                onPress={() => setExpandida(!expandida)}
            >
                <Text style={styles.abaHeaderText}>{sala}</Text>
                <Text style={styles.abaHeaderText}>{professor}</Text>
                <Text style={styles.abaHeaderText}>{horario}</Text>
                {expandida ? (
                    <Text style={styles.setinha}>▲</Text>
                ) : (
                    <Text style={styles.setinha}>▼</Text>
                )}
            </TouchableOpacity>
            {expandida && (
                <View style={styles.textoContainer}>
                    <Text style={styles.texto}>{texto}</Text>
                </View>
            )}
        </View>
    );
};

const App: React.FC = () => {
    const [reservas, setReservas] = useState<Reservation[]>([]);

    const fetchReservas = async () => {
        try {
            const response = await axios.get('http://localhost:8091/salas');
            setReservas(response.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    useEffect(() => {
        fetchReservas();
    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titulo}>Minhas Solicitações de Reservas</Text>
            </View>
            {reservas.map((reserva, index) => (
                <Aba
                    key={index}
                    sala={reserva.nome}
                    professor={reserva.professor}
                    horario={reserva.data_hora}
                    estado="fechada"
                    texto={reserva.comentario}
                />
            )
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 24,
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333333',
    },
    abaContainer: {
        marginBottom: 16,
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 4,
        backgroundColor: '#ffffff',
    },
    abaHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#00AEA4',
    },
    abaHeaderText: {
        color: '#ffffff',
        fontSize: 16,
    },
    setinha: {
        fontSize: 24,
        color: '#ffffff',
    },
    textoContainer: {
        padding: 16,
        backgroundColor: '#f2f2f2',
    },
    texto: {
        color: '#333333',
        fontSize: 14,
    },
});

export default App;