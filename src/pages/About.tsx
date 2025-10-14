import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            About Autoclass Motors
          </h1>
          <p className="text-lg text-secondary max-w-2xl">
            Your trusted partner in premium automotive retail
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded with a passion for automotive excellence. At Autoclass Motors, we’re driven by a deep passion for cars and a commitment to excellence. With years of experience and automotive knowledge, our team works to make your car-buying journey smooth, transparent, and enjoyable.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Every vehicle we offer is carefully selected, inspected, and maintained to ensure reliability and performance. We believe that every customer deserves a car they can trust
              </p>
              <p className="text-lg text-muted-foreground">
                Autoclass Motors isn’t just a dealership — it’s a place where quality meets experience, and your satisfaction always comes first. Autoclass Motors is your destination for automotive excellence.
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-xl mx-auto w-full max-w-sm aspect-[9/16]"> 
            <video src="/stock.mp4" // replace with your file path
             autoPlay 
             loop
            muted 
            playsInline 
            className="w-full h-full object-cover" /> 
            </div>

            <div className="mt-10 text-center">
            <hr className="border-t-2 border-primary w-24 mx-auto mb-4" />

            <h3
              className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent 
                        bg-gradient-to-r from-red-600 to-black animate-pulse mb-2"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              M Jalal ud din Mughal
            </h3>
            <h3
              className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent 
                        bg-gradient-to-r from-red-600 to-black animate-pulse"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              M Zain ul abi din Mughal
            </h3>
          </div>


          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer First</h3>
              <p className="text-muted-foreground">
                Your satisfaction and trust are our top priorities in every transaction.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Focus</h3>
              <p className="text-muted-foreground">
                Every vehicle is thoroughly inspected to ensure the quality standards.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every detail, ensuring quality and satisfaction in everything we do.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Continuously improving our processes to serve you better every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Showroom</h2>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            Experience the Autoclass Motors difference. Visit us today and let our expert team help you find your perfect vehicle.
          </p>
          <a href="/contact">
            <button className="bg-accent hover:bg-accent/90 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Get in Touch
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
