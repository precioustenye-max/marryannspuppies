import { Mail, FileCheck, Home, Heart, CheckCircle2 } from 'lucide-react';

export default function AdoptionProcess() {
  const steps = [
    {
      icon: Mail,
      title: "Contact Us",
      description: "Reach out via email or phone to express your interest in one of our puppies. We'll answer all your questions and help you choose the perfect companion.",
      step: 1
    },
    {
      icon: FileCheck,
      title: "Application",
      description: "Complete our simple adoption application. We want to ensure our puppies go to loving, responsible homes where they'll thrive.",
      step: 2
    },
    {
      icon: Home,
      title: "Meet & Greet",
      description: "Visit us to meet the puppies in person (or schedule a video call). See how they interact and find your perfect match.",
      step: 3
    },
    {
      icon: Heart,
      title: "Take Home Your Puppy",
      description: "Once approved, finalize the adoption and bring your new family member home with all necessary documentation and care instructions.",
      step: 4
    }
  ];

  const included = [
    "Complete health check by licensed veterinarian",
    "Up-to-date vaccinations and deworming",
    "Health certificate and medical records",
    "Microchip registration",
    "Starter pack with food, toys, and care guide",
    "30-day health guarantee",
    "Lifetime breeder support",
    "AKC registration papers"
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-orange-950 mb-4">
            Adoption Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our straightforward adoption process ensures that each puppy finds the perfect forever home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-orange-200 z-0"></div>
                )}
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-orange-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-orange-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12 border-2 border-orange-100">
          <h3 className="text-3xl font-serif text-orange-900 mb-6 text-center">
            What's Included with Your Puppy
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {included.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-white rounded-lg border-2 border-orange-300">
            <p className="text-center text-gray-700">
              <strong className="text-orange-900">Adoption Fee:</strong> $2,500 - $3,500
              <span className="block text-sm mt-2 text-gray-600">
                Pricing varies based on puppy lineage, gender, and characteristics
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
