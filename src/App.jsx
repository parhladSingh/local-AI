import AboutMe from './components/AboutMe'
import Gallery from './components/Gallery'

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#191B1F] to-[#191B1F] flex items-center justify-center p-8">
            <div className="w-full max-w-[1440px] flex gap-8">
                {/* Left side - Empty space */}
                <div className="w-1/2"></div>

                {/* Right side - Widgets */}
                <div className="w-1/2 flex flex-col gap-4">
                    <AboutMe />
                    <div
                        className="h-[4px] rounded-[2.46px] mx-auto"
                        style={{
                            width: '612px',
                            background: 'linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))'
                        }}
                    ></div>
                    <Gallery />

                    <div
                        className="h-[4px] rounded-[2.46px] mx-auto"
                        style={{
                            width: '612px',
                            background: 'linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))'
                        }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default App
