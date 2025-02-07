export default function FAQ() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-50">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
                        常見問答
                    </h1>
                    <a href="/" className="inline-block mb-12 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                        回到首頁
                    </a>
                </div>

                {/* 合作相關 */}
                <div className="max-w-3xl mx-auto">
                    <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-bold text-green-700 mb-6">合作相關問題</h2>

                        <div className="space-y-6">
                            <div className="border-b border-gray-200 pb-6">
                                <h3 className="text-xl font-semibold text-green-600 mb-3">
                                    Q: 如何與您進行專案合作？
                                </h3>
                                <p className="text-gray-600">
                                    您可以通過網站的聯絡表單或直接發送郵件給我，描述您的專案需求和預算範圍。
                                    我會在24小時內回覆您，並安排進一步的討論。
                                </p>
                            </div>

                            <div className="border-b border-gray-200 pb-6">
                                <h3 className="text-xl font-semibold text-green-600 mb-3">
                                    Q: 專案的製作週期大約需要多久？
                                </h3>
                                <p className="text-gray-600">
                                    專案週期會根據需求複雜度而有所不同。一般的品牌設計約需4-6週，
                                    網站設計約需6-8週，具體時程會在專案啟動前與您確認。
                                </p>
                            </div>

                            <div className="border-b border-gray-200 pb-6">
                                <h3 className="text-xl font-semibold text-green-600 mb-3">
                                    Q: 是否接受遠距合作？
                                </h3>
                                <p className="text-gray-600">
                                    是的，我有豐富的遠距合作經驗。我們可以通過視訊會議、即時通訊等
                                    方式保持密切溝通，確保專案順利進行。
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 設計服務 */}
                    <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-bold text-green-700 mb-6">設計服務問題</h2>

                        <div className="space-y-6">
                            <div className="border-b border-gray-200 pb-6">
                                <h3 className="text-xl font-semibold text-green-600 mb-3">
                                    Q: 提供哪些類型的設計服務？
                                </h3>
                                <p className="text-gray-600 mb-2">
                                    主要提供：
                                </p>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>品牌識別設計</li>
                                    <li>網站和應用程式UI設計</li>
                                    <li>平面設計和包裝設計</li>
                                    <li>使用者體驗（UX）設計</li>
                                </ul>
                            </div>

                            <div className="border-b border-gray-200 pb-6">
                                <h3 className="text-xl font-semibold text-green-600 mb-3">
                                    Q: 設計過程中會有幾次修改的機會？
                                </h3>
                                <p className="text-gray-600">
                                    每個設計階段都提供2-3次修改機會。在專案開始前，我們會詳細討論您的需求，
                                    確保設計方向符合您的期望。如需額外修改，可能會產生額外費用。
                                </p>
                            </div>

                            <div className="border-b border-gray-200 pb-6">
                                <h3 className="text-xl font-semibold text-green-600 mb-3">
                                    Q: 是否提供設計源文件？
                                </h3>
                                <p className="text-gray-600 mb-2">
                                    是的，在專案結束後，我會提供所有相關的設計源文件，包括：
                                </p>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>原始設計檔案（Figma/AI/PSD等）</li>
                                    <li>可直接使用的圖檔</li>
                                    <li>相關說明文件</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 其他問題 */}
                    <section className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-green-700 mb-6">其他常見問題</h2>

                        <div className="space-y-6">
                            <div className="border-b border-gray-200 pb-6">
                                <h3 className="text-xl font-semibold text-green-600 mb-3">
                                    Q: 如何保護客戶的智慧財產權？
                                </h3>
                                <p className="text-gray-600">
                                    我會與所有客戶簽署保密協議（NDA），確保您的商業機密受到保護。
                                    完成的設計作品，其智慧財產權將完全屬於客戶。
                                </p>
                            </div>

                            <div className="border-b border-gray-200 pb-6">
                                <h3 className="text-xl font-semibold text-green-600 mb-3">
                                    Q: 是否提供設計諮詢服務？
                                </h3>
                                <p className="text-gray-600">
                                    是的，除了實際的設計製作，我也提供設計諮詢服務，可以協助您評估設計需求、
                                    提供專業建議，或是為您的設計團隊提供指導。
                                </p>
                            </div>

                            <div className="pb-6">
                                <h3 className="text-xl font-semibold text-green-600 mb-3">
                                    Q: 如何了解更多作品案例？
                                </h3>
                                <p className="text-gray-600">
                                    您可以在網站的作品集區塊查看更多案例，也歡迎直接與我聯繫，
                                    我可以提供更詳細的作品介紹和說明。
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
