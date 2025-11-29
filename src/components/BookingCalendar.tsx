import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";

interface BookingCalendarProps {
  prestations: Array<{
    name: string;
    price: number;
    duration: string;
  }>;
  serviceName: string;
}

const BookingCalendar = ({ prestations, serviceName }: BookingCalendarProps) => {
  const { items } = useCart();
  const [date, setDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    prestation: items.length > 0 ? items[0].prestationName : "",
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    adresse: "",
    commentaires: "",
  });

  // Créneaux disponibles de démonstration
  const availableSlots = ["09:00", "10:30", "11:00", "14:00", "15:30", "17:00", "18:30"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedTime) {
      toast.error("Merci de sélectionner une date et un créneau.");
      return;
    }

    if (!formData.nom || !formData.prenom || !formData.telephone || !formData.adresse) {
      toast.error("Merci de compléter les champs obligatoires.");
      return;
    }

    // Simulation de confirmation
    toast.success(`Merci ${formData.prenom}, votre demande de réservation a bien été envoyée. Une experte À Domicile vous contactera très vite pour confirmer.`);
    
    // Reset
    setStep(5); // Écran de confirmation
  };

  const selectedPrestation = prestations.find(p => p.name === formData.prestation);

  return (
    <div className="max-w-4xl mx-auto" data-booking-section>
      {step < 5 && (
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                s === step
                  ? "bg-primary text-primary-foreground"
                  : s < step
                  ? "bg-primary/30 text-primary"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {s < step ? <Check className="w-5 h-5" /> : s}
            </div>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Étape 1: Choix de la prestation */}
        {step === 1 && (
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">Choisissez votre prestation</h3>
              <Select
                value={formData.prestation}
                onValueChange={(value) => setFormData({ ...formData, prestation: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez une prestation" />
                </SelectTrigger>
                <SelectContent>
                  {prestations.map((p, idx) => (
                    <SelectItem key={idx} value={p.name}>
                      {p.name} - {p.price} DT ({p.duration})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                type="button"
                className="w-full mt-6 bg-gradient-primary hover:opacity-90"
                onClick={() => formData.prestation && setStep(2)}
                disabled={!formData.prestation}
              >
                Continuer
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Étape 2: Calendrier */}
        {step === 2 && (
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">Choisissez votre date</h3>
              <div className="flex justify-center mb-6">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date()}
                  className="rounded-md border"
                />
              </div>

              {date && (
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Créneaux disponibles</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {availableSlots.map((slot) => (
                      <Button
                        key={slot}
                        type="button"
                        variant={selectedTime === slot ? "default" : "outline"}
                        className="h-12"
                        onClick={() => setSelectedTime(slot)}
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        {slot}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3 mt-6">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Retour
                </Button>
                <Button
                  type="button"
                  className="flex-1 bg-gradient-primary hover:opacity-90"
                  onClick={() => date && selectedTime && setStep(3)}
                  disabled={!date || !selectedTime}
                >
                  Continuer
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Étape 3: Informations client */}
        {step === 3 && (
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">Vos informations</h3>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom *</Label>
                    <Input
                      id="nom"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prenom">Prénom *</Label>
                    <Input
                      id="prenom"
                      value={formData.prenom}
                      onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telephone">Numéro de téléphone *</Label>
                  <Input
                    id="telephone"
                    type="tel"
                    value={formData.telephone}
                    onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    placeholder="+216 XX XXX XXX"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail (optionnel)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="adresse">Adresse *</Label>
                  <Input
                    id="adresse"
                    value={formData.adresse}
                    onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
                    placeholder="Rue, ville, code postal"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="commentaires">Commentaires / précisions</Label>
                  <Textarea
                    id="commentaires"
                    value={formData.commentaires}
                    onChange={(e) => setFormData({ ...formData, commentaires: e.target.value })}
                    placeholder="Informations supplémentaires..."
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1">
                  Retour
                </Button>
                <Button
                  type="button"
                  className="flex-1 bg-gradient-primary hover:opacity-90"
                  onClick={() => setStep(4)}
                >
                  Continuer
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Étape 4: Récapitulatif */}
        {step === 4 && (
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6">Récapitulatif de votre réservation</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-secondary/30 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Prestation</p>
                  <p className="font-semibold">{formData.prestation}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Date</p>
                    <p className="font-semibold">{date?.toLocaleDateString('fr-FR')}</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Heure</p>
                    <p className="font-semibold">{selectedTime}</p>
                  </div>
                </div>

                <div className="bg-secondary/30 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Adresse</p>
                  <p className="font-semibold">{formData.adresse}</p>
                </div>

                <div className="bg-secondary/30 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Contact</p>
                  <p className="font-semibold">{formData.prenom} {formData.nom}</p>
                  <p className="text-sm text-muted-foreground">{formData.telephone}</p>
                  {formData.email && <p className="text-sm text-muted-foreground">{formData.email}</p>}
                </div>

                {selectedPrestation && (
                  <div className="bg-primary/10 rounded-lg p-4 border-2 border-primary">
                    <p className="text-sm text-muted-foreground mb-1">Prix estimé</p>
                    <p className="text-2xl font-bold text-primary">{selectedPrestation.price} DT</p>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={() => setStep(3)} className="flex-1">
                  Retour
                </Button>
                <Button type="submit" className="flex-1 bg-gradient-primary hover:opacity-90">
                  Confirmer ma réservation
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Étape 5: Confirmation */}
        {step === 5 && (
          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Réservation envoyée !</h3>
              <p className="text-muted-foreground mb-6">
                Merci {formData.prenom}, votre demande de réservation a bien été envoyée.<br />
                Une experte À Domicile vous contactera par téléphone pour confirmer votre rendez-vous.
              </p>
              <Button
                type="button"
                className="bg-gradient-primary hover:opacity-90"
                onClick={() => {
                  setStep(1);
                  setDate(undefined);
                  setSelectedTime("");
                  setFormData({
                    prestation: "",
                    nom: "",
                    prenom: "",
                    telephone: "",
                    email: "",
                    adresse: "",
                    commentaires: "",
                  });
                }}
              >
                Nouvelle réservation
              </Button>
            </CardContent>
          </Card>
        )}
      </form>
    </div>
  );
};

export default BookingCalendar;
