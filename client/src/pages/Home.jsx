import Hero from '../components/Hero'
import TextMarquee from '../components/TextMarquee'
import FeaturedGrid from '../components/FeaturedGrid'
import InsightsBar from '../components/InsightsBar'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import CallToAction from '../components/CallToAction'
import ActionGrid from '../components/ActionGrid'
import ActionNarrative from '../components/ActionNarrative'
import Stories from '../components/Stories'

import PageShell from '../components/PageShell'

const Home = () => (
  <PageShell>
    <Hero />
    <TextMarquee />
    <ActionNarrative />
    <FeaturedGrid />
    <InsightsBar />
    <ActionGrid />
    <Stories />
    <Services />
    <Gallery />
    <CallToAction />
  </PageShell>
)

export default Home
