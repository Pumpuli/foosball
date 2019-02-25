import React, { useState } from 'react';
import OngoingMatchGoals from './OngoingMatchGoals';

interface Props {
	goals: number;
	onGoalsChange?: (goals: number) => void;
}

export default function OngoingMatchSide({ goals, onGoalsChange }: Props) {
	return (
		<div className="OngoingMatchSide">
			<button
				type="button"
				className="OngoingMatch-button OngoingMatch-button-plus"
				onClick={() => onGoalsChange && onGoalsChange(goals + 1)}
			>
				<OngoingMatchGoals goals={goals} />
			</button>
			<button
				type="button"
				className="OngoingMatch-button OngoingMatch-button-minus"
				onClick={() => onGoalsChange && onGoalsChange(Math.max(0, goals - 1))}
			>
				-1
			</button>
		</div>
	);
}
