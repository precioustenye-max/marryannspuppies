import { Heart, Home, Stethoscope, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function About() {
  const imageModules = import.meta.glob('../../public/*.jpeg', {
    eager: true,
    import: 'default',
  }) as Record<string, string>;

  const missionImage =
    Object.entries(imageModules).sort(([a], [b]) => a.localeCompare(b))[0]?.[1] ??
    'https://images.unsplash.com/photo-1664993478752-964a2dd0a9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

  const features = [
    {
      icon: Heart,
      title: "Raised with Love",
      description: "Every puppy is raised in our loving home environment with constant care and attention."
    },
    {
      icon: Home,
      title: "Family Socialized",
      description: "Our puppies grow up around children and other pets, ensuring they're well-adjusted and friendly."
    },
    {
      icon: Stethoscope,
      title: "Health Certified",
      description: "All puppies receive comprehensive veterinary care, vaccinations, and health certifications."
    },
    {
      icon: GraduationCap,
      title: "Early Training",
      description: "We begin basic training and socialization from day one to give your puppy the best start."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-orange-950 mb-4">
            About Marry Ann Puppies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With over 15 years of experience, we're dedicated to breeding exceptional Maltese puppies that bring joy to families worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback 
              src={missionImage}
              alt="Happy Maltese at home"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-serif text-orange-900">
              Our Mission & Values
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At Marry Ann Puppies, we believe that every family deserves a healthy, happy, and well-adjusted companion. Our Maltese puppies are more than just pets—they're family members who will bring endless love and joy to your home.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We take pride in our ethical breeding practices, ensuring that all our puppies come from champion bloodlines with excellent temperaments. Each puppy receives individualized care, proper nutrition, and early socialization to prepare them for their forever homes.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
              <p className="text-orange-900 font-semibold">
                "Our goal is to match each puppy with the perfect family, creating bonds that last a lifetime."
              </p>
              <p className="text-orange-700 text-sm mt-2">— Mary Ann, Founder</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-orange-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
