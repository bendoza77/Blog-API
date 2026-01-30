import Navbar from './Navbar'
import Footer from './Footer'
import ChatAssistant from './ChatAssistant'

const Layout = ({ children }) => (
  <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f4f0ff,_#ffffff_42%,_#fef6f3)] text-slate-900">
    <Navbar />
    <main className="space-y-4">{children}</main>
    <Footer />
    <ChatAssistant />
  </div>
)

export default Layout
