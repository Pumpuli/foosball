import React, { useState, useCallback } from 'react';
import OngoingMatchSide from './OngoingMatchSide';
import './OngoingMatch.css';
import { RouteComponentProps } from 'react-router-dom';

type Props = RouteComponentProps;

const WIN_GOAL_COUNT = 8;

export default function OngoingMatch({ history }: Props) {
	const [isMatchOver, setMatchOver] = useState(false);
	const [goals1, setGoals1] = useState(0);
	const [goals2, setGoals2] = useState(0);

	const changeGoals1 = useCallback(
		(goals: number) => {
			setGoals1(goals);

			if (goals >= WIN_GOAL_COUNT) {
				setMatchOver(true);
			}
		},
		[setGoals1, history]
	);

	const changeGoals2 = useCallback(
		(goals: number) => {
			setGoals2(goals);

			if (goals >= WIN_GOAL_COUNT) {
				setMatchOver(true);
			}
		},
		[setGoals2, history]
	);

	return isMatchOver ? (
		<div className="OngoingMatch OngoingMatch-over">
			<h1>Game over!</h1>
			<h2>{goals1} - {goals2}</h2>
			<button type="button" onClick={() => history.push('/')}>
				Back
			</button>
		</div>
	) : (
		<div className="OngoingMatch">
			<OngoingMatchSide goals={goals1} onGoalsChange={goals => changeGoals1(goals)} />
			<OngoingMatchSide goals={goals2} onGoalsChange={goals => changeGoals2(goals)} />
		</div>
	);
}
