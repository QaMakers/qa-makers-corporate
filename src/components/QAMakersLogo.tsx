interface QAMakersLogoProps {
  variant?: 'horizontal' | 'compact';
  size?: 'navbar' | 'footer' | 'default';
  className?: string;
}

const SIZE_MAP = {
  navbar: 'h-8',
  footer: 'h-7',
  default: 'h-10',
};

export default function QAMakersLogo({
  variant = 'horizontal',
  size = 'default',
  className = '',
}: QAMakersLogoProps) {
  const heightClass = SIZE_MAP[size];
  const widthClass = variant === 'compact' ? 'w-auto max-w-[40px]' : 'w-auto';

  return (
    <img
      src="/brand/logo-qamakers.png"
      alt="QA Makers"
      className={`${heightClass} ${widthClass} object-contain ${className}`}
      draggable={false}
      loading="eager"
    />
  );
}
