import { motion, AnimatePresence, easeOut } from "framer-motion";

import type { StatObjectsArray } from "../App";
import Stats from "./components/Stats";

type ModalProps = {
	showModal: boolean;
	setShowModal: (state: boolean) => void;
	statToBeShowed: string;

	statObjectsArray?: StatObjectsArray;
	loading: boolean;
	error: boolean;
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
}: ModalProps) => {
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
						{loading && !error && <h1 className="text-matte-white">Loading</h1>}
						{error && !loading && (
							<h1 className="text-matte-white">Error {error}</h1>
						)}
						{!loading &&
							!error &&
							statObjectsArray &&
							statToBeShowed === "Points" && (
								<Stats
									statToBeShowed={statToBeShowed}
									statObjectsArray={statObjectsArray}
								/>
							)}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
