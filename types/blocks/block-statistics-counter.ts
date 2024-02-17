
import type { Counter } from '../content/counter';

export interface BlockStatisticsCounter {
	id?: string;
	header?: string | null;
	name?: string | null;
	title?: string | null;
    text?: string | null
	counters?: (string | BlockCounterItem)[];
}
export interface BlockCounterItem {
	id?: string;
	title?: string | null;
    count?: number | null;
    direction?: string | null;
    increment: number | null;
	counters_id?: (string | Counter) | null;
}
