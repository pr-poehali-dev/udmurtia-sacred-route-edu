import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const RouteSouthern = () => {
  const places = [
    {
      id: 1,
      name: 'Sacred Pine Tree',
      subtitle: 'Lud or Keremet Grove',
      description: `The sacred grove - Lud, or Keremet - was in every Udmurt village. Each tree in such a grove was considered sacred. Today, there are practically no sacred groves anywhere - after all, no one observes pagan rites so literally. But the tradition of honoring ancient trees and faith in their power remained.

The worship of trees, the selection of special ones among them, is such a characteristic features of all pagan cultures. This, as well as endowing with special qualities of hills, rivers, springs, is not religion or deification in the sense familiar to modern man, it is the recognition of laws and forms of existence that are different from human ones. You can consider this wildness, but when you think about the fact that a tree existed 500 years before you and will stand for a long time after you, you understand that this is wisdom.

The sacred groves were nothing else than open-air temples. It's just that pagan rites required, as a rule, participation of all members of the community - after all, all, it was a meeting with the patron saint of the settlement. Of course, there were no place for civilized premises (no one was going to anyone to build them), so in fact every large Udmurt settlement had its own sacred grove, or glade, or both at once.

The tradition of endowing trees of outstanding age or size with special properties and strength still exists today. For example, in Udmurtia, where about a dozen very old or very large trees were found. And all of them are endowed with certain properties of an irrational nature. Fourteen trees have been included in the All-Russian register of old-growth trees, seven of which have been awarded the status of a "monument of wildlife".

We suggest the oldest one - the pine tree in Chakhistur village. Uva region. It is from 350 to 400 years old. It is said that Emelyan Pugachev himself stopped to rest under it. The Pine tree supposedly, fulfill wishes and treat diseases. No one has refuted the attributed properties. Its exact place is N 57°01\'08", E 52°08\'10".`,
      image: 'https://cdn.poehali.dev/files/ps4.png',
      type: 'Sacred Tree',
      coordinates: 'N 57°01\'08", E 52°08\'10"'
    },
    {
      id: 2,
      name: 'Mount Alangasar',
      subtitle: 'Mountain of Ancient Titans',
      description: `Udmurtia is not famous for its mountains. There are no real mountains on the territory of the republic and in places of traditional habitation of Udmurts - they are rather hills. And yet, like most ancient peoples, Udmurts have a whole range of cosmogonic myths, among which there are myths about cosmogonic giants who turned into mountains - are almost obligatory. In Udmurt mythology, the role of ancient titans and cyclops is assigned to Alangasars - giants who came from nowhere to Udmurtia and, judging by the name, did nothing there - they only sat there. Moreover, they twisted giant bows and giant pine trees and left them like that. In general, they behaved like stereotypical giants - physically immensely strong, but stupid. So stupid that the cunning "little people" were able to survive them from the inhabited lands (where they sketched so many mountains and twisted ropes from trees).

The similarity of the Alangasars with the ancient Cyclopes is striking. Cyclopes as also stupid, dumb to people's tricks. For example, Cyclops Polyphemus was deceived at least twice - by nymph Galatea and by Odysseus. Like the Alangasars, the Cyclopes left behind mountains - in Sicily, for example. Much later mythology, under the influence of stories about ancient civilizations, reinterpreted the attributes to Alangasars the actions characteristic of noble robbers: supposedly they robbed the rich, but, oddly enough, they did not distribute the good to the poor, but simply hid it in the form treasures. According to some versions, the word itself was borrowed by Udmurts from the Tatars, it is more common among the southern Udmurts - just on the border with modern Tatarstan, and the Alnash region. The term "Alangasar" consists of two ethnonyms: "Alan" ("Iranian tribe") and "Khazar" ("Turkic tribe"). It is known what a great role Alanian army played in Khazar Khaganate in the middle of the 1st millennium AD. It may well be that the southern Udmurts merged with the Mari, nicknamed so their relatives.

Mountain Alangasar, or Alangasar gurez, is in Verkhniy Utchan village, Alnash region N 56°10\'37", E 52°23\'23". Every aspects of the legend can be found there: the southern Udmurts, the necessary proximity of the Kama river (the Alangasars came along the river), hilly terrain - remains of either giant progenitors, or clods of mud from giant\' feet. And the fact that a settlement with half of the name "Alangasar" was found on this mountain in the middle AD gives reason to think that there were the "little people" who managed to drive out the Alangasars, and then their descendants lived here.`,
      image: 'https://cdn.poehali.dev/files/ps4.png',
      type: 'Mountain',
      coordinates: 'N 56°10\'37", E 52°23\'23"'
    },
    {
      id: 3,
      name: 'Holy Martyrs Florus and Laurus',
      subtitle: 'Sacred Spring and Chapel',
      description: `The holy source at the chapel of Holy Martyrs Flora and Laurus is located in a log, between the villages of Kiyasovo and Pervomaisky, 2 kilometers west of the latter and 2.5 kilometers southeast of Aksarino village, Kiyasovo region N 56°23\'53", E 53°10\'21".

The territory is protected by law and is a hydrological monument. According to legends, more than a century ago, here, already at the repair of Zapoisky, who had already sunk in years, the icon of Saints Florus and Laurus was found. The icon was transferred by the peasants to local temple, but then it miraculously returned to its original place. After that, a chapel was built near the source where the source where the icon was kept. Later, a font, near for descent to the water was laid out with a stone.

In ancient times, on August 31, on the day of Florus and Laurus memory, as well as on the feast of Holy Trinity, numerous believers visited it. According to tradition, a fair was held at the Holy source, where horses were sold because in ancient Rus', Flor and Laurus were revered as patrons of livestock and, in particular, horses.

Of course, this place is for Christians mostly. In our time, pilgrims still come and come to the Holy source. According to the existing belief, new cars are sprinkled with spring water so that there are no accidents and breakdowns.

Before arrival at the source, you need to buy or bring a container for water, because water should not be left. According to the local tradition, after getting water, spring water should not be left. The analysis of water showed the content of silver in the water, and silver inhibits the proliferation of bacteria in the water, the water is laid out with a stone, which have bactericidal properties. Geologists have not figured out where the silver came from to the spring (although they really wanted to). And this is, if not a miracle, then an amazing fact. Does this make the water healing? - well, some sort of anti-inflammatory properties, judging by scientists, it should have and will definitely be stored longer. Though it can hardly be considered a cure. Presence of silver in Saint spring water is not as interesting as its absence in Gremyachy spring water. The springs are separated by only 300 meters, but the composition of water in them differs fundamentally. In Gremyachy, the water is so saturated with minerals that it is not recommended to drink it often (unless very small quantities and for certain indications), but it is to be help with skin diseases and heal external wounds. Therefore, they plunge into the Gremyachy key or pour water from it.

Having drunk the water from Saint spring and dipping into Gremyachy spring, you can heal the body both from inside and outside. And the soul will be healed by beauty, which is definitely created by superhuman strength and definitely has the most powerful energy.`,
      image: 'https://cdn.poehali.dev/files/ps4.png',
      type: 'Spring',
      coordinates: 'N 56°23\'53", E 53°10\'21"'
    },
    {
      id: 4,
      name: 'Zuev Fountains',
      subtitle: 'Healing Springs of Gremyachy',
      description: `Between the place where the Belaya River merges with the Kama river and the Nizhnekamsk reservoir, near Tatarstan and Udmurtia border, there is a place where such a view of Kama estuaries opens up that it takes your breath away. It's called Zuev fountains or Zuev fountains. The name is due to the nearby springs, and the actual springs, sources of water which is considered to be healing. The village is the most ordinary, although it is laid in a very beautiful place.

Zuev fountains is one of the "magic places" in the south of Udmurtia, and one of the coordinates of the village - N 055 52.337, E 053 16.077, Saint: N055 52.173, E 053 16.169. It is believed that local springs have a healing effect. Especially two of them: Saint and Gremyachy. One is called "alive", the second - "dead". "Alive" water is drunk, and "dead" water is poured over. Like many modern myths, the story of the special power origin of Zuev Fountains is a fusion of pagan and Christian. Endowing with special properties of objects from wildlife - practices that remain the same - it is typically pagan and contrary to Christian canons. But the form is already dictated by the newest religious culture - it has already become so customary that any contact of a person with the non-material is a test of faith. Probably, one time was a pagan version of both fountains and healing power, because for some reason the place where Gremyachy spring beats was called "Witch Mountain", and it is still mentioned that there was a pagan sanctuary and possibly a place of sacrifice. That is, in pagan times, the locals somehow distinguished him from others. According to the latest, post-Christian version of legend, the fountains began to beat after a monk came here, fell to the Mother of God with a prayer. An icon stood in the place of the source, and after the monk raised it, a source was hammered out of the ground. And at the same moment, lightning struck Witch Mountain. Gremyachy spring began to flow from that place. Lightning "cleansed" the pagan sanctuary, seal, and the source is now considered as an indicator of Orthodoxy viability and endowing for Orthodoxy as long as water flows from Gremyachy. "Christianity will not disappear." A rather risky statement in fact - the earth's crust is quite mobile, especially near large rivers, and any underground collapse can "plug" the spring at any moment. So it is unlikely that this concept was originally approved by the Church. The water of S... [truncated]

Having drunk water from Saint spring and dipping into Gremyachy spring, it is believed that the body will be heal both from inside and outside. And the soul will be healed by beauty, which is definitely created by superhuman strength and definitely has the most powerful energy.`,
      image: 'https://cdn.poehali.dev/files/ps5.png',
      type: 'Fountains',
      coordinates: 'N 55°52.337\', E 53°16.077\''
    },
    {
      id: 5,
      name: 'White Cave',
      subtitle: 'Belaya Cave - Ancient Mystery',
      description: `White (Belaya) Cave is 70 kilometers away from Sarapul city near Cheganda village, Karakulino region N 55°57\'12", E 53°31\'50". It is at the high Kama bank, and used to have 4 entrances, two of them at the moment are collapsed. It has quite spacious, smooth tunnels. There are carved rooms in the walls, there is something like a ring road in the left tunnel.

The legend about this cave says that it was dug five thousand years ago by an unknown tribe who came to these places. They led a hidden way of life, did not allow outsiders to approach them, and did not trade with neighboring tribes. There was a tribe of hermits. They even differed from others in height, beauty, demeanor. For about a hundred years, a mysterious tribe stood in the White Cave, hiding according to the legend in the darkness to the place of White Cave on banks of Kama river. No one knows what happened, but the whole tribe (2 thousand people) suddenly abandoned all their property and one by one went into this cave through one of the tunnels, blocking the entrance from the inside with stone walls, and the cave entrance sank in the stone.

A few centuries later, a tribe of Pianobor culture settled here. They used this cave already as a copper mine (copper was mined in our area from the 13th century BC to the 5th century AD).

There is also a belief that a wizard lived in this mountain. When the current of the river was stormy, all the ships lined up for this very old man to come out of the cave and raise his hands. Then the Belaya river calmed down, and the sailors could calmly continue their journey.`,
      image: 'https://cdn.poehali.dev/files/ps5.png',
      type: 'Cave',
      coordinates: 'N 55°57\'12", E 53°31\'50"'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-emerald-50 to-orange-50">
      <div className="fixed inset-0 ethnic-pattern pointer-events-none opacity-20" />
      
      <nav className="relative z-10 bg-white/90 backdrop-blur-md shadow-lg sticky top-0">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <Icon name="Mountain" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Sacred Udmurtia</h1>
              <p className="text-xs text-muted-foreground">Southern Heritage Trail</p>
            </div>
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm">
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Back to Routes
            </Button>
          </Link>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 text-lg px-6 py-2 bg-secondary/10 text-secondary border-secondary">
              <Icon name="Trees" className="mr-2" size={16} />
              Southern Route
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
              Sacred Places of Southern Route
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore ancient sacred groves, mountains of titans, healing springs with miraculous properties, 
              and mysterious caves of southern Udmurtia.
            </p>
            <div className="flex gap-4 justify-center mt-6">
              <Badge variant="outline" className="text-base px-4 py-2">
                <Icon name="Clock" size={16} className="mr-2" />
                2-3 days
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                <Icon name="Activity" size={16} className="mr-2" />
                Easy difficulty
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                <Icon name="MapPin" size={16} className="mr-2" />
                5 sacred places
              </Badge>
            </div>
          </div>

          <div className="space-y-16">
            {places.map((place, index) => (
              <Card 
                key={place.id}
                className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-80 md:h-auto overflow-hidden">
                    <img 
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-secondary text-white">
                        {place.type}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                        <p className="text-white text-sm flex items-center">
                          <Icon name="MapPin" size={14} className="mr-2" />
                          {place.coordinates}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-secondary">{place.id}</span>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-secondary">{place.name}</h3>
                        <p className="text-lg text-primary font-semibold">{place.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="prose prose-lg max-w-none">
                      <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                        {place.description.split('\n\n')[0]}
                      </p>
                      
                      {place.description.split('\n\n').length > 1 && (
                        <details className="mt-4 cursor-pointer">
                          <summary className="text-secondary font-semibold hover:underline">
                            Read full description →
                          </summary>
                          <div className="mt-4 space-y-4 text-foreground/70 leading-relaxed">
                            {place.description.split('\n\n').slice(1).map((para, idx) => (
                              <p key={idx}>{para}</p>
                            ))}
                          </div>
                        </details>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Card className="p-10 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <Icon name="Compass" size={48} className="mx-auto mb-4 text-primary" />
              <h4 className="text-3xl font-bold mb-4 text-primary">Complete Your Journey</h4>
              <p className="text-foreground/80 leading-relaxed text-lg mb-6 max-w-2xl mx-auto">
                These five sacred places form the Southern Heritage Trail - a journey through sacred groves, 
                ancient mythology, healing waters, and mysterious caves of southern Udmurtia.
              </p>
              <Link to="/">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Icon name="Map" size={20} className="mr-2" />
                  Explore Northern Route
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>

      <footer className="relative z-10 bg-gradient-to-r from-primary to-secondary text-white py-8 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/80">© 2026 Sacred Udmurtia Educational Project</p>
        </div>
      </footer>
    </div>
  );
};

export default RouteSouthern;