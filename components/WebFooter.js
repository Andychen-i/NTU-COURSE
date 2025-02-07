export default function WebFooter() {
    return (
        <footer className="bg-gray-50 border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">聯絡資訊</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* 聯絡方式 */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">與我聯繫</h3>
                            <div className="space-y-2">
                                <p className="text-gray-600">
                                    <span className="font-medium">Email：</span>
                                    <a href="mailto:contact@example.com" className="hover:text-green-600">
                                        contact@example.com
                                    </a>
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-medium">電話：</span>
                                    <a href="tel:+886912345678" className="hover:text-green-600">
                                        0912-345-678
                                    </a>
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-medium">地址：</span>
                                    台北市信義區信義路五段7號
                                </p>
                            </div>
                        </div>

                        {/* 社群媒體 */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">社群媒體</h3>
                            <div className="space-y-2">
                                <p className="text-gray-600">
                                    <span className="font-medium">Facebook：</span>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
                                        我的設計工作室
                                    </a>
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-medium">Instagram：</span>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
                                        @mydesign.studio
                                    </a>
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-medium">LinkedIn：</span>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
                                        我的設計工作室
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 版權資訊 */}
                    <div className="text-center mt-12 pt-8 border-t border-gray-200">
                        <p className="text-gray-600">
                            © 2024 我的設計工作室. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}