import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const TeamSection = () => {
  const navigate = useNavigate();
  
  const team: TeamMember[] = [
    {
      name: "Leila Ben Ahmed",
      role: "CEO / Fondatrice",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
    },
    {
      name: "Karim Trabelsi",
      role: "CTO / Responsable technique",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop"
    },
    {
      name: "Amira Mansour",
      role: "Responsable expérience client",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm">
            Notre équipe
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Rencontrez notre équipe
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Les talents passionnés derrière À Domicile, qui travaillent chaque jour pour vous offrir une expérience beauté simple, professionnelle et chaleureuse.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative h-[500px] rounded-[20px] overflow-hidden shadow-elegant transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent"></div>
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-white text-sm md:text-base font-light tracking-wide">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button
            onClick={() => navigate("/a-propos")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base rounded-full shadow-elegant transition-all duration-200 hover:scale-105"
          >
            En savoir plus
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
