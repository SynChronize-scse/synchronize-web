interface Sponsor {
  name: string;
  logo: string;
  url: string;
}

interface SponsorshipSectionProps {
  premierSponsor: Sponsor;
  otherSponsors: Sponsor[];
}

export default function SponsorshipSection({
  premierSponsor,
  otherSponsors,
}: SponsorshipSectionProps) {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-background" id="sponsors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 font-[AdieuRegular] text-primary-400">
          Our Sponsors
        </h2>

        {/* Premier Sponsor */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-4">
            Premier Sponsor
          </h3>
          <div className="flex items-center justify-center p-8 bg-muted rounded-lg">
            <a href={premierSponsor.url}>
              <img
                src={premierSponsor.logo}
                alt={`${premierSponsor.name} logo`}
                width={500}
                height={250}
                className="max-w-full w-[500px] sm:w-[500px]"
              />
            </a>
          </div>
        </div>

        {/* Other Sponsors */}
        <h3 className="text-xl font-semibold text-center mb-4">
          Supporting Sponsors
        </h3>
        <div className="flex items-center justify-center flex-row flex-wrap gap-4 mb-12">
          {otherSponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-muted rounded-lg"
            >
              <a href={sponsor.url}>
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  width={150}
                  height={50}
                  className="max-w-full h-auto"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
