import { useState } from "react";
import FirstPlace from "./FirstPlace";
import RunnerUp from "./RunnerUp";

const Stats = () => {
	const STATSOBJECT = [
		{
			player_img:
				"https://s3p.sofifa.net/9384b967dcf6a40a3fbfa564d585433230baf9a6.png",
			name: "Erling Haaland",
			stat: "10",
			club: "Manchester City",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/sco/thumb/e/eb/Manchester_City_FC_badge.svg/2048px-Manchester_City_FC_badge.svg.png",
		},
		{
			player_img:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			player_img:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			player_img:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			player_img:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			player_img:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			player_img:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			player_img:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			player_img:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
		{
			player_img:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
			name: "Cole Palmer",
			stat: "6",
			club: "Chelsea",
			club_badge:
				"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
		},
	];

	return (
		<div id="first-runnersUp-wrapper" className="h-full flex gap-4">
			{/* modal is broken into two sections */}
			<FirstPlace statsObject={STATSOBJECT} />
			<RunnerUp statsObject={STATSOBJECT} />
		</div>
	);
};

export default Stats;
