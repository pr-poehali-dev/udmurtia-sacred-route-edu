import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface SacredPlace {
  id: number;
  name: string;
  nameEn: string;
  type: string;
  description: string;
  coordinates: { x: number; y: number };
  era: string;
  significance: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPlace, setSelectedPlace] = useState<SacredPlace | null>(null);

  const sacredPlaces: SacredPlace[] = [
    {
      id: 1,
      name: 'Священная роща Луд',
      nameEn: 'Sacred Grove Lud',
      type: 'Grove',
      description: 'Ancient prayer grove where Udmurt people performed rituals to nature spirits',
      coordinates: { x: 30, y: 40 },
      era: '10th-19th century',
      significance: 'Center of spiritual life and communication with ancestors'
    },
    {
      id: 2,
      name: 'Гора Байгурезь',
      nameEn: 'Mount Baygurez',
      type: 'Mountain',
      description: 'Sacred mountain considered the dwelling place of sky deities',
      coordinates: { x: 60, y: 25 },
      era: 'Ancient times',
      significance: 'Place of celestial worship and astronomical observations'
    },
    {
      id: 3,
      name: 'Источник Святой Ключ',
      nameEn: 'Holy Spring',
      type: 'Spring',
      description: 'Healing spring with miraculous properties according to local traditions',
      coordinates: { x: 45, y: 65 },
      era: 'Medieval period',
      significance: 'Healing and purification rituals'
    },
    {
      id: 4,
      name: 'Капище Инмар',
      nameEn: 'Inmar Sanctuary',
      type: 'Sanctuary',
      description: 'Ancient worship site dedicated to Inmar, the supreme deity',
      coordinates: { x: 75, y: 50 },
      era: 'Pre-Christian era',
      significance: 'Major ceremonial center for tribal gatherings'
    }
  ];

  const routes = [
    {
      id: 1,
      name: 'Northern Spiritual Path',
      places: [1, 2, 4],
      duration: '3 days',
      difficulty: 'Medium'
    },
    {
      id: 2,
      name: 'Southern Heritage Trail',
      places: [1, 3],
      duration: '2 days',
      difficulty: 'Easy'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-emerald-50 to-orange-50">
      <div className="fixed inset-0 ethnic-pattern pointer-events-none opacity-30" />
      
      <nav className="relative z-10 bg-white/80 backdrop-blur-md shadow-md sticky top-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Icon name="Mountain" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Sacred Udmurtia</h1>
                <p className="text-xs text-muted-foreground">Ancient Spiritual Routes</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              {['home', 'routes', 'history', 'gallery'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeSection === section
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-foreground hover:bg-primary/10'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <section className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 text-lg px-6 py-2 bg-accent/20 text-accent-foreground border-accent">
              <Icon name="Sparkles" className="mr-2" size={16} />
              Journey Through Time
            </Badge>
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-shadow bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Discover the Sacred Heart of Udmurtia
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Explore ancient worship sites, sacred groves, and mystical mountains where Udmurt people 
              have connected with nature spirits for millennia. An educational journey through 
              spiritual heritage and cultural wisdom.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" onClick={() => setActiveSection('routes')}>
                <Icon name="Map" className="mr-2" size={20} />
                Explore Routes
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2" onClick={() => setActiveSection('history')}>
                <Icon name="BookOpen" className="mr-2" size={20} />
                Learn History
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {sacredPlaces.slice(0, 3).map((place, index) => (
              <Card 
                key={place.id} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon 
                      name={place.type === 'Grove' ? 'Trees' : place.type === 'Mountain' ? 'Mountain' : place.type === 'Spring' ? 'Droplets' : 'Church'} 
                      size={80} 
                      className="text-primary/30 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-accent">{place.era}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-primary">{place.nameEn}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{place.name}</p>
                  <p className="text-foreground/80 leading-relaxed">{place.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'routes' && (
        <section className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 text-primary">Sacred Routes Map</h2>
            <p className="text-xl text-muted-foreground">Click on locations to learn about each sacred site</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-8 shadow-2xl border-2">
                <div className="relative w-full h-[600px] bg-gradient-to-br from-emerald-100 to-amber-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/30 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                  </div>

                  {sacredPlaces.map((place) => (
                    <button
                      key={place.id}
                      onClick={() => setSelectedPlace(place)}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                      style={{ left: `${place.coordinates.x}%`, top: `${place.coordinates.y}%` }}
                    >
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                        selectedPlace?.id === place.id 
                          ? 'bg-accent scale-125 shadow-2xl' 
                          : 'bg-primary hover:scale-110 shadow-lg'
                      }`}>
                        <Icon 
                          name={place.type === 'Grove' ? 'Trees' : place.type === 'Mountain' ? 'Mountain' : place.type === 'Spring' ? 'Droplets' : 'Church'} 
                          className="text-white" 
                          size={28}
                        />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <Badge className="bg-white text-foreground shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                          {place.nameEn}
                        </Badge>
                      </div>
                    </button>
                  ))}

                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D2691E" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#2F855A" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    {routes[0].places.map((placeId, index) => {
                      if (index === routes[0].places.length - 1) return null;
                      const place1 = sacredPlaces.find(p => p.id === placeId);
                      const place2 = sacredPlaces.find(p => p.id === routes[0].places[index + 1]);
                      if (!place1 || !place2) return null;
                      return (
                        <line
                          key={`${placeId}-${index}`}
                          x1={`${place1.coordinates.x}%`}
                          y1={`${place1.coordinates.y}%`}
                          x2={`${place2.coordinates.x}%`}
                          y2={`${place2.coordinates.y}%`}
                          stroke="url(#routeGradient)"
                          strokeWidth="3"
                          strokeDasharray="10,5"
                        />
                      );
                    })}
                  </svg>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              {selectedPlace ? (
                <Card className="p-6 shadow-xl border-2 animate-fade-in">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className="bg-accent">{selectedPlace.type}</Badge>
                    <button onClick={() => setSelectedPlace(null)}>
                      <Icon name="X" size={20} className="text-muted-foreground hover:text-foreground" />
                    </button>
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-primary">{selectedPlace.nameEn}</h3>
                  <p className="text-lg text-muted-foreground mb-4">{selectedPlace.name}</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-secondary mb-1">Description</p>
                      <p className="text-foreground/80 leading-relaxed">{selectedPlace.description}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary mb-1">Historical Period</p>
                      <p className="text-foreground/80">{selectedPlace.era}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary mb-1">Cultural Significance</p>
                      <p className="text-foreground/80">{selectedPlace.significance}</p>
                    </div>
                  </div>
                </Card>
              ) : (
                <Card className="p-6 shadow-xl border-2 border-dashed">
                  <div className="text-center text-muted-foreground">
                    <Icon name="MapPin" size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Click on a location on the map to learn more about it</p>
                  </div>
                </Card>
              )}

              <Card className="p-6 shadow-xl border-2">
                <h4 className="text-xl font-bold mb-4 flex items-center text-primary">
                  <Icon name="Route" className="mr-2" size={24} />
                  Available Routes
                </h4>
                <div className="space-y-3">
                  {routes.map((route) => (
                    <div key={route.id} className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                      <h5 className="font-semibold text-foreground mb-2">{route.name}</h5>
                      <div className="flex gap-2 text-sm text-muted-foreground">
                        <Badge variant="outline" className="text-xs">
                          <Icon name="Clock" size={12} className="mr-1" />
                          {route.duration}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Icon name="Activity" size={12} className="mr-1" />
                          {route.difficulty}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'history' && (
        <section className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-5xl font-bold mb-12 text-center text-primary">Ancient Spiritual Traditions</h2>
            
            <div className="space-y-12">
              <Card className="p-8 shadow-xl border-2">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Sparkles" className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-primary">Pre-Christian Beliefs</h3>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      The Udmurt people developed a sophisticated animistic belief system centered on nature worship. 
                      They believed that every element of nature—forests, rivers, mountains—possessed spirits that 
                      needed to be honored and respected. Sacred groves (luds) served as natural temples where 
                      communities gathered for ceremonies.
                    </p>
                    <Badge className="bg-accent/20 text-accent-foreground">9th-17th Century</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-8 shadow-xl border-2">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Trees" className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-secondary">Sacred Grove Traditions</h3>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      Luds (sacred groves) were carefully chosen forest areas where only specific rituals could 
                      be performed. Cutting trees or hunting in these groves was strictly forbidden. Each family 
                      clan had their own lud where they conducted prayers, made offerings, and sought guidance 
                      from ancestors. These traditions survived for centuries despite external religious pressures.
                    </p>
                    <Badge className="bg-secondary/20 text-secondary-foreground">Traditional Practice</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-8 shadow-xl border-2">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Star" className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-accent">Deity Pantheon</h3>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      The supreme deity Inmar (Sky God) ruled over a complex pantheon of nature spirits. 
                      Kaldysin (Thunder God) controlled weather, while Vumurt (Water Mother) guarded rivers 
                      and springs. This intricate spiritual worldview helped Udmurt communities live in harmony 
                      with their natural environment and maintain sustainable practices.
                    </p>
                    <Badge className="bg-primary/20 text-primary-foreground">Ancient Mythology</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'gallery' && (
        <section className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 text-primary">Sacred Heritage Gallery</h2>
            <p className="text-xl text-muted-foreground">Visual journey through Udmurtia's spiritual landscape</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sacredPlaces.map((place, index) => (
              <Card 
                key={place.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-64 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon 
                      name={place.type === 'Grove' ? 'Trees' : place.type === 'Mountain' ? 'Mountain' : place.type === 'Spring' ? 'Droplets' : 'Church'} 
                      size={100} 
                      className="text-white/40 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-foreground">{place.type}</Badge>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white text-shadow">{place.nameEn}</h3>
                    <p className="text-sm text-white/90">{place.name}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={14} className="inline mr-1" />
                    {place.era}
                  </p>
                  <p className="text-foreground/80 leading-relaxed">{place.significance}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

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