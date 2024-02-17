import type { File } from '../system';

export interface Slide {
    status?: string;
	id?: string;
	name?: string | null;
    link?: string | null;
	type?: string | null;
	image?: (string | File) | null;
	video?: (string | File) | null;
    
}
