import PersonCard from './src/scripts/personCard.js';
import Component from './src/scripts/Component.js';
import TrackingContainer from './src/scripts/trackingContainer.js';

export const trakingContainer = new TrackingContainer({
	className: 'dashboard__tracking tracking',
});

const app = new Component(
	{
		className: 'app',
	},
	new Component(
		{ tag: 'main', className: 'main' },
		new Component(
			{ tag: 'section', className: 'dashboard' },
			new PersonCard({ className: 'dashboard__person-card person-card' }),
			trakingContainer
		)
	)
);

document.body.append(app.getNode());
