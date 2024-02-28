import type { BlockBannerGroup } from './block-banner-group';
import type { BlockColumn } from './block-column';
import type { BlockCta } from './block-cta';
import type { BlockEventCarousel } from './block-event-carousel';
import type { BlockEventInfo } from './block-event-info';
import type { BlockFaq } from './block-faq';
import type { BlockFeature } from './block-feature';
import type { BlockForm } from './block-form';
import type { BlockGallery } from './block-gallery';
import type { BlockHero } from './block-hero';
import type { BlockHeroVideo } from './block-hero-video';
import type { BlockHeroImage } from './block-hero-image';
import type { BlockHeroSlider } from './block-hero-slider';
import type { BlockHtml } from './block-html';
import type { BlockLogocloud } from './block-logocloud';
import type { BlockPageAnchor } from './block-page-anchor';
import type { BlockQuote } from './block-quote';
import type { BlockRichtext } from './block-richtext';
import type { BlockServiceCenter } from './block-service-center';
import type { BlockSlideshow } from './block-slideshow';
import type { BlockStatisticsCounter } from './block-statistics-counter';
import type { BlockStep } from './block-steps';
import type { BlockTeam } from './block-team';
import type { BlockTestimonial } from './block-testimonial';
import type { BlockVideo } from './block-video';
import type { BlockDivider } from './block-divider';

export type BlockType =
	| 'block_banner_group'
	| 'block_columns'
	| 'block_cta'
	| 'block_event_carousel'
	| 'block_event_info'
	| 'block_faqs'
	| 'block_feature'
	| 'block_form'
	| 'block_gallery'
	| 'block_hero'
	| 'block_hero_video'
	| 'block_hero_image'
	| 'block_hero_slider'
	| 'block_html'
	| 'block_logocloud'
	| 'block_page_anchor'
	| 'block_quote'
	| 'block_richtext'
	| 'block_service_center'
	| 'block_slideshow'
	| 'block_statistics_counter'
	| 'block_steps'
	| 'block_team'
	| 'block_testimonial'
	| 'block_video'
	| 'block_divider';

export type Block =
	| BlockBannerGroup
	| BlockColumn
	| BlockCta
	| BlockEventInfo
	| BlockEventCarousel
	| BlockFaq
	| BlockForm
	| BlockFeature
	| BlockGallery
	| BlockHero
	| BlockHeroVideo
	| BlockHeroImage
	| BlockHeroSlider
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
	| BlockDivider;
