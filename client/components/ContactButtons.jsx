/* eslint-disable prettier/prettier */
import { StyleSheet, Text, Pressable, View, } from "react-native";

export const ContactButtons = ({ buttonDataList }) => {

    return (
        <View style={styles.buttonContainer}>
            {
                buttonDataList.map((buttonData, id) => {
                    return (
                        <Pressable
                            key={id}
                            onPress={() => {
                                buttonData.contactFunction();
                            }}

                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed ? '#d2e6ff' : buttonData.buttonColor,
                                },
                                styles.wrapperCustom,
                            ]}>

                            {({ pressed }) => (
                                <Text style={[styles.buttonText, { color: pressed ? '#003366' : '#ffffff' }]}>
                                    {pressed ? 'Entering' : buttonData.buttonTitle}
                                </Text>
                            )}
                        </Pressable>
                    )
                })
            }
        </View>
    );
};

//! Stilos de Botones:
const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        flexDirection: "row",
        columnGap: 10,
    },
    wrapperCustom: {
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 6,
        elevation: 2,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});