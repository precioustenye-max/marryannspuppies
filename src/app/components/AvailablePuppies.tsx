import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Heart, Mail, Calendar, Weight, Palette } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function AvailablePuppies() {
  const imageModules = import.meta.glob('../../public/*.jpeg', {
    eager: true,
    import: 'default',
  }) as Record<string, string>;

  const imagePaths = Object.entries(imageModules)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([, src]) => src);

  const puppyNames = [
    'Bella',
    'Luna',
    'Daisy',
    'Milo',
    'Coco',
    'Rosie',
    'Teddy',
    'Pearl',
    'Snowy',
    'Ruby',
    'Charlie',
    'Willow',
    'Mocha',
    'Angel',
    'Nala',
    'Poppy',
    'Blue',
    'Maple',
    'Sunny',
  ];

  const puppyDescriptions = [
    'A sweet cuddle bug who loves gentle lap time and follows you everywhere.',
    'Playful and curious with a bright personality and a quick-learning mind.',
    'Calm, affectionate, and perfect for a cozy family home.',
    'Energetic little explorer who enjoys toys, games, and attention.',
    'Gentle and elegant with a soft temperament and lots of love to give.',
    'Friendly and social, always excited to meet new people and pets.',
    'Confident and happy with a charming spirit and loyal heart.',
    'Tiny and tender, happiest when snuggled close with family.',
    'Bouncy and joyful with a fun-loving personality and adorable quirks.',
    'Very affectionate and easygoing, ideal for first-time puppy parents.',
    'Smart and alert with a calm nature and excellent companionship qualities.',
    'Cheerful and loving, with a playful streak and gentle manners.',
    'Sweet-natured and well-socialized, ready to fit into a loving home.',
    'Bright-eyed and curious, with a balanced mix of playfulness and calm.',
    'Soft, cuddly, and people-focused with a naturally friendly temperament.',
    'Adorable and outgoing, always ready for fun and family bonding time.',
    'Loyal and affectionate with a warm personality and loving behavior.',
    'Graceful and calm, with a gentle spirit and beautiful Maltese charm.',
    'Happy, snuggly, and full of personality, ready for a forever family.',
  ];

  const puppies = imagePaths.map((image, index) => ({
    id: index + 1,
    name: puppyNames[index % puppyNames.length],
    image,
    age: '8-12 weeks',
    weight: '2-4 lbs',
    color: 'Maltese White',
    description: puppyDescriptions[index % puppyDescriptions.length],
    status: 'Available',
  }));

  const handleInquiry = (puppyName: string) => {
    const subject = encodeURIComponent(`Inquiry about ${puppyName}`);
    const body = encodeURIComponent(`Hello,\n\nI am interested in learning more about ${puppyName} and the adoption process.\n\nThank you!`);
    window.location.href = `mailto:marryanns226@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="puppies" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-orange-950 mb-4">
            Available Maltese Puppies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our adorable Maltese puppies looking for their forever homes. Each puppy is health-checked, vaccinated, and comes with a health guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {puppies.map((puppy) => (
            <Card key={puppy.id} className="overflow-hidden hover:shadow-xl transition-shadow bg-white border-2 border-orange-100">
              <CardHeader className="p-0">
                <div className="relative">
                  <ImageWithFallback 
                    src={puppy.image}
                    alt={puppy.name}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-green-500 hover:bg-green-600">
                    {puppy.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-serif text-orange-900 mb-2">
                  {puppy.name}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {puppy.description}
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>{puppy.age} old</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Weight className="w-4 h-4 text-orange-500" />
                    <span>{puppy.weight}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Palette className="w-4 h-4 text-orange-500" />
                    <span>{puppy.color}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button 
                  onClick={() => handleInquiry(puppy.name)}
                  className="flex-1 bg-orange-500 hover:bg-orange-600"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Inquire
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-white rounded-xl shadow-md max-w-2xl mx-auto">
          <p className="text-gray-700 mb-4">
            <strong>Not all of our puppies are listed above.</strong> If there is any puppy you are interested in, please inbox us through email and we will gladly help you.
          </p>
          <Button 
            onClick={() => {
              const subject = encodeURIComponent('Puppy Availability Inquiry');
              window.location.href = `mailto:marryanns226@gmail.com?subject=${subject}`;
            }}
            className="bg-orange-500 hover:bg-orange-600"
          >
            <Mail className="w-4 h-4 mr-2" />
            Email Us
          </Button>
        </div>
      </div>
    </section>
  );
}
