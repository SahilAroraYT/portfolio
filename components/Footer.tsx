import { Heart } from "lucide-react";
import { profile } from "@/lib/profile-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500">
          © {year} {profile.name}. All rights reserved.
        </p>

        <p className="flex items-center gap-1.5 text-sm text-slate-500">
          Designed &amp; built with
          <Heart className="h-3.5 w-3.5 text-cyan-400" />
          by {profile.name}
        </p>
      </div>
    </footer>
  );
}