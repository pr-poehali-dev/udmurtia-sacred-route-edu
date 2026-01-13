import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const routes = [
    {
      id: 'northern',
      name: 'Northern Spiritual Path',
      description: 'Journey through ancient Finno-Ugric settlements, sacred mountains, and healing springs.',
      places: ['Baygurez Mountain', 'Kama River Source', 'St. Tryphon Spring', 'Settlement Idnakar', 'Anomalous Zone K-16'],
      duration: '3-4 days',
      difficulty: 'Medium',
      image: 'https://cdn.poehali.dev/files/ps2.png'
    },
    {
      id: 'southern',
      name: 'Southern Heritage Trail',
      description: 'Explore sacred groves, ancient titans mythology, and mystical healing fountains.',
      places: ['Sacred Pine Tree Lud', 'Mount Alangasar', 'Holy Martyrs Flora and Laurus', 'Zuev Fountains', 'White Cave'],
      duration: '2-3 days',
      difficulty: 'Easy',
      image: 'https://cdn.poehali.dev/files/ps4.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-emerald-50 to-orange-50">
      <div className="fixed inset-0 ethnic-pattern pointer-events-none opacity-30" />
      
      <nav className="relative z-10 bg-white/90 backdrop-blur-md shadow-lg sticky top-0">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <Icon name="Mountain" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Sacred Udmurtia</h1>
              <p className="text-xs text-muted-foreground">Ancient Spiritual Routes</p>
            </div>
          </Link>
        </div>
      </nav>

      <section className="relative z-10">
        <div className="relative h-[70vh] overflow-hidden">
          <img 
            src="https://cdn.poehali.dev/files/ps1.png" 
            alt="Traditional Udmurt idols"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-6 animate-fade-in">
              <Badge className="mb-6 text-lg px-6 py-2 bg-white/20 backdrop-blur-sm border-white/40">
                <Icon name="Sparkles" className="mr-2" size={16} />
                Guidebook to Sacred Places
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
                Sacred Places of Udmurtia
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed mb-8 text-white/95 font-light">
                The Udmurt Republic is rich in places that can be described as sacred due to the rich pagan traditions, 
                preservation of folk traditions and natural uniqueness of the region.
              </p>
              <p className="text-lg text-white/90 mb-8">
                Complied guidebook presents careful selection of places recommended for visiting.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-primary">Choose Your Sacred Journey</h3>
            <p className="text-xl text-muted-foreground">
              We have selected sacred places for the guide, which can be conditionally divided into "southern" and "northern".
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {routes.map((route) => (
              <Card 
                key={route.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={route.image}
                    alt={route.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge className="mb-3 bg-accent text-accent-foreground">
                      <Icon name="MapPin" size={14} className="mr-1" />
                      {route.places.length} Sacred Places
                    </Badge>
                    <h3 className="text-3xl font-bold text-white mb-2">{route.name}</h3>
                    <div className="flex gap-3 mb-3">
                      <Badge variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/40">
                        <Icon name="Clock" size={14} className="mr-1" />
                        {route.duration}
                      </Badge>
                      <Badge variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/40">
                        <Icon name="Activity" size={14} className="mr-1" />
                        {route.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <p className="text-foreground/80 leading-relaxed mb-6">{route.description}</p>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-secondary mb-3">Route includes:</p>
                    <ul className="space-y-2">
                      {route.places.slice(0, 3).map((place, idx) => (
                        <li key={idx} className="flex items-center text-sm text-foreground/70">
                          <Icon name="ChevronRight" size={16} className="mr-2 text-primary" />
                          {place}
                        </li>
                      ))}
                      {route.places.length > 3 && (
                        <li className="text-sm text-muted-foreground ml-6">+ {route.places.length - 3} more places</li>
                      )}
                    </ul>
                  </div>
                  <Link to={`/route/${route.id}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      Explore Route
                      <Icon name="ArrowRight" size={18} className="ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center max-w-3xl mx-auto">
            <Card className="p-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <Icon name="Info" size={40} className="mx-auto mb-4 text-primary" />
              <h4 className="text-2xl font-bold mb-4 text-primary">Plan Your Journey</h4>
              <p className="text-foreground/80 leading-relaxed">
                All mentioned sacred places could be combined into a two-days route with the rest point in Izhevsk, 
                or North and South direction could be separate route. Also tourists can exclude any place from the 
                route by their choice according to their believes or preferences.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="relative z-10 bg-gradient-to-r from-primary to-secondary text-white py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">Sacred Udmurtia</h4>
              <p className="text-white/80 leading-relaxed">
                Preserving and sharing the ancient spiritual heritage of the Udmurt people through 
                education and cultural awareness.
              </p>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-white cursor-pointer transition-colors">About Project</li>
                <li className="hover:text-white cursor-pointer transition-colors">Research Team</li>
                <li className="hover:text-white cursor-pointer transition-colors">Educational Resources</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-4">Connect</h5>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Mail" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>© 2026 Sacred Udmurtia Educational Project. Preserving heritage for future generations.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
