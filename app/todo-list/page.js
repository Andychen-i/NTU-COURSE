'use client';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPlus,
    faCheck,
    faChevronDown,
    faChevronUp,
    faTrash,
    faExclamationCircle,
    faList,
    faClock,
    faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

export default function TodoListPage() {
    const [newTodo, setNewTodo] = useState('');
    const [details, setDetails] = useState('');
    const [priority, setPriority] = useState('normal');
    const [todos, setTodos] = useState([]);
    const [expandedId, setExpandedId] = useState(null);
    const [showDeleteMessage, setShowDeleteMessage] = useState(false);

    // 從 LocalStorage 載入資料
    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            const parsedTodos = JSON.parse(savedTodos).map(todo => ({
                ...todo,
                createdAt: new Date(todo.createdAt)
            }));
            setTodos(parsedTodos);
        }
    }, []);

    // 儲存到 LocalStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const priorityOptions = {
        normal: { label: '普通', color: 'bg-green-100 text-green-800', icon: faList },
        important: { label: '重要', color: 'bg-yellow-100 text-yellow-800', icon: faExclamationCircle },
        urgent: { label: '緊急', color: 'bg-red-100 text-red-800', icon: faExclamationCircle }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            setTodos([...todos, {
                id: Date.now(),
                text: newTodo,
                details: details,
                completed: false,
                priority: priority,
                createdAt: new Date()
            }]);
            setNewTodo('');
            setDetails('');
            setPriority('normal');
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const handleDelete = (id) => {
        if (window.confirm('確定要刪除這個待辦事項嗎？')) {
            setTodos(todos.filter(todo => todo.id !== id));
            setShowDeleteMessage(true);
            setTimeout(() => setShowDeleteMessage(false), 3000);
        }
    };

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('zh-TW', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }).format(date);
    };

    const toggleDetails = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-50 pt-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-3xl font-bold text-green-800 mb-6">
                    <FontAwesomeIcon icon={faList} className="mr-2" />
                    待辦事項
                </h1>
                
                {/* 刪除提示訊息 */}
                {showDeleteMessage && (
                    <div className="fixed top-24 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md shadow-lg">
                        <FontAwesomeIcon icon={faCheck} className="mr-2" />
                        待辦事項已成功刪除
                    </div>
                )}

                {/* 新增待辦事項表單 */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex gap-4">
                            <input
                                type="text"
                                value={newTodo}
                                onChange={(e) => setNewTodo(e.target.value)}
                                placeholder="輸入新的待辦事項..."
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                            <select
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            >
                                <option value="normal">
                                    普通
                                </option>
                                <option value="important">重要</option>
                                <option value="urgent">緊急</option>
                            </select>
                        </div>
                        <div>
                            <textarea
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                                placeholder="輸入詳細資訊..."
                                rows="3"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                            <FontAwesomeIcon icon={faPlus} className="mr-2" />
                            產生待辦事項
                        </button>
                    </form>
                </div>

                {/* 待辦事項列表 */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        <FontAwesomeIcon icon={faList} className="mr-2" />
                        待辦事項列表
                    </h2>
                    {todos.length === 0 ? (
                        <p className="text-gray-500 text-center py-4">目前沒有待辦事項</p>
                    ) : (
                        <ul className="space-y-3">
                            {todos.map(todo => (
                                <li 
                                    key={todo.id}
                                    className="border border-gray-100 rounded-lg overflow-hidden"
                                >
                                    <div className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors">
                                        <input
                                            type="checkbox"
                                            checked={todo.completed}
                                            onChange={() => toggleTodo(todo.id)}
                                            className="w-5 h-5 text-green-600 rounded border-gray-300 focus:ring-green-500"
                                        />
                                        <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                                            {todo.text}
                                        </span>
                                        <button
                                            onClick={() => toggleDetails(todo.id)}
                                            className="px-2 py-1 text-sm text-gray-600 hover:text-gray-800"
                                        >
                                            <FontAwesomeIcon 
                                                icon={expandedId === todo.id ? faChevronUp : faChevronDown} 
                                                className="mr-1"
                                            />
                                            {expandedId === todo.id ? '收合' : '展開'}
                                        </button>
                                        <span className={`px-2 py-1 rounded-full text-sm font-medium ${priorityOptions[todo.priority].color}`}>
                                            <FontAwesomeIcon icon={priorityOptions[todo.priority].icon} className="mr-1" />
                                            {priorityOptions[todo.priority].label}
                                        </span>
                                        {todo.completed && (
                                            <span className="text-sm text-green-600 font-medium">
                                                <FontAwesomeIcon icon={faCheck} className="mr-1" />
                                                已完成
                                            </span>
                                        )}
                                        <button
                                            onClick={() => handleDelete(todo.id)}
                                            className="px-2 py-1 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors"
                                            title="刪除"
                                        >
                                            <FontAwesomeIcon icon={faTrash} className="mr-1" />
                                            刪除
                                        </button>
                                    </div>
                                    {expandedId === todo.id && (
                                        <div className="px-4 pb-4 bg-gray-50">
                                            <p className="text-gray-700 whitespace-pre-wrap mb-2">
                                                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                                                {todo.details || '無詳細資訊'}
                                            </p>
                                            <p className="text-sm text-gray-500 text-right">
                                                <FontAwesomeIcon icon={faClock} className="mr-1" />
                                                建立時間：{formatDate(todo.createdAt)}
                                            </p>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
} 