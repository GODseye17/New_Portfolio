interface DevButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export default function DevButton({ 
  children, 
  variant = 'primary', 
  onClick,
  className = "" 
}: DevButtonProps) {
  const baseClasses = "inline-flex py-2 px-4 items-start gap-2.5 font-fira-code text-base font-medium leading-normal";
  
  const variantClasses = {
    primary: "border border-dev-primary text-dev-white hover:bg-dev-primary/10 transition-colors",
    secondary: "border border-dev-gray text-dev-gray hover:bg-dev-gray/10 transition-colors"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
