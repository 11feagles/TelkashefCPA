import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Mail, Phone, Shield, Globe2, Building2, Calculator, FileText, Landmark, ArrowRight, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// --- Simple helpers ---
const Feature = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <div className="flex gap-3">
    <div className="rounded-xl p-2 bg-emerald-50 border border-emerald-100"><Icon className="h-5 w-5" aria-hidden /></div>
    <div>
      <div className="font-semibold text-slate-800">{title}</div>
      <p className="text-slate-600 text-sm leading-6">{desc}</p>
    </div>
  </div>
);

const Tier = ({ name, price, blurb, items, highlight=false }: {name:string; price:string; blurb:string; items:string[]; highlight?:boolean}) => (
  <Card className={`relative rounded-2xl ${highlight ? "ring-2 ring-emerald-500 shadow-xl" : "shadow"}`}>
    {highlight && (
      <div className="absolute -top-3 left-4 bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">Most Popular</div>
    )}
    <CardHeader>
      <CardTitle className="flex items-end justify-between">
        <span className="text-xl">{name}</span>
        <span className="text-2xl font-bold">{price}<span className="text-sm font-normal text-slate-500">/mo</span></span>
      </CardTitle>
      <p className="text-slate-600 text-sm leading-6">{blurb}</p>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
            <Check className="h-4 w-4 mt-0.5 text-emerald-600" aria-hidden /> {it}
          </li>
        ))}
      </ul>
      <Button className="mt-6 w-full">Get started</Button>
    </CardContent>
  </Card>
);

export default function Site() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-emerald-600 grid place-items-center text-white font-bold">TA</div>
            <div className="leading-5">
              <div className="font-semibold">Tawfik & Amro</div>
              <div className="text-xs text-slate-600">Nonprofit Accounting</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-emerald-700">Services</a>
            <a href="#niche" className="hover:text-emerald-700">Who we serve</a>
            <a href="#pricing" className="hover:text-emerald-700">Packages</a>
            <a href="#faq" className="hover:text-emerald-700">FAQ</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="hidden md:inline-flex" asChild>
              <a href="#contact">Book a consult</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="text-4xl md:text-5xl font-bold tracking-tight">
              Bookkeeping, Compilations & Tax for U.S. <span className="text-emerald-700">Muslim, Arab & African</span> Nonprofits
            </motion.h1>
            <p className="mt-5 text-lg text-slate-700 leading-7">
              We specialize in faith-based and community organizations—masajid, Islamic schools, relief & development NGOs, cultural centers, and youth programs. Clean books. Clear reports. Confident compliance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#contact" className="inline-flex items-center">Start a conversation <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#pricing">See packages</a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4"/> Led by a U.S. CPA</div>
              <div className="flex items-center gap-2"><Globe2 className="h-4 w-4"/> Remote nationwide</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="rounded-2xl">
              <CardHeader className="pb-2"><CardTitle className="text-base">Monthly Bookkeeping</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-600">Bank/credit reconciliations, donor/restricted funds, classes/programs, grant tagging.</CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader className="pb-2"><CardTitle className="text-base">Compilation Reports</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-600">Board-ready statements, budget vs actuals, cash flow & program spend visuals.</CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader className="pb-2"><CardTitle className="text-base">Tax & Compliance</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-600">Form 990 (& variants), state filings, charitable registrations, audit prep & liaison.</CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader className="pb-2"><CardTitle className="text-base">Systems Setup</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-600">QuickBooks Online, controls, donor integrations, simple dashboards.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Niche proof */}
      <section id="niche" className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Landmark className="h-5 w-5"/> Masajid & Islamic Centers</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <div className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-emerald-600"/> Friday collections, zakat & sadaqah tracking</div>
              <div className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-emerald-600"/> Ramadan campaign reporting</div>
              <div className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-emerald-600"/> Building funds & restricted projects</div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Building2 className="h-5 w-5"/> Schools & Youth Programs</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <div className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-emerald-600"/> Tuition & scholarships, donor sponsorships</div>
              <div className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-emerald-600"/> After‑school & summer programs</div>
              <div className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-emerald-600"/> Grant budgets & reporting calendars</div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Globe2 className="h-5 w-5"/> Relief & Community NGOs</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <div className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-emerald-600"/> Program vs admin spend transparency</div>
              <div className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-emerald-600"/> Multi‑currency donations & grants (US‑based books)</div>
              <div className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-emerald-600"/> Audit‑ready workpapers</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">What we do</h2>
            <p className="mt-3 text-slate-700">Focused, nonprofit‑first accounting so your team can focus on mission.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <Feature icon={Calculator} title="Bookkeeping" desc="Monthly/quarterly books, reconciliations, donor & restricted funds, class/program tracking."/>
              <Feature icon={FileText} title="Compilation Reporting" desc="Board‑ready financials, budget vs actuals, roll‑ups by program/location, simple dashboards."/>
              <Feature icon={Shield} title="Tax & Compliance" desc="Form 990/990‑EZ/990‑N, state charity filings, support letters, audit liaison & prep."/>
              <Feature icon={Sparkles} title="Systems & Controls" desc="QuickBooks Online setup, workflow cleanup, internal control basics for small nonprofits."/>
            </div>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl">Tools we work with</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4 text-sm text-slate-700">
              <div className="space-y-1">
                <div className="font-medium">Accounting</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>QuickBooks Online (core)</li>
                  <li>Sage Intacct (by request)</li>
                  <li>Netsuite/others (case‑by‑case)</li>
                </ul>
              </div>
              <div className="space-y-1">
                <div className="font-medium">Donations & Ops</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Stripe/PayPal/Zelle imports</li>
                  <li>Donorbox, Givebutter, Zeffy</li>
                  <li>Gusto/ADP/Paylocity payroll</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Packages */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-3xl font-bold tracking-tight">Simple packages</h2>
        <p className="mt-2 text-slate-700">Transparent pricing for small and growing nonprofits. Custom quotes for larger orgs.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Tier name="Starter" price="$495" blurb="For brand‑new or very small orgs (\u2264 2 bank/credit accounts)." items={[
            "Monthly bookkeeping",
            "Bank/credit card recs",
            "Basic restricted funds",
            "Quarterly compilation",
            "Annual 990‑N/990‑EZ",
          ]}/>
          <Tier name="Standard" price="$995" blurb="For active centers & programs (up to 4 accounts)." highlight items={[
            "Monthly bookkeeping",
            "Donations & pledge tracking",
            "Classes/program reporting",
            "Monthly compilation + board pack",
            "Annual 990 or 990‑EZ",
            "Audit prep (lite)",
          ]}/>
          <Tier name="Plus" price="$1,695" blurb="For multi‑program or grant‑funded orgs." items={[
            "Everything in Standard",
            "Grants & restricted schedules",
            "Project/location roll‑ups",
            "State charity filings",
            "Audit liaison & workpapers",
          ]}/>
        </div>
        <p className="mt-4 text-xs text-slate-500">*Pricing is illustrative; final quotes reflect volume, account count, and complexity.</p>
      </section>

      {/* Testimonials / social proof */}
      <section className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((n)=> (
            <Card key={n} className="rounded-2xl">
              <CardContent className="pt-6">
                <div className="flex gap-1 text-amber-500" aria-label="5 star rating">
                  {[...Array(5)].map((_,i)=> <Star key={i} className="h-4 w-4 fill-current"/>) }
                </div>
                <p className="mt-3 text-sm text-slate-700 leading-6">“Accurate, on‑time financials and a painless 990. We finally feel audit‑ready.”</p>
                <div className="mt-4 text-sm font-medium">Executive Director, NYC Islamic Center</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-3xl font-bold tracking-tight">Frequently asked</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm text-slate-700">
          <Card className="rounded-2xl"><CardContent className="pt-6 space-y-2">
            <div className="font-semibold">Do you only work with Muslim, Arab, and African organizations?</div>
            <p>These communities are our focus and experience—but we serve U.S. nonprofits of many kinds. Everyone is welcome.</p>
          </CardContent></Card>
          <Card className="rounded-2xl"><CardContent className="pt-6 space-y-2">
            <div className="font-semibold">Do you perform audits or reviews?</div>
            <p>We do not perform assurance engagements. We provide bookkeeping, compilation reporting, tax filings, and audit‑readiness support.</p>
          </CardContent></Card>
          <Card className="rounded-2xl"><CardContent className="pt-6 space-y-2">
            <div className="font-semibold">Can you migrate our system to QuickBooks Online?</div>
            <p>Yes—chart of accounts, opening balances, classes/programs, and basic donor integrations. We also help set simple internal controls.</p>
          </CardContent></Card>
          <Card className="rounded-2xl"><CardContent className="pt-6 space-y-2">
            <div className="font-semibold">Where are you located?</div>
            <p>We are U.S.‑based and support organizations nationwide via secure, remote workflows. On‑site visits available for select projects.</p>
          </CardContent></Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Let’s talk</h2>
            <p className="mt-2 text-slate-700">Tell us about your nonprofit and what you need. We’ll reply with a simple plan and quote.</p>
            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4"/> hello@ta‑nonprofit.com</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> (555) 555‑0199</div>
            </div>
          </div>
          <Card className="rounded-2xl">
            <CardContent className="pt-6">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto h-12 w-12 rounded-full bg-emerald-100 grid place-items-center">
                    <Check className="h-6 w-6 text-emerald-700"/>
                  </div>
                  <div className="mt-4 font-semibold">Thanks! We’ll be in touch shortly.</div>
                </div>
              ) : (
                <form onSubmit={(e)=>{e.preventDefault(); setSubmitted(true);}} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Your name</label>
                    <input required className="mt-1 w-full rounded-xl border p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Full name" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <input type="email" required className="mt-1 w-full rounded-xl border p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="name@org.org" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Organization</label>
                      <input className="mt-1 w-full rounded-xl border p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your nonprofit" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">What do you need?</label>
                    <textarea className="mt-1 w-full rounded-xl border p-2 h-28 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Bookkeeping, compilation reporting, 990…" />
                  </div>
                  <Button type="submit" className="w-full">Send</Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Tawfik & Amro Nonprofit Accounting. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-emerald-700">Services</a>
            <a href="#pricing" className="hover:text-emerald-700">Packages</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
