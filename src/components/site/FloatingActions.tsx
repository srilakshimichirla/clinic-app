import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-40 flex flex-col gap-3">
      {show && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="grid h-12 w-12 place-items-center rounded-full gradient-primary text-primary-foreground shadow-elegant hover:scale-110 transition-transform"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}