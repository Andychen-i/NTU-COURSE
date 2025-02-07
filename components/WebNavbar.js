export default function WebNavbar() {
    return (
        <nav className="bg-white fixed top-0 left-0 right-0 z-50 shadow-[0_4px_20px_-2px_rgba(139,92,246,0.2)]">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* 網站標題 */}
                    <a href="/" className="text-xl font-bold text-green-800 hover:text-green-700">
                        我的網站
                    </a>

                    {/* 導航連結 */}
                    <div className="flex gap-6">
                        <a href="/" className="px-3 py-1 rounded-md text-gray-600 hover:bg-purple-600 hover:text-white transition-all duration-500">
                            首頁
                        </a>
                        <a href="/about" className="px-3 py-1 rounded-md text-gray-600 hover:bg-purple-600 hover:text-white transition-all duration-500">
                            關於本站
                        </a>
                        <a href="/faq" className="px-3 py-1 rounded-md text-gray-600 hover:bg-purple-600 hover:text-white transition-all duration-500">
                            常見問答
                        </a>
                        <a href="/contact" className="px-3 py-1 rounded-md text-gray-600 hover:bg-purple-600 hover:text-white transition-all duration-500">
                            聯絡資訊
                        </a>
                        <a href="/todo-list" className="px-3 py-1 rounded-md text-gray-600 hover:bg-purple-600 hover:text-white transition-all duration-500">
                            待辦事項
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
} 