import Component from './Component.js';

export default class Paragraph extends Component {
	constructor({ className, text }) {
		super({ tag: 'p', className, text });
	}
}
