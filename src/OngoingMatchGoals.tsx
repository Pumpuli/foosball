import React from 'react';
import { useTransition, animated } from 'react-spring';

interface Props {
	goals: number;
}

export default function OngoingMatchGoals({ goals }: Props) {
	const transitions = useTransition(goals, p => p, {
		from: { opacity: 0, transform: `rotate3d(1, 0, 0, 0deg)` },
		enter: { opacity: 1, transform: `rotate3d(1, 0, 0, 0deg)` },
		leave: { opacity: 0.5, transform: `rotate3d(1, 0, 0, 90deg)` }
	});

	return (
		<>
			{transitions.map(({ item, props, key }) => (
				<animated.div key={key} style={props} className="OngoingMatchGoals">
					{item}
				</animated.div>
			))}
		</>
	);
}
