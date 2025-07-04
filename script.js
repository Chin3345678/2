const scenarios = [
  {
    text: "🌅 清晨，家族旅行的第一天，你被鳥鳴聲喚醒。你會怎麼開始這段旅程？",
    options: [
      { text: "📅 確認行程並整理裝備。", type: "INTJ" },
      { text: "🥐 準備驚喜早餐給家人！", type: "ESFJ" },
      { text: "🎶 放音樂讓早晨充滿活力！", type: "ENFP" },
      { text: "🛌 再賴床一下，充飽精神再出門。", type: "ISFJ" },
      { text: "📋 檢查每個人的裝備和安全狀況。", type: "ESTJ" },
      { text: "🧸 跟孩子玩玩遊戲再出門。", type: "ISFP" }
    ]
  },
  {
    text: "🚗 途中經過風景小路，你會怎麼做？",
    options: [
      { text: "🚣️ 按計劃前行。", type: "ISTJ" },
      { text: "🌿 探索小路找新驚喜。", type: "ENFP" },
      { text: "📷 停下來拍照紀錄美景。", type: "ISFJ" },
      { text: "🗺️ 建議改變路線尋找捷徑。", type: "INTJ" },
      { text: "📊 計算時間與風險後做出決策。", type: "ESTJ" },
      { text: "🎨 找風景最漂亮的地方畫畫。", type: "ISFP" }
    ]
  },
  {
    text: "🍽️ 午餐時間到了，大家餓了。你會怎麼安排？",
    options: [
      { text: "📍 找最近的餐廳，不拖時間。", type: "ISTJ" },
      { text: "🎉 找有趣的在地小吃體驗地方文化。", type: "ENFP" },
      { text: "💖 選擇家人喜歡的餐廳，照顧大家需求。", type: "ESFJ" },
      { text: "🗑️ 看評價與推薦，精挑精選。", type: "INTJ" },
      { text: "🗾 根據預算與偏好做出最佳選擇。", type: "ESTJ" },
      { text: "🍱 自己準備便當，在自然中用餐。", type: "ISFP" }
    ]
  },
  {
    text: "🏞️ 下午安排戶外活動，遇到突如其來的雨。你的反應是？",
    options: [
      { text: "🌂 準備雨具繼續行程。", type: "ISFJ" },
      { text: "💡 馬上找室內活動替代方案。", type: "INTJ" },
      { text: "🍿 提議去看電影或逛街。", type: "ENFP" },
      { text: "📝 檢視計劃，確保後續行程不受影響。", type: "ISTJ" },
      { text: "🚙 帶大家先上車休息一下等雨停。", type: "ESTJ" },
      { text: "☕ 找間有氣氛的咖啡店放鬆聊天。", type: "ISFP" }
    ]
  },
  {
    text: "🌙 夜晚結束時，你會怎麼總約這踏旅行？",
    options: [
      { text: "📖 寫下回憶日記，紀錄點滴。", type: "ISFJ" },
      { text: "📷 整理今天的照片與影片。", type: "ESFJ" },
      { text: "🍻 和家人聊聊最有趣的時刻。", type: "ENFP" },
      { text: "🗂️ 檢討行程，思考下次改進空間。", type: "INTJ" },
      { text: "📊 整理預算與花費，確認一切無誤。", type: "ESTJ" },
      { text: "🖌️ 畫下一張旅行速寫當紀念。", type: "ISFP" }
    ]
  }
];

const characterProfiles = {
  ESFJ: {
    name: "螃蟹寶寶-釀老閥 (ESFJ)",
    description: "擁有 ESFJ 的友善個性，是團體中的最佳支持者。",
    image: "https://chin3345678.github.io/5/images/hiroshi.png"
  },
  INTJ: {
    name: "名傳探查-毛利小五郎 (INTJ)",
    description: "展現 INTJ 的冷靜與策略性，縛密思考。",
    image: "https://chin3345678.github.io/5/images/kogoro.png"
  },
  ISTJ: {
    name: "橡桃小丸子-橡廣志 (ISTJ)",
    description: "秤持踐實與責任感，確保大小事有條不綿。",
    image: "https://chin3345678.github.io/5/images/sakura.png"
  },
  ENFP: {
    name: "火影忍者-潛潛鳴人 (ENFP)",
    description: "充滿熱情，用積極態度影響身邊的人。",
    image: "https://chin3345678.github.io/5/images/naruto.png"
  },
  ISFJ: {
    name: "間調家家酒-黃昏 (ISFJ)",
    description: "溫柔體貼，充分體現照顧與保護特質。",
    image: "https://chin3345678.github.io/5/images/loidy.png"
  },
  ESTJ: {
    name: "海綿寶寶-蟹老閥 (ESTJ)",
    description: "擁有強烈的領導力與責任感，是統總與效率的代言人。",
    image: "https://chin3345678.github.io/5/images/krabs.png"
  },
  ISFP: {
    name: "佩佩豪-豪爸爸 (ISFP)",
    description: "溫和有趣，愛家愛生活，是孩子眼中最溫暖的存在。",
    image: "https://chin3345678.github.io/5/images/daddypig.png"
  }
};

let currentScenario = 0;
const chosenTypes = [];

function loadScenario(index) {
  const scenario = scenarios[index];
  $("#scenarioText").text(scenario.text);
  const optionsDiv = $("#options").empty();

  scenario.options.forEach((option) => {
    $("<button>")
      .addClass("option")
      .text(option.text)
      .on("click", function () {
        $(".option").removeClass("selected");
        $(this).addClass("selected");
        chosenTypes[index] = option.type;
        $("#nextButton").prop("disabled", false);
        $("#finishButton").toggle(index === scenarios.length - 1);
        if (index === scenarios.length - 1) {
          $("#nextButton").prop("disabled", true);
        }
      })
      .appendTo(optionsDiv);
  });

  $("#nextButton")
    .toggle(index < scenarios.length - 1)
    .prop("disabled", true);
  $("#finishButton")
    .toggle(index === scenarios.length - 1)
    .hide();
}

function showResult() {
  const resultType = mostFrequentType(chosenTypes);
  const profile = characterProfiles[resultType];

  $("#quiz").hide();
  $("#resultTitle").text(`你的人格類型是：${profile.name}`);
  $("#characterImage").attr("src", profile.image);
  $("#resultDescription").text(profile.description);
  $("#result").show();

  $("#shareButton").attr(
    "href",
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://chin3345678.github.io/5/")}&quote=${encodeURIComponent("我在「動漫爸爸 MBTI 心理測驗」中是 " + profile.name + "！")}`
  );
  $("#lineShareButton").attr(
    "href",
    `https://line.me/R/msg/text/?${encodeURIComponent("我在「動漫爸爸 MBTI 心理測驗」中是 " + profile.name + "！\nhttps://chin3345678.github.io/5/")}`
  );
}

function mostFrequentType(types) {
  const frequency = types.reduce(
    (acc, type) => ((acc[type] = (acc[type] || 0) + 1), acc),
    {}
  );
  return Object.keys(frequency).reduce((a, b) =>
    frequency[a] >= frequency[b] ? a : b
  );
}

$(document).ready(function () {
  $("#startButton").on("click", function () {
    $("#intro").hide();
    $("#quiz").show();
    loadScenario(currentScenario);
  });

  $("#nextButton").on("click", function () {
    if (currentScenario < scenarios.length - 1) {
      currentScenario++;
      loadScenario(currentScenario);
    }
  });

  $("#finishButton").on("click", function () {
    if (chosenTypes[currentScenario]) {
      showResult();
    }
  });

  $("#restartButton").on("click", function () {
    currentScenario = 0;
    chosenTypes.length = 0;
    $("#result").hide();
    $("#intro").show();
  });
});
