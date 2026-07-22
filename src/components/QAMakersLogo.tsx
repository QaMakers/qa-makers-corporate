interface QAMakersLogoProps {
  variant?: 'horizontal' | 'compact';
  size?: 'navbar' | 'footer' | 'default';
  className?: string;
}

const SIZE_MAP = {
  navbar: 'h-8',
  footer: 'h-8',
  default: 'h-12',
};

export default function QAMakersLogo({
  variant = 'horizontal',
  size = 'default',
  className = '',
}: QAMakersLogoProps) {
  const heightClass = SIZE_MAP[size];
  const maxWMap: Record<typeof size, string> = {
    navbar: 'max-w-[180px]',
    footer: 'max-w-[160px]',
    default: 'max-w-[220px]',
  };
  const widthClass = variant === 'compact' ? 'w-auto max-w-[40px]' : `w-auto ${maxWMap[size]}`;

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
