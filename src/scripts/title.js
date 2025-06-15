import Component from './Component.js';

export default class Title extends Component {
	constructor({ className, text, levelTitle = 1 }) {
		super({ tag: `h${levelTitle}`, className, text });
	}
}
