"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BUSINESS } from "./site";
import { PhoneGlyph } from "./ui";

/**
 * Mobile-only sticky action bar. The second button points at /contact, except
 * on the contact page itself where it would be a no-op — there it becomes an
 * email link instead.
 */
export default function CallBar() {
  const pathname = usePathname();
  const onContact = pathname === "/contact";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-paper/95 px-3 py-2.5 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2.5">
        <a href={BUSINESS.phoneHref} className="btn btn-primary h-12 flex-1">
          <PhoneGlyph className="h-5 w-5" />
          Call {BUSINESS.phoneDisplay}
        </a>
        {onContact ? (
          <a
            href={`mailto:${BUSINESS.email}`}
            className="btn btn-ghost h-12 px-4"
          >
            Email
          </a>
        ) : (
          <Link href="/contact" className="btn btn-ghost h-12 px-4">
            Quote
          </Link>
        )}
      </div>
    </div>
  );
}
