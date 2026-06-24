const resumeProfile = {
  name: "黄嘉仪",
  positioning: "新媒体运营 / 内容增长 / 私域转化实习生",
  dimensions: [
    {
      id: "content",
      title: "内容策划与生产",
      weight: 22,
      aliases: ["内容", "选题", "小红书", "公众号", "图文", "文案", "脚本", "标题", "笔记", "推文", "热点", "种草"],
      evidence: "累计产出小红书笔记 125 篇、宠物类推文 56 篇，单篇最高浏览 12w，短视频播放 15.5w。",
    },
    {
      id: "video",
      title: "视觉与短视频制作",
      weight: 13,
      aliases: ["短视频", "拍摄", "剪辑", "PR", "PS", "AE", "剪映", "达芬奇", "排版", "封面", "主图", "详情页"],
      evidence: "熟练 PR、PS、AE、剪映、达芬奇、秀米、可画；制作商品主图、商详、关联页 170+ 张。",
    },
    {
      id: "community",
      title: "用户与社群运营",
      weight: 18,
      aliases: ["社群", "私域", "用户", "企微", "私信", "评论", "留存", "分层", "回访", "转化", "客户", "咨询"],
      evidence: "从 0-1 搭建两个 300 人家长社群，通过资料领取、用户分层、1v1 回访推动客户转化。",
    },
    {
      id: "data",
      title: "数据复盘与增长",
      weight: 20,
      aliases: ["数据", "复盘", "阅读量", "点击率", "互动率", "转化率", "CTR", "曝光", "增长", "看板", "Power BI", "SPSS", "Stata"],
      evidence: "使用后台指标与 SPSS、Stata、Power BI 做复盘，首图重制后同视频播放同比提升 25%。",
    },
    {
      id: "commerce",
      title: "商业转化与活动",
      weight: 14,
      aliases: ["销售", "成交", "活动", "推广", "上新", "电商", "快团团", "GMV", "投流", "促销", "线索", "商业化"],
      evidence: "宠物项目带动销售 272 单、销售额 45.2w；重点产品销量环比增长 28.8%，月销售额突破 50w。",
    },
    {
      id: "collaboration",
      title: "跨部门协作与执行",
      weight: 13,
      aliases: ["协作", "沟通", "对接", "项目", "执行", "统筹", "销售", "客服", "设计", "摄影", "达人", "校园"],
      evidence: "组织 20+ 场线上线下活动，统筹 500 人级活动现场，具备素材、客户、摄影与销售协作经验。",
    },
  ],
};

const demoJD = `新媒体运营实习生
岗位职责：
1. 负责小红书、微信公众号、抖音等平台的内容选题策划、图文排版、短视频脚本、拍摄剪辑与发布；
2. 维护账号评论区与私信，跟进用户咨询，将公域流量引导至社群、企微或小程序，提升留存与转化；
3. 参与品牌活动、产品上新、促销节点和校园推广执行，协助沉淀素材与复盘报告；
4. 定期跟踪阅读量、点击率、互动率、转化率等数据，输出周报和优化建议；
5. 与设计、销售、客服、产品和外部达人协作，推进内容素材获取与项目落地。
任职要求：
市场营销、新闻传播、广告学、电子商务相关专业优先；熟悉小红书平台生态，有内容生产、社群运营、视频剪辑、数据复盘经验者优先。`;

const jdForm = document.querySelector("#jdForm");
const jdFile = document.querySelector("#jdFile");
const jdText = document.querySelector("#jdText");
const loadDemo = document.querySelector("#loadDemo");
const scoreRing = document.querySelector("#scoreRing");
const scoreValue = document.querySelector("#scoreValue");
const resultTitle = document.querySelector("#resultTitle");
const resultSummary = document.querySelector("#resultSummary");
const analysisGrid = document.querySelector("#analysisGrid");
const insightPanel = document.querySelector("#insightPanel");
const siteHeader = document.querySelector(".site-header");
const navLinks = [...document.querySelectorAll(".nav a")];
const scrollProgressBar = document.querySelector("#scrollProgressBar");
const themeToggle = document.querySelector("#themeToggle");
const visitCount = document.querySelector("#visitCount");
const scrollCue = document.querySelector(".scroll-cue");
const quickJdText = document.querySelector("#quickJdText");
const quickMatchBtn = document.querySelector("#quickMatchBtn");
const quickJdFile = document.querySelector("#quickJdFile");
const matchModal = document.querySelector("#matchModal");
const matchModalClose = document.querySelector("#matchModalClose");
const modalScoreRing = document.querySelector("#modalScoreRing");
const modalScoreValue = document.querySelector("#modalScoreValue");
const matchModalTitle = document.querySelector("#matchModalTitle");
const modalResultSummary = document.querySelector("#modalResultSummary");
const modalAnalysisGrid = document.querySelector("#modalAnalysisGrid");
const modalInsightPanel = document.querySelector("#modalInsightPanel");
const musicPlayer = document.querySelector("#musicPlayer");
const musicIcon = document.querySelector("#musicIcon");
const musicStatus = document.querySelector("#musicStatus");
const musicTitle = document.querySelector("#musicTitle");
const musicArtist = document.querySelector("#musicArtist");
const heroSection = document.querySelector("#home");
const cursorTrailLayer = document.querySelector("#cursorTrailLayer");
const typewriterIntro = document.querySelector(".typewriter-intro");
const xhsProjectLink = document.querySelector("#xhsProjectLink");
const backHomeButton = document.querySelector("#backHomeButton");
const homeToast = document.querySelector("#homeToast");
const internshipCarousel = document.querySelector("[data-internship-carousel]");
const xhsProfileUrl = "https://xhslink.com/m/3LnX3f5P3QR";
const previewAudio = new Audio();
const musicLibrary = [
  {
    artistName: "Taylor Swift",
    trackName: "Shake It Off",
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/04/86/32/048632f7-a5c5-0f5d-6213-a9e89c3a99b3/mzaf_8458239339293825693.plus.aac.p.m4a",
  },
  {
    artistName: "Taylor Swift",
    trackName: "Cruel Summer",
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/44/af/81/44af8168-9609-1b85-5048-ada08dceacf3/mzaf_1341699644335558812.plus.aac.p.m4a",
  },
  {
    artistName: "Taylor Swift",
    trackName: "Blank Space",
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/97/b4/f6/97b4f65f-f334-771c-a4f5-5e7b9b42634f/mzaf_17056874752218225925.plus.aac.p.m4a",
  },
  {
    artistName: "Taylor Swift",
    trackName: "Love Story",
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c0/97/7c/c0977c44-63ae-ed3e-59fb-1c247a7fa4b0/mzaf_5342803791766217012.plus.aac.p.m4a",
  },
  {
    artistName: "邓紫棋",
    trackName: "泡沫",
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e8/66/da/e866da50-76d5-32fb-51c4-76d48da5b2b0/mzaf_13527714063244447846.plus.aac.p.m4a",
  },
  {
    artistName: "邓紫棋",
    trackName: "我的秘密",
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/99/8e/96/998e9688-7677-dd02-0fe2-a6db38e2a658/mzaf_9119522477138610811.plus.aac.p.m4a",
  },
  {
    artistName: "邓紫棋",
    trackName: "句号",
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b2/f4/f9/b2f4f916-ca24-521f-f7db-ef4592f89bf2/mzaf_1396372659800014633.plus.aac.p.m4a",
  },
  {
    artistName: "邓紫棋",
    trackName: "天空没有极限",
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/28/a9/d4/28a9d421-b495-8202-22c6-094a1c9f1f98/mzaf_1854195266594239761.plus.aac.p.m4a",
  },
  {
    artistName: "Jerry 的随机歌单",
    trackName: "Chill Track 01",
    previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    artistName: "Jerry 的随机歌单",
    trackName: "Chill Track 02",
    previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    artistName: "Jerry 的随机歌单",
    trackName: "Chill Track 03",
    previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];
let currentTrack = null;
let lastTrackIndex = -1;
let skipAttempts = 0;
let lastCursorSparkAt = 0;

renderEmptyDimensions();
initTheme();
initVisitCount();
syncHeaderState();
initCursorSparkles();
initTypewriterIntro();
initInternshipCarousel();

window.addEventListener("scroll", syncHeaderState, { passive: true });
window.addEventListener("load", () => window.setTimeout(syncHeaderState, 80));
window.addEventListener("hashchange", () => window.setTimeout(syncHeaderState, 80));

themeToggle.addEventListener("click", toggleTheme);

function returnHome() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
  homeToast?.classList.add("is-visible");
  window.setTimeout(() => homeToast?.classList.remove("is-visible"), 1800);
}

window.returnHome = returnHome;

backHomeButton?.addEventListener("click", returnHome);

document.querySelectorAll('a[href*="xhslink.com"], a[href*="xiaohongshu.com"], #xhsProjectLink').forEach((link) => {
  link.setAttribute("href", xhsProfileUrl);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

function initInternshipCarousel() {
  if (!internshipCarousel) return;

  const viewport = internshipCarousel.querySelector("[data-internship-viewport]");
  const track = internshipCarousel.querySelector("[data-internship-track]");
  const cards = [...internshipCarousel.querySelectorAll(".internship-card")];
  const prev = internshipCarousel.querySelector("[data-internship-prev]");
  const next = internshipCarousel.querySelector("[data-internship-next]");
  const dots = internshipCarousel.querySelector("[data-internship-dots]");
  let pageCount = 1;
  let activePage = 0;

  const cardStep = () => {
    const firstCard = cards[0];
    if (!firstCard) return viewport.clientWidth;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
    return firstCard.getBoundingClientRect().width + gap;
  };

  const visibleCards = () => {
    if (window.matchMedia("(max-width: 720px)").matches) return 1;
    if (window.matchMedia("(max-width: 1120px)").matches) return Math.min(2, cards.length);
    return Math.min(3, cards.length);
  };

  const renderDots = () => {
    const nextPageCount = Math.max(1, cards.length - visibleCards() + 1);
    if (nextPageCount !== pageCount || dots.childElementCount !== nextPageCount) {
      pageCount = nextPageCount;
      dots.innerHTML = Array.from({ length: pageCount }, (_, index) =>
        `<button type="button" aria-label="查看第 ${index + 1} 组实习经历" data-internship-page="${index}"></button>`
      ).join("");
      dots.querySelectorAll("button").forEach((dot) => {
        dot.addEventListener("click", () => scrollToPage(Number(dot.dataset.internshipPage)));
      });
    }
  };

  const syncControls = () => {
    renderDots();
    activePage = Math.min(pageCount - 1, Math.max(0, Math.round(viewport.scrollLeft / cardStep())));
    prev.disabled = activePage === 0;
    next.disabled = activePage === pageCount - 1;
    dots.querySelectorAll("button").forEach((dot, index) => {
      dot.classList.toggle("is-active", index === activePage);
      dot.setAttribute("aria-current", index === activePage ? "true" : "false");
    });
  };

  const scrollToPage = (page) => {
    activePage = Math.min(pageCount - 1, Math.max(0, page));
    viewport.scrollTo({ left: activePage * cardStep(), behavior: "smooth" });
  };

  prev.addEventListener("click", () => scrollToPage(activePage - 1));
  next.addEventListener("click", () => scrollToPage(activePage + 1));
  viewport.addEventListener("scroll", () => window.requestAnimationFrame(syncControls), { passive: true });
  window.addEventListener("resize", () => window.requestAnimationFrame(syncControls), { passive: true });
  syncControls();
}

loadDemo.addEventListener("click", () => {
  jdText.value = demoJD;
  runAnalysis(demoJD);
});

jdForm.addEventListener("submit", (event) => {
  event.preventDefault();
  runAnalysis(jdText.value);
});

jdFile.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;

  const text = await readJDFile(file);
  jdText.value = text;
  runAnalysis(text);
});

quickJdText.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    quickMatchBtn.click();
  }
});

quickJdFile.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;

  const text = await readJDFile(file);
  quickJdText.value = file.name;
  jdText.value = text;
  runAnalysis(text);
  openMatchModal();
});

window.runHomepageMatch = runHomepageMatch;

matchModalClose?.addEventListener("click", closeMatchModal);
matchModal?.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-match]")) closeMatchModal();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMatchModal();
});

function initCursorSparkles() {
  if (!heroSection || !cursorTrailLayer) return;

  const emitSpark = (event) => {
    if (!isInsideHero(event)) return;
    const now = performance.now();
    if (now - lastCursorSparkAt < 90) return;
    lastCursorSparkAt = now;
    renderCursorSpark(event);
  };

  window.addEventListener("mousemove", emitSpark, { passive: true });
  window.addEventListener("pointermove", emitSpark, { passive: true });
}

function isInsideHero(event) {
  const rect = heroSection.getBoundingClientRect();
  return event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
}

function renderCursorSpark(event) {
  const spark = document.createElement("span");
  spark.className = "cursor-spark";
  spark.textContent = "✨";
  spark.style.left = `${event.clientX}px`;
  spark.style.top = `${event.clientY}px`;
  spark.style.setProperty("--float-x", `${Math.round((Math.random() - 0.5) * 42)}px`);
  spark.style.setProperty("--float-y", `${Math.round(-26 - Math.random() * 26)}px`);
  cursorTrailLayer.appendChild(spark);
  window.setTimeout(() => spark.remove(), 980);
}

function initTypewriterIntro() {
  if (!typewriterIntro) return;
  if (typewriterIntro.dataset.ready === "true") return;
  typewriterIntro.dataset.ready = "true";
  const fullText = typewriterIntro.dataset.text || typewriterIntro.textContent.trim();
  let index = 0;
  typewriterIntro.textContent = "";
  typewriterIntro.classList.remove("is-complete");

  const typeNext = () => {
    typewriterIntro.textContent = fullText.slice(0, index);
    index += 1;

    if (index <= fullText.length) {
      window.setTimeout(typeNext, 32);
      return;
    }

    window.setTimeout(() => typewriterIntro.classList.add("is-complete"), 180);
  };

  window.setTimeout(typeNext, 520);
}

function runHomepageMatch() {
  const text = quickJdText.value.trim();
  jdText.value = text;
  runAnalysis(text);
  openMatchModal();
}

function openMatchModal() {
  syncMatchModal();
  matchModal?.classList.add("is-open");
  matchModal?.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeMatchModal() {
  matchModal?.classList.remove("is-open");
  matchModal?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function syncMatchModal() {
  if (!matchModal) return;
  modalScoreRing?.style.setProperty("--score", scoreValue.textContent || "0");
  if (modalScoreValue) modalScoreValue.textContent = scoreValue.textContent || "0";
  if (matchModalTitle) matchModalTitle.textContent = resultTitle.textContent;
  if (modalResultSummary) modalResultSummary.textContent = resultSummary.textContent;
  if (modalAnalysisGrid) modalAnalysisGrid.innerHTML = analysisGrid.innerHTML;
  if (modalInsightPanel) modalInsightPanel.innerHTML = insightPanel.innerHTML;
}

async function readJDFile(file) {
  const fileName = file.name.toLowerCase();

  if (fileName.endsWith(".txt") || file.type.includes("text")) {
    return file.text();
  }

  if (fileName.endsWith(".pdf") || file.type === "application/pdf") {
    return readPDF(file);
  }

  return "当前原型暂时支持 TXT 与 PDF。请把 DOC/DOCX 中的 JD 文本复制到输入框后再分析。";
}

async function readPDF(file) {
  try {
    const pdfjsLib = await import("https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.min.mjs");
    pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs";
    const data = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data }).promise;
    const pages = [];

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
      const page = await pdf.getPage(pageNumber);
      const content = await page.getTextContent();
      pages.push(content.items.map((item) => item.str).join(" "));
    }

    return pages.join("\n\n");
  } catch (error) {
    console.error(error);
    return "PDF 解析失败。请复制 JD 文本到输入框后再试。";
  }
}

function runAnalysis(rawText) {
  const text = normalize(rawText);
  if (!text || text.length < 12) {
    setScore(0);
    resultTitle.textContent = "需要更多 JD 信息";
    resultSummary.textContent = "请至少输入岗位职责、任职要求或加分项，系统才能判断匹配度。";
    renderEmptyDimensions();
    insightPanel.innerHTML = "<h3>面试表达建议</h3><p>补充 JD 内容后再生成建议。</p>";
    return;
  }

  const dimensionScores = resumeProfile.dimensions.map((dimension) => scoreDimension(dimension, text));
  const weightedScore = Math.round(
    dimensionScores.reduce((sum, item) => sum + item.score * item.weight, 0) /
      resumeProfile.dimensions.reduce((sum, item) => sum + item.weight, 0)
  );

  setScore(weightedScore);
  renderResultSummary(weightedScore, dimensionScores);
  renderDimensions(dimensionScores);
  renderInsights(weightedScore, dimensionScores);
}

function scoreDimension(dimension, text) {
  const hits = dimension.aliases.filter((alias) => text.includes(normalize(alias)));
  const hitRatio = hits.length / dimension.aliases.length;
  const score = Math.min(100, Math.round((hitRatio * 120 + (hits.length >= 2 ? 18 : 0)) * keywordDensityBoost(text, hits)));

  return {
    ...dimension,
    hits,
    score,
  };
}

function keywordDensityBoost(text, hits) {
  if (!hits.length) return 1;
  const totalMentions = hits.reduce((sum, keyword) => {
    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return sum + (text.match(new RegExp(escaped, "g")) || []).length;
  }, 0);
  return Math.min(1.18, 1 + totalMentions * 0.015);
}

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[，。！？、；：“”‘’（）【】《》]/g, "");
}

function setScore(score) {
  scoreRing.style.setProperty("--score", score);
  scoreValue.textContent = score;
}

function renderResultSummary(score, dimensionScores) {
  const strong = dimensionScores.filter((item) => item.score >= 70).map((item) => item.title);
  const weak = dimensionScores.filter((item) => item.score > 0 && item.score < 45).map((item) => item.title);

  if (score >= 82) {
    resultTitle.textContent = "高度匹配，建议优先投递";
    resultSummary.textContent = `JD 与你的 ${strong.slice(0, 3).join("、")} 经历高度重合，页面应重点突出可量化结果与作品链接。`;
  } else if (score >= 65) {
    resultTitle.textContent = "较匹配，需要强化证据";
    resultSummary.textContent = `已有较强相关经历。建议针对 ${weak[0] || "岗位加分项"} 补充更直接的项目案例或面试话术。`;
  } else if (score >= 45) {
    resultTitle.textContent = "中等匹配，适合定制简历";
    resultSummary.textContent = "岗位关键词有部分重合，但需要在首页和项目页更明确地回应 JD 的核心任务。";
  } else {
    resultTitle.textContent = "匹配较弱，需重新定位";
    resultSummary.textContent = "这份 JD 可能偏离新媒体运营主线，建议先确认是否值得投递，或补充对应能力证据。";
  }
}

function renderEmptyDimensions() {
  analysisGrid.innerHTML = resumeProfile.dimensions
    .map(
      (dimension) => `
        <article class="dimension-card">
          <div class="dimension-top">
            <h3>${dimension.title}</h3>
            <span class="badge">待分析</span>
          </div>
          <div class="progress"><span style="--width: 0%"></span></div>
          <p>${dimension.evidence}</p>
          <div class="keyword-list"><span>等待 JD</span></div>
        </article>
      `
    )
    .join("");
}

function renderDimensions(dimensionScores) {
  analysisGrid.innerHTML = dimensionScores
    .map(
      (dimension) => `
        <article class="dimension-card">
          <div class="dimension-top">
            <h3>${dimension.title}</h3>
            <span class="badge">${dimension.score}分</span>
          </div>
          <div class="progress"><span style="--width: ${dimension.score}%"></span></div>
          <p>${dimension.evidence}</p>
          <div class="keyword-list">
            ${
              dimension.hits.length
                ? dimension.hits.slice(0, 8).map((hit) => `<span>${hit}</span>`).join("")
                : "<span>JD 未明显提及</span>"
            }
          </div>
        </article>
      `
    )
    .join("");
}

function renderInsights(score, dimensionScores) {
  const top = [...dimensionScores].sort((a, b) => b.score - a.score).slice(0, 3);
  const gaps = [...dimensionScores].sort((a, b) => a.score - b.score).filter((item) => item.score < 55).slice(0, 2);
  const scoreLine =
    score >= 75
      ? "这份 JD 很适合把网站首页改成强投递版：第一屏直接展示匹配分、核心证据和作品入口。"
      : "这份 JD 可以投，但建议先把弱项相关经历前置，避免 HR 只看到泛运营经历。";

  insightPanel.innerHTML = `
    <h3>面试表达建议</h3>
    <ul>
      <li>${scoreLine}</li>
      <li>优先强调：${top.map((item) => `${item.title}（${item.evidence}）`).join("；")}</li>
      ${
        gaps.length
          ? `<li>可补强：${gaps.map((item) => item.title).join("、")}。建议在作品页增加对应截图、数据看板或复盘文档。</li>`
          : "<li>六个核心能力维度均有命中，建议准备 1 个完整案例讲清“目标-动作-结果-复盘”。</li>"
      }
    </ul>
  `;
}

function initTheme() {
  const savedTheme = localStorage.getItem("jerry-site-theme") || "color";
  applyTheme(savedTheme);
}

function toggleTheme() {
  if (window.toggleSiteTheme) {
    window.toggleSiteTheme();
    return;
  }

  applyTheme(document.documentElement.dataset.theme === "mint" ? "color" : "mint");
}

function applyTheme(theme) {
  if (window.applySiteTheme) {
    window.applySiteTheme(theme);
    return;
  }

  if (theme === "mint") {
    document.documentElement.dataset.theme = "mint";
    themeToggle.textContent = "☾";
    themeToggle.setAttribute("aria-label", "切换到蓝紫粉主题");
    return;
  }

  document.documentElement.dataset.theme = "color";
  themeToggle.textContent = "☼";
  themeToggle.setAttribute("aria-label", "切换到黑白薄荷主题");
}

function initVisitCount() {
  if (!visitCount) return;

  const minVisits = 1200;
  const maxVisits = 1500;
  const visitRange = maxVisits - minVisits + 1;
  const nextVisitCount = minVisits + Math.floor(Math.random() * visitRange);

  visitCount.textContent = nextVisitCount.toLocaleString("zh-CN");
}

function toggleMusic() {
  if (!previewAudio.paused) {
    previewAudio.pause();
    return;
  }

  if (currentTrack) {
    previewAudio.play().catch(() => playRandomTrack());
    return;
  }

  playRandomTrack();
}

function playRandomTrack() {
  musicStatus.textContent = "LOADING";
  musicIcon.textContent = "…";
  skipAttempts += 1;
  const nextIndex = getRandomTrackIndex();
  currentTrack = musicLibrary[nextIndex];
  lastTrackIndex = nextIndex;
  previewAudio.src = currentTrack.previewUrl;
  previewAudio.volume = 0.55;
  musicTitle.textContent = currentTrack.trackName;
  musicArtist.textContent = currentTrack.artistName;

  previewAudio.play().catch(() => {
    if (skipAttempts < musicLibrary.length) {
      playRandomTrack();
    } else {
      showMusicError();
    }
  });
}

function getRandomTrackIndex() {
  if (musicLibrary.length === 1) return 0;
  let nextIndex = Math.floor(Math.random() * musicLibrary.length);
  while (nextIndex === lastTrackIndex) {
    nextIndex = Math.floor(Math.random() * musicLibrary.length);
  }
  return nextIndex;
}

function updateMusicState(isPlaying) {
  if (isPlaying) {
    skipAttempts = 0;
  }
  musicPlayer.classList.toggle("is-playing", isPlaying);
  musicIcon.textContent = isPlaying ? "Ⅱ" : currentTrack ? "▶" : "▶";
  musicStatus.textContent = isPlaying ? "PLAYING" : currentTrack ? "PAUSED" : "和 Jerry 一起听歌";
}

function showMusicError() {
  updateMusicState(false);
  musicStatus.textContent = "PREVIEW UNAVAILABLE";
  musicTitle.textContent = "换一首试试";
  musicArtist.textContent = "试听源暂时没有响应";
}

function syncHeaderState() {
  const hero = document.querySelector("#home");
  const triggerPoint = hero ? hero.offsetHeight - siteHeader.offsetHeight - 24 : 40;
  const cueHidePoint = hero ? Math.max(120, hero.offsetHeight * 0.56) : 120;
  const about = document.querySelector("#about");
  const backHomeTrigger = about ? about.offsetTop - 180 : triggerPoint;
  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
  siteHeader.classList.toggle("scrolled", window.scrollY >= triggerPoint);
  scrollCue?.classList.toggle("is-hidden", window.scrollY > cueHidePoint);
  backHomeButton?.classList.toggle("is-visible", window.scrollY >= backHomeTrigger || (window.location.hash && window.location.hash !== "#home"));
  if (scrollProgressBar) {
    scrollProgressBar.style.transform = `scaleX(${progress})`;
  }

  syncActiveNav();
}

function syncActiveNav() {
  const marker = window.scrollY + siteHeader.offsetHeight + 120;
  const candidates = navLinks
    .map((link) => {
      const id = link.getAttribute("href");
      const section = id && document.querySelector(id);
      if (!section || section.offsetHeight === 0) return null;
      return { link, top: section.offsetTop };
    })
    .filter(Boolean)
    .sort((a, b) => a.top - b.top);

  const current = candidates.filter((item) => item.top <= marker).at(-1) || candidates[0];
  if (!current) return;

  navLinks.forEach((link) => link.classList.toggle("active", link === current.link));
}
