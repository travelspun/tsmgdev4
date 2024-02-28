import type { SEO } from '../meta';
import type { User } from '../system';
import type { Post } from '../content';
import type {
	BlockBannerGroup,
	BlockColumn,
	BlockCta,
	BlockEventCarousel,
	BlockEventInfo,
	BlockFaq,
	BlockForm,
	BlockFeature,
	BlockGallery,
	BlockHero,
	BlockHtml,
	BlockLogocloud,
	BlockPageAnchor,
	BlockQuote,
	BlockRichtext,
	BlockServiceCenter,
	BlockSlideshow,
	BlockStatisticsCounter,
	BlockStep,
	BlockTeam,
	BlockTestimonial,
	BlockVideo,
	BlockType,
} from '../blocks';

export interface Page {
	id?: string;
	permalink: string;
	date_created?: string | null;
	date_updated?: string | null;
	seo?: (string | SEO) | null;
	sort?: number | null;
	status?: string;
	title?: string | null;
	user_created?: (string | User) | null;
	user_updated?: (string | User) | null;
	blocks?: (string | PageBlock)[];
}

export interface PageBlock {
	collection?: BlockType | null;
	id?: string;
	item?:
		| (
				| string
				| BlockBannerGroup
				| BlockColumn
				| BlockCta
				| BlockEventCarousel
				| BlockEventInfo
				| BlockFaq
				| BlockFeature
				| BlockForm
				| BlockGallery
				| BlockHero
				| BlockHtml
				| BlockLogocloud
				| BlockPageAnchor
				| BlockQuote
				| BlockRichtext
				| BlockServiceCenter
				| BlockSlideshow
				| BlockStatisticsCounter
				| BlockStep
				| BlockTeam
				| BlockTestimonial
				| BlockVideo
		  )[]
		| null;
	pages_id?: (string | Page) | null;
	sort?: number | null;
	hide_block?: boolean | null;
}

export interface PagesProjects {
	id?: string;
	title?: string | null;
	headline?: string | null | undefined;
	seo: (string | SEO) | null;
}

export interface PagesBlog {
	id?: string;
	title?: string | null;
	headline?: string | null;
	featured_post?: (string | Post) | null;
	seo: (string | SEO) | null;
}
