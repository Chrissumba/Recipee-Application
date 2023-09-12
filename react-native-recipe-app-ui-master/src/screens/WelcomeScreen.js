import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<TouchableOpacity>
				
			<Image
				source={require("../../assets/images/welcome1.png")}
				style={{ marginTop: 30 }}
			/>
			</TouchableOpacity>
			

			<Text style={{ color: "#f96163", fontSize: 18, fontWeight: "bold" }}>
				40K+ Premium Recipes
			</Text>
<TouchableOpacity>
	
<Text
onPress={() => navigation.navigate("RecipeList")}
				style={{
					fontSize: 42,
					fontWeight: "bold",
					color: "#3c444c",
					marginTop: 44,
					marginBottom: 40,
				}}
			>
				Cook Like A Chef
			</Text>
</TouchableOpacity>
			

			<TouchableOpacity
				onPress={() => navigation.navigate("RecipeList")}
				style={{
					backgroundColor: "#f96163",
					borderRadius: 18,
					paddingVertical: 18,
					width: "80%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Let's Go
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
