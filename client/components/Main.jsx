/* eslint-disable prettier/prettier */
import { View, ActivityIndicator, FlatList } from "react-native";
import { React, useState, useEffect } from "react";
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
				paddingButton: insets.bottom,
				paddingTop: insets.top,
				paddingLeft: insets.left,
				paddingRight: insets.right,
			}}
		>
			{loaded ? (
				<FlatList
					data={datas.teachersList}
					keyExtractor={(data) => data.imagenId}
					renderItem={({ item }) => <CardView item={item} />}
				/>
			) : (
				<ActivityIndicator size={"extraLarge"} />
			)}
		</View>
	);
};
