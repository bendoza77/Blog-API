import { useNavigate } from 'react-router-dom'

const useNavigationActions = () => {
  const navigate = useNavigate()
  return {
    goToJournal: () => navigate('/journal'),
    goToServices: () => navigate('/services'),
    goToContact: () => navigate('/contact'),
    startProject: () => navigate('/contact'),
    viewMotion: () => navigate('/services#motion'),
    bookWorkshop: () => navigate('/contact'),
    downloadDeck: () => window.open('https://www.figma.com/community/file/123', '_blank'),
  }
}

export default useNavigationActions
