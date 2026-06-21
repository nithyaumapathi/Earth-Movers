export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400 font-bold text-slate-950">
              NS
            </div>
            <div>
              <p className="text-lg font-semibold"></p>Earth Movers
              <p className="text-xs text-slate-300">Adaptive Drilling Control Unit</p>
            </div>
          </a>
          <div className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-cyan-300">
              About
            </a>
            <a href="#features" className="hover:text-cyan-300">
              Features
            </a>
            <a href="#use-cases" className="hover:text-cyan-300">
              Use Cases
            </a>
            <a href="#pricing" className="hover:text-cyan-300">
              Pricing
            </a>
            <a href="#contact" className="hover:text-cyan-300">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Book a Demo
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-block rounded-full border border-cyan-300/40 px-4 py-1 text-xs uppercase tracking-widest text-cyan-200">
              Your Drawing Copilot
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Improved efficiency with current resources.
            </h1>
            <p className="text-lg text-slate-300">
              NovaSketch Labs helps design and manufacturing teams automate 2D
              production drawings, reduce QA cycles, and speed up approvals.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Get a Free Consultation
              </a>
              <a
                href="#features"
                className="rounded-full border border-white/30 px-6 py-3 font-semibold transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Explore Features
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-cyan-900/20">
            <h2 className="text-xl font-semibold">Company Summary</h2>
            <p className="mt-4 text-slate-300">
              We are a startup focused on simplifying technical documentation for
              product teams. Our platform integrates with existing CAD workflows
              and creates standardized, dimension-ready drawings with consistent
              output quality.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-slate-800 p-4">
                <p className="text-2xl font-bold text-cyan-300">75%</p>
                <p className="text-slate-300">Faster drafting cycle</p>
              </div>
              <div className="rounded-xl bg-slate-800 p-4">
                <p className="text-2xl font-bold text-cyan-300">40%</p>
                <p className="text-slate-300">Less QA rework</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-white/10 bg-slate-900/40">
          <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-18">
            <h2 className="text-3xl font-bold">About the Company</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <article className="rounded-xl border border-white/10 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold text-cyan-300">Vision</h3>
                <p className="mt-3 text-slate-300">
                  To become the most trusted AI-assisted platform for engineering
                  drawing creation across global manufacturing teams.
                </p>
              </article>
              <article className="rounded-xl border border-white/10 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold text-cyan-300">Mission</h3>
                <p className="mt-3 text-slate-300">
                  Empower teams to produce accurate production drawings at scale
                  through workflow automation, smart templates, and design-rule
                  intelligence.
                </p>
              </article>
              <article className="rounded-xl border border-white/10 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold text-cyan-300">Logo</h3>
                <p className="mt-3 text-slate-300">
                  Replace the placeholder logo with your company mark in `public`
                  and update the navbar + footer brand for launch-ready identity.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto w-full max-w-6xl px-6 py-18">
          <h2 className="text-3xl font-bold">Product Features</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Dimension Definer",
                text: "Automatically identifies and applies critical dimensions from your model geometry.",
              },
              {
                title: "Views Maker",
                text: "Generates clean, standards-compliant views that improve clarity and manufacturability.",
              },
              {
                title: "Drawing Copilot",
                text: "Creates complete drafting outputs from customizable templates inside your workflow.",
              },
            ].map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-white/10 bg-slate-900 p-6"
              >
                <h3 className="text-xl font-semibold text-cyan-300">{feature.title}</h3>
                <p className="mt-3 text-slate-300">{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="use-cases" className="border-y border-white/10 bg-slate-900/40">
          <div className="mx-auto w-full max-w-6xl px-6 py-18">
            <h2 className="text-3xl font-bold">Industries / Use Cases</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Automotive Components and Tooling",
                "Industrial Machinery and Fabrication",
                "Consumer Product Development",
                "Electronics Mechanical Enclosures",
              ].map((item) => (
                <p key={item} className="rounded-lg border border-white/10 bg-slate-900 p-4 text-slate-200">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto w-full max-w-6xl px-6 py-18">
          <h2 className="text-3xl font-bold">Pricing</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-xl border border-white/10 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">Starter</h3>
              <p className="mt-2 text-3xl font-bold text-cyan-300">$199/mo</p>
              <p className="mt-2 text-slate-300">For small design teams testing automation.</p>
            </article>
            <article className="rounded-xl border border-cyan-400 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">Growth</h3>
              <p className="mt-2 text-3xl font-bold text-cyan-300">$499/mo</p>
              <p className="mt-2 text-slate-300">Best for active teams with frequent drawing releases.</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">Enterprise</h3>
              <p className="mt-2 text-3xl font-bold text-cyan-300">Custom</p>
              <p className="mt-2 text-slate-300">Advanced integrations, compliance, and dedicated support.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-slate-900/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-18">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Share your requirements and our team will set up a personalized
              product walkthrough.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="rounded-xl border border-white/10 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold text-cyan-300">Founder</h3>
                <p className="mt-2 text-slate-200">Chandrasekaran AS. - Co-Founder & CEO</p>
                <p className="text-slate-300">Email: chan3928@gmail.com</p>
                <p className="text-slate-300">Phone: +91 9787428864</p>
              </article>
              <article className="rounded-xl border border-white/10 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold text-cyan-300">Co-Founder</h3>
                <p className="mt-2 text-slate-200">Shiyam Sankar S. - Co-Founder & CTO</p>
                <p className="text-slate-300">Email: shyamsankar@gmail.com</p>
                <p className="text-slate-300">Phone: +91 8300204917</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row">
          <p>{year} NovaSketch Labs. All rights reserved.</p>
          <p>Built with Next.js for fast, scalable deployment.</p>
        </div>
      </footer>
    </div>
  );
}
