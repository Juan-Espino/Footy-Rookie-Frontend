import { motion, AnimatePresence, easeOut } from "framer-motion";
import Stats from "./components/Stats";

type ModalProps = {
	showModal: boolean;
	setShowModal: (state: boolean) => void;
};

const backdropVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
	exit: { opacity: 0, transition: { easeOut } },
};

const bgImageVariants = {
	hidden: { y: -1000 },
	visible: { y: 0 },
	exit: { y: -1000, transition: { delay: 0.3 } },
};

const Modal = ({ showModal, setShowModal }: ModalProps) => {
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
						// variants={bgImageVariants}
						// initial="hidden"
						// animate="visible"
						// exit="exit"
						className="rounded-3xl w-11/12 h-3/6 relative mx-auto max-w-7xl "
					>
						{/* todo:while stats loading have a bouncing ball here */}
						<Stats />
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
