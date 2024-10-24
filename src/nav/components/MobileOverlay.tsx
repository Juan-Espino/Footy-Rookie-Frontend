import { motion, Transition, SVGMotionProps } from "framer-motion";
import NavLinks from "./NavLinks";

interface MobileOverlayProps extends SVGMotionProps<Transition> {
	isOpen: boolean;
	navLinksText: string[];
	handleLinkClick: (item: string) => void;
}
const MobileOverlay = ({
	isOpen = false,
	navLinksText,
	handleLinkClick,
}: MobileOverlayProps) => {
	//variant triggers the animation
	const variant = isOpen ? "opened" : "closed";
	//animation to play when variant changes
	const slideInOut = {
		opened: {
			translateY: 0,
			transition: { type: "spring", mass: 0.3 },
		},
		closed: {
			translateY: 1000,
			transition: { delay: 0, type: "spring", mass: 0.3 },
		},
	};
	return (
		<motion.div
			className="fixed top-16 left-0 h-full w-full z-50 bg-transparent-matte-black backdrop-blur-[3px]"
			variants={slideInOut}
			animate={variant}
		>
			<NavLinks navLinksText={navLinksText} handleLinkClick={handleLinkClick} />
		</motion.div>
	);
};

export default MobileOverlay;
