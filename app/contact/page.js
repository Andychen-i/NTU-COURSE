import React from 'react';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-200 via-yellow-200 to-blue-200">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">
                        聯絡資訊
                    </h1>
                    <p className="text-xl text-indigo-600">
                        歡迎與我聯繫，討論您的設計需求
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* 聯絡資訊區塊 */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-purple-100">
                        <h2 className="text-2xl font-bold text-pink-600 mb-6">聯絡方式</h2>
                        
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-purple-600">電子郵件</h3>
                                    <p className="text-indigo-600">design@example.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-purple-600">電話</h3>
                                    <p className="text-indigo-600">(02) 2345-6789</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-purple-600">工作室地址</h3>
                                    <p className="text-indigo-600">台北市信義區信義路五段7號</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-purple-600">工作時間</h3>
                                    <p className="text-indigo-600">週一至週五：09:00 - 18:00</p>
                                    <p className="text-indigo-600">週六、日：預約制</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 聯絡表單 */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-purple-100">
                        <h2 className="text-2xl font-bold text-pink-600 mb-6">傳送訊息</h2>
                        
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-purple-600 mb-1">
                                    姓名
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 bg-white/50 border border-purple-200 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-purple-600 mb-1">
                                    電子郵件
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 bg-white/50 border border-purple-200 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-purple-600 mb-1">
                                    主旨
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-2 bg-white/50 border border-purple-200 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-purple-600 mb-1">
                                    訊息內容
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="w-full px-4 py-2 bg-white/50 border border-purple-200 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-md hover:from-pink-600 hover:to-purple-600 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                            >
                                送出訊息
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
} 