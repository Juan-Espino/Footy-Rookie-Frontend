import { motion, AnimatePresence, easeOut } from "framer-motion";

import type { StatObjectsArray } from "../hooks/http-hook";
import Stats from "./components/Stats";
import BouncingBall from "./components/ui/BouncingBall";
import Error from "./components/ui/Error";

type ModalProps = {
	showModal: boolean;
	setShowModal: (state: boolean) => void;
	statToBeShowed: string;

	statObjectsArray?: () => StatObjectsArray;
	loading: boolean;
	error: boolean;
	clearError: () => void;
};

const backdropVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
	exit: { opacity: 0, transition: { easeOut } },
};

const Modal = ({
	showModal,
	setShowModal,
	statToBeShowed,
	statObjectsArray,
	loading,
	error,
	clearError,
}: ModalProps) => {
	return (
		<AnimatePresence mode="wait">
			{showModal && (
				<motion.div
					id="modal-backdrop"
					onClick={() => {
						setShowModal(false);
						clearError();
					}}
					variants={backdropVariants}
					initial="hidden"
					animate="visible"
					exit="exit"
					className="fixed top-0 left-0 w-full h-full p-0 md:p-4 bg-transparent-matte-black z-40 flex items-center"
				>
					<button className="absolute right-8 top-4 md:top-8 z-50 text-matte-white font-bold p-2 md:p-4 text-xl lg:text-2xl transition-all duration-200 hover:scale-150">
						x
					</button>
					<motion.div
						id="modal-bgImage"
						onClick={(e) => e.stopPropagation()}
						className="realtive rounded-3xl w-full md:w-11/12 h-[90%] md:h-[65%] relative mx-auto max-w-7xl "
					>
						{loading && !error && <BouncingBall />}
						{error && !loading && <Error />}
						{!loading && !error && statObjectsArray && (
							<Stats
								statToBeShowed={statToBeShowed}
								statObjectsArray={statObjectsArray()}
							/>
						)}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
