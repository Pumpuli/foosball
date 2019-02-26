import React from 'react';
import { useTransition, animated } from 'react-spring';

interface Props {
	goals: number;
}

export default function OngoingMatchGoals({ goals }: Props) {
	const transitions = useTransition(goals, p => p, {
		from: { transform: `rotate3d(1, 0, 0, 0deg)` },
		enter: { transform: `rotate3d(1, 0, 0, 0deg)` },
		leave: { transform: `rotate3d(1, 0, 0, 90deg)` }
	});

	// Render the leaving transitions last, so they end up on top.
	transitions.reverse();

	const divs = transitions.map(({ item, props, key }) => (
		<animated.div key={key} style={props} className="OngoingMatchGoals">
			{item}
		</animated.div>
	));

	return <>{divs}</>;
}
