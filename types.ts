export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

export interface SectionProps {
  id?: string;
  className?: string;
}