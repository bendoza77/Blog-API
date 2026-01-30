import Services from '../components/Services'
import Gallery from '../components/Gallery'
import CallToAction from '../components/CallToAction'

import PageShell from '../components/PageShell'

const ServicesPage = () => (
  <PageShell className="space-y-16">
    <div className="mx-auto max-w-4xl px-6 pt-16 text-center">
      <p className="text-xs uppercase tracking-[0.6em] text-[#7c3aed]">Capabilities</p>
      <h1 className="mt-5 text-4xl font-semibold text-[#161134]">
        Full-stack design partner
      </h1>
      <p className="mt-4 text-base text-[#5f6c80]">
        We embed with your team to build design languages, motion systems, and narrative frameworks that scale.
      </p>
    </div>
    <Services />
    <Gallery />
    <CallToAction />
  </PageShell>
)

export default ServicesPage
