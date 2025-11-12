import { useState } from "react";
import { User } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const AuthDialog = () => {
  const [userType, setUserType] = useState<"b2c" | "b2b">("b2c");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Inscription réussie ! Vérifiez votre email.");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
          <User className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Connexion / Inscription</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Connexion</TabsTrigger>
            <TabsTrigger value="signup">Inscription</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signin">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="signin-email">Email</Label>
                <Input id="signin-email" type="email" placeholder="votre@email.com" required />
              </div>
              <div>
                <Label htmlFor="signin-password">Mot de passe</Label>
                <Input id="signin-password" type="password" required />
              </div>
              <Button type="submit" className="w-full bg-gradient-primary">
                Se connecter
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="signup">
            <div className="mb-4">
              <Label className="mb-2 block">Type de compte</Label>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  type="button"
                  variant={userType === "b2c" ? "default" : "outline"}
                  onClick={() => setUserType("b2c")}
                  className={userType === "b2c" ? "bg-gradient-primary" : ""}
                >
                  Client (B2C)
                </Button>
                <Button
                  type="button"
                  variant={userType === "b2b" ? "default" : "outline"}
                  onClick={() => setUserType("b2b")}
                  className={userType === "b2b" ? "bg-gradient-primary" : ""}
                >
                  Professionnel (B2B)
                </Button>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="signup-name">Nom complet</Label>
                <Input id="signup-name" placeholder="Votre nom" required />
              </div>
              <div>
                <Label htmlFor="signup-email">Email</Label>
                <Input id="signup-email" type="email" placeholder="votre@email.com" required />
              </div>
              <div>
                <Label htmlFor="signup-phone">Téléphone</Label>
                <Input id="signup-phone" type="tel" placeholder="+216 XX XXX XXX" required />
              </div>
              <div>
                <Label htmlFor="signup-password">Mot de passe</Label>
                <Input id="signup-password" type="password" required />
              </div>
              
              {userType === "b2b" && (
                <>
                  <div>
                    <Label htmlFor="signup-business">Nom de l'entreprise</Label>
                    <Input id="signup-business" placeholder="Votre salon / entreprise" />
                  </div>
                  <div>
                    <Label htmlFor="signup-specialty">Spécialité</Label>
                    <Input id="signup-specialty" placeholder="Coiffure, maquillage..." />
                  </div>
                </>
              )}
              
              <Button type="submit" className="w-full bg-gradient-primary">
                S'inscrire
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
