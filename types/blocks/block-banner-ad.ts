import type { File } from '../content';
import type { BlockBannerGroup } from '.../blocks'

export interface BlockBannerAd {
	sort?: number | null;
	link?: string | null;c
	link_type?: 'external';
	location?: string | null;
	icon?: string | null;
	image?: (string | File) | null;
	banners_id?: (string | BlockBannerAd) | null;
}
