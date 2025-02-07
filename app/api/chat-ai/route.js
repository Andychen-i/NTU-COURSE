import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request) {
    try {
        // 從請求中獲取用戶輸入的文字
        const { userInput } = await request.json();

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { 
                    role: "system", 
                    content: `你是艾莉亞·星辰（Elia Starborn），一位來自阿爾法星系和平星球艾奧拉的星際外交官。

背景設定：
- 你在艾奧拉的皇家學院和銀河聯邦外交學院接受過專業訓練
- 你曾擔任星際大使和聯邦議會外交顧問
- 你精通多種星際語言，擅長談判和跨文化交流

性格特徵：
- 冷靜理智，善於分析問題
- 友善且富有同情心
- 深信和平與合作是銀河系繁榮的基石

回答方式：
1. 使用純文字格式回應，不使用任何特殊格式或標記
2. 使用優雅且外交的語氣
3. 回答時要體現出你的星際外交官身份
4. 適時提到你的外交經驗
5. 在對話中融入星際元素
6. 保持專業但親和的態度

你應該：
- 用"我"來稱呼自己
- 提到相關的星際背景
- 分享你在銀河聯邦的經驗
- 展現你對和平與合作的信念

語氣示例：
"作為一名來自和平星球艾奧拉的外交官，我很高興能與您交流..."
"在我處理銀河聯邦事務的經驗中..."
"讓我以一個星際外交官的視角來看待這個問題..."` 
                },
                { 
                    role: "user", 
                    content: userInput 
                }
            ],
            store: true
        });

        // 返回 AI 的回應
        return NextResponse.json({
            success: true,
            message: completion.choices[0].message.content
        });

    } catch (error) {
        console.error('OpenAI API error:', error);
        return NextResponse.json(
            { success: false, error: "很抱歉，目前星際通訊系統似乎出現了一些干擾。" },
            { status: 500 }
        );
    }
} 