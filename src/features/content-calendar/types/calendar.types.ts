export type Platform = 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'pinterest';

export type ContentType = 'text' | 'image' | 'video';

export type CalendarPost = {
  id: string;
  day: string; // ISO date
  contentType: ContentType;
  content: string; // text or placeholder
  time: string;
  platforms: Platform[];
};
