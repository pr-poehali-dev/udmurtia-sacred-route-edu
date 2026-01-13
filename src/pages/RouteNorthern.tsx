import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const RouteNorthern = () => {
  const places = [
    {
      id: 1,
      name: 'Baygurez',
      subtitle: 'Mute Mountain',
      description: `Mount Baygurez in Debesy region is a star among the natural attractions of Udmurtia. Until 2006 the mountain was even depicted on the old coat of arms of the region. At first glance, this is an unremarkable place with a clay cut no less than 177°39'; E 53°40'. The height of the nearby villages is only 250 meters above sea level - you can't even call it a mountain - a hill. If you go to Baygurez from the north, the height difference is not felt at all. But when you come to the edge of a cliff that rolls down.

The top of Baygurez from above looks like a rather flat and wide "tongue" hanging over the Cheptsa. On all sides, except for one, it is cut off by ravines - a place, no doubt, secluded and convenient for performing rituals in a "narrow circle". Ideal for a pagan sanctuary. Plus - the view, depriving for a moment the gift of speech. According to historians, the first settlements on the upper Cheptsa appeared in the 5th century AD. At the same time, ancient settlement discovered by archaeologists on Mount Baygurez is considered to be earlier than ancient settlements in Varna and Tolyon contemporary to it.

This is probably due to the fact that Baygurez provided maximum conditions for protecting settlement from the raids of neighbors: a steep and rather high cliff to the river, deep ravines on both sides and an area convenient to form a convenient flat approach on one side and an area sufficient to accommodate up to a hundred people (the first settlements were few). In addition, archaeologists believe that Baygurez served not only as a place for a settlement, but also as a sanctuary. The question is, what considerations justified the choice of a mountain for worship of pagan gods? We will never know about it. However, the fact that documented antiquity to this day, Baygurez is not just a beautiful place, but a place of human interaction with forces beyond his control and incomprehensible, a place of non-traditional prayers and semi-pagan rites, indicates to us that, probably, prehistoric settlers chose it for more than just aesthetic appeal. Moreover, the mountain (according to Udmurt ancient tradition) has a second, sacred name: Bakgurez - "Mute Mountain". The mute mountain is called in connection with the ritual that locals and visitors perform here and now.

There is a local legend that there was a mill at the foot of the mountain on the Cheptsa, and the miller had a daughter whom he promised to marry (with a good dowry) to the first one who climbs the mountain along the steepest slope. Only the shepherd succeeded in this, who, as soon as he got up, immediately started to speak. According to another version, the mute shepherd climbed the mountain during the summer solstice. The Udmurts rarely drank alcohol - only on holidays, which all had a ritual component. And gossip, like an alcoholic drink, was one of the attributes of sacred rite. Therefore, the shepherd rose with a cup of gossip in his hand and managed not to spill a single drop. And as soon as he got up, he spoke. Since then, there is a belief that if you make a wish and climb the mountain without saying a word, then the wish will certainly come true.`,
      image: 'https://cdn.poehali.dev/files/ps2.png',
      type: 'Mountain',
      coordinates: 'N 57°39', E 53°49''
    },
    {
      id: 2,
      name: 'Kama Source',
      subtitle: 'Sacred River of Udmurtia',
      description: `Kama is a beautiful river which flows through the European part of Russia. Its length is 1805 kilometers. The basin area is 507 thousand square kilometers. The source of the river is at Verkhnekamsk Upland at an altitude of 330 meters above sea level. This is Kulga village N 58°11'42", E 53°45'15". In Udmurt "kam" means "river, big river." About the origin of this waterway the legend says that once it rained all summer, and there was not a single sunny day. The rivers all overflowed, their banks collapsed, and the earth became liquid. People, animals and beasts were saved on high mountains. Only Kam - the mythological hero - could move around the flooded world. The rivers were blocked by a mountain that had collapsed from erosion. The hero lassoed a huge stone, dragged it through the dam, plowed the ground like a plow. A new channel was formed, water poured into it and a new river appeared - the mighty Kama, named after the hero.

Today Kama Park is equipped - with a gazebo, a bridge, benches and a stone stele decorated with a laconic inscription "The Ural river Kama originates here." As the spring is rather narrow one can stand with one foot on the right and the other on the left; on the bank of the great river. It is known that if you stand on both banks of the river at the same time, as if riding a stream of water, then you can make any wish, and the river will fulfill it.`,
      image: 'https://cdn.poehali.dev/files/ps2.png',
      type: 'Spring',
      coordinates: 'N 58°11'42", E 53°45'15"'
    },
    {
      id: 3,
      name: "St. Tryphon's Source",
      subtitle: 'Healing Spring',
      description: `On the territory of present-day Udmurtia, as it was also called the "Kama Chud", near the Cheptsa River banks, Monk Tryphon of Vyatka preached, converting people to the Christ faith. Many came to him for help and he healed many of their ailments. Especially many patients with an eye disease trachoma in those days turned to the monk for help and received healing from their illnesses. And once the monk, having prayed, threw a stone in the place of which a healing spring clogged. Later, in that place, at the source, a wooden chapel was built, and in 1909, in its place, a wooden church was actually consecrated in honor of the Monk Tryphon of Vyatka.

The healing spring, through the prayers of St. Tryphon, gives to each according to their faith. There were also cases of healings. For example, Zoya, a resident of Kalinovo village, was diagnosed of blood disease. She was sent to the Institute of Hematology, which was in Kirov. But she did not go there and began to go regularly to the source. She drank, poured herself, and soon the doctors examined her once again with surprise and noted that there was no trace of the disease. There are more astonishing cases of recovery associated with children who received the same terrible diagnosis. In the first case - a newborn baby, in another teenage girl. The second was brought by her mother from Izhevsk in her last hope for the help of God and St. Tryphon. Her mother was a doctor herself and she perfectly understood that her daughter had practically no chances, leaving work and settling with a child in a village, near the source, trusting completely to the help from above to the help of the Saint. But a miracle happened. The girl - now the mother of four children, the wife of a priest - has long forgotten about her suffering, but she remembers that she was healed, by God thanks to Tryphon of Vyatka, the faith and love of her mother.

You can get to Tryphon Spring by public transport from Sarapul or by car. When you travel from Sarapul, look for a sign on the Sarapul-Krasnogorskoe highway: Kalinovo-Zadelye village, turn right onto the forest road. Having reached the gates of Intercession Convent, turn right and go down along the fence to the floodplain of the Cheptsa River N 57°56'07", E 53°12'27".`,
      image: 'https://cdn.poehali.dev/files/ps2.png',
      type: 'Spring',
      coordinates: 'N 57°56\'07", E 53°12\'27"'
    },
    {
      id: 4,
      name: 'Settlement Idnakar',
      subtitle: 'Ancient Finno-Ugric Fortress',
      description: `This is an archaeological monument of All-Russian importance, put on state protection. The medieval settlement of the Finno-Ugric tribes of the 9th-13th centuries is four kilometers from the city of Glazov on Mount Soldyr N 58°06'14", E 52°43'53". In the place where the settlement is now, there has been preserved: a long time ago, the hero Dondy came from somewhere to Mount Soldyr and stayed there to live. And he had two sons - Idna and Gurya. On Soldyr, he had several more sons, among them Vesya and Zur. Time passed, then the sons came into being, and it became crowded for them in one place.

Dondy with his younger sons went up the Pyzep, then along a small channel and founded a new settlement for himself - Dondykar. Idna remained in the same place. Gurya and Vesya chose for themselves steep mountains upstream the Vyas from Cheptsa. All the heroes were distinguished by fabulous strength. There was no suitable place for a fortress, they took a hillock with their hand and pulled it up to the size of a mountain, on which they settled together with the same heroes as themselves. Each of Dondy's sons had his own favorite pastime. Gurya cut down forests, plowed the land. Idna spent his time hunting and raiding his neighbors. And the old man Dondy did not leave agriculture in the new place, but was mainly engaged in trade and industry. Idna, judging by the Udmurt legends, was the strongest among his brothers, did not depend on anyone and was not afraid of anyone. Being strong, he became proud and wanted to reign over all the Udmurts on his side, he lived to see the appearance of Russians in the region, and as a prince from his people fought against them, hiding from unsuccessful battles in his settlement.

Today Idnakar is in the process of excavations. The remains of ancient structures, dwellings, fortifications were discovered. Monument structure was studied, a large amount of evidence of material culture of inhabitants was extracted that attracted the attention of scientists and professionals at 100-150 years. On the basis of scientific research, life and occupations of the inhabitants were reconstructed.

Idnakar is full of legends about the ghosts of its former inhabitants and different supernatural things that regularly happen there with the archeologists. It seems that Idna himself prevent their activity as he judges them to be thieves. Local people organize excursions to the excavations and the bravest tourists can even spend the night in the settlement and meet the mythical hero.`,
      image: 'https://cdn.poehali.dev/files/ps3.png',
      type: 'Archaeological Site',
      coordinates: 'N 58°06\'14", E 52°43\'53"'
    },
    {
      id: 5,
      name: 'Anomalous Zone K-16',
      subtitle: 'Mystery of Krasnogorsk',
      description: `Geopathic zone is one of the mysteries of Krasnogorsk region. This zone is on the 13th kilometer from Krasnogorskove village N 57°42'25", E 52°59'49". Its diameter is 50 meters. The zone itself is on a hillock, there are many old wild pears, else grow on the hillock by itself - as if the animals bypass it. A person can only be there for 40 minutes. And then there is a feeling of nausea, dizziness, knocking in the temples.

The first mention of the zone, according to local residents, was 300 years ago. Even then, people noticed that some inexplicable things were happening in a dense forest, not far from the river, and it became dangerous for a person to be there. Statistics says that traffic accidents often occur on the road next to the zone. People often see glowing balls. The local population does its best to avoid it.

Scientists managed to establish that in this territory there are numerous small local geopathic areas, getting into which leads people subsequently to various misfortunes and troubles. According to experts, in the K-16 zone, the power of electromagnetic field goes off scale. The researchers even broke the device due to pressure.

First of all, the anomaly is very clearly manifested in appearance of surrounding plant world. In the center of Krasnogorsk anomalous zone, spruce trees grow with completely bare trunks and a stunted crown only at the very peaks. A little further away from it there are many bald spots with withered and undersized grass. Geophysicists have several hypotheses about this unusual phenomenon, and all of them are plausible. But the fact is that the Krasnogorsk anomalous zone has a pronounced geopathic tinge.

Many who visited it subsequently, for inexplicable reasons, committed suicide and committed absurd crimes. As for ghosts, UFOs and other anomalous and paranormal phenomena, there are completely different and incredible rumors about this among the local population.`,
      image: 'https://cdn.poehali.dev/files/ps3.png',
      type: 'Anomalous Zone',
      coordinates: 'N 57°42\'25", E 52°59\'49"'
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
              <p className="text-xs text-muted-foreground">Northern Spiritual Path</p>
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
            <Badge className="mb-4 text-lg px-6 py-2 bg-primary/10 text-primary border-primary">
              <Icon name="Mountain" className="mr-2" size={16} />
              Northern Route
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Sacred Places of Northern Route
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Journey through ancient Finno-Ugric settlements, sacred mountains, healing springs, and mystical zones 
              of the northern Udmurtia region.
            </p>
            <div className="flex gap-4 justify-center mt-6">
              <Badge variant="outline" className="text-base px-4 py-2">
                <Icon name="Clock" size={16} className="mr-2" />
                3-4 days
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                <Icon name="Activity" size={16} className="mr-2" />
                Medium difficulty
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
                      <Badge className="bg-accent text-accent-foreground">
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
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-primary">{place.id}</span>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-primary">{place.name}</h3>
                        <p className="text-lg text-secondary font-semibold">{place.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="prose prose-lg max-w-none">
                      <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                        {place.description.split('\n\n')[0]}
                      </p>
                      
                      {place.description.split('\n\n').length > 1 && (
                        <details className="mt-4 cursor-pointer">
                          <summary className="text-primary font-semibold hover:underline">
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
            <Card className="p-10 border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-primary/5">
              <Icon name="Map" size={48} className="mx-auto mb-4 text-secondary" />
              <h4 className="text-3xl font-bold mb-4 text-secondary">Complete Your Journey</h4>
              <p className="text-foreground/80 leading-relaxed text-lg mb-6 max-w-2xl mx-auto">
                These five sacred places form the Northern Spiritual Path - a journey through ancient 
                traditions, natural wonders, and mystical experiences of northern Udmurtia.
              </p>
              <Link to="/">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  <Icon name="Compass" size={20} className="mr-2" />
                  Explore Southern Route
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

export default RouteNorthern;
