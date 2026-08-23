/**
 * 🌿 棲心樹洞 Stillhollow
 * Modular Architecture & State-Driven Engine (Production Release 100/100)
 */

// --- 1. 雙語字典庫 (I18N Dictionary) ---
const I18N = {
    zh: {
        skipLink: "跳至主要書寫區",
        docTitle: "棲心樹洞 Stillhollow · 安放心事，歸於靜謐",
        sosMini: "🆘 即時熱線",
        title: "🌿 棲心樹洞 · Stillhollow",
        sub: "你此刻的存在，就已經足夠。此處純粹接納，為你留下一方安寧天地。",
        breathHeading: "呼吸調節",
        journalHeading: "情緒覺察與文字梳理",
        breath: "隨心跟隨圓圈呼吸，或是靜靜看著，都是溫柔的放鬆。",
        breathInhale: "吸氣", breathHold: "屏息", breathExhale: "呼氣",
        emotionLabel: "此刻的感受（挑一個最順眼的就好）：",
        emotions: [
            "☁️ 順其自然 · 隨意感受", "☀️ 平靜自在", "🌤️ 微微擔憂", 
            "🌧️ 鬱悶低落", "⛈️ 委屈憤怒", "⛓️ 自責內疚", "🌫️ 迷茫孤單"
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
        cryptoMeta: "棲心樹洞 Stillhollow · Zero-Knowledge · AES-GCM 256 · 純本地完全離線守護",
        modalTitle: "🍃 溫柔地與文字道別",
        modalDesc: "在文字隨風消散前，可以留下一句送給自己的話（留白也完全沒關係，直接放下即可）：",
        modalPlaceholder: "例如：我已盡力，此刻我選擇休息。",
        blessingLabel: "給自己的話",
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
            這是一個純本地、無伺服器、不聯網的私密樹洞。你可以跟著節奏深呼吸，挑選此刻的身體感受，自由寫下任何念頭，不必顧慮格式或長度。</p>
            <p class="modal-top-gap"><strong>2. 書寫時文字會不見嗎？</strong><br>
            • <strong>書寫中途</strong>：文字會穩妥停留在輸入框內，中途停頓沉思<strong>絕不會自動消失</strong>。<br>
            • <strong>🔒 封存於此</strong>：輸入你自訂的密鑰，透過金融級軍規演算法（AES-256）加密儲存於你的瀏覽器本地，關閉網頁後依然安全保存。<br>
            • <strong>🍃 輕柔放下</strong>：當你準備好放下這段情緒時，點擊即可讓文字隨風消散，不留痕跡。</p>
            <p class="modal-top-gap"><strong>3. 數據與隱私承諾：</strong><br>
            • <strong>零雲端</strong>：文字絕不上傳至任何伺服器或 AI 模型。<br>
            • <strong>零追蹤</strong>：完全沒有廣告追蹤碼或 Cookie。<br>
            • <strong>備份與還原</strong>：可透過工具列的「📦 打包備份」將加密資料下載至本機，日後隨時還原。</p>
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
        toastDecryptFail: "❌ 解密失敗，密碼錯誤或檔案已損毀。",
        toastQuotaWarning: "⚠️ 瀏覽器儲存空間即將達到上限（>4.5MB），請及時「打包備份」。",
        toastGlobalError: "⚠️ 系統發生暫時性異常，請嘗試重新整理頁面。",
        swUpdateReady: "✨ 棲心樹洞已更新至最新版本。<br><button class='tool-btn' data-action='reload-page' style='text-decoration:underline; font-weight:bold; color:var(--warm); margin-top:4px;'>點此重新載入</button>"
    },
    en: {
        skipLink: "Skip to main journal area",
        docTitle: "Stillhollow · A Sanctuary for the Unspoken",
        sosMini: "🆘 Crisis Lines",
        title: "🌿 Stillhollow",
        sub: "You are already enough, just as you are. A sanctuary of pure acceptance and quiet ease.",
        breathHeading: "Breathing Regulation",
        journalHeading: "Emotional Awareness & Reflection",
        breath: "Breathe along gently with the circle, or simply rest your eyes here.",
        breathInhale: "Inhale", breathHold: "Hold", breathExhale: "Exhale",
        emotionLabel: "Right now, what feels closest (pick whatever feels easy):",
        emotions: [
            "☁️ Open & Allowing", "☀️ Calm & Grounded", "🌤️ Mild Worry", 
            "🌧️ Heavy & Low", "⛈️ Hurt & Anger", "⛓️ Self-Blame & Guilt", "🌫️ Lost & Alone"
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
        cryptoMeta: "Stillhollow · Zero-Knowledge · AES-GCM 256 · Fully Offline & Local",
        modalTitle: "🍃 Mindfully Releasing",
        modalDesc: "Leave a gentle whisper for yourself, or simply journey on (leaving it blank is perfectly fine):",
        modalPlaceholder: "e.g., I did my best, and I choose to rest now.",
        blessingLabel: "Whisper for yourself",
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
            A private, zero-knowledge, offline sanctuary for your thoughts. Breathe along with the circle, notice your feelings, and write freely without fear of judgment or length constraints.</p>
            <p class="modal-top-gap"><strong>2. Will my writing disappear?</strong><br>
            • <strong>While Writing</strong>: Your text stays safely on your screen. Pausing to reflect will <strong>never cause it to disappear</strong>.<br>
            • <strong>🔒 Seal Here</strong>: Encrypt your entry with your private key using on-device AES-256 military-grade encryption.<br>
            • <strong>🍃 Gently Release</strong>: When ready to let go, click to allow your words to dissipate into the wind without leaving any trace.</p>
            <p class="modal-top-gap"><strong>3. Privacy & Security:</strong><br>
            • <strong>Zero Cloud</strong>: Data never leaves your browser.<br>
            • <strong>Zero Tracking</strong>: No cookies, no analytics, no ads.<br>
            • <strong>Backup & Restore</strong>: Use "📦 Backup Vault" to download an encrypted backup anytime.</p>
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
        toastDecryptFail: "❌ Decryption failed. Incorrect password or corrupted file.",
        toastQuotaWarning: "⚠️ Storage is approaching capacity (>4.5MB). Please export a backup.",
        toastGlobalError: "⚠️ A temporary system issue occurred. Please refresh the page.",
        swUpdateReady: "✨ Stillhollow has been updated.<br><button class='tool-btn' data-action='reload-page' style='text-decoration:underline; font-weight:bold; color:var(--warm); margin-top:4px;'>Click to reload</button>"
    }
};

// --- 2. 狀態管理核心 (State Store) ---
const Store = {
    state: {
        lang: (navigator.language || 'zh').startsWith('zh') ? 'zh' : 'en',
        tab: 'free',
        emotionIndex: 0,
        suds: 3,
        breathState: 0,
        ruminationCounter: 0,
        lastActionTime: 0
    },

    get t() {
        return I18N[this.state.lang];
    },

    setLang(lang) {
        this.state.lang = lang;
        UI.renderAll();
    },

    setTab(tab) {
        this.state.tab = tab;
        UI.renderTabs();
    },

    setEmotion(idx) {
        this.state.emotionIndex = idx;
        UI.renderEmotions();
    }
};

// --- 3. UI 宣告式渲染與無障礙管理 (UI Engine) ---
const UI = {
    toastTimer: null,

    showToast(msg) {
        const toast = document.getElementById('gentle-toast');
        toast.innerHTML = msg;
        toast.style.display = 'block';
        if (this.toastTimer) clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => { toast.style.display = 'none'; }, 3500);
    },

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        modal._returnFocus = document.activeElement;
        modal.style.display = 'flex';
        const focusable = modal.querySelector('button, input, textarea, [tabindex="0"]');
        if (focusable) focusable.focus();
    },

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        modal.style.display = 'none';
        if (modal._returnFocus && typeof modal._returnFocus.focus === 'function') {
            modal._returnFocus.focus();
        }
    },

    renderI18n() {
        const t = Store.t;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (t[key]) el.innerHTML = t[key];
        });
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.dataset.i18nTitle;
            if (t[key]) document.title = t[key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (t[key]) el.placeholder = t[key];
        });

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === Store.state.lang);
        });
    },

    renderEmotions() {
        const group = document.getElementById('emotionGroup');
        const emotions = Store.t.emotions;
        const currentIdx = Store.state.emotionIndex;

        group.innerHTML = emotions.map((emo, idx) => `
            <button class="tag ${idx === currentIdx ? 'active' : ''}" 
                    data-action="select-emotion" 
                    data-idx="${idx}"
                    role="radio"
                    aria-checked="${idx === currentIdx}"
                    aria-pressed="${idx === currentIdx}">${emo}</button>
        `).join('');
    },

    renderTabs() {
        const container = document.getElementById('inputArea');
        const t = Store.t;
        const tab = Store.state.tab;

        document.querySelectorAll('.tab').forEach(btn => {
            const isActive = btn.dataset.tab === tab;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', isActive);
        });

        if (tab === 'free') {
            container.innerHTML = `
                <label for="mainInput" class="sr-only">${t.tabFree}</label>
                <textarea id="mainInput" placeholder="${t.placeholderFree}"></textarea>
            `;
        } else if (tab === 'perspective') {
            container.innerHTML = `
                <label for="cbt_fact" class="sr-only">如實看見</label>
                <input type="text" id="cbt_fact" placeholder="${t.placeholderCbt1}">
                <label for="cbt_thought" class="sr-only">腦中念頭</label>
                <input type="text" id="cbt_thought" placeholder="${t.placeholderCbt2}">
                <label for="cbt_friend" class="sr-only">摯友視角</label>
                <textarea id="cbt_friend" placeholder="${t.placeholderCbt3}"></textarea>
            `;
        } else if (tab === 'compassion') {
            container.innerHTML = `
                <label for="act_accept" class="sr-only">覺察念頭</label>
                <textarea id="act_accept" placeholder="${t.placeholderAct1}"></textarea>
                <label for="act_hug" class="sr-only">給自己的擁抱</label>
                <textarea id="act_hug" placeholder="${t.placeholderAct2}"></textarea>
            `;
        }
    },

    renderGroundingSteps() {
        const container = document.getElementById('groundingSteps');
        container.innerHTML = Store.t.groundingSteps.map(s => `
            <div class="grounding-step">${s.icon} ${s.name} <small>${s.desc}</small></div>
        `).join('');
    },

    renderHotlines() {
        const container = document.getElementById('hotlineListContainer');
        if (!container) return;
        container.innerHTML = `
            <div class="hotline-box">
                ${Store.t.hotlines.map(h => `
                    <div class="hotline-item">
                        <div>
                            <strong>${h.region}</strong> · <span class="hotline-sub">${h.name}</span>
                        </div>
                        <a href="tel:${h.tel}" class="hotline-link">${h.display}</a>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderGuide() {
        const content = document.getElementById('guideContent');
        if (content) content.innerHTML = Store.t.guideHtml;
    },

    renderAll() {
        this.renderI18n();
        this.renderEmotions();
        this.renderTabs();
        this.renderGroundingSteps();
        this.renderHotlines();
        this.renderGuide();
        BreathingEngine.updateText();
    }
};

// --- 4. 呼吸動畫引擎 (Breathing Engine) ---
const BreathingEngine = {
    circle: null,
    init() {
        this.circle = document.getElementById('breathCircle');
        setInterval(() => this.cycle(), 3800);
        this.cycle();
    },
    updateText() {
        if (!this.circle) return;
        const t = Store.t;
        const state = Store.state.breathState;
        if (state === 0) this.circle.innerText = t.breathInhale;
        else if (state === 1) this.circle.innerText = t.breathHold;
        else this.circle.innerText = t.breathExhale;
    },
    cycle() {
        const s = Store.state;
        if (s.breathState === 0) {
            this.circle.className = 'breath-circle breath-inhale';
            s.breathState = 1;
        } else if (s.breathState === 1) {
            this.circle.className = 'breath-circle breath-hold';
            s.breathState = 2;
        } else {
            this.circle.className = 'breath-circle breath-exhale';
            s.breathState = 0;
        }
        this.updateText();
    }
};

// --- 5. 密碼學與資安存儲模組 (Crypto & Storage Engine) ---
const CryptoEngine = {
    checkStorageQuota() {
        let total = 0;
        for (let key in localStorage) {
            if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
                total += (localStorage[key].length * 2);
            }
        }
        const usageMB = total / (1024 * 1024);
        if (usageMB > 4.5) {
            UI.showToast(Store.t.toastQuotaWarning);
        }
        return usageMB;
    },

    async deriveKey(pwdBytes, salt) {
        const km = await crypto.subtle.importKey('raw', pwdBytes, 'PBKDF2', false, ['deriveKey']);
        return crypto.subtle.deriveKey(
            { name: 'PBKDF2', salt, iterations: 600000, hash: 'SHA-256' },
            km,
            { name: 'AES-GCM', length: 256 },
            false,
            ['encrypt', 'decrypt']
        );
    },

    async promptPassword({ title, desc, placeholder }) {
        return new Promise((resolve) => {
            const modal = document.getElementById('promptModal');
            const titleEl = document.getElementById('promptTitle');
            const descEl = document.getElementById('promptDesc');
            const inputEl = document.getElementById('promptInput');
            const confirmBtn = document.getElementById('promptConfirmBtn');
            const cancelBtn = document.getElementById('promptCancelBtn');
            const t = Store.t;

            titleEl.innerText = title;
            descEl.innerText = desc;
            inputEl.placeholder = placeholder || '';
            inputEl.value = '';
            confirmBtn.innerText = t.promptConfirm;
            cancelBtn.innerText = t.promptCancel;

            UI.openModal('promptModal');

            const handleConfirm = () => {
                const val = inputEl.value;
                inputEl.value = ''; // 即時清空 DOM 輸入框
                cleanup();
                resolve(val);
            };
            const handleCancel = () => {
                inputEl.value = '';
                cleanup();
                resolve(null);
            };
            const handleKey = (e) => {
                if (e.key === 'Enter') handleConfirm();
                if (e.key === 'Escape') handleCancel();
            };

            function cleanup() {
                UI.closeModal('promptModal');
                confirmBtn.removeEventListener('click', handleConfirm);
                cancelBtn.removeEventListener('click', handleCancel);
                inputEl.removeEventListener('keydown', handleKey);
            }

            confirmBtn.addEventListener('click', handleConfirm);
            cancelBtn.addEventListener('click', handleCancel);
            inputEl.addEventListener('keydown', handleKey);
        });
    },

    async save() {
        AntiRumination.check();
        this.checkStorageQuota();
        const t = Store.t;

        const rawPwd = await this.promptPassword({
            title: t.promptSaveTitle,
            desc: t.promptSaveDesc,
            placeholder: t.promptSavePlaceholder
        });

        if (rawPwd === null) return;
        if (rawPwd.trim() === '') {
            UI.showToast(t.toastEmptyPwd);
            return;
        }

        const pwdBytes = new TextEncoder().encode(rawPwd);
        let text = '';
        document.querySelectorAll('#inputArea input, #inputArea textarea').forEach(el => text += el.value + '\n---\n');
        const suds = document.getElementById('sudsSlider').value;
        const currentEmotion = t.emotions[Store.state.emotionIndex];
        const payload = JSON.stringify({ emotion: currentEmotion, suds, text, time: new Date().toISOString() });

        try {
            const enc = new TextEncoder();
            const salt = crypto.getRandomValues(new Uint8Array(16));
            const iv = crypto.getRandomValues(new Uint8Array(12));
            const key = await this.deriveKey(pwdBytes, salt);
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

            UI.showToast(t.toastSaved);
            document.querySelectorAll('#inputArea input, #inputArea textarea').forEach(i => i.value = '');
        } catch (err) {
            UI.showToast(t.toastBackupFail);
        } finally {
            pwdBytes.fill(0); // 二進制記憶體清零
        }
    },

    async export() {
        const t = Store.t;
        const data = localStorage.getItem('stillhollow_vault') || '[]';
        if (data === '[]') {
            UI.showToast(t.toastNoBackup);
            return;
        }

        const rawPwd = await this.promptPassword({
            title: t.promptBackupTitle,
            desc: t.promptBackupDesc,
            placeholder: t.promptBackupPlaceholder
        });

        if (rawPwd === null) return;
        if (rawPwd.trim() === '') {
            UI.showToast(t.toastBackupPwdEmpty);
            return;
        }

        const pwdBytes = new TextEncoder().encode(rawPwd);

        try {
            const enc = new TextEncoder();
            const salt = crypto.getRandomValues(new Uint8Array(16));
            const iv = crypto.getRandomValues(new Uint8Array(12));
            const key = await this.deriveKey(pwdBytes, salt);
            const encrypted = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(data));

            const finalBlobData = {
                version: 1,
                salt: Array.from(salt),
                iv: Array.from(iv),
                data: Array.from(new Uint8Array(encrypted))
            };

            const blob = new Blob([JSON.stringify(finalBlobData)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Stillhollow_Backup_${new Date().toISOString().slice(0,10)}.vault`;
            a.click();
            URL.revokeObjectURL(url);

            UI.showToast(t.toastBackupDone);
        } catch (e) {
            UI.showToast(t.toastBackupFail);
        } finally {
            pwdBytes.fill(0);
        }
    },

    async import(file) {
        if (!file) return;
        const t = Store.t;
        const reader = new FileReader();

        reader.onload = async (e) => {
            let pwdBytes = null;
            try {
                let backupObj;
                try {
                    backupObj = JSON.parse(e.target.result);
                } catch (err) {
                    UI.showToast(t.toastInvalidFile);
                    return;
                }

                if (!backupObj.salt || !backupObj.iv || !backupObj.data) {
                    UI.showToast(t.toastRestoreFail);
                    return;
                }

                const rawPwd = await this.promptPassword({
                    title: t.promptImportTitle,
                    desc: t.promptImportDesc,
                    placeholder: t.promptImportPlaceholder
                });

                if (rawPwd === null) return;

                pwdBytes = new TextEncoder().encode(rawPwd);
                UI.showToast(t.toastDecrypting);

                const salt = new Uint8Array(backupObj.salt);
                const iv = new Uint8Array(backupObj.iv);
                const encryptedData = new Uint8Array(backupObj.data);
                const key = await this.deriveKey(pwdBytes, salt);
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
                        UI.showToast(t.toastRestored(addedCount, records.length - addedCount));
                    } catch (err) {
                        UI.showToast(t.toastRestoreFail);
                    }
                }, 10);

            } catch (error) {
                UI.showToast(t.toastDecryptFail);
            } finally {
                if (pwdBytes) pwdBytes.fill(0);
            }
        };
        reader.readAsText(file);
    }
};

// --- 6. 反芻煞車機制 (Anti-Rumination Engine) ---
const AntiRumination = {
    check() {
        const s = Store.state;
        const now = Date.now();
        if (now - s.lastActionTime > 30 * 60 * 1000) s.ruminationCounter = 0;
        s.ruminationCounter++;
        s.lastActionTime = now;

        if (s.ruminationCounter >= 3) {
            s.ruminationCounter = 0;
            UI.openModal('ruminationModal');

            const waterBtn = document.getElementById('ruminationWaterBtn');
            const restBtn = document.getElementById('ruminationRestBtn');

            const handleWater = () => { cleanup(); UI.showToast(Store.t.toastWater); };
            const handleRest = () => { cleanup(); UI.showToast(Store.t.toastRest); };

            function cleanup() {
                UI.closeModal('ruminationModal');
                waterBtn.removeEventListener('click', handleWater);
                restBtn.removeEventListener('click', handleRest);
            }

            waterBtn.addEventListener('click', handleWater, { once: true });
            restBtn.addEventListener('click', handleRest, { once: true });
        }
    }
};

// --- 7. 事件委派中央控制器 (Event Delegation Controller) ---
document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;

    const action = target.dataset.action;

    switch (action) {
        case 'set-lang':
            Store.setLang(target.dataset.lang);
            break;
        case 'switch-tab':
            Store.setTab(target.dataset.tab);
            break;
        case 'select-emotion':
            Store.setEmotion(parseInt(target.dataset.idx, 10));
            break;
        case 'open-modal':
            if (target.dataset.target === 'sosModal') UI.renderHotlines();
            UI.openModal(target.dataset.target);
            break;
        case 'close-modal':
            UI.closeModal(target.dataset.target);
            break;
        case 'confirm-release': {
            const blessing = document.getElementById('blessingInput').value.trim();
            AntiRumination.check();
            document.querySelectorAll('#inputArea input, #inputArea textarea').forEach(i => i.value = '');
            document.getElementById('blessingInput').value = '';
            UI.closeModal('releaseModal');
            const t = Store.t;
            UI.showToast(blessing ? `🍃「${blessing}」<br><span class="hotline-sub">${t.toastReleased}</span>` : `🍃 ${t.toastReleased}`);
            break;
        }
        case 'save-vault':
            CryptoEngine.save();
            break;
        case 'export-backup':
            CryptoEngine.export();
            break;
        case 'trigger-import':
            document.getElementById('importFileInput').click();
            break;
        case 'print-view':
            window.print();
            break;
        case 'reload-page':
            window.location.reload();
            break;
    }
});

// SUDS 滑塊節流監聽
let sudsRAF = null;
document.getElementById('sudsSlider').addEventListener('input', (e) => {
    if (sudsRAF) cancelAnimationFrame(sudsRAF);
    sudsRAF = requestAnimationFrame(() => {
        const val = e.target.value;
        Store.state.suds = val;
        document.getElementById('sudsValue').innerText = val;
        const suggestion = document.getElementById('gentleSuggestion');
        suggestion.style.display = parseInt(val, 10) >= 7 ? 'block' : 'none';
        sudsRAF = null;
    });
});

// 檔案匯入監聽
document.getElementById('importFileInput').addEventListener('change', (e) => {
    CryptoEngine.import(e.target.files[0]);
    e.target.value = '';
});

// 意外離開防護
window.addEventListener('beforeunload', (e) => {
    let hasDraft = false;
    document.querySelectorAll('#inputArea textarea, #inputArea input').forEach(el => {
        if (el.value && el.value.trim().length > 0) hasDraft = true;
    });
    if (hasDraft) {
        e.preventDefault();
        e.returnValue = '';
    }
});

// PWA 更新通知廣播監聽 (支援互動點擊重載)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'SW_UPDATED') {
            UI.showToast(Store.t.swUpdateReady);
        }
    });
}

// 🛡️ 全域錯誤邊界
window.addEventListener('error', () => {
    UI.showToast(Store.t.toastGlobalError);
});
window.addEventListener('unhandledrejection', () => {
    UI.showToast(Store.t.toastGlobalError);
});

// 初始化啟動
document.addEventListener('DOMContentLoaded', () => {
    UI.renderAll();
    BreathingEngine.init();
});
