import { Heart, Shield, Award } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const iconFloat = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1680650715044-8391ccc93584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWx0ZXNlJTIwcHVwcHklMjB3aGl0ZSUyMGZsdWZmeXxlbnwxfHx8fDE3NzE1NDkxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Gradient Overlay for better text readability */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-orange-950/90 via-orange-900/80 to-orange-800/70"
        ></motion.div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={badgeVariants} className="inline-block mb-6">
            <span className="bg-orange-500/90 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              🐾 Premium Maltese Breeder
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6"
          >
            Find Your Perfect
            <span className="block text-orange-300">Maltese Companion</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-orange-100 leading-relaxed mb-8 max-w-2xl"
          >
            Welcome to Marry Ann Puppies, where we specialize in raising healthy, happy, and well-socialized Maltese puppies. Each puppy is raised with love and care in our family home.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => scrollToSection('puppies')} 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg shadow-xl"
              >
                <Heart className="w-5 h-5 mr-2" />
                View Available Puppies
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => scrollToSection('contact')} 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-6 text-lg backdrop-blur-sm"
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 max-w-2xl"
          >
            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="text-center bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20"
            >
              <motion.div variants={iconFloat} animate="animate">
                <Shield className="w-8 h-8 text-orange-300 mx-auto mb-2" />
              </motion.div>
              <p className="text-sm text-white font-semibold">Health Guaranteed</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="text-center bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20"
            >
              <motion.div 
                variants={iconFloat} 
                animate="animate"
                transition={{ delay: 0.2 }}
              >
                <Heart className="w-8 h-8 text-orange-300 mx-auto mb-2" />
              </motion.div>
              <p className="text-sm text-white font-semibold">Family Raised</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="text-center bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20"
            >
              <motion.div 
                variants={iconFloat} 
                animate="animate"
                transition={{ delay: 0.4 }}
              >
                <Award className="w-8 h-8 text-orange-300 mx-auto mb-2" />
              </motion.div>
              <p className="text-sm text-white font-semibold">Champion Lines</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-10"
      >
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </motion.div>
    </section>
  );
}
