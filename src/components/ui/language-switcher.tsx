import React from 'react';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-ecomotech-green transition-colors">
        <Globe className="h-4 w-4" />
        <span>EN</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="cursor-pointer">
          <a href="/EcoMoTechWeb/" className="w-full">
            English
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <a href="https://ecomotech-cn.netlify.app/" className="w-full">
            中文
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;