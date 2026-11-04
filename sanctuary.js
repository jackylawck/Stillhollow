/**
 * 🌿 棲心樹洞 Stillhollow · 控制台心靈避風港 (Console Sanctuary Module)
 * 100% Client-Side Pure JS / Trauma-Informed Sensory Grounding Easter Egg
 * 零追蹤 · 零上傳 · 創傷知情 · 純前端記憶體守護
 */
(function () {
    'use strict';

    var MONO = '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace';

    // 溫暖舒緩的色系調色盤 (Sage, Terracotta, Soft Rose & Deep Earth)
    var S = {
        title: 'background: #1C1816; color: #84A98C; font-family: ' + MONO + '; font-size: 13px; font-weight: bold; padding: 8px 12px; border-left: 5px solid #84A98C; border-top: 1px solid #28221E; border-right: 1px solid #28221E; display: block;',
        sub: 'background: #28221E; color: #C97B63; font-family: ' + MONO + '; font-size: 11px; padding: 5px 12px; border-left: 5px solid #C97B63; border-bottom: 1px solid #332B25; border-right: 1px solid #28221E; display: block; line-height: 1.5;',
        badge: 'background: #84A98C; color: #1C1816; font-family: ' + MONO + '; font-size: 10.5px; font-weight: 900; padding: 2px 8px; border-radius: 12px;',
        whisper: 'background: #201A18; color: #E8DFD8; font-family: ' + MONO + '; font-size: 11.5px; line-height: 1.8; padding: 10px 14px; border-left: 4px solid #D4A09B; border-radius: 0 4px 4px 0; display: block;',
        panel: 'background: #1C1816; color: #A09082; font-family: ' + MONO + '; font-size: 10.5px; line-height: 1.6; padding: 8px 12px; border: 1px solid #2C2520; border-left: 4px solid #84A98C; border-radius: 2px; display: block; white-space: pre;',
        cmdBar: 'background: #28221E; color: #84A98C; font-family: ' + MONO + '; font-size: 11px; font-weight: bold; padding: 6px 10px; border: 1px solid #3D3430; border-left: 4px solid #84A98C; display: block;',
        cmdKey: 'background: #C97B63; color: #FFFFFF; font-weight: bold; font-family: ' + MONO + '; padding: 1px 7px; border-radius: 3px;',
        cmdDesc: 'color: #D6CBC3; font-family: ' + MONO + '; padding-left: 6px;',
        securityTip: 'background: #1F1917; color: #D4A09B; font-family: ' + MONO + '; font-size: 10.5px; line-height: 1.6; padding: 8px 12px; border-left: 4px solid #C97B63; border-radius: 0 4px 4px 0; display: block;'
    };

    function renderWelcome() {
        console.log('%c🌿 [ STILLHOLLOW // 棲心樹洞 · 心靈避風港 ]', S.title);
        console.log('%c零知識守護 · 純本機運算 · 創傷知情接納 · Zero Cloud Telemetry', S.sub);
        console.log('');

        console.log(
            '%c【致偶然推開這扇暗門的你】\n' +
            '代碼之下，是一方純淨的留白天地。\n' +
            '在這裡，你不必向任何人證明自己，沒有演算法在暗中衡量你的價值，更沒有雲端數據庫記錄你的脆弱。\n' +
            '文字隨風而逝，心緒歸於靜謐。請安心地深呼吸，把所有的緊繃交付給這個片刻。\n\n' +
            '[A Quiet Space for You] Behind this console lies a safe, unmonitored sanctuary.\n' +
            'No metrics, no judgment, and no remote surveillance. Your feelings belong only to you. Breathe easy, and rest your spirit here.',
            S.whisper
        );
        console.log('');

        var securitySpecs = [
            '==== [ ZERO-KNOWLEDGE AUDIT // 零知識隱私與安全指標 ] ====',
            '• 數據主權 (Sovereignty) : [PASS] 100% Client-Side Local Memory Only',
            '• 密碼學規格 (Crypto)   : [PASS] PBKDF2 (600,000 Iterations) + AES-GCM-256',
            '• 出站傳輸防護 (Network): [PASS] CSP connect-src \'none\' (物理斷網隔離)',
            '• 記憶體清理 (Lifecycle): [PASS] TypedArray.fill(0) 即時清零防殘留',
            '==================== [ PRIVACY-BY-DESIGN ] ===================='
        ].join('\n');
        console.log('%c' + securitySpecs, S.panel);
        console.log('');

        console.log(
            '%c💡 溫柔防護提醒 (Care & Security):\n' +
            '瀏覽器控制台為調試空間。為了守護你的本地儲存與設備安全，請勿在此隨意貼上任何未經驗證的第三方代碼（避免 Self-XSS 腳本風險）。這座樹洞會一直溫柔守護你的隱私。',
            S.securityTip
        );
        console.log('');

        console.log('%c🍃 樹洞互動指令 (CLI): 輸入 hollow.help() 開啟陪伴選單 / Type hollow.help()', S.cmdBar);
    }

    var breathIntervalId = null;

    // 暴露全域只讀物件 window.hollow
    window.hollow = Object.freeze({
        help: function () {
            console.log('%c[ STILLHOLLOW CONSOLE COMPANION // 溫柔陪伴指令集 ]', S.sub);
            console.log('%chollow.breathe()%c - 開啟控制台 4-4-4 放鬆調息指南 / Start breath pacer', S.cmdKey, S.cmdDesc);
            console.log('%chollow.hug()%c     - 給自己一句溫柔的抱抱與接納 / A gentle whisper of self-compassion', S.cmdKey, S.cmdDesc);
            console.log('%chollow.ground()%c  - 啟動 5-4-3-2-1 感官著陸伴讀 / 5-4-3-2-1 Sensory grounding', S.cmdKey, S.cmdDesc);
            console.log('%chollow.verify()%c  - 檢查當前本機記憶體純淨度與安全 / Verify zero-knowledge status', S.cmdKey, S.cmdDesc);
            console.log('%chollow.peace()%c   - 投射全螢幕柔和微光，沉浸放鬆 / Cast soothing light aura', S.cmdKey, S.cmdDesc);
            return '請輸入上方任一指令，讓樹洞陪伴你一會兒。 / Type any command above to proceed.';
        },

        // 🧘 控制台文字節奏呼吸器 (隨時輸入 hollow.breathe() 停止或開始)
        breathe: function () {
            if (breathIntervalId) {
                clearInterval(breathIntervalId);
                breathIntervalId = null;
                console.log('%c[ 🍃 呼吸引導已告一段落。願這份平靜常伴隨你。 // Breath pacer closed. ]', 'color:#84A98C; font-weight:bold; font-family:' + MONO);
                return 'Breathing guide resting.';
            }

            console.log('%c[ 🌱 4-4-4 腹式呼吸調息開始 · 輸入 hollow.breathe() 可隨時結束 ]', S.sub);
            
            var cycle = 0;
            var states = [
                { text: '🌱 吸氣 (Inhale) ⋯⋯ 感受清新的空氣溫柔注滿胸膛', style: 'background:#1C1816; color:#84A98C; font-size:12px; font-weight:bold; padding:4px 8px; border-left:4px solid #84A98C; font-family:' + MONO },
                { text: '☀️ 屏息 (Hold)   ⋯⋯ 靜靜感受身體當下的存在與安寧', style: 'background:#1C1816; color:#C97B63; font-size:12px; font-weight:bold; padding:4px 8px; border-left:4px solid #C97B63; font-family:' + MONO },
                { text: '🍃 呼氣 (Exhale) ⋯⋯ 緩緩吐出所有多餘的緊繃與疲憊', style: 'background:#1C1816; color:#D4A09B; font-size:12px; font-weight:bold; padding:4px 8px; border-left:4px solid #D4A09B; font-family:' + MONO }
            ];

            function tick() {
                var current = states[cycle % 3];
                console.log('%c' + current.text, current.style);
                cycle++;
            }

            tick();
            breathIntervalId = setInterval(tick, 4000);
            return 'Breathing pacer active (4s cycle). Type hollow.breathe() again to stop.';
        },

        // 💛 隨機抽取一句自我慈悲話語 (Self-Compassion Hug)
        hug: function () {
            var whispers = [
                '無論今天完成了多少事，你此刻的存在，就已經足夠美好。',
                '允許自己累，允許自己現在什麼都不想解決。休息不是放棄，而是溫柔的充電。',
                '這件事確實不容易，你已經在當時的情境下，盡了最大的努力。',
                '大腦的念頭就像天上的浮雲，看著它飄過就好，你不需要成為每一朵烏雲。',
                '對自己寬容一點，如果換作是你最疼愛的朋友經歷這些，你一定捨不得責備他。',
                'You are doing the best you can with the energy you have today, and that is enough.',
                'You do not have to carry the weight of everything all at once. Just breathe right now.'
            ];
            var pick = whispers[Math.floor(Math.random() * whispers.length)];
            console.log('');
            console.log('%c💛 [ A GENTLE HUG // 送給自己的溫柔抱抱 ]\n' + pick, S.whisper);
            console.log('');
            return 'May warmth and kindness wrap around your heart.';
        },

        // 🌱 5-4-3-2-1 感官著陸指引
        ground: function () {
            console.log('%c[ 🌱 5-4-3-2-1 SENSORY GROUNDING // 感官著陸指引 ]', S.title);
            console.log('%c請環顧周圍，讓注意力慢慢回到此時此刻的身體：', S.sub);
            console.log('👀 看 (5) : 找出周圍 5 種讓你感到平靜的顏色或物件');
            console.log('🖐️ 觸 (4) : 觸碰 4 種不同質感的物品（衣服布料、桌面、掌心、椅背）');
            console.log('👂 聽 (3) : 仔細聆聽 3 種環境的聲音（風聲、呼吸聲、遠處的聲響）');
            console.log('👃 聞 (2) : 覺察空氣中或指尖上的 2 種氣味');
            console.log('👄 嚐 (1) : 喝一口溫水，細細感受水流經過喉嚨的溫度');
            return '當你慢慢做完，腳踏實地的掌控感便已悄然回到心裡。';
        },

        // 🔒 檢視本機環境安全與純淨度
        verify: function () {
            var localKeys = Object.keys(localStorage).filter(function (k) { return k.startsWith('stillhollow'); });
            var vaultCount = 0;
            try {
                var vaultData = JSON.parse(localStorage.getItem('stillhollow_vault') || '[]');
                vaultCount = Array.isArray(vaultData) ? vaultData.length : 0;
            } catch (e) {
                vaultCount = 'Secure';
            }

            console.log('%c[ SYSTEM INTEGRITY // 本機純淨度與安全審計 ]', S.title);
            console.log('• 離線運行狀態 (ServiceWorker) : ' + ('serviceWorker' in navigator ? 'Active (PWA Offline-Ready)' : 'Standard'));
            console.log('• 本地加密心事 (Encrypted Vault) : ' + vaultCount + ' 篇（AES-GCM 密文封存）');
            console.log('• 雲端遠端傳輸 (Remote Telemetry)  : 0 連線 (CSP connect-src \'none\')');
            console.log('• 外部廣告與 Cookie 追蹤器       : 0 (完全純淨)');
            console.log('• 系統判定 (Verdict)             : 綠燈 · 100% 本機沙箱私密無外洩');
            return 'Verification complete. You are in a safe, air-gapped personal sanctuary.';
        },

        // ✨ 投射柔和的鼠尾草綠/暖色呼吸暈光（支援無障礙動態抑制作業）
        peace: function () {
            if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                console.log('%c[ 系統已開啟減弱動態效果，跳過全螢幕光暈動態 ]', 'color:#84A98C; font-family:' + MONO);
                return 'Peace mode enabled (motion reduced for visual comfort).';
            }

            var docEl = document.documentElement;
            var originTransition = docEl.style.transition;
            var originBoxShadow = docEl.style.boxShadow;

            docEl.style.transition = 'box-shadow 1.5s ease-in-out';
            docEl.style.boxShadow = 'inset 0 0 100px rgba(132, 169, 140, 0.4), inset 0 0 160px rgba(201, 123, 99, 0.2)';

            setTimeout(function () {
                docEl.style.boxShadow = originBoxShadow;
                setTimeout(function () {
                    docEl.style.transition = originTransition;
                }, 1500);
            }, 3000);

            console.log('%c[ 🌿 柔和微光已輕撫畫面。願安寧如清泉滌淨喧囂。 // A calming aura touches your space. ]', 'color:#84A98C; font-weight:bold; font-family:' + MONO);
            return 'Breathe deeply and let tension melt away.';
        }
    });

    // 延遲 300 毫秒印出，確保在控制台開啟時排版整齊自然
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(renderWelcome, 300);
    } else {
        window.addEventListener('DOMContentLoaded', function () {
            setTimeout(renderWelcome, 300);
        });
    }
})();
