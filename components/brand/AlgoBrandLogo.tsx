import Link from "next/link";
import Image from "next/image";

/**
 * Algo Easy brand logo. NOTE: this product uses its own explicit sizing
 * (requested directly), which deviates from the AlgoBridge master spec in
 * ALGO_DESIGN_SYSTEM.md (88px/56px). That's an intentional, documented
 * exception for this product, same in spirit as the Algo Auto exception --
 * not a copy/paste of the master values.
 *
 * Header: 40px mobile / 48px tablet (sm) / 54px desktop (lg)
 * Footer: 46px mobile / 54px tablet (sm) / 60px desktop (lg)
 *
 * Uses next/image (not a plain <img>) specifically because this app is
 * deployed with a Next.js `basePath` (see next.config.ts) so it can live
 * under algobridge.cc/easyai -- next/image auto-prefixes its src with
 * basePath, a raw <img src> string would not and would 404.
 */
type AlgoBrandLogoProps = {
  src: string;
  href: string;
  alt: string;
};

// Intrinsic dimensions of the current logo file, used only for Next's
// layout/aspect-ratio math -- CSS className controls the actual rendered
// size, and width:auto preserves the exact aspect ratio at every height.
const INTRINSIC_WIDTH = 552;
const INTRINSIC_HEIGHT = 164;

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function AlgoBrandLogoNav({ src, href, alt }: AlgoBrandLogoProps) {
  return (
    <Link href={href} onClick={scrollToTop} className="flex items-center shrink-0">
      <Image
        src={src}
        alt={alt}
        width={INTRINSIC_WIDTH}
        height={INTRINSIC_HEIGHT}
        priority
        quality={100}
        className="h-10 sm:h-12 lg:h-[54px] w-auto shrink-0 max-h-full object-contain"
      />
    </Link>
  );
}

export function AlgoBrandLogoFooter({ src, href, alt }: AlgoBrandLogoProps) {
  return (
    <Link href={href} onClick={scrollToTop} className="inline-flex items-center shrink-0">
      <Image
        src={src}
        alt={alt}
        width={INTRINSIC_WIDTH}
        height={INTRINSIC_HEIGHT}
        quality={100}
        className="h-[46px] sm:h-[54px] lg:h-[60px] w-auto shrink-0 max-h-full object-contain"
      />
    </Link>
  );
}
