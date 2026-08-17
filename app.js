// 1. 全站 100% 完整雙語字典
const LANG = {
    zh: {
        docTitle: "棲心樹洞 Stillhollow · 安放心事，歸於靜謐",
        sosMini: "🆘 即時熱線",
        title: "🌿 棲心樹洞 · Stillhollow",
        sub: "你此刻的存在，就已經足夠。此處純粹接納，為你留下一方安寧天地。",
        breath: "隨心跟隨圓圈呼吸，或是靜靜看著，都是溫柔的放鬆。",
        breathInhale: "吸氣",
        breathHold: "屏息",
        breathExhale: "呼氣",
        emotionLabel: "此刻的感受（挑一個最順眼的就好）：",
        emotions: [
            { id: "e1", val: "☁️ 順其自然 · 隨意感受" },
            { id: "e2", val: "☀️ 平靜自在" },
            { id: "e3", val: "🌤️ 微微擔憂" },
            { id: "e4", val: "🌧️ 鬱悶低落" },
            { id: "e5", val: "⛈️ 委屈憤怒" },
            { id: "e6", val: "⛓️ 自責內疚" },
            { id: "e7", val: "🌫️ 迷茫孤單" }
        ],
        sudsLabel: "目前身體的緊繃感",
        sudsLow: "0 · 輕鬆舒展",
        sudsHigh: "10 · 身體需要溫柔關注",
        gentleBtn: "🌱 感覺到身體有點緊繃？試試 1 分鐘感官著陸",
        tabFree: "📝 自由傾訴",
        tabPerspective: "🔍 換個濾鏡",
        tabCompassion: "💛 溫柔對話",
        btnLetGo: "🍃 輕柔放下",
        btnSave: "🔒 封存於此",
        btnGround: "🧘 感官著陸",
        btnExport: "📦 打包備份",
        btnImport: "📂 匯入備份",
        btnPrint: "🖨️ 紙本留存",
        btnGuide: "📖 使用指引與隱私說明",
        crisisBtn: "需要即時傾聽？查看各地支援專線",
        disclaimer: "本工具為自我探索與情緒梳理輔助，提供溫柔沉澱空間，醫療與診斷請尋求合格專業人員。",
        modalTitle: "🍃 溫柔地與文字道別",
        modalDesc: "在文字隨風消散前，可以留下一句送給自己的話（留白也完全沒關係，直接放下即可）：",
        modalPlaceholder: "例如：我已盡力，此刻我選擇休息。",
        modalBack: "回到書寫",
        modalConfirm: "輕柔放下，隨風而逝",
        placeholderFree: "你可以從這裡開始…\n• 今天我感覺到最強烈的身體感受是…\n• 其實我真正想說的是…\n寫下一字一句，或是任何符號，都剛剛好。",
        placeholderCbt1: "【如實看見】像是用相機拍下剛才的畫面，發生了什麼事？",
        placeholderCbt2: "【腦中念頭】你對自己說了什麼苛刻的話？",
        placeholderCbt3: "【摯友視角】如果是你最疼惜的好友身處此境，你會如何溫柔支持他？",
        placeholderAct1: "【覺察念頭】寫下當下的困擾（例如：『我覺察到我正在焦慮...』）",
        placeholderAct2: "【給自己的擁抱】無論如何，此刻的我已經盡力了。寫下一句安慰自己的話...",
        sosTitle: "💛 我們一直在這裡",
        sosDesc: "當你需要聲音的陪伴時，各地的專業求助專線為你開放：",
        sosClose: "我知道了，先回到呼吸",
        hotlines: [
            { region: "🇭🇰 香港", name: "生命熱線", tel: "23820000", display: "2382 0000" },
            { region: "🇭🇰 香港", name: "撒瑪利亞防止自殺會", tel: "23892222", display: "2389 2222" },
            { region: "🇭🇰 香港", name: "情緒通 24小時熱線", tel: "18111", display: "18111" },
            { region: "🇹🇼 台灣", name: "衛福部安心專線", tel: "1925", display: "1925" },
            { region: "🇹🇼 台灣", name: "生命線協談專線", tel: "1995", display: "1995" },
            { region: "🇨🇳 內地", name: "希望24熱線 (全國)", tel: "4001619995", display: "400-161-9995" },
            { region: "🇨🇳 內地", name: "北京心理危機干預熱線", tel: "01082951332", display: "010-82951332" },
            { region: "🇲🇴 澳門", name: "明愛生命熱線", tel: "28525222", display: "2852 5222" },
            { region: "🇯🇵 日本", name: "心之健康相談 (こころの健康相談)", tel: "0570064556", display: "0570-064-556" },
            { region: "🇯🇵 日本", name: "生命之電話 (いのちの電話)", tel: "0120783556", display: "0120-783-556" },
            { region: "🇰🇷 韓國", name: "精神健康諮詢熱線 (정신건강상담전화)", tel: "15770199", display: "1577-0199" },
            { region: "🇰🇷 韓國", name: "自殺預防專線 (자살예방상담전화)", tel: "109", display: "109" },
            { region: "🇸🇬 新加坡", name: "Samaritans of Singapore (SOS)", tel: "1767", display: "1767" },
            { region: "🇲🇾 馬來西亞", name: "Befrienders 心靈扶助會", tel: "0376272929", display: "03-7627 2929" }
        ],
        groundingTitle: "🌱 5-4-3-2-1 感官著陸",
        groundingDesc: "跟著步驟，慢慢將注意力拉回此時此刻的身體：",
        groundingSteps: [
            { icon: "👀", name: "看 (5)", desc: "找到身邊 <strong>5</strong> 種不同的顏色（例如：白色的牆、綠色盆栽...）" },
            { icon: "🖐️", name: "觸 (4)", desc: "感受 <strong>4</strong> 種不同的材質觸感（桌面、衣物、掌心、椅背...）" },
            { icon: "👂", name: "聽 (3)", desc: "仔細聽 <strong>3</strong> 種環境的聲音（風扇、呼吸聲、窗外的聲音...）" },
            { icon: "👃", name: "聞 (2)", desc: "覺察 <strong>2</strong> 種氣味（空氣、手上的氣味...）" },
            { icon: "👄", name: "嚐 (1)", desc: "感受 <strong>1</strong> 種口中的味道（喝一口溫水，感受溫度）" }
        ],
        groundingClose: "我感覺平靜一些了，回到書寫",
        guideTitle: "🌿 棲心樹洞 · 使用指南與隱私承諾",
        guideClose: "我知道了，回到樹洞",
        guideHtml: `
            <p><strong>1. 這是一個什麼樣的地方？</strong><br>
            這是一個純本地、無伺服器、不聯網的私密樹洞。你可以跟著節奏深呼吸，挑選此刻的身體感受，自由寫下任何念頭。</p>
            
            <p style="margin-top:10px;"><strong>2. 兩種文字處理方式：</strong><br>
            • <strong>🍃 輕柔放下</strong>：寫完後直接隨風消散，不留任何痕跡。<br>
            • <strong>🔒 封存於此</strong>：輸入你自訂的密鑰，透過金融級軍規演算法（AES-256）加密儲存於你的瀏覽器本地，任何人都無法偷看。</p>

            <p style="margin-top:10px;"><strong>3. 數據與隱私承諾：</strong><br>
            • <strong>零雲端</strong>：你的文字絕不上傳至任何伺服器或 AI 模型。<br>
            • <strong>零追蹤</strong>：完全沒有廣告追蹤碼或 Cookie。<br>
            • <strong>備份與還原</strong>：可透過工具列的「📦 打包備份」將加密資料下載至電腦，日後隨時「📂 匯入備份」還原。</p>

            <p style="margin-top:10px;"><strong>4. 溫馨提醒：</strong><br>
            若清除瀏覽器快取，本地儲存的紀錄將會一併清除，建議定期手動備份。本工具為自我沉澱輔助，若承受極大痛苦請隨時尋求專業醫療或撥打即時熱線。</p>
        `,
        promptSaveTitle: "🔒 封存此篇心事",
        promptSaveDesc: "請設定一組專屬於你的私密密鑰（此密鑰僅儲存於你的裝置，絕不上傳）：",
        promptSavePlaceholder: "請輸入密鑰...",
        promptBackupTitle: "📦 設定備份密碼",
        promptBackupDesc: "請設定一組「備份專屬密碼」（用於雙重保護備份檔案，請務必牢記）：",
        promptBackupPlaceholder: "請輸入備份密碼...",
        promptImportTitle: "📂 匯入備份檔案",
        promptImportDesc: "請輸入此備份檔案的「專屬密碼」以進行解密還原：",
        promptImportPlaceholder: "請輸入備份密碼...",
        promptConfirm: "確認",
        promptCancel: "取消",
        ruminationTitle: "🧡 溫柔的小歇",
        ruminationDesc: "你已經在這裡沉澱一會兒了。大腦跟身體一樣需要休息。",
        ruminationWater: "☕ 去喝口溫水",
        ruminationRest: "🪑 閉眼深呼吸",
        toastRest: "🪑 給自己 3 分鐘，閉上眼睛，感受呼吸的起伏。",
        toastWater: "☕ 慢慢喝口溫水，感受水的溫度。我們隨時都在。",
        toastReleased: "文字已隨風釋放，願清風帶給你安寧。",
        toastEmptyPwd: "請輸入一串密鑰，或按「取消」放棄儲存。",
        toastSaved: "🔒 已加密封存於本機裝置（600k PBKDF2 + AES-256）。",
        toastNoBackup: "目前沒有儲存任何紀錄，無需備份。",
        toastBackupPwdEmpty: "密碼不能為空白。",
        toastBackupDone: "✅ 備份檔已完成雙重加密並下載！",
        toastBackupFail: "❌ 備份失敗，請重試。",
        toastInvalidFile: "❌ 無效的備份檔案格式（JSON 解析失敗）。",
        toastDecrypting: "⏳ 正在驗證與解密備份檔...",
        toastRestored: (add, skip) => `✅ 成功還原：新增 ${add} 筆${skip > 0 ? `（已自動過濾 ${skip} 筆重複）` : ''}`,
        toastRestoreFail: "❌ 資料結構無效或備份檔已損毀。",
        toastDecryptFail: "❌ 解密失敗，密碼錯誤或檔案已損毀。"
    },
    en: {
        docTitle: "Stillhollow · A Sanctuary for the Unspoken",
        sosMini: "🆘 Crisis Lines",
        title: "🌿 Stillhollow",
        sub: "You are already enough, just as you are. A sanctuary of pure acceptance and quiet ease.",
        breath: "Breathe along gently with the circle, or simply rest your eyes here.",
        breathInhale: "Inhale",
        breathHold: "Hold",
        breathExhale: "Exhale",
        emotionLabel: "Right now, what feels closest (pick whatever feels easy):",
        emotions: [
            { id: "e1", val: "☁️ Open & Allowing" },
            { id: "e2", val: "☀️ Calm & Grounded" },
            { id: "e3", val: "🌤️ Mild Worry" },
            { id: "e4", val: "🌧️ Heavy & Low" },
            { id: "e5", val: "⛈️ Hurt & Anger" },
            { id: "e6", val: "⛓️ Self-Blame & Guilt" },
            { id: "e7", val: "🌫️ Lost & Alone" }
        ],
        sudsLabel: "Current physical tension level",
        sudsLow: "0 · Relaxed & Ease",
        sudsHigh: "10 · Body needs gentle care",
        gentleBtn: "🌱 Feeling bodily tension? Try 1-min grounding",
        tabFree: "📝 Free Journal",
        tabPerspective: "🔍 Shift View",
        tabCompassion: "💛 Self-Compassion",
        btnLetGo: "🍃 Gently Release",
        btnSave: "🔒 Seal Here",
        btnGround: "🧘 Grounding",
        btnExport: "📦 Backup Vault",
        btnImport: "📂 Import Vault",
        btnPrint: "🖨️ Print View",
        btnGuide: "📖 Guide & Privacy FAQ",
        crisisBtn: "Need someone to listen? View crisis support lines",
        disclaimer: "This is a self-reflection aid offering quiet space. For clinical care, please seek qualified professionals.",
        modalTitle: "🍃 Mindfully Releasing",
        modalDesc: "Leave a gentle whisper for yourself, or simply journey on (leaving it blank is perfectly fine):",
        modalPlaceholder: "e.g., I did my best, and I choose to rest now.",
        modalBack: "Return",
        modalConfirm: "Gently Release",
        placeholderFree: "Start from here…\n• What I physically feel most today is…\n• What I truly want to say is…\nA single word, a symbol, or anything you share is wonderful.",
        placeholderCbt1: "[Mindful Camera] As if capturing with a lens, what happened?",
        placeholderCbt2: "[Inner Voice] What harsh words did you say to yourself?",
        placeholderCbt3: "[Dear Friend] If your most beloved friend were here, how would you support them?",
        placeholderAct1: "[Notice] Write down the disturbance (e.g., 'I notice I am feeling anxious...')",
        placeholderAct2: "[Self-Hug] Regardless, I have done my best. A kind word for myself...",
        sosTitle: "💛 We Are Always Here",
        sosDesc: "When you need a compassionate voice, these support lines are available:",
        sosClose: "Understood, back to breathing",
        hotlines: [
            { region: "🇭🇰 Hong Kong", name: "Suicide Prevention Services", tel: "23820000", display: "2382 0000" },
            { region: "🇭🇰 Hong Kong", name: "The Samaritans (Multilingual)", tel: "28960000", display: "2896 0000" },
            { region: "🇹🇼 Taiwan", name: "PeaceLine", tel: "1925", display: "1925" },
            { region: "🇨🇳 Mainland China", name: "HopeLine (National)", tel: "4001619995", display: "400-161-9995" },
            { region: "🇲🇴 Macau", name: "Caritas Life Hope Hotline", tel: "28525222", display: "2852 5222" },
            { region: "🇯🇵 Japan", name: "TELL Lifeline (English/Japanese)", tel: "0357740992", display: "03-5774-0992" },
            { region: "🇯🇵 Japan", name: "Inochi no Denwa (生命之電話)", tel: "0120783556", display: "0120-783-556" },
            { region: "🇰🇷 South Korea", name: "Mental Health Hotline (정신건강상담)", tel: "15770199", display: "1577-0199" },
            { region: "🇰🇷 South Korea", name: "Crisis Hotline (자살예방상담)", tel: "109", display: "109" },
            { region: "🇸🇬 Singapore", name: "SOS 24h CareLine", tel: "1767", display: "1767" },
            { region: "🇲🇾 Malaysia", name: "Befrienders KL", tel: "0376272929", display: "03-7627 2929" },
            { region: "🇺🇸 USA & Canada", name: "Suicide & Crisis Lifeline", tel: "988", display: "988" },
            { region: "🇬🇧 UK", name: "Samaritans UK", tel: "116123", display: "116 123" },
            { region: "🇦🇺 Australia", name: "Lifeline", tel: "131114", display: "13 11 14" }
        ],
        groundingTitle: "🌱 5-4-3-2-1 Sensory Grounding",
        groundingDesc: "Gently guide your attention back to your body and surroundings:",
        groundingSteps: [
            { icon: "👀", name: "See (5)", desc: "Spot <strong>5</strong> different colors around you (e.g., wall, plant, sky...)" },
            { icon: "🖐️", name: "Touch (4)", desc: "Notice <strong>4</strong> physical textures (desk, clothes, palm, chair...)" },
            { icon: "👂", name: "Hear (3)", desc: "Listen for <strong>3</strong> ambient sounds (fan, breath, outside...)" },
            { icon: "👃", name: "Smell (2)", desc: "Sense <strong>2</strong> subtle scents (fresh air, soap, skin...)" },
            { icon: "👄", name: "Taste (1)", desc: "Notice <strong>1</strong> taste (take a sip of warm water, sense temperature)" }
        ],
        groundingClose: "I feel more grounded, back to writing",
        guideTitle: "🌿 Stillhollow · Guide & Privacy",
        guideClose: "Understood, return to sanctuary",
        guideHtml: `
            <p><strong>1. What is Stillhollow?</strong><br>
            A private, zero-knowledge, offline sanctuary for your thoughts. Breathe along with the circle, notice your feelings, and write freely without judgment.</p>
            
            <p style="margin-top:10px;"><strong>2. Two Ways to Process Thoughts:</strong><br>
            • <strong>🍃 Gently Release</strong>: Let your words dissipate into the wind without saving any trace.<br>
            • <strong>🔒 Seal Here</strong>: Encrypt your entry with your own password using on-device AES-256 military-grade encryption.</p>

            <p style="margin-top:10px;"><strong>3. Privacy & Security:</strong><br>
            • <strong>Zero Cloud</strong>: Your data never leaves your browser and is never uploaded to any server or AI.<br>
            • <strong>Zero Tracking</strong>: No cookies, no analytics, no ads.<br>
            • <strong>Backup & Restore</strong>: Use "📦 Backup Vault" to download an encrypted backup, and "📂 Import Vault" to restore anytime.</p>

            <p style="margin-top:10px;"><strong>4. Gentle Reminder:</strong><br>
            Clearing your browser cache will erase locally stored notes. Please backup regularly. This is a self-care aid, not a clinical substitute. Reach out to crisis lines if in acute distress.</p>
        `,
        promptSaveTitle: "🔒 Seal Your Thoughts",
        promptSaveDesc: "Enter your private key (used only for on-device encryption, never uploaded):",
        promptSavePlaceholder: "Enter key...",
        promptBackupTitle: "📦 Set Backup Password",
        promptBackupDesc: "Set a dedicated password for this backup file (keep it safe):",
        promptBackupPlaceholder: "Enter backup password...",
        promptImportTitle: "📂 Import Backup Vault",
        promptImportDesc: "Enter the dedicated password for this backup file to restore:",
        promptImportPlaceholder: "Enter backup password...",
        promptConfirm: "Confirm",
        promptCancel: "Cancel",
        ruminationTitle: "🧡 Gentle Pause",
        ruminationDesc: "You have been reflecting for a while. The mind needs gentle rest too.",
        ruminationWater: "☕ Sip Warm Water",
        ruminationRest: "🪑 Rest & Breathe",
        toastRest: "🪑 Take 3 minutes to rest your eyes and feel your breath.",
        toastWater: "☕ Take your time sipping warm water. We are here.",
        toastReleased: "Words gently released into the wind.",
        toastEmptyPwd: "Please enter a key, or click Cancel.",
        toastSaved: "🔒 Sealed securely on your local device (600k PBKDF2 + AES-256).",
        toastNoBackup: "No records to backup.",
        toastBackupPwdEmpty: "Password cannot be empty.",
        toastBackupDone: "✅ Encrypted backup downloaded!",
        toastBackupFail: "❌ Backup failed.",
        toastInvalidFile: "❌ Invalid backup file format (JSON parsing failed).",
        toastDecrypting: "⏳ Decrypting backup...",
        toastRestored: (add, skip) => `✅ Restored ${add} records${skip > 0 ? ` (${skip} duplicates skipped)` : ''}`,
        toastRestoreFail: "❌ Invalid structure or corrupted backup.",
        toastDecryptFail: "❌ Decryption failed. Incorrect password or corrupted file."
    }
};

let curLang = 'zh';
let currentTab = 'free';
let currentEmotionIndex = 0;

// 2. 無障礙彈窗管理 (Focus Trapping & Return)
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal._returnFocus = document.activeElement;
    modal.style.display = 'flex';
    const focusable = modal.querySelector('button, input, textarea, [tabindex="0"]');
    if (focusable) focusable.focus();
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.style.display = 'none';
    if (modal._returnFocus && typeof modal._returnFocus.focus === 'function') {
        modal._returnFocus.focus();
    }
}

// 3. 語言切換渲染
function setLang(lang) {
    curLang = lang;
    document.getElementById('langZh').classList.toggle('active', lang === 'zh');
    document.getElementById('langEn').classList.toggle('active', lang === 'en');
    
    const t = LANG[lang];
    document.title = t.docTitle;
    document.getElementById('i18n-sos-top').innerText = t.sosMini;
    document.getElementById('i18n-title').innerText = t.title;
    document.getElementById('i18n-sub').innerText = t.sub;
    document.getElementById('breathHint').innerText = t.breath;
    document.getElementById('i18n-emotion-label').innerText = t.emotionLabel;
    document.getElementById('i18n-suds-label').innerText = t.sudsLabel;
    document.getElementById('i18n-suds-low').innerText = t.sudsLow;
    document.getElementById('i18n-suds-high').innerText = t.sudsHigh;
    document.getElementById('i18n-gentle-btn').innerText = t.gentleBtn;
    
    document.getElementById('tabFree').innerText = t.tabFree;
    document.getElementById('tabPerspective').innerText = t.tabPerspective;
    document.getElementById('tabCompassion').innerText = t.tabCompassion;
    
    document.getElementById('btnLetGo').innerText = t.btnLetGo;
    document.getElementById('btnSave').innerText = t.btnSave;
    document.getElementById('i18n-btn-ground').innerText = t.btnGround;
    document.getElementById('i18n-btn-export').innerText = t.btnExport;
    document.getElementById('i18n-btn-import').innerText = t.btnImport;
    document.getElementById('i18n-btn-print').innerText = t.btnPrint;
    document.getElementById('i18n-btn-guide').innerText = t.btnGuide;
    document.getElementById('i18n-crisis-btn').innerText = t.crisisBtn;
    document.getElementById('i18n-disclaimer').innerHTML = t.disclaimer;
    
    document.getElementById('i18n-modal-title').innerText = t.modalTitle;
    document.getElementById('i18n-modal-desc').innerText = t.modalDesc;
    document.getElementById('blessingInput').placeholder = t.modalPlaceholder;
    document.getElementById('i18n-modal-back').innerText = t.modalBack;
    document.getElementById('i18n-modal-confirm').innerText = t.modalConfirm;

    document.getElementById('i18n-sos-title').innerText = t.sosTitle;
    document.getElementById('i18n-sos-desc').innerText = t.sosDesc;
    document.getElementById('i18n-sos-close').innerText = t.sosClose;

    document.getElementById('i18n-grounding-title').innerText = t.groundingTitle;
    document.getElementById('i18n-grounding-desc').innerText = t.groundingDesc;
    document.getElementById('i18n-grounding-close').innerText = t.groundingClose;

    document.getElementById('i18n-guide-title').innerText = t.guideTitle;
    document.getElementById('i18n-guide-close').innerText = t.guideClose;
    document.getElementById('guideContent').innerHTML = t.guideHtml;

    renderEmotions();
    renderGroundingSteps();
    renderTabs();
    renderHotlines();
    updateBreathText();
}

function renderEmotions() {
    const group = document.getElementById('emotionGroup');
    const t = LANG[curLang];
    group.innerHTML = t.emotions.map((e, idx) => `
        <button class="tag ${idx === currentEmotionIndex ? 'active' : ''}" onclick="selectEmotion(${idx})">${e.val}</button>
    `).join('');
}

function selectEmotion(idx) {
    currentEmotionIndex = idx;
    renderEmotions();
}

function renderGroundingSteps() {
    const container = document.getElementById('groundingSteps');
    const t = LANG[curLang];
    container.innerHTML = t.groundingSteps.map(s => `
        <div class="grounding-step">${s.icon} ${s.name} <small>${s.desc}</small></div>
    `).join('');
}

function renderHotlines() {
    const container = document.getElementById('hotlineListContainer');
    if (!container) return;
    const t = LANG[curLang];
    
    container.innerHTML = `
        <div class="hotline-box" style="display:flex; flex-direction:column; gap:8px; max-height:260px; overflow-y:auto; padding:10px 14px;">
            ${t.hotlines.map(h => `
                <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border); padding-bottom:6px;">
                    <div>
                        <strong>${h.region}</strong> · <span style="font-size:0.85rem; color:var(--muted);">${h.name}</span>
                    </div>
                    <a href="tel:${h.tel}" class="hotline-link" style="white-space:nowrap; margin-left:8px;">${h.display}</a>
                </div>
            `).join('')}
        </div>
    `;
}

function renderTabs() {
    const container = document.getElementById('inputArea');
    const t = LANG[curLang];
    if (currentTab === 'free') {
        container.innerHTML = `<textarea id="mainInput" placeholder="${t.placeholderFree}"></textarea>`;
    } else if (currentTab === 'perspective') {
        container.innerHTML = `
            <input type="text" id="cbt_fact" placeholder="${t.placeholderCbt1}">
            <input type="text" id="cbt_thought" placeholder="${t.placeholderCbt2}">
            <textarea id="cbt_friend" placeholder="${t.placeholderCbt3}"></textarea>
        `;
    } else if (currentTab === 'compassion') {
        container.innerHTML = `
            <textarea id="act_accept" placeholder="${t.placeholderAct1}"></textarea>
            <textarea id="act_hug" placeholder="${t.placeholderAct2}"></textarea>
        `;
    }
}

function switchTab(type, btn) {
    currentTab = type;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderTabs();
}

// 4. 自訂溫柔浮動提示 Toast
let toastTimer = null;
function showToast(msg) {
    const toast = document.getElementById('gentle-toast');
    toast.innerHTML = msg;
    toast.style.display = 'block';
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.style.display = 'none'; }, 3500);
}

// 5. 自訂密鑰彈窗函式 (無障礙對話框)
function customPrompt({ title, desc, placeholder }) {
    return new Promise((resolve) => {
        const modal = document.getElementById('promptModal');
        const titleEl = document.getElementById('promptTitle');
        const descEl = document.getElementById('promptDesc');
        const inputEl = document.getElementById('promptInput');
        const confirmBtn = document.getElementById('promptConfirmBtn');
        const cancelBtn = document.getElementById('promptCancelBtn');
        const t = LANG[curLang];

        titleEl.innerText = title;
        descEl.innerText = desc;
        inputEl.placeholder = placeholder || '';
        inputEl.value = '';
        confirmBtn.innerText = t.promptConfirm;
        cancelBtn.innerText = t.promptCancel;

        openModal('promptModal');

        const handleConfirm = () => { cleanup(); resolve(inputEl.value); };
        const handleCancel = () => { cleanup(); resolve(null); };
        const handleKey = (e) => {
            if (e.key === 'Enter') handleConfirm();
            if (e.key === 'Escape') handleCancel();
        };

        function cleanup() {
            closeModal('promptModal');
            confirmBtn.removeEventListener('click', handleConfirm);
            cancelBtn.removeEventListener('click', handleCancel);
            inputEl.removeEventListener('keydown', handleKey);
        }

        confirmBtn.addEventListener('click', handleConfirm);
        cancelBtn.addEventListener('click', handleCancel);
        inputEl.addEventListener('keydown', handleKey);
    });
}

// 6. 呼吸調息循環
let breathState = 0;
const breathCircle = document.getElementById('breathCircle');
function updateBreathText() {
    const t = LANG[curLang];
    if (breathState === 0) breathCircle.innerText = t.breathInhale;
    else if (breathState === 1) breathCircle.innerText = t.breathHold;
    else breathCircle.innerText = t.breathExhale;
}
function runBreath() {
    if (breathState === 0) { breathCircle.className = 'breath-circle breath-inhale'; breathState = 1; }
    else if (breathState === 1) { breathCircle.className = 'breath-circle breath-hold'; breathState = 2; }
    else { breathCircle.className = 'breath-circle breath-exhale'; breathState = 0; }
    updateBreathText();
}
setInterval(runBreath, 3800);
runBreath();

// 7. SUDS 軀體滑塊節流 (requestAnimationFrame)
let sudsRAF = null;
function handleSudsChange(val) {
    if (sudsRAF) cancelAnimationFrame(sudsRAF);
    sudsRAF = requestAnimationFrame(() => {
        document.getElementById('sudsValue').innerText = val;
        const suggestion = document.getElementById('gentleSuggestion');
        suggestion.style.display = parseInt(val) >= 7 ? 'block' : 'none';
        sudsRAF = null;
    });
}

// 8. 邀請式反芻煞車 (無障礙對話框)
let ruminationCounter = 0;
let lastActionTime = 0;
function checkRumination() {
    const now = Date.now();
    if (now - lastActionTime > 30 * 60 * 1000) ruminationCounter = 0;
    ruminationCounter++;
    lastActionTime = now;

    if (ruminationCounter >= 3) {
        ruminationCounter = 0;
        const modal = document.getElementById('ruminationModal');
        const titleEl = document.getElementById('ruminationTitle');
        const descEl = document.getElementById('ruminationDesc');
        const waterBtn = document.getElementById('ruminationWaterBtn');
        const restBtn = document.getElementById('ruminationRestBtn');
        const t = LANG[curLang];

        titleEl.innerText = t.ruminationTitle;
        descEl.innerText = t.ruminationDesc;
        waterBtn.innerText = t.ruminationWater;
        restBtn.innerText = t.ruminationRest;

        openModal('ruminationModal');

        const handleWater = () => { cleanup(); showToast(t.toastWater); };
        const handleRest = () => { cleanup(); showToast(t.toastRest); };

        function cleanup() {
            closeModal('ruminationModal');
            waterBtn.removeEventListener('click', handleWater);
            restBtn.removeEventListener('click', handleRest);
        }

        waterBtn.addEventListener('click', handleWater);
        restBtn.addEventListener('click', handleRest);
    }
}

// 9. 釋放儀式
function openRelease() { openModal('releaseModal'); }
function closeRelease() { closeModal('releaseModal'); }

function confirmRelease() {
    const blessing = document.getElementById('blessingInput').value.trim();
    checkRumination();
    document.querySelectorAll('#inputArea input, #inputArea textarea').forEach(i => i.value = '');
    document.getElementById('blessingInput').value = '';
    closeRelease();
    
    const t = LANG[curLang];
    if (blessing) {
        showToast(`🍃「${blessing}」<br><span style="font-size:0.82rem; color:var(--muted);">${t.toastReleased}</span>`);
    } else {
        showToast(`🍃 ${t.toastReleased}`);
    }
}

// 10. 金融級加密儲存 (600,000 PBKDF2 + AES-GCM 256 + 記憶體二進制填零)
async function deriveKey(pwd, salt) {
    const enc = new TextEncoder();
    const pwdBytes = enc.encode(pwd);
    const km = await crypto.subtle.importKey('raw', pwdBytes, 'PBKDF2', false, ['deriveKey']);
    
    // 敏感字節即時填零銷毀
    pwdBytes.fill(0);

    return crypto.subtle.deriveKey(
        { name: 'PBKDF2', salt, iterations: 600000, hash: 'SHA-256' },
        km,
        { name: 'AES-GCM', length: 256 },
        false,
        ['encrypt', 'decrypt']
    );
}

async function saveVault() {
    checkRumination();
    const t = LANG[curLang];
    let pwd = await customPrompt({
        title: t.promptSaveTitle,
        desc: t.promptSaveDesc,
        placeholder: t.promptSavePlaceholder
    });

    if (pwd === null) return; 
    if (pwd.trim() === '') {
        showToast(t.toastEmptyPwd);
        return;
    }

    let text = '';
    document.querySelectorAll('#inputArea input, #inputArea textarea').forEach(el => text += el.value + '\n---\n');
    const suds = document.getElementById('sudsSlider').value;
    const currentEmotion = LANG[curLang].emotions[currentEmotionIndex].val;
    let payload = JSON.stringify({ emotion: currentEmotion, suds, text, time: new Date().toISOString() });

    const enc = new TextEncoder();
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const key = await deriveKey(pwd, salt);
    const encrypted = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(payload));

    const record = {
        salt: Array.from(salt),
        iv: Array.from(iv),
        data: Array.from(new Uint8Array(encrypted)),
        date: new Date().toLocaleDateString()
    };
    
    const history = JSON.parse(localStorage.getItem('stillhollow_vault') || '[]');
    history.push(record);
    localStorage.setItem('stillhollow_vault', JSON.stringify(history));

    showToast(t.toastSaved);
    document.querySelectorAll('#inputArea input, #inputArea textarea').forEach(i => i.value = '');
    pwd = null; payload = null; text = null;
}

// 11. 雙重加密備份匯出
async function exportBackup() {
    const t = LANG[curLang];
    const data = localStorage.getItem('stillhollow_vault') || '[]';
    if (data === '[]') {
        showToast(t.toastNoBackup);
        return;
    }

    let backupPwd = await customPrompt({
        title: t.promptBackupTitle,
        desc: t.promptBackupDesc,
        placeholder: t.promptBackupPlaceholder
    });

    if (backupPwd === null) return;
    if (backupPwd.trim() === '') {
        showToast(t.toastBackupPwdEmpty);
        return;
    }

    try {
        const enc = new TextEncoder();
        const plaintext = enc.encode(data);
        const salt = crypto.getRandomValues(new Uint8Array(16));
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const key = await deriveKey(backupPwd, salt);
        const encrypted = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, plaintext);

        const finalBlobData = {
            salt: Array.from(salt),
            iv: Array.from(iv),
            data: Array.from(new Uint8Array(encrypted)),
            version: 1
        };

        const blob = new Blob([JSON.stringify(finalBlobData)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Stillhollow_Backup_${new Date().toISOString().slice(0,10)}.vault`;
        a.click();
        URL.revokeObjectURL(url);

        showToast(t.toastBackupDone);
        backupPwd = null;
    } catch (e) {
        showToast(t.toastBackupFail);
    }
}

// 12. 備份解密匯入 (非同步排程 + 指紋去重 + 異常分類)
async function importBackup(event) {
    const file = event.target.files[0];
    if (!file) return;
    const t = LANG[curLang];

    const reader = new FileReader();
    reader.onload = async (e) => {
        let backupPwd = null;
        try {
            const rawJson = e.target.result;
            let backupObj;
            try {
                backupObj = JSON.parse(rawJson);
            } catch (err) {
                showToast(t.toastInvalidFile);
                return;
            }

            if (!backupObj.salt || !backupObj.iv || !backupObj.data) {
                showToast(t.toastRestoreFail);
                return;
            }

            backupPwd = await customPrompt({
                title: t.promptImportTitle,
                desc: t.promptImportDesc,
                placeholder: t.promptImportPlaceholder
            });

            if (backupPwd === null) return;

            showToast(t.toastDecrypting);

            const salt = new Uint8Array(backupObj.salt);
            const iv = new Uint8Array(backupObj.iv);
            const encryptedData = new Uint8Array(backupObj.data);
            const key = await deriveKey(backupPwd, salt);
            const decryptedBuffer = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, encryptedData);
            
            setTimeout(() => {
                try {
                    const decryptedString = new TextDecoder().decode(decryptedBuffer);
                    const records = JSON.parse(decryptedString);
                    if (!Array.isArray(records)) throw new Error('Invalid structure');

                    const existing = JSON.parse(localStorage.getItem('stillhollow_vault') || '[]');
                    const fingerprintSet = new Set(
                        existing.map(r => `${r.date}_${(r.data || []).slice(0, 32).join(',')}`)
                    );

                    let addedCount = 0;
                    const merged = [...existing];
                    for (const rec of records) {
                        const fp = `${rec.date}_${(rec.data || []).slice(0, 32).join(',')}`;
                        if (!fingerprintSet.has(fp)) {
                            merged.push(rec);
                            fingerprintSet.add(fp);
                            addedCount++;
                        }
                    }

                    localStorage.setItem('stillhollow_vault', JSON.stringify(merged));
                    showToast(t.toastRestored(addedCount, records.length - addedCount));
                } catch (err) {
                    showToast(t.toastRestoreFail);
                }
            }, 10);

        } catch (error) {
            showToast(t.toastDecryptFail);
        } finally {
            backupPwd = null;
            event.target.value = '';
        }
    };
    reader.readAsText(file);
}

// 13. 輔助彈窗控制
function openSOS() { 
    renderHotlines();
    openModal('sosModal'); 
}
function closeSOS() { closeModal('sosModal'); }
function openGrounding() { openModal('groundingModal'); }
function closeGrounding() { closeModal('groundingModal'); }
function openGuide() { openModal('guideModal'); }
function closeGuide() { closeModal('guideModal'); }

// 14. 監聽 Service Worker 更新通知
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'SW_UPDATED') {
            showToast(curLang === 'zh' ? '✨ 棲心樹洞已更新至最新版本。' : '✨ Stillhollow has been updated.');
        }
    });
}

// 初始化語言偵測
const browserLang = navigator.language || 'zh';
setLang(browserLang.startsWith('zh') ? 'zh' : 'en');
