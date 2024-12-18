import { cn } from "$lib/utils";
import { HTMLAttributes } from "react";

interface SlidingButtonProps {
  primaryText: string;
  secondaryText: string;
  className?: HTMLAttributes<HTMLButtonElement>["className"];
  buttonProps?: HTMLAttributes<HTMLButtonElement>;
}

const SlidingButton: React.FC<SlidingButtonProps> = ({
  primaryText,
  secondaryText,
  className,
  buttonProps,
}) => {
  return (
    <button
      {...buttonProps}
      className={cn(
        `group text-sm relative flex flex-col h-fit w-fit rounded-xl border border-primary-400 px-5 py-2 overflow-hidden duration-[600ms] ease-[cubic-bezier(.16,1,.3,1)]`,
        className
      )}
    >
      <div className="text-start w-fit group-hover:-translate-y-[calc(100%+16px)] translate-y-0 duration-[600ms] ease-[cubic-bezier(.16,1,.3,1)]">
        <span className="flex flex-row items-center justify-between h-full w-fit">
          <p>{primaryText}</p>
        </span>
      </div>
      <div className="absolute group-hover:translate-y-0 w-fit translate-y-[calc(100%+16px)] duration-[600ms] ease-[cubic-bezier(.16,1,.3,1)]">
        <span className="flex flex-row items-center justify-between h-full">
          <p>{secondaryText}</p>
        </span>
      </div>
    </button>
  );
};

export default SlidingButton;
