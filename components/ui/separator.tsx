import { cn } from "@/lib/utils"

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export default function Separator({ className, ...props }: SeparatorProps) {
  return (
    <div
      className={cn(
        "h-px border-none bg-gradient-to-r from-neutral-400/0 via-neutral-400/30 to-neutral-400/0 dark:from-neutral-200/0 dark:via-neutral-200/30 dark:to-neutral-200/0",
        className
      )}
      {...props}
    ></div>
  )
}
