import Component from './Component.js';
import { periodList } from './personCard.js';
import TrackingCard from './trackingCard.js';

const getData = async () => {
	try {
		const response = await fetch('./data.json');

		return response.json();
	} catch (error) {
		console.log(error);
	}
};

const trackingData = await getData();

export let currentTimeframe;
export const initCurrentTimeframe = () => {
	periodList.getChildren().forEach((el) => {
		const child = el.getNode();
		if (child.dataset.active === 'true') {
			currentTimeframe = child.textContent.toLowerCase();
		}
	});
};

export default class TrackingContainer extends Component {
	constructor({ className }) {
		super({ className });
		this.init();
	}

	init = () => {
		initCurrentTimeframe();
		const items = trackingData.map((track) => {
			return new TrackingCard({
				className: 'card',
				title: track.title,
				timeframe: track.timeframes[currentTimeframe],
			});
		});
		this.appendChildren(items);
	};
}
