import { trakingContainer } from '../../main.js';
import Component from './Component.js';
import PeriodItem from './periodItem.js';

const periodOfTime = [
	{ name: 'Daily', dataAttr: 'active', dataValue: true },
	{ name: 'Weekly', dataAttr: 'active', dataValue: false },
	{ name: 'Monthly', dataAttr: 'active', dataValue: false },
];

export default class PeriodList extends Component {
	constructor({ list = 'ul', className }) {
		super({ tag: list, className });
		const items = periodOfTime.map((period) => {
			return new PeriodItem({
				className: 'person-card__period-item',
				text: period.name,
				dataAttr: period.dataAttr,
				dataAttrValue: period.dataValue,
			});
		});
		this.addListener('click', (e) => {
			const target = e.target;

			for (const li of e.currentTarget.children) {
				if (li !== target) {
					li.dataset.active = false;
				}
			}
			target.dataset.active = true;
			trakingContainer.destroyChildren();
			trakingContainer.init();
		});

		this.appendChildren(items);
	}
}
