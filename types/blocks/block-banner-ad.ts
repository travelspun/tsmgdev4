import type { File } from '../content';

export interface BlockBannerAd {
	id: string;
	sort?: number | null;
	link?: string | null;
	link_type?: 'external';
	icon?: string | null;
	image?: (string | File) | null;
}
