import React from "react";
import { Input } from "@/components/ui/input";
import { RefreshCcw, Search, SearchIcon } from "lucide-react";
import { Button } from "../ui/button";

const SearchReload = () => {
  return (
    <div className="flex w-full items-center space-x-2">
      <Search className="w-4 h-4 sm:h-6 sm:w-6" />
      <Input
        className="w-7/12 sm:w-5/12 text-xs sm:text-base"
        type="text"
        placeholder="Search By Name or Username"
      />
      <Button variant="ghost">
        <RefreshCcw className="w-4 h-4 sm:h-6 sm:w-6" />
      </Button>
    </div>
  );
};

export default SearchReload;
