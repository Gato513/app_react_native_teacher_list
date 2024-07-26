/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image, Alert, Linking, } from "react-native";
import { ContactButtons } from "./ContactButtons";



export const CardView = ({ item }) => {

    const hanledContactByEmail = async (emailTeacher) => {

        const mailto = `mailto:${emailTeacher}`;

        await Linking.openURL(mailto).catch((err) => {
            Alert.alert("Error", "No se pudo abrir la aplicación de correo.");
        });

    };

    const hanledContactByWhatsApp = async (teacherPhone) => {
        const whatsapp = `https://wa.me/${teacherPhone}}`;

        await Linking.openURL(whatsapp).catch((err) => {
            Alert.alert("Error", "No se pudo abrir la aplicación de Whatsapp.");
        });
    }

    const hanledRenderButton = () => {

        const { contacto: { correo, telefono } } = item;

        const buttonDataList = [
            { buttonColor: '#007bff', buttonTitle: 'Email', contactFunction: () => { hanledContactByEmail(correo) } },
            { buttonColor: '#0cc042', buttonTitle: 'Whatsapp', contactFunction: () => { hanledContactByWhatsApp(telefono) } },
        ]
        return <ContactButtons buttonDataList={buttonDataList} />
    }

    const hanledRenderMaterias = () => {
        return (
            <View style={styles.subjectList}>
                {item.materias.map((materia, id) => {
                    return <Text key={`materi${id}`} style={styles.textName}>{materia}</Text>
                })}
            </View>
        )
    }

    return (
        <View style={styles.card}>
            <Image
                source={{ uri: `https://drive.google.com/uc?id=${item.imagenId}` }}
                style={styles.image}
            />
            <Text style={styles.textName}>{item.nombre}</Text>
            <Text style={styles.description}>
                {item.descripcion}
            </Text>

            <Text style={styles.textName} >Materias:</Text>

            {hanledRenderMaterias()}

            <Text style={styles.textName} >Horario de disponibilidad:</Text>
            <Text style={styles.textName} >{item.disponibilidad}</Text>

            {hanledRenderButton()}

        </View>
    );
}

const styles = StyleSheet.create({
    //! Stilos de las cartas de informacion:
    card: {
        alignItems: "center",
        marginBottom: 42,
        gap: 10,
    },
    image: {
        width: 307,
        height: 340,
        borderRadius: 10,
        marginBottom: 10,
    },
    textName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    description: {
        fontSize: 16,
        color: "#eee",
    },
    subjectList: {
        gap: 5,
        width: 200
    }
});