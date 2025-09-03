import { cn } from "@/lib/utils";

interface XpaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const XpaLogo = ({ className, size = "md" }: XpaLogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-3xl",
    lg: "text-5xl"
  };

  return (
    <div className={cn("font-bold text-primary tracking-wider", sizeClasses[size], className)}>
      <span className="text-glow">XPA</span>
      <span className="ml-1 font-light">PAY</span>
    </div>
  );
};