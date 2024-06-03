import React from 'react';

function Buttons({ message, SvgLeft, SvgRight, Enveloppe }) {
	return (
		<div className="flex">
			{SvgLeft && <SvgLeft className="arr-2" />}
			<span className="text">{message}</span>
			<span className="circle"></span>
			{SvgRight && <SvgRight className="arr-1" />}
		</div>
	);
}

export default Buttons;
