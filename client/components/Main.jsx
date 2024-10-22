/* eslint-disable prettier/prettier */
import { View, ActivityIndicator, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { getProfesorDate } from "../lib/api";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CardView } from "./CardView";

export const Main = () => {
	const insets = useSafeAreaInsets();

	const [datas, setDatas] = useState({});
	const [loaded, setLoaded] = useState(false);

	const fetchData = async () => {
		try {
			const getData = await getProfesorDate();

			if (getData) {
				setDatas(getData);
				setLoaded(true);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<View
			style={{
				paddingBottom: insets.bottom,
				paddingTop: insets.top,
				paddingHorizontal: 15,
				backgroundColor: "linear-gradient(180deg, #1a1a1a, #333333)", // Degradado de fondo
				flex: 1, // Asegura que el contenido ocupe todo el espacio disponible
			}}
		>
			{loaded ? (
				<FlatList
					data={datas.teachersList}
					keyExtractor={(data) => data.id}
					renderItem={({ item }) => <CardView item={item} />}
					contentContainerStyle={{ paddingVertical: 20 }} // Espacio alrededor de los elementos
				/>
			) : (
				<ActivityIndicator
					size="large"
					color="#fff"
					style={{ marginTop: 20 }}
				/>
			)}
		</View>
	);
};

