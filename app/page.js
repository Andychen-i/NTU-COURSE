export default function Home() {
    return (
        <>
            <header className="bg-gradient-to-br from-yellow-100 to-green-100 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-800">
                            歡迎來到我的個人網站
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8">
                            我是一名設計師，專注於創造美好的視覺體驗
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="/about" className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                                關於本站
                            </a>
                            <a href="/faq" className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                                常見問答
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">
                        自我介紹
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg text-gray-600 mb-6">
                            您好！我是一位充滿熱情的設計師，擁有超過5年的設計經驗。我專注於用戶界面設計和品牌識別設計，致力於創造既美觀又實用的作品。
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            我相信優秀的設計不僅要看起來漂亮，更要能夠解決問題、提升用戶體驗。在每個項目中，我都會深入理解客戶需求，結合創意思維和專業技術，打造出獨特的設計方案。
                        </p>
                        <p className="text-lg text-gray-600">
                            除了設計工作，我也熱愛攝影和插畫創作，這些興趣為我的設計工作帶來更多靈感和創意元素。
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center">
                        作品專區
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {/* 作品卡片 1 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-[0_4px_20px_-2px_rgba(139,92,246,0.2)]">
                            <img
                                src="/images/photo1.png"
                                alt="品牌識別設計"
                                className="w-full aspect-[4/3] object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-green-800 mb-2">時尚品牌識別設計</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">#品牌設計</span>
                                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">#時尚</span>
                                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">#視覺識別</span>
                                </div>
                                <p className="text-gray-600">為國際時尚品牌打造的全新品牌識別系統，包含logo設計、包裝設計及品牌指南。</p>
                            </div>
                        </div>

                        {/* 作品卡片 2 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-[0_4px_20px_-2px_rgba(139,92,246,0.2)]">
                            <img
                                src="/images/photo2.png"
                                alt="網頁設計"
                                className="w-full aspect-[4/3] object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-green-800 mb-2">電商平台設計</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">#網頁設計</span>
                                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">#電商</span>
                                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">#UI設計</span>
                                </div>
                                <p className="text-gray-600">專為生活用品品牌設計的響應式電商網站，提供絕佳的用戶購物體驗。</p>
                            </div>
                        </div>

                        {/* 作品卡片 3 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-[0_4px_20px_-2px_rgba(139,92,246,0.2)]">
                            <img
                                src="/images/photo3.png"
                                alt="應用程式設計"
                                className="w-full aspect-[4/3] object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-green-800 mb-2">健康追蹤APP設計</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">#APP設計</span>
                                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">#健康科技</span>
                                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">#UX設計</span>
                                </div>
                                <p className="text-gray-600">結合簡約風格與人性化界面的健康管理應用程式，幫助用戶輕鬆追蹤健康數據。</p>
                            </div>
                        </div>

                        {/* 作品卡片 4 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-[0_4px_20px_-2px_rgba(139,92,246,0.2)]">
                            <img
                                src="/images/photo4.png"
                                alt="包裝設計"
                                className="w-full"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-green-800 mb-2">有機食品包裝設計</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">#包裝設計</span>
                                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">#永續設計</span>
                                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">#環保</span>
                                </div>
                                <p className="text-gray-600">為有機食品品牌設計的環保包裝系列，強調自然與永續的品牌理念。</p>
                            </div>
                        </div>

                        {/* 作品卡片 5 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-[0_4px_20px_-2px_rgba(139,92,246,0.2)]">
                            <img
                                src="/images/photo5.png"
                                alt="海報設計"
                                className="w-full"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-green-800 mb-2">藝術展覽視覺設計</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">#展覽設計</span>
                                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">#視覺設計</span>
                                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">#藝術</span>
                                </div>
                                <p className="text-gray-600">為現代藝術展覽設計的整體視覺識別，包含海報、票券及展場導視系統。</p>
                            </div>
                        </div>

                        {/* 作品卡片 6 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-[0_4px_20px_-2px_rgba(139,92,246,0.2)]">
                            <img
                                src="/images/photo6.png"
                                alt="插畫設計"
                                className="w-full"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-green-800 mb-2">兒童繪本插畫</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">#插畫</span>
                                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">#兒童教育</span>
                                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">#繪本</span>
                                </div>
                                <p className="text-gray-600">為教育出版社創作的兒童繪本系列，以溫暖風格詮釋環保教育主題。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
