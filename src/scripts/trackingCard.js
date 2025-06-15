import Component from './Component.js';
import Title from './title.js';
import Button from './button.js';
import Image from './image.js';
import Paragraph from './paragraph.js';
import { currentTimeframe } from './trackingContainer.js';

export default class TrackingCard extends Component {
	constructor({ className, title, timeframe }) {
		let text;

		switch (currentTimeframe) {
			case 'daily':
				text = `Yesterday - ${timeframe.previous}hrs`;
				break;
			case 'weekly':
				text = `Last Week - ${timeframe.previous}hrs`;
				break;
			default:
				text = `Last Month - ${timeframe.previous}hrs`;
				break;
		}

		super(
			{ className },
			new Component(
				{ className: 'card__wrapper' },
				new Component(
					{ className: 'card__header', tag: 'header' },
					new Title({ className: 'card__header-subtitle', levelTitle: 3, text: title }),
					new Button(
						{
							className: 'card__header-button',
							onClick: () => {
								console.log('hello');
							},
						},
						new Image({
							className: 'card__header-icon',
							src: './src/assets/images/icon-ellipsis.svg',
							alt: '',
							width: '21',
							height: '5',
						})
					)
				),
				new Component(
					{ className: 'card__body' },
					new Title({
						className: 'card__body-title',
						text: `${timeframe.current}hrs`,
						levelTitle: 2,
					}),
					new Paragraph({
						className: 'card__body-text',
						text,
					})
				)
			)
		);

		this.setAttribute('data-card', title);
	}
}
