import Component from './Component.js';
import Image from './image.js';
import Paragraph from './paragraph.js';
import PeriodList from './periodList.js';
import Title from './title.js';

export const periodList = new PeriodList({ className: 'person-card__period-list' });

export default class PersonCard extends Component {
	constructor({ className }) {
		super(
			{ className },
			new Component(
				{ className: 'person-card__wrapper' },
				new Image({
					className: 'person-card__img',
					src: './src/assets/images/image-jeremy.png',
					alt: 'Jeremy Robson photo',
					width: '78',
					height: '78',
				}),
				new Component(
					{ className: 'person-card__info' },
					new Paragraph({ className: 'person-card__text', text: 'Report for' }),
					new Title({ className: 'person-card__title', text: 'Jeremy Robson', levelTitle: 1 })
				)
			),
			new Component({ className: 'person-card__period' }, periodList)
		);
	}
}
