import type { File } from '../content';

export interface BlockBannerGroup {
	id: string;
    title: string;
	banners: (string | BlockBannerAd)[] | null;
	alignment: 'left' | 'center' | null;
}


