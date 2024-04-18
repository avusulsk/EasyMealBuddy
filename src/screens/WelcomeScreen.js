import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";

const WelcomeScreen = ({ navigation }) => {
    const [screenWidth, setScreenWidth] = useState(Dimensions.get("window").width);

    useEffect(() => {
        const updateScreenWidth = () => {
            setScreenWidth(Dimensions.get("window").width);
        };

        Dimensions.addEventListener("change", updateScreenWidth);

        return () => {
            Dimensions.removeEventListener("change", updateScreenWidth);
        };
    }, []);

    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <Image
                source={require("../../assets/images/welcome3.png")}
                style={{
                    width: screenWidth * 0.8,
                    height: undefined,
                    aspectRatio: 1,
                    resizeMode: "contain",
                    marginTop: 30,
					marginBottom: 50
                }}
            />

            <Text style={{ color: "orange", fontSize: 22, fontWeight: "bold" }}>
                Let's make tummy happy
            </Text>

            <Text
                style={{
                    fontSize: 42,
                    fontWeight: "bold",
                    color: "#3c444c",
                    marginTop: 44,
                    marginBottom: 40,
                }}
            >
                Easy Meal Buddy
            </Text>

            <TouchableOpacity
                onPress={() => navigation.navigate("RecipeList")}
                style={{
                    backgroundColor: "orange",
                    borderRadius: 18,
                    paddingVertical: 18,
                    width: "50%",
                    alignItems: "center",
                }}
            >
                <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
                    C'mon
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
