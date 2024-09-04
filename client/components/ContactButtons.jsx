/* eslint-disable prettier/prettier */
import { StyleSheet, Text, Pressable, View } from "react-native";

export const ContactButtons = ({ buttonDataList }) => {
    return (
        <View style={styles.buttonContainer}>
            {buttonDataList.map((buttonData, id) => {
                return (
                    <Pressable
                        key={id}
                        onPress={() => {
                            buttonData.contactFunction();
                        }}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? "#d2e6ff" : buttonData.buttonColor,
                                shadowColor: pressed ? "#007bff" : "transparent",
                                shadowOpacity: 0.5,
                                shadowRadius: pressed ? 10 : 0,
                                elevation: pressed ? 10 : 2,
                            },
                            styles.wrapperCustom,
                        ]}
                    >
                        {({ pressed }) => (
                            <Text
                                style={[
                                    styles.buttonText,
                                    { color: pressed ? "#003366" : "#ffffff" },
                                ]}
                            >
                                {pressed ? "Entering" : buttonData.buttonTitle}
                            </Text>
                        )}
                    </Pressable>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        flexDirection: "row",
        gap: 15,
    },
    wrapperCustom: {
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
