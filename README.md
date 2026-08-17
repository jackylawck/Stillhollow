# 🌿 棲心樹洞 · Stillhollow
> **安放心事，歸於靜謐。｜ A Sanctuary for the Unspoken.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Zero Knowledge](https://img.shields.io/badge/Architecture-Zero--Knowledge-brightgreen.svg)]()
[![Encryption](https://img.shields.io/badge/Encryption-AES--GCM--256-blue.svg)]()
[![PWA Ready](https://img.shields.io/badge/PWA-Offline--First-orange.svg)]()
[![Website](https://img.shields.io/badge/Live-GitHub%20Pages-success)](https://jackylawck.github.io/Stillhollow/)

[繁體中文](#-繁體中文) | [English](#-english)

---

## 🇭🇰 繁體中文

**棲心樹洞（Stillhollow）** 是一個專為情緒沉澱、身心放鬆與自我對話而打造的純本地、零知識（Zero-Knowledge）、創傷知情（Trauma-Informed）開源空間。

這裡沒有演算法推薦、沒有 KPI 追蹤、沒有社交評判。你的文字只屬於你，甚至連開發者與 AI 爬蟲都無法窺視。

### ✨ 核心特色

1. **🔒 金融軍規加密與零知識架構**
   - **PBKDF2 (600,000 次疊代) + AES-GCM-256**：防禦現代 GPU 離線暴力碰撞。
   - **純客戶端加解密**：密鑰永不離開瀏覽器記憶體，用完即焚。
   - **`connect-src 'none'` 物理級斷網**：嚴格 CSP 規則阻絕一切外部網絡請求，徹底杜絕數據外洩與 AI 爬蟲採集。
   - **信封式雙重加密備份**：支援 `.vault` 加密檔案匯出與匯入，自動去重還原。

2. **🌱 創傷知情照護與神經科學引導**
   - **多迷走神經呼吸循環 (Polyvagal Breathing)**：跟隨呼吸光環調息，活化副交感神經。
   - **軀體化感受量表 (Somatic SUDS)**：以無壓力的身體緊繃感量化取代傳統心理診斷標籤。
   - **5-4-3-2-1 感官著陸 (Grounding)**：在情緒緊繃時快速重拾當下掌控感。
   - **三大對話協議**：自由傾訴、CBT 換位透鏡（如實看見）、ACT 自我擁抱。
   - **無條件接納釋放**：支援文字隨風而逝，無強迫性字數限制。

3. **🌍 離線優先與 PWA 支援**
   - 第一次加載後即可斷網使用，支援安裝至 iOS / Android 手機桌面。
   - 100% 完整雙語（繁體中文 / English）即時切換。

---

### 🚀 本地快速啟動

由於專案採用純原生前端設計（Vanilla HTML/CSS/JS），無需任何建置工具：

```bash
# 1. 複製倉庫
git clone [https://github.com/jackylawck/Stillhollow.git](https://github.com/jackylawck/Stillhollow.git)

# 2. 進入目錄
cd Stillhollow

# 3. 使用任何靜態伺服器啟動（或直接使用瀏覽器開啟 index.html）
# 例如使用 Python:
python3 -m http.server 8000

```

---

### 🛡️ 資安與隱私治理

| 防禦維度 | 規格標準 |
| --- | --- |
| **傳輸安全** | GitHub Pages 強制 HTTPS (TLS 1.3) |
| **數據加密** | AES-GCM-256 (Web Crypto API) |
| **金鑰衍生** | PBKDF2 (SHA-256, 600,000 iterations) |
| **網絡隔離** | Content Security Policy: `connect-src 'none'` |
| **數據主權** | 100% 本地存儲，零 Cookie，零後端追蹤 |

---

### ⚠️ 免責聲明

**棲心樹洞（Stillhollow）** 為自我沉澱、情緒覺察與放鬆輔助工具，**絕不構成亦不可取代專業心理諮商、精神醫學診斷或危機干預治療**。若你或身邊的人正面臨極度痛苦或自我傷害危機，請尋求專業醫療協助或撥打即時求助專線。

---

## 🌐 English

**Stillhollow** is a client-side, zero-knowledge, trauma-informed open-source sanctuary designed for emotional stillness, mindful journaling, and self-compassion.

No algorithms. No analytics. No judgment. Your words remain solely yours—inaccessible even to developers and AI web crawlers.

### ✨ Key Features

1. **🔒 State-of-the-Art Cryptography & Zero-Knowledge Architecture**
* **PBKDF2 (600,000 Iterations) + AES-GCM-256**: Compliant with OWASP cryptographic recommendations against GPU brute-force attacks.
* **100% Client-Side**: Private keys never leave browser memory and are wiped immediately after use.
* **`connect-src 'none'` Physical Network Air-Gap**: Strict CSP blocks all outgoing network traffic, preventing telemetry and AI data scraping.
* **Double-Encrypted Envelope Backup**: Download and restore `.vault` backups with automated deduplication.


2. **🌱 Trauma-Informed & Neuroscience-Backed Design**
* **Polyvagal Breathing Circle**: Visual biofeedback rhythm to engage the parasympathetic nervous system.
* **Somatic SUDS Tension Slider**: Non-pathologizing, body-focused tracking replacing diagnostic labels.
* **5-4-3-2-1 Sensory Grounding**: Rapid sensory re-orientation for high-stress moments.
* **Three Reflective Protocols**: Free Journaling, Perspective Shift (CBT), and Self-Compassion (ACT).
* **Unconditional Release Ritual**: Let thoughts dissipate with no required input barriers.


3. **🌍 Offline-First & PWA Ready**
* Fully functional offline after initial load. Installable on iOS/Android home screens.
* 100% bilingual UI (Traditional Chinese & English).



---

### 🚀 Quick Start

Built entirely with Vanilla Web Standards (HTML5, CSS3, JavaScript Web Crypto API). No build pipeline required:

```bash
# 1. Clone repository
git clone [https://github.com/jackylawck/Stillhollow.git](https://github.com/jackylawck/Stillhollow.git)

# 2. Navigate to directory
cd Stillhollow

# 3. Run with any local server (or open index.html directly)
python3 -m http.server 8000

```

---

### 🛡️ Security & Privacy Governance

| Layer | Standard / Implementation |
| --- | --- |
| **Transport** | HTTPS Enforced via GitHub Pages (TLS 1.3) |
| **Encryption** | AES-GCM-256 (Native Web Crypto API) |
| **Key Derivation** | PBKDF2 (SHA-256, 600,000 iterations) |
| **Network Guard** | Strict CSP: `connect-src 'none'` |
| **Data Sovereignty** | 100% On-Device, Zero Cookies, Zero Telemetry |

---

### ⚠️ Disclaimer

**Stillhollow** is a self-care aid intended for personal reflection and mindfulness. **It does NOT provide medical advice, diagnosis, or crisis counseling.** If you are experiencing acute distress, please reach out to qualified healthcare providers or crisis hotlines:

* 🇭🇰 Hong Kong: Suicide Prevention `2382 0000` ｜ Samaritans `2389 2222`
* 🇹🇼 Taiwan: PeaceLine `1925`
* 🇺🇸 US: Suicide & Crisis Lifeline `988`
* 🇬🇧 UK: Samaritans `116 123`

---

## 👤 Author & License

Designed & Developed with care by **[羅子淇 Jacky Law](https://jackylawck.github.io/jackylawck)**.

Released under the **[MIT License](https://www.google.com/search?q=LICENSE)**.

