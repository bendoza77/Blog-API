const gallery = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
    label: 'Interface Systems',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80',
    label: 'Motion Studies',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1522199992901-9e1c7b42cc52?auto=format&fit=crop&w=1400&q=80',
    label: 'Product Rituals',
  },
]

const Gallery = () => (
  <section className="mx-auto max-w-6xl px-6 py-14">
    <div className="grid gap-6 md:grid-cols-3">
      {gallery.map((item) => (
        <figure key={item.id} className="group relative overflow-hidden rounded-3xl">
          <img
            src={item.image}
            alt={item.label}
            className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
          />
          <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-[#161134]/80 to-transparent p-6 text-white">
            <div className="flex w-full items-center justify-between">
              <span className="text-sm uppercase tracking-[0.3em]">{item.label}</span>
              <button
                onClick={() => (window.location.href = '/services')}
                className="rounded-full border border-white/40 px-4 py-1 text-[10px] uppercase tracking-[0.4em]"
              >
                View
              </button>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
)

export default Gallery
