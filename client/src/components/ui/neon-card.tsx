import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: string;
}

export function NeonCard({ 
  children, 
  className,
  glowColor = "#7232f2",
  ...props 
}: NeonCardProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        boxShadow: `0 0 30px ${glowColor}33`,
        transition: { duration: 0.2 }
      }}
      animate={{
        boxShadow: [
          `0 0 0px ${glowColor}00`,
          `0 0 15px ${glowColor}22`,
          `0 0 0px ${glowColor}00`
        ]
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={cn(
        "relative rounded-lg bg-[#010108] p-6 border border-[#20115b]",
        "before:absolute before:inset-0 before:rounded-lg before:blur-lg before:opacity-50",
        "after:absolute after:inset-0 after:rounded-lg after:opacity-0 after:transition-opacity",
        "hover:after:opacity-100",
        "transition-all duration-300",
        className
      )}
      style={{
        '--glow-color': glowColor,
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </motion.div>
  );
}