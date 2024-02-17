import type { Slide } from '../content';

export interface BlockSlideshow {
	id?: string;
    status?: string;
	name?: string | null;
	slideshow_slides?: (string | CollectionSlideshowSlides)[];
}
export interface BlockSlideItem {
	id?: string;
	sort?: number | null;
	slides_id?: (string | Slide)[] | null;
}

interface CollectionSlideshowSlides { 
	id: number; 
	slideshow_id: string | BlockSlideshow; 
	slides_id: number | Slide; 
} 