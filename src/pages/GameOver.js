import React from 'react';
import { useScore } from '../contexts/ScoreContext';
import { StyledLink} from '../styled/Navbar';
import {Accent, StyledH3} from '../styled/Random'
export default function GameOver({ history }) {
    const [score] = useScore();

    if (score === -1) {
        history.push('/');
    }
    return (
        <div>
            <StyledH3>Game Over</StyledH3>
            <StyledH3>Your Typing Speed Score: <Accent>{score}</Accent></StyledH3>            
            <StyledH3><StyledLink to="/">Go Home</StyledLink></StyledH3>                    
            <StyledH3><StyledLink to="/game">Click to Play Again</StyledLink></StyledH3>            
        </div>
    );
}
