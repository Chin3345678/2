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
    name: "蠟筆小新-野原廣志 (ESFJ)",
    description: "熱心又有責任感的社交高手，下班再累也不忘逗孩子笑，雖然鞋子一脫全家昏倒，但沒人懷疑他對家的愛是最濃的。",
    image: "https://chin3345678.github.io/5/images/hiroshi.png"
  },
  INTJ: {
    name: "名偵探柯南-毛利小五郎 (INTJ)",
    description: "外表看起來散漫、內心其實縝密，是用邏輯思考撐起家的神秘智將。行動低調，腦袋高速運轉，只是行動力…有時交給柯南。",
    image: "https://chin3345678.github.io/5/images/kogoro.png"
  },
  ISTJ: {
    name: "櫻桃小丸子-櫻廣志 (ISTJ)",
    description: "常常負責家裡的經濟開支、講求秩序，會關心錢花到哪裡，行事保守又重視責任，回家後絕不馬虎——尤其是對冰箱裡的啤酒數量。",
    image: "https://chin3345678.github.io/5/images/sakura.png"
  },
  ENFP: {
    name: "火影忍者-漩渦鳴人 (ENFP)",
    description: "熱血樂觀、感染力十足，是用夢想帶動家的行動派爸爸。雖然不太擅長細節，但孩子知道他永遠站在自己這邊。",
    image: "https://chin3345678.github.io/5/images/naruto.png"
  },
  ISFJ: {
    name: "間諜家家酒-黃昏 佛傑 (ISFJ)",
    description: "細心穩重、默默付出，是用行動守護家人安全感的職人型爸爸。外表冷靜，內心滿滿都是對家的溫柔與堅持。",
    image: "https://chin3345678.github.io/5/images/loidy.png"
  },
  ESTJ: {
    name: "海綿寶寶-蟹老閥 (ESTJ)",
    description: "講求規則、效率滿分，是能把家庭經營得像公司一樣穩的行動派爸爸。最愛的三樣東西：錢、錢、還有錢——但家人永遠是他最保值的投資。",
    image: "https://chin3345678.github.io/5/images/krabs.png"
  },
  ISFP: {
    name: "佩佩豬-豬爸爸 (ISFP)",
    description: "溫柔善感、慢條斯理，是用陪伴說愛的藝術型爸爸。他的世界沒有高聲斥責，只有靜靜坐在你身邊的溫暖。",
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
  $("#resultTitle").text(你的人格類型是：${profile.name});
  $("#characterImage").attr("src", profile.image);
  $("#resultDescription").text(profile.description);
  $("#result").show();

  $("#shareButton").attr(
    "href",
    https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://chin3345678.github.io/2/")}&quote=${encodeURIComponent("我在「菲比英文-動漫爸爸 MBTI 心理測驗」中是 " + profile.name + "你也來測看看吧!")}
  );
  $("#lineShareButton").attr(
    "href",
    https://line.me/R/msg/text/?${encodeURIComponent("我在「菲比英文-動漫爸爸 MBTI 心理測驗」中是 " + profile.name + "！你也來測看看吧!\nhttps://chin3345678.github.io/2/")}
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
