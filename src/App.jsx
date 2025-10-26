import AboutMe from './components/AboutMe'
import Gallery from './components/Gallery'

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#373E44] to-[#191B1F] flex items-center justify-center p-8">
            <div className="w-full max-w-[1440px] flex gap-8">
                {/* Left side - Empty space */}
                <div className="w-1/2"></div>

                {/* Right side - Widgets */}
                <div className="w-1/2 flex flex-col gap-8">
                    <AboutMe />
                    <Gallery />
                </div>
            </div>
        </div>
    )
}

export default App
