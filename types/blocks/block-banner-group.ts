import type { BlockBannerAd } from './block-banner-ad';

export interface BlockBannerGroup {
	id: string;
    title: string;
	banners: (string | BlockBannerAd)[] | null;
	alignment: 'left' | 'center' | null;
}
