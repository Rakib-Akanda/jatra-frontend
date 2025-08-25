import { HeroSection } from "@/components/modules/homePage/HeroSection";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Home = () => {
  return (
    <div>
      <div>
        <HeroSection></HeroSection>
      </div>
      <div className="space-y-32 py-5">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-24 px-6 md:py-32 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to RideSharePro
          </h1>
          <p className="text-lg md:text-xl mb-6">
            The easiest way to get from A to B with trusted drivers.
          </p>
        </div>

        {/* How-it-works / Overview */}
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            How It Works
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            <Card>
              <CardContent>
                <CardTitle>Request a Ride</CardTitle>
                <CardDescription>
                  Open the app, choose your destination, and request a ride
                  instantly.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <CardTitle>Driver Acceptance</CardTitle>
                <CardDescription>
                  Nearby drivers get notified and accept your request.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <CardTitle>Safe Arrival</CardTitle>
                <CardDescription>
                  Track your ride live and reach your destination safely.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services / Features Highlights */}
        <div className="bg-gray-50 py-24 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              Our Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
              <Card>
                <CardContent>
                  <CardTitle>Riders</CardTitle>
                  <CardDescription>
                    Book rides quickly, track your trip, and pay securely.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <CardTitle>Drivers</CardTitle>
                  <CardDescription>
                    Accept rides, manage schedules, and get paid promptly.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <CardTitle>Admin</CardTitle>
                  <CardDescription>
                    Manage users, monitor trips, and maintain system analytics.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Testimonials / Customer Feedback */}
        <div className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-2xl md:text-3xl font-bold">
              What Our Customers Say
            </h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
              <Card>
                <CardContent>
                  <p className="italic">
                    "RideSharePro made my daily commute effortless and
                    affordable!"
                  </p>
                  <p className="mt-4 font-bold"> Jane D.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <p className="italic">
                    "Reliable drivers and smooth experience every time."
                  </p>
                  <p className="mt-4 font-bold"> Mark T.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Call-to-Action / Contact Form */}
        <div className="bg-blue-50 py-24 px-6 md:px-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Contact Us
            </h2>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your Message" required />
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
