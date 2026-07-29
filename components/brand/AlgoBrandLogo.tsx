import Link from "next/link";

/**
 * Algo Brand Logo System — shared across every Algo product.
 * Spec source: ALGO_DESIGN_SYSTEM.md in the algoai (ledger) repo, measured
 * from the live algobridge.cc navbar/footer. Accepts only the 3 inputs
 * every product provides; height/spacing/alignment are inherited.
 *
 * Height values match the master reference exactly:
 *   nav:    56px mobile / 88px desktop (h-14 / lg:h-[88px])
 *   footer: 56px all breakpoints (h-14)
 */
type AlgoBrandLogoProps = {
  src: string;
  href: string;
  alt: string;
};

export function AlgoBrandLogoNav({ src, href, alt }: AlgoBrandLogoProps) {
  return (
    <Link href={href} className="flex items-center shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-14 lg:h-[88px] w-auto shrink-0 max-h-full object-contain" />
    </Link>
  );
}

export function AlgoBrandLogoFooter({ src, href, alt }: AlgoBrandLogoProps) {
  return (
    <Link href={href} className="inline-flex items-center shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-14 w-auto shrink-0 max-h-full object-contain" />
    </Link>
  );
}
