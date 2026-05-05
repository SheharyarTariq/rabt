import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/AnimatedText";

export const metadata = {
  title: "Terms & Conditions — Rabt Films",
  description:
    "Terms and conditions for Rabt Films wedding cinema and photography packages.",
};

const TERMS = [
  "Extended highlights will be of 7-8 min for a single cam (one videographer) and 15-17 min for a dual cam (two videographers) that covers all of your event decor, guests, stage, entrance. And the highlight video will be around 2-3 min.",
  "Coffee table album of 12x36 inches with 10 pages contains around 65-70 images.",
  "A hard drive is to be provided by the client at the event day and all the raw pictures will be transferred to it. The client will have 2 weeks to send the selection.",
  "Delivery time of edited pictures is 6 weeks after selection by the client and 8 weeks for the video.",
  "Technical faults at the venue will not be our responsibility, especially the light. Client has to make sure the venue is well lit from all sides.",
  "50% advance to be paid to confirm the booking of the event and rest of the 50% at the end of the event.",
  "In case of data loss due to some traumatic events e.g. god forbid, natural disasters, theft, road accidents, ransomware, machine failure — we won't be responsible for it and full payment will be returned.",
  "Out station travelling charges and accommodation to be taken care by the client.",
  "Any form of misconduct towards our team members will not be tolerated. In such cases, we reserve the right to terminate our services immediately without refund.",
  "All payments are non-refundable.",
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        intro="Please review the following terms before confirming your booking. These conditions apply to all Rabt Films wedding cinema and photography packages."
      />

      <section className="relative overflow-hidden bg-ink py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-maroon-950/40 to-ink" />
        <div className="film-grain" />

        <div className="relative mx-auto max-w-3xl px-6 md:px-10">
          <Reveal>
            <ul className="space-y-8">
              {TERMS.map((term, i) => (
                <li
                  key={i}
                  className="flex gap-5 text-cream/80 text-base md:text-lg leading-relaxed"
                >
                  <span
                    aria-hidden="true"
                    className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                  />
                  <p>{term}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
