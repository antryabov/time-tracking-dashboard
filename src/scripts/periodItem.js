import Component from './Component.js';

export default class PeriodItem extends Component {
	constructor({ className, text, dataAttr = '', dataAttrValue = '' }) {
		super({ tag: 'li', className, text });
		if (dataAttr) {
			this.setAttribute(`data-${dataAttr}`, dataAttrValue);
		}
	}
}
