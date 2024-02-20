import type { File } from '../system';
import type { BlockButtonGroup } from '../blocks';

export interface BlockHeroVideo {
	id?: string;
	type?: HeroType;
	title?: string | null;
	headline?: string | null;
	content?: string | null;
	image?: (string | File) | null;
	image_position?: 'left' | 'right' | 'center' | null;
	video?: (string | BlockVideo) | null;
	slideshow?: (string | BlockSlideshow) | null;
	button_group?: (string | BlockButtonGroup) | null;
}


export type HeroType = 'video' | 'image' | 'slider';
