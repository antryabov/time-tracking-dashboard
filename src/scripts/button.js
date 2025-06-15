import Component from './Component.js';

export default class Button extends Component {
	constructor({ className, text = '', onClick }, iconComponent = '') {
		super({ tag: 'button', className, text }, iconComponent);
		this.onClick = onClick;
		this.addListener('click', onClick);
	}
}
