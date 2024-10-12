import { motion, AnimatePresence, easeOut } from "framer-motion";
import PointsStats from "./components/stats/PointsStats";
import Stats from "./components/stats/Stats";

type ModalProps = {
	showModal: boolean;
	setShowModal: (state: boolean) => void;
	statToBeShowed: string;
};

const backdropVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
	exit: { opacity: 0, transition: { easeOut } },
};

const STATOBJECTTEAMPOINTS = [
	{
		stat: "20",
		club: "Arsenal",
		club_badge:
			"https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png",
	},
	{
		stat: "20",
		club: "Arsenal",
		club_badge:
			"https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png",
	},
	{
		stat: "20",
		club: "Arsenal",
		club_badge:
			"https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png",
	},
	{
		stat: "20",
		club: "Arsenal",
		club_badge:
			"https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png",
	},
	{
		stat: "20",
		club: "Arsenal",
		club_badge:
			"https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png",
	},
	{
		stat: "20",
		club: "Arsenal",
		club_badge:
			"https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png",
	},
	{
		stat: "20",
		club: "Arsenal",
		club_badge:
			"https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png",
	},
	{
		stat: "20",
		club: "Arsenal",
		club_badge:
			"https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png",
	},
	{
		stat: "20",
		club: "Arsenal",
		club_badge:
			"https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png",
	},
	{
		stat: "20",
		club: "Arsenal",
		club_badge:
			"https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Arsenal-FC-icon.png",
	},
];

const STATSOBJECTGOALS = [
	{
		player_img:
			"https://s3p.sofifa.net/9384b967dcf6a40a3fbfa564d585433230baf9a6.png",
		name: "Erling Haaland",
		stat: "10",
		club: "Manchester City",
		club_badge:
			"https://upload.wikimedia.org/wikipedia/sco/thumb/e/eb/Manchester_City_FC_badge.svg/2048px-Manchester_City_FC_badge.svg.png",
		national_flag:
			"https://cdn.britannica.com/01/3101-050-1BB27B69/Flag-Norway.jpg",
		shirt_number: "9",
	},
	{
		player_img:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
		name: "Cole Palmer",
		national_flag:
			"https://cdn.britannica.com/44/344-050-94536674/Flag-England.jpg",
		stat: "6",
		club: "Chelsea",
		club_badge:
			"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
	},
	{
		player_img:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
		name: "Cole Palmer",
		national_flag:
			"https://cdn.britannica.com/44/344-050-94536674/Flag-England.jpg",
		stat: "6",
		club: "Chelsea",
		club_badge:
			"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
	},
	{
		player_img:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
		name: "Cole Palmer",
		national_flag:
			"https://cdn.britannica.com/44/344-050-94536674/Flag-England.jpg",
		stat: "6",
		club: "Chelsea",
		club_badge:
			"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
	},
	{
		player_img:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
		name: "Cole Palmer",
		national_flag:
			"https://cdn.britannica.com/44/344-050-94536674/Flag-England.jpg",
		stat: "6",
		club: "Chelsea",
		club_badge:
			"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
	},
	{
		player_img:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
		name: "Cole Palmer",
		national_flag:
			"https://cdn.britannica.com/44/344-050-94536674/Flag-England.jpg",
		stat: "6",
		club: "Chelsea",
		club_badge:
			"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
	},
	{
		player_img:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
		name: "Cole Palmer",
		national_flag:
			"https://cdn.britannica.com/44/344-050-94536674/Flag-England.jpg",
		stat: "6",
		club: "Chelsea",
		club_badge:
			"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
	},
	{
		player_img:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
		name: "Cole Palmer",
		national_flag:
			"https://cdn.britannica.com/44/344-050-94536674/Flag-England.jpg",
		stat: "6",
		club: "Chelsea",
		club_badge:
			"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
	},
	{
		player_img:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
		name: "Cole Palmer",
		national_flag:
			"https://cdn.britannica.com/44/344-050-94536674/Flag-England.jpg",
		stat: "6",
		club: "Chelsea",
		club_badge:
			"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
	},
	{
		player_img:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsortitoutsi.b-cdn.net%2Fuploads%2Fface%2F28120042.png&f=1&nofb=1&ipt=0661e7edb7601a63ef06ac7d195e9b0fca76f495dca3be2ff5ccd7672c8f2f0b&ipo=images",
		name: "Cole Palmer",
		national_flag:
			"https://cdn.britannica.com/44/344-050-94536674/Flag-England.jpg",
		stat: "6",
		club: "Chelsea",
		club_badge:
			"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
	},
];

const Modal = ({ showModal, setShowModal, statToBeShowed }: ModalProps) => {
	//returns the appropriate stat object based on typeOfStat
	//for testing todo:delete this
	const STATOBJECTHANDLER = () => {
		if (statToBeShowed == "Points" || statToBeShowed == "Defense")
			return STATOBJECTTEAMPOINTS;
		else return STATSOBJECTGOALS;
	};
	return (
		<AnimatePresence mode="wait">
			{showModal && (
				<motion.div
					id="modal-backdrop"
					onClick={() => setShowModal(false)}
					variants={backdropVariants}
					initial="hidden"
					animate="visible"
					exit="exit"
					className="fixed top-0 left-0 w-full h-full  p-4 bg-transparent-matte-black z-40 flex items-center"
				>
					<motion.div
						id="modal-bgImage"
						onClick={(e) => e.stopPropagation()}
						className="rounded-3xl w-11/12 h-[65%] relative mx-auto max-w-7xl "
					>
						{/* todo:while stats loading have a bouncing ball here 
								maybe have the ball fall from the top of the screen and
									bounce on the center*/}

						{/* For efficiency sake we conditionaly render all STATS components
						based on the state of statToBeShowed and Memoize each STATS component
						 wherer an fetch request is made to the api*/}
						{statToBeShowed === "Points" && <PointsStats />}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
