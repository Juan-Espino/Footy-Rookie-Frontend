import { motion, AnimatePresence } from "framer-motion";

import bgImage from "../assets/images/tactics_board.webp";

type ModalProps = {
	showModal: boolean;
	setShowModal: (state: boolean) => void;
};

const backdrop = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
};

const Modal = ({ showModal, setShowModal }: ModalProps) => {
	return (
		<AnimatePresence mode="wait">
			{showModal && (
				<motion.div
					id="modal-backdrop"
					onClick={() => setShowModal(false)}
					variants={backdrop}
					initial="hidden"
					animate="visible"
					className="fixed top-0 left-0 w-full h-full bg-transparent-matte-black z-40 flex items-center"
				>
					<motion.div
						id="modal-bgImage"
						onClick={(e) => e.stopPropagation()}
						className="relative mx-auto max-w-7xl "
					>
						<img src={bgImage} alt="" className="w-[90%] mx-auto" />
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
