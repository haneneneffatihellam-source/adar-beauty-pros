import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { X, ShoppingBag } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CartSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCheckout: () => void;
}

const CartSidebar = ({ open, onOpenChange, onCheckout }: CartSidebarProps) => {
  const { items, removeFromCart, getTotalPrice } = useCart();

  const handleCheckout = () => {
    onOpenChange(false);
    onCheckout();
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            Votre panier
          </SheetTitle>
          <SheetDescription>
            {items.length === 0 ? "Votre panier est vide" : `${items.length} prestation(s) sélectionnée(s)`}
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground">Votre panier est vide</p>
            <p className="text-sm text-muted-foreground mt-2">Ajoutez des prestations pour commencer</p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 pr-4 my-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-secondary/30 rounded-lg p-4 relative">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="absolute top-2 right-2 text-muted-foreground hover:text-destructive transition-colors"
                      aria-label="Retirer du panier"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <div className="pr-6">
                      <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">
                        {item.serviceName}
                      </p>
                      <h4 className="font-semibold text-foreground mb-2">{item.prestationName}</h4>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{item.duration}</span>
                        <span className="font-bold text-primary">{item.price} DT</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t pt-4 space-y-4">
              <div className="flex items-center justify-between text-lg font-bold">
                <span>Total estimé</span>
                <span className="text-primary">{getTotalPrice()} DT</span>
              </div>
              <Button 
                onClick={handleCheckout}
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                size="lg"
              >
                Confirmer ma réservation
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
