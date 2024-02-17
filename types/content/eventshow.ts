import type { File } from '../system';

export interface EventShow {
	id?: string;
    status?: string | null;
	name?: string | null;
    dates?: string | null;
	host?: string | null;
	location?: string | null;
	text?: string | null;
	event_logo?: (string | File) | null;
	cover_image?: (string | File) | null;
}
