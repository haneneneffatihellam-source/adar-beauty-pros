import { useState } from "react";
import { Search, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchDialog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
          <Search className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Rechercher un service</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Coiffure, maquillage, massage..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">Services populaires :</p>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">Coiffure</Button>
            <Button variant="outline" size="sm">Maquillage</Button>
            <Button variant="outline" size="sm">Manucure</Button>
            <Button variant="outline" size="sm">Massage</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
