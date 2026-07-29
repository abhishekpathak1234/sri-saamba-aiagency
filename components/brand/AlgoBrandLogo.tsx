import Link from "next/link";
import Image from "next/image";

/**
 * Algo Brand Logo System — shared across every Algo product.
 * Spec source: ALGO_DESIGN_SYSTEM.md in the algoai (ledger) repo, measured
 * from the live algobridge.cc navbar/footer. Accepts only the 3 inputs
 * every product provides; height/spacing/alignment are inherited.
 *
 * Height values match the master reference exactly:
 *   nav:    56px mobile / 88px desktop (h-14 / lg:h-[88px])
 *   footer: 56px all breakpoints (h-14)
 *
 * Uses next/image (not a plain <img>) specifically because this app is
 * deployed with a Next.js `basePath` (see next.config.ts) so it can live
 * under algobridge.cc/easy-ai -- next/image auto-prefixes its src with
 * basePath, a raw <img src> string would not and would 404.
 */
type AlgoBrandLogoProps = {
  src: string;
  href: string;
  alt: string;
};

// Intrinsic dimensions of the source logo files (icon+wordmark lockups),
// used only for Next's layout/aspect-ratio math -- CSS className controls
// the actual rendered size.
const INTRINSIC_WIDTH = 551;
const INTRINSIC_HEIGHT = 174;

export function AlgoBrandLogoNav({ src, href, alt }: AlgoBrandLogoProps) {
  return (
    <Link href={href} className="flex items-center shrink-0">
      <Image
        src={src}
        alt={alt}
        width={INTRINSIC_WIDTH}
        height={INTRINSIC_HEIGHT}
        priority
        className="h-14 lg:h-[88px] w-auto shrink-0 max-h-full object-contain"
      />
    </Link>
  );
}

export function AlgoBrandLogoFooter({ src, href, alt }: AlgoBrandLogoProps) {
  return (
    <Link href={href} className="inline-flex items-center shrink-0">
      <Image
        src={src}
        alt={alt}
        width={INTRINSIC_WIDTH}
        height={INTRINSIC_HEIGHT}
        className="h-14 w-auto shrink-0 max-h-full object-contain"
      />
    </Link>
  );
}
