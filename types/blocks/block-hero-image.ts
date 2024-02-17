import type { File } from '../system';
import type { BlockButtonGroup } from '../blocks';

export interface BlockHeroImage {
	id?: string;
	type?: string | null;
	title?: string | null;
	headline?: string | null;
	content?: string | null;
	image?: (string | File) | null;
	image_position?: 'left' | 'right' | 'center' | null;
	video?: (string | File) | null;
	button_group?: (string | BlockButtonGroup) | null;
}


export type HeroType = 'video' | 'image' | 'slider';
