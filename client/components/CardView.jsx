/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image, Alert, Linking } from "react-native";
import { ContactButtons } from "./ContactButtons";

export const CardView = ({ item }) => {
    const hanledContactByEmail = async (emailTeacher) => {
        const mailto = `mailto:${emailTeacher}`;

        await Linking.openURL(mailto).catch((err) => {
            Alert.alert("Error", "No se pudo abrir la aplicación de correo.");
        });
    };

    const hanledContactByWhatsApp = async (teacherPhone) => {
        const whatsapp = `https://wa.me/${teacherPhone}`;

        await Linking.openURL(whatsapp).catch((err) => {
            Alert.alert("Error", "No se pudo abrir la aplicación de Whatsapp.");
        });
    };

    const hanledRenderButton = () => {
        const {
            contacto: { correo, telefono },
        } = item;

        const buttonDataList = [
            {
                buttonColor: "#007bff",
                buttonTitle: "Email",
                contactFunction: () => {
                    hanledContactByEmail(correo);
                },
            },
            {
                buttonColor: "#0cc042",
                buttonTitle: "Whatsapp",
                contactFunction: () => {
                    hanledContactByWhatsApp(telefono);
                },
            },
        ];
        return <ContactButtons buttonDataList={buttonDataList} />;
    };

    const hanledRenderMaterias = () => {
        return (
            <View style={styles.subjectList}>
                {item.materias.map((materia, id) => {
                    return (
                        <Text key={`materia${id}`} style={styles.subjectText}>
                            {materia}
                        </Text>
                    );
                })}
            </View>
        );
    };

    return (
        <View style={styles.card}>
            <Image
                source={{ uri: `https://drive.google.com/uc?id=${item.imagenId}` }}
                style={styles.image}
            />
            <Text style={styles.textName}>{item.nombre}</Text>
            <Text style={styles.description}>{item.descripcion}</Text>

            <Text style={styles.subHeader}>Materias:</Text>
            {hanledRenderMaterias()}

            <Text style={styles.subHeader}>Horario de disponibilidad:</Text>
            <Text style={styles.availability}>{item.disponibilidad}</Text>

            {hanledRenderButton()}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        marginBottom: 30,
        padding: 20,
        backgroundColor: "#1a1a1a",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    image: {
        width: 300,
        height: 340,
        borderRadius: 10,
        marginBottom: 10,
    },
    textName: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
    },
    description: {
        fontSize: 16,
        color: "#ccc",
        marginBottom: 10,
        textAlign: "center",
    },
    subHeader: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 10,
        marginBottom: 5,
    },
    subjectList: {
        alignItems: "center",
        gap: 5,
    },
    subjectText: {
        fontSize: 16,
        color: "#ddd",
    },
    availability: {
        fontSize: 16,
        color: "#eee",
        marginBottom: 10,
    },
});
