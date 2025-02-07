export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-50">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
                        關於本站
                    </h1>
                    <a href="/" className="inline-block mb-12 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                        回到首頁
                    </a>
                </div>

                {/* 網站理念 */}
                <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-green-700 mb-4">網站理念</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        這個網站是我展示設計作品和分享創作理念的個人空間。我希望通過這個平台，不僅能夠展示我的專業作品，
                        也能與其他設計師和對設計感興趣的朋友們交流互動。
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        在這裡，每一個作品背後都有一個故事，都承載著獨特的設計理念和創作過程。我期待能通過這個平台，
                        與更多人分享設計的樂趣和價值。
                    </p>
                </section>

                {/* 技術架構 */}
                <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-green-700 mb-4">技術架構</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-600 mb-3">前端技術</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Next.js 14 框架</li>
                                <li>React 組件開發</li>
                                <li>Tailwind CSS 樣式設計</li>
                                <li>響應式網頁設計</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-600 mb-3">開發工具</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Git 版本控制</li>
                                <li>VS Code 開發環境</li>
                                <li>Figma 設計工具</li>
                                <li>現代化建構工具</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 未來規劃 */}
                <section className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-green-700 mb-4">未來規劃</h2>
                    <div className="space-y-4">
                        <div className="border-l-4 border-green-500 pl-4">
                            <h3 className="text-xl font-semibold text-green-600 mb-2">擴充作品展示</h3>
                            <p className="text-gray-600">
                                計劃增加更多互動性的作品展示方式，讓訪客能更深入了解每個作品的設計過程和細節。
                            </p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                            <h3 className="text-xl font-semibold text-green-600 mb-2">設計部落格</h3>
                            <p className="text-gray-600">
                                預計開設設計相關的部落格專區，分享設計經驗、技巧和業界趨勢。
                            </p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                            <h3 className="text-xl font-semibold text-green-600 mb-2">社群互動</h3>
                            <p className="text-gray-600">
                                規劃加入評論和討論功能，創造更多與訪客互動的機會。
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
