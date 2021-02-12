import React from 'react';
import { Accent } from '../styled/Random';
import { CTA } from '../styled/CTA';
import { StyledTitle, StyledH3 } from '../styled/Random';

export default function Home() {
    return (
        <div>
            <StyledH3>Do you want to check how many letters you can type within 30 seconds?</StyledH3>
            <StyledTitle>Ready to type?</StyledTitle>
            <CTA to="/game">
                {/* or Type '<Accent>s</Accent>' */}
                Click to start playing
            </CTA>
        </div>
    );
}
