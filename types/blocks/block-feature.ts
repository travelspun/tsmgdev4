
import type { Feature } from '../content/feature';
import type { File } from '../system';

export interface BlockFeature {
	id?: string;
	name?: string | null;
	title?: string | null;
    text?: string | null
	features?: (string | BlockFeatureItem)[];
}
export interface BlockFeatureItem {
	id?: string;
	title?: string | null;
    text?: string | null;
    image?: (string | File) | null;
	features_id?: (string | Feature) | null;
}
