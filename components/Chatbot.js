'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUserAstronaut, 
    faPaperPlane, 
    faTimes, 
    faClock, 
    faSpinner,
    faStar,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const formatTime = (date) => {
        return new Intl.DateTimeFormat('zh-TW', {
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (message.trim() && !isLoading) {
            const userMessage = {
                id: Date.now(),
                text: message,
                isUser: true,
                time: new Date()
            };

            setMessages(prev => [...prev, userMessage]);
            setMessage('');
            setIsLoading(true);

            try {
                const response = await fetch('/api/chat-ai', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userInput: message
                    })
                });

                const data = await response.json();

                if (data.success) {
                    setMessages(prev => [...prev, {
                        id: Date.now(),
                        text: data.message,
                        isUser: false,
                        time: new Date()
                    }]);
                } else {
                    setMessages(prev => [...prev, {
                        id: Date.now(),
                        text: "很抱歉，目前星際通訊系統似乎出現了一些干擾。請稍後再試。",
                        isUser: false,
                        time: new Date()
                    }]);
                }
            } catch (error) {
                console.error('Chat error:', error);
                setMessages(prev => [...prev, {
                    id: Date.now(),
                    text: "抱歉，星際通訊連線暫時中斷。請稍後重新嘗試連線。",
                    isUser: false,
                    time: new Date()
                }]);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <>
            {/* 聊天視窗 */}
            {isOpen && (
                <div className="fixed bottom-24 right-4 w-96 bg-[#1a1a2e] rounded-lg shadow-xl overflow-hidden z-50 border border-[#4a9eff]">
                    {/* 聊天室標題 */}
                    <div className="bg-gradient-to-r from-[#2d3b55] to-[#1a1a2e] text-[#4a9eff] p-4 flex justify-between items-center border-b border-[#4a9eff]">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faUserAstronaut} className="mr-2" />
                            <div>
                                <span className="font-semibold block">艾莉亞·星辰</span>
                                <span className="text-xs text-[#4a9eff]/80 flex items-center">
                                    <FontAwesomeIcon icon={faGlobe} className="mr-1" />
                                    星際外交官
                                </span>
                            </div>
                        </div>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="text-[#4a9eff] hover:text-[#4a9eff]/80 transition-colors"
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>

                    {/* 聊天內容區域 */}
                    <div className="h-96 overflow-y-auto p-4 bg-[#1a1a2e]/95">
                        <div className="space-y-4">
                            {/* 預設歡迎訊息 */}
                            <div className="flex items-start space-x-2">
                                <div className="flex flex-col">
                                    <div className="bg-gradient-to-r from-[#2d3b55] to-[#1a1a2e] text-[#4a9eff] rounded-lg p-3 max-w-[80%] border border-[#4a9eff]/30">
                                        <p>歡迎來到星際外交頻道！我是艾莉亞·星辰，來自和平星球艾奧拉的外交官。

作為銀河聯邦的代表，我很榮幸能與您進行交流。請問有什麼我可以協助您的嗎？</p>
                                    </div>
                                    <span className="text-xs text-[#4a9eff]/60 mt-1 flex items-center">
                                        <FontAwesomeIcon icon={faClock} className="mr-1" />
                                        {formatTime(new Date())}
                                    </span>
                                </div>
                            </div>

                            {/* 訊息列表 */}
                            {messages.map(msg => (
                                <div key={msg.id} className={`flex items-start ${msg.isUser ? 'justify-end' : ''}`}>
                                    <div className="flex flex-col">
                                        <div className={`p-3 max-w-[80%] ${
                                            msg.isUser 
                                                ? 'bg-[#4a9eff]/20 text-[#4a9eff] rounded-lg ml-auto border border-[#4a9eff]/30' 
                                                : 'bg-gradient-to-r from-[#2d3b55] to-[#1a1a2e] text-[#4a9eff] rounded-lg border border-[#4a9eff]/30'
                                        }`}>
                                            <p className="whitespace-pre-wrap">{msg.text}</p>
                                        </div>
                                        <span className={`text-xs text-[#4a9eff]/60 mt-1 flex items-center ${msg.isUser ? 'justify-end' : ''}`}>
                                            <FontAwesomeIcon icon={faClock} className="mr-1" />
                                            {formatTime(msg.time)}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {/* Loading 指示器 */}
                            {isLoading && (
                                <div className="flex items-start">
                                    <div className="flex flex-col">
                                        <div className="bg-[#1a1a2e] rounded-lg p-3 border border-[#4a9eff]/30">
                                            <FontAwesomeIcon icon={faSpinner} className="animate-spin text-[#4a9eff]" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 輸入區域 */}
                    <form onSubmit={handleSubmit} className="p-4 bg-[#1a1a2e] border-t border-[#4a9eff]/30">
                        <div className="flex gap-2">
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="請輸入您的訊息..."
                                className="flex-1 p-2 bg-[#2d3b55] text-[#4a9eff] border border-[#4a9eff]/30 rounded-md focus:ring-2 focus:ring-[#4a9eff] focus:border-transparent resize-none placeholder-[#4a9eff]/50"
                                rows="3"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                className={`px-4 bg-[#4a9eff]/20 text-[#4a9eff] rounded-md hover:bg-[#4a9eff]/30 transition-all focus:outline-none focus:ring-2 focus:ring-[#4a9eff] focus:ring-offset-2 focus:ring-offset-[#1a1a2e] border border-[#4a9eff]/30 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={isLoading}
                            >
                                <FontAwesomeIcon icon={isLoading ? faSpinner : faPaperPlane} className={isLoading ? 'animate-spin' : ''} />
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* 懸浮按鈕 */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-[#2d3b55] to-[#1a1a2e] text-[#4a9eff] rounded-full shadow-lg hover:from-[#1a1a2e] hover:to-[#2d3b55] transition-all focus:outline-none focus:ring-2 focus:ring-[#4a9eff] focus:ring-offset-2 flex items-center justify-center text-xl z-50 border border-[#4a9eff]"
            >
                <div className="relative">
                    <FontAwesomeIcon icon={faUserAstronaut} className="animate-pulse" />
                    <FontAwesomeIcon icon={faStar} className="absolute -top-1 -right-1 text-xs animate-twinkle" />
                </div>
            </button>
        </>
    );
} 