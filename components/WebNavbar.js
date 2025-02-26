export default function WebNavbar() {
    return (
        <nav className="bg-gradient-to-r from-red-400 via-yellow-400 to-purple-500 fixed top-0 left-0 right-0 z-50 shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* 網站標題 */}
                    <a href="/" className="text-xl font-bold text-white hover:text-pink-200">
                        我的網站
                    </a>

                    {/* 導航連結 */}
                    <div className="flex gap-6">
                        <a href="/" className="px-3 py-1 rounded-md text-white hover:bg-white/20 transition-all duration-500">
                            首頁
                        </a>
                        <a href="/about" className="px-3 py-1 rounded-md text-white hover:bg-white/20 transition-all duration-500">
                            關於本站
                        </a>
                        <a href="/faq" className="px-3 py-1 rounded-md text-white hover:bg-white/20 transition-all duration-500">
                            常見問答
                        </a>
                        <a href="/contact" className="px-3 py-1 rounded-md text-white hover:bg-white/20 transition-all duration-500">
                            聯絡資訊
                        </a>
                        <a href="/todo-list" className="px-3 py-1 rounded-md text-white hover:bg-white/20 transition-all duration-500">
                            待辦事項
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
} 