
import type { EventShow } from '../content/eventshow';

export interface BlockEventCarousel {
	id?: string;
	status?: string | null;
	name?: string | null;
	title?: string | null;
	events?: (string | BlockEventItem)[];
}
export interface BlockEventItem {
	id?: string;
    status?: string;
    sort?: string;
	events_id?: (string | EventShow) | null;
}
