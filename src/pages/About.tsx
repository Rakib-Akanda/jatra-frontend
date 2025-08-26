import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        About Jatra
      </h1>

      <p className="text-lg text-gray-700 text-center mb-12">
        Ride Management is a modern web application designed to make ride
        sharing, tracking, and management easier for users and drivers. Our goal
        is to provide a seamless, secure, and efficient platform for managing
        daily transportation needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              To simplify transportation by offering a user-friendly ride
              sharing solution that ensures safety, reliability, and
              affordability for everyone.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Real-time ride booking and tracking</li>
              <li>Driver and passenger management</li>
              <li>Secure authentication & authorization</li>
              <li>Payment integration (future scope)</li>
              <li>Responsive design for mobile & desktop</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Tech Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>React (Frontend)</li>
              <li>Tailwind CSS for styling</li>
              <li>shadcn/ui for modern UI components</li>
              <li>Axios for API requests</li>
              <li>TypeScript for type safety</li>
              <li>Node.js & Express (Backend)</li>
              <li>PostgreSQL / MongoDB (Database)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Future Plans</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>AI-based ride matching</li>
              <li>Multi-language support</li>
              <li>In-app wallet & payments</li>
              <li>Analytics dashboard for admins</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
