import { Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild className="outline-none">
        <button
          className="
            flex items-center gap-2
            px-3 py-1.5
            rounded-md
            text-sm font-medium
            hover:bg-gray-100
            transition
          "
        >
          <Globe size={16} />
          <span>ENG</span>
          <ChevronDown size={16} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-32 bg-white outline-none">
        <DropdownMenuItem>ENG</DropdownMenuItem>
        <DropdownMenuItem>FR</DropdownMenuItem>
        <DropdownMenuItem>ESP</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}