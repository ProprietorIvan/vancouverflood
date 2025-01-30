import { Star } from "lucide-react";
import Card from "./Card";

const Testemonials = () => {
  const renderTestimonials = () => {
    const testimonials = [
      {
        src: 'https://randomuser.me/api/portraits/women/6.jpg',
        name: "Sarah Johnson",
        role: "Homeowner",
        text: "I saved hours of back-and-forth communication. Uploaded a photo of my leaky faucet, got a quote in minutes, and had it fixed the next day. Brilliant!"
      },
      {
        src: 'https://randomuser.me/api/portraits/men/7.jpg',
        name: "Michael Chen",
        role: "Property Manager",
        text: "Managing repairs across multiple properties used to be a nightmare. Now I handle everything through one platform. Game changer for my business."
      },
      {
        src: 'https://randomuser.me/api/portraits/women/27.jpg',
        name: "Emily Rodriguez",
        role: "Working Professional",
        text: "As a working executive, I love that I can schedule repairs without phone calls or site visits. The AI quotes are incredibly accurate!"
      }
    ];

    return testimonials.map((review, index) => (
      <Card key={index} className="bg-gray-50 p-8 border-none hover:bg-white hover:shadow-lg transition-all duration-300 group rounded-2xl">
        <img src={review.src} alt="" className="w-16 h-16 rounded-full mb-4" />
        <h3 className="font-bold">{review.name} {review.role}</h3>
        <p className="text-gray-600 text-sm md:text-base">{review.text}</p>
      </Card>
    ));
  };
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">
          Join Thousands of Happy Customers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {renderTestimonials()}
        </div>
      </div>
    </section>
  );
}

export default Testemonials