import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ease = [0.22, 1, 0.36, 1]

const gallery = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
    label: 'Interface Systems',
    span: 'md:col-span-2 md:row-span-2',
    height: 'h-80 md:h-full',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80',
    label: 'Motion Studies',
    span: '',
    height: 'h-52',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1522199992901-9e1c7b42cc52?auto=format&fit=crop&w=1400&q=80',
    label: 'Product Rituals',
    span: '',
    height: 'h-52',
  },
]

const Gallery = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const navigate = useNavigate()

  return (
    <section className="mx-auto max-w-6xl px-6 py-16" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        className="mb-10 space-y-3"
      >
        <span className="section-label">Visual work</span>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-main">Selected projects</h2>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2" style={{ minHeight: '480px' }}>
        {gallery.map((item, i) => (
          <motion.figure
            key={item.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease, delay: i * 0.1 }}
            className={`group relative overflow-hidden rounded-2xl ${item.span}`}
          >
            <img
              src={item.image}
              alt={item.label}
              className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${item.height}`}
            />
            <div
              className="absolute inset-0 flex items-end p-6"
              style={{ background: 'linear-gradient(to top, rgba(6,6,14,0.75) 0%, transparent 55%)' }}
            >
              <div className="flex w-full items-end justify-between">
                <figcaption className="text-white text-sm font-semibold tracking-wide">{item.label}</figcaption>
                <button
                  onClick={() => navigate('/services')}
                  className="flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-medium uppercase tracking-wider transition-colors duration-200"
                >
                  View <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}

export default Gallery
