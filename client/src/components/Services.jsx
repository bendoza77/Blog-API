const services = [
  {
    title: 'Product Narrative',
    description:
      'Comprehensive brand, product, and story systems that keep teams aligned across launches.',
    pill: 'Strategy',
  },
  {
    title: 'Interface Design',
    description:
      'Responsive, component-driven design languages built for performance and accessibility.',
    pill: 'Design Ops',
  },
  {
    title: 'Motion Systems',
    description:
      'Signature transitions, micro-interactions, and narrative motion choreographed to feel effortless.',
    pill: 'Motion',
  },
]

const Services = () => (
  <section className="mx-auto max-w-6xl px-6 py-16">
    <div className="grid gap-6 md:grid-cols-3" id="motion">
      {services.map((service) => (
        <article
          key={service.title}
          className="rounded-3xl border border-white/60 bg-white/80 px-6 py-8 backdrop-blur-2xl shadow-[0_30px_90px_-50px_rgba(91,33,182,0.5)]"
        >
          <span className="text-xs uppercase tracking-[0.5em] text-[#7c3aed]">{service.pill}</span>
          <h3 className="mt-4 text-2xl font-semibold text-[#161134]">{service.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#5f6c80]">{service.description}</p>
          <button
            onClick={() => (window.location.href = '/contact')}
            className="mt-5 rounded-full border border-[#7c3aed]/40 px-4 py-2 text-[11px] uppercase tracking-[0.4em] text-[#7c3aed]"
          >
            Partner up
          </button>
        </article>
      ))}
    </div>
  </section>
)

export default Services
