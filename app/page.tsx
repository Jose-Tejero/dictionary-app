import DefinitionHeader from './components/DefinitionHeader'
import PartOfSpeach from './components/PartOfSpeach'
import SearchBar from './components/SearchBar'
import SettingsBar from './components/SettingsBar'
import SourceLink from './components/SourceLink'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <SettingsBar />
      <SearchBar />
      <DefinitionHeader />
      <PartOfSpeach />  
      <SourceLink />
    </main>
  )
}