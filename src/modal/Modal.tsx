import { motion, AnimatePresence, easeOut } from "framer-motion";
import Stats from "./components/Stats";

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

const Modal = ({ showModal, setShowModal, statToBeShowed }: ModalProps) => {
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
						<Stats statToBeShowed={statToBeShowed} />
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
