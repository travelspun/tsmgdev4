import type { File } from '../system';

export interface Feature {
	id?: string;
	title?: string | null;
    text?: string | null;
	image?: (string | File) | null;
}
