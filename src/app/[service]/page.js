import { Button } from "@/components/ui/button";
import services from "../../../services.json";

export default function ServicePage({ params }) {
  const service = services.find((service) => service.url === params.service);
  return (
    <div className="px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {service ? (
          <>
            <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl text-center">
              {service.title}
            </h2>
            <h3 className="text-center text-red-500 font-bold">
              {service.whatWeOffer.subtitle}
            </h3>
            <p className="text-lg leading-relaxed">
              {service.whatWeOffer.description}
            </p>

            {service.whatWeOffer.keyFeatures && (
              <div>
                <h3 className="text-center text-red-500 font-bold">
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {service.whatWeOffer.keyFeatures.map((feature, index) => (
                    <li key={index}>
                      <h4 className="font-bold">{feature.title}</h4>
                      <p>{feature.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <h3 className="text-center text-red-500 font-bold">
              {service.whyChooseUs.subtitle}
            </h3>
            {service.whyChooseUs.reasons ? (
              <ul className="space-y-4">
                {service.whyChooseUs.reasons.map((reason, index) => (
                  <li key={index}>
                    <h4 className="font-bold">{reason.title}</h4>
                    <p>{reason.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>{service.whyChooseUs.description}</p>
            )}

            {service.ourProcess && (
              <>
                <h3 className="text-center text-red-500 font-bold">
                  {service.ourProcess.subtitle}
                </h3>
                <ul className="space-y-4">
                  {service.ourProcess.steps.map((step, index) => (
                    <li key={index}>
                      <h4 className="font-bold">{step.title}</h4>
                      <p>{step.description}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <hr />
            <div className="text-center space-y-4">
              {service.callToAction.text.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
              <Button>{service.callToAction.buttonText}</Button>
            </div>
          </>
        ) : (
          <p>Service not found.</p>
        )}
      </div>
    </div>
  );
}
