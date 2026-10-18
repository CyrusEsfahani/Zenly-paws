import Image from "next/image";
import { cn } from "@/lib/cn";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Zenly Paws"
      width={222}
      height={52}
      className={cn("h-8 w-auto sm:h-9", className)}
      priority
    />
  );
}
