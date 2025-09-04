interface SectionHeaderProps {
  title: string;
  showLine?: boolean;
  className?: string;
}

export default function SectionHeader({ title, showLine = true, className = "" }: SectionHeaderProps) {
  return (
    <div className={`flex items-center gap-4 h-10 ${className}`}>
      <div className="flex items-start">
        <span className="text-dev-primary font-fira-code text-[32px] font-medium leading-normal">#</span>
        <span className="text-dev-white font-fira-code text-[32px] font-medium leading-normal">{title}</span>
      </div>
      {showLine && (
        <div className="flex-1 h-0.5 bg-dev-primary" />
      )}
    </div>
  );
}
