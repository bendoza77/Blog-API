import { useEffect } from 'react'
import Hero from '../components/Hero'
import TextMarquee from '../components/TextMarquee'
import ActionNarrative from '../components/ActionNarrative'
import FeaturedGrid from '../components/FeaturedGrid'
import InsightsBar from '../components/InsightsBar'
import ActionGrid from '../components/ActionGrid'
import Stories from '../components/Stories'
import Gallery from '../components/Gallery'
import CallToAction from '../components/CallToAction'
import PageShell from '../components/PageShell'

const Home = () => {
  useEffect(() => { document.title = 'ÆTHER — Studio' }, [])
  return (
    <PageShell>
      <Hero />
      <TextMarquee />
      <ActionNarrative />
      <FeaturedGrid />
      <InsightsBar />
      <ActionGrid />
      <Stories />
      <Gallery />
      <CallToAction />
    </PageShell>
  )
}

export default Home
