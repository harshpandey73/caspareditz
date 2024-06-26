import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text=" videos from meh to millions"
      default_velocity={5}
      className="font-display text-center text-2xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-slate-400 md:text-5xl md:leading-[5rem] lg:text-7xl "
    />
  );
}
