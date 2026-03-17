import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
	const [visible, setVisible] = useState(false);
	const [hasMoved, setHasMoved] = useState(false);
	const [isClicking, setIsClicking] = useState(false);
	const [isPointer, setIsPointer] = useState(false);

	const springX = useSpring(0, { stiffness: 500, damping: 35, mass: 0.4 });
	const springY = useSpring(0, { stiffness: 500, damping: 35, mass: 0.4 });

	useEffect(() => {
		const isInteractiveTarget = (target: HTMLElement | null) => {
			if (!target) return false;

			const semanticTarget = target.closest(
				'button, a, [role="button"], input[type="button"], input[type="submit"], [data-cursor="pointer"], .cursor-pointer'
			);
			if (semanticTarget) return true;

			let current: HTMLElement | null = target;
			while (current) {
				const computedCursor = window.getComputedStyle(current).cursor;
				if (computedCursor === 'pointer') {
					return true;
				}
				current = current.parentElement;
			}

			return false;
		};

		const handleMove = (event: MouseEvent) => {
			const { clientX, clientY } = event;
			setVisible(true);
			setHasMoved(true);
			springX.set(clientX);
			springY.set(clientY);

			const target = event.target as HTMLElement | null;
			setIsPointer(isInteractiveTarget(target));
		};

		const handleLeave = () => {
			setVisible(false);
			setIsPointer(false);
		};

		const handleDown = () => setIsClicking(true);
		const handleUp = () => setIsClicking(false);

		window.addEventListener('mousemove', handleMove);
		window.addEventListener('mouseleave', handleLeave);
		window.addEventListener('mousedown', handleDown);
		window.addEventListener('mouseup', handleUp);

		return () => {
			window.removeEventListener('mousemove', handleMove);
			window.removeEventListener('mouseleave', handleLeave);
			window.removeEventListener('mousedown', handleDown);
			window.removeEventListener('mouseup', handleUp);
		};
	}, [springX, springY]);

	if (!visible || !hasMoved) {
		return null;
	}

	return (
		<div className="pointer-events-none fixed inset-0 z-[60]">
			<motion.div
				className="absolute"
				animate={{ scale: isClicking ? 0.9 : isPointer ? 1.08 : 1 }}
				style={{
					left: springX,
					top: springY,
					width: 26,
					height: 26,
					transform: 'translate(-50%, -50%)',
					filter: isPointer
						? 'drop-shadow(0 0 14px rgba(244,114,182,1)) drop-shadow(0 0 24px rgba(250,204,21,0.9))'
						: 'drop-shadow(0 0 10px rgba(236,72,153,0.9))',
				}}
			>
				<svg
					viewBox="0 0 32 32"
					width="26"
					height="26"
					style={{
						transform: 'translate(2px, 1px)',
					}}
				>
					<path
						d="M4 3 L4 25 L10.5 19.5 L14.5 29 L18 27.5 L13.5 18.5 L23 18 Z"
						fill={isPointer ? 'rgba(250,204,21,0.16)' : 'rgba(236,72,153,0.18)'}
						stroke={isPointer ? '#facc15' : '#ec4899'}
						strokeWidth={2.2}
						strokeLinejoin="round"
					/>
				</svg>
			</motion.div>
		</div>
	);
};

export default CustomCursor;
