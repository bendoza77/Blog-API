import Navbar from './Navbar'
import Footer from './Footer'
import ChatAssistant from './ChatAssistant'

const Layout = ({ children }) => (
  <div className="bg-page min-h-screen text-main">
    <Navbar />
    <main>{children}</main>
    <Footer />
    <ChatAssistant />
  </div>
)

export default Layout
