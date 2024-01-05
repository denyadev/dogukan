import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

export default function WhyUs() {
  return (
    <section id="why-us" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Why Choose Us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border border-orange-500">
            <CardHeader>
              <CardTitle>Trusted Professionals</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              Over 15 years of experience in the moving industry. A team of
              skilled movers dedicated to your satisfaction.
            </CardContent>
          </Card>
          <Card className="border border-orange-500">
            <CardHeader>
              <CardTitle>Accurate Estimates/No Hidden Fees</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              Our owners are directly involved in every aspect of the business.
              You can have us come over to actually see what needs to be moved
              for a more accurate estimate.
            </CardContent>
          </Card>
          <Card className="border border-orange-500">
            <CardHeader>
              <CardTitle>Hands-On Ownership</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              Our owners are directly involved in every aspect of the business.
              This hands-on approach ensures a level of accountability,
              dedication, and attention to detail that you won&apos;t find
              elsewhere.
            </CardContent>
          </Card>
          <Card className="border border-orange-500">
            <CardHeader>
              <CardTitle>Licensed and Insured</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              We are responsible if items are damaged or lost.
            </CardContent>
          </Card>
          <Card className="border border-orange-500">
            <CardHeader>
              <CardTitle>Safety Priority</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              We emphasize safety in every step of the moving process.
            </CardContent>
          </Card>
          <Card className="border border-orange-500">
            <CardHeader>
              <CardTitle>Commitment to Values</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              Our family values are reflected in every aspect of our service.
              From a strong work ethic to honesty and integrity, we are
              committed to creating a positive and trustworthy moving experience
              for our customers.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
