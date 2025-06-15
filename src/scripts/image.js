import Component from './Component.js';

export default class Image extends Component {
	constructor({ className, src, alt, width, height }) {
		super({ tag: 'img', className });
		this.setAttribute('src', src);
		this.setAttribute('alt', alt);
		this.setAttribute('width', width);
		this.setAttribute('height', height);
	}
}
