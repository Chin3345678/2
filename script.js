/* script.js */
$(document).ready(function () {
    const questions = [
        { q: "你通常如何計劃一天？", e: "How do you usually plan your day?", a: ["按計劃行事 (Structured)", "隨意安排 (Flexible)", "看情況 (Depends on the situation)", "完全不計劃 (No planning at all)"] },
        { q: "你對家人的關心表現方式？", e: "How do you show care for your family?", a: ["嚴格要求 (Strict but caring)", "幽默陪伴 (Humorous and present)", "細心照顧 (Thoughtful care)", "默默支持 (Silent support)"] },
        { q: "假日時，你最喜歡做什麼？", e: "What do you enjoy doing on holidays?", a: ["出去玩 (Go out and play)", "陪伴家人 (Spend time with family)", "待在家休息 (Stay home and relax)", "計劃未來 (Plan for the future)"] },
        { q: "你在家中的角色？", e: "What is your role in the family?", a: ["領導者 (Leader)", "搞笑擔當 (Comedic relief)", "保護者 (Protector)", "戰略家 (Strategist)"] },
        { q: "當遇到困難時，你的反應？", e: "How do you react to difficulties?", a: ["冷靜分析 (Analyze calmly)", "馬上行動 (Act immediately)", "請求幫助 (Ask for help)", "試著解決 (Try to solve it)"] },
        { q: "你最重視什麼價值？", e: "What value do you prioritize most?", a: ["責任 (Responsibility)", "快樂 (Happiness)", "家庭 (Family)", "自由 (Freedom)"] },
        { q: "你如何面對壓力？", e: "How do you handle stress?", a: ["理性思考 (Think logically)", "找人聊天 (Talk to someone)", "運動或放鬆 (Exercise/relax)", "忽略壓力 (Ignore it)"] },
        { q: "你希望孩子如何看待你？", e: "How do you want your kids to see you?", a: ["可靠 (Reliable)", "有趣 (Funny)", "值得信賴 (Trustworthy)", "有智慧 (Wise)"] },
        { q: "你最喜歡的家庭活動？", e: "What is your favorite family activity?", a: ["旅遊 (Traveling)", "一起吃飯 (Eating together)", "運動 (Playing sports)", "聊天 (Talking together)"] },
        { q: "你的個性最接近？", e: "Which personality best describes you?", a: ["嚴謹 (Serious)", "外向 (Outgoing)", "謹慎 (Cautious)", "機智 (Clever)"] }
    ];
    
    let currentQuestion = 0;
    let scores = [0, 0, 0, 0, 0, 0];
    
    $("#start-btn").click(function () {
        $("#quiz-container").removeClass("hidden");
        $("#start-btn").hide();
        showQuestion();
    });
    
    function showQuestion() {
        if (currentQuestion < questions.length) {
            let q = questions[currentQuestion];
            let html = `<h2>${q.q} (${q.e})</h2>`;
            q.a.forEach((answer, index) => {
                html += `<button class='answer-btn' data-index='${index}'>${answer}</button>`;
            });
            $("#question-container").html(html);
        } else {
            showResult();
        }
    }
    
    $(document).on("click", ".answer-btn", function () {
        let index = $(this).data("index");
        scores[index % 6]++;
        currentQuestion++;
        showQuestion();
    });
    
    function showResult() {
        let maxIndex = scores.indexOf(Math.max(...scores));
        let characters = [
            { name: "奈德·弗蘭德 (Ned Flanders)", img: "ned.png" },
            { name: "野原廣志 (Hiroshi Nohara)", img: "hiroshi.png" },
            { name: "佛傑·佛傑 (Loid Forger)", img: "loid.png" },
            { name: "毛利小五郎 (Kogoro Mouri)", img: "kogoro.png" },
            { name: "漩渦鳴人 (Naruto Uzumaki)", img: "naruto.png" },
            { name: "櫻廣志 (Hiroshi Sakura)", img: "sakura.png" }
        ];
        $("#result-image").attr("src", characters[maxIndex].img);
        $("#result-text").text(`你的角色是：${characters[maxIndex].name}`);
        $("#quiz-container").hide();
        $("#result-container").removeClass("hidden");
    }
    
    $("#share-btn").click(function () {
        alert("分享功能即將推出！");
    });
});