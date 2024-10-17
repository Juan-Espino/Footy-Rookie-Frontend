import { useState } from "react";

//type format for all non error responses from api
export type StatObjectsArray = {
	stat: string;
	player_name?: string;
	player_img?: string;
	national_flag?: string;
	club_name: string;
	club_badge: string;
	jersey_number?: string;
}[];

//type format for all Stat States
//stats: is a StatObjectsArray which holds the statistics information
//loaded: is a boolean which holds rather or not stats has been loaded from api already to minimize api calls
export type StatStateStructure = {
	stats: StatObjectsArray;
	loaded: boolean;
};

/*

*/
export const useHttpClient = () => {
	//state of when a http request is occuring
	const [loading, setLoading] = useState(false);
	//state of which is determined if an http request failed or not
	const [error, setError] = useState(false);
	//states for holding an array of statistic objects returned from api calls
	const [pointsState, setPointsState] = useState<StatStateStructure>({
		stats: [
			{
				stat: "",
				player_name: "",
				player_img: "",
				national_flag: "",
				club_name: "",
				club_badge: "",
				jersey_number: "",
			},
		],
		loaded: false,
	});

	/*
  Handler function for sending http request to the api
  @param {string} url Url to backend api & deteremines which route to take in api
  @param {string} method Determines which method to use in the http request
  @param {object} body Body object of http request
  @param {object} headers Desired headers for http request 

  @return {array} responseData StatObjectsArray that holds all information about desired statistics
  */
	const sendRequest = async (
		statToBeShowed: string,
		url: string,
		method = "GET",
		body = null,
		headers = {}
	) => {
		// todo:
		// if (
		// 	(statToBeShowed === "Points" && pointsState.loaded) ||
		// 	(statToBeShowed === "Goals" && goalsState.loaded) || ...
		// )
		if (statToBeShowed === "Points" && pointsState.loaded) {
			return;
		} else {
			setLoading(true);
			try {
				const response = await fetch(url, {
					method,
					body,
					headers,
				});

				const responseData = await response.json();

				if (!responseData) {
					throw new Error(responseData.message);
				}

				// todo: make this section for every possible statToBeShowed
				if (statToBeShowed === "Points") {
					setPointsState((previousState) => {
						const data = {
							...previousState,
							stats: responseData,
							loaded: true,
						};
						return data;
					});
				}
			} catch (error: any) {
				setError(error.message);
			}
			setLoading(false);
		}
	};

	/*
  Handler function for resetting error state to false
  @param {}
  @return {}
  */
	const clearError = () => {
		setError(false);
	};
	return { loading, error, clearError, sendRequest, pointsState };
};
