import type { Testimonial } from '../content';

export interface BlockTestimonialCard {
	headline?: string | null;
	id?: string;
	title?: string | null;
	testimonials?: (string | BlockTestimonialCardItem)[];
}
export interface BlockTestimonialCardItem {
	block_testimonials_slider_id?: (string | BlockTestimonialCard) | null;
	id?: string;
	sort?: number | null;
	testimonials_id?: (string | Testimonial) | null;
}
