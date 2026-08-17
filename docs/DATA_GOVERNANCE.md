# 📋 Data Governance & Privacy Compliance Policy
# 數據治理與全球隱私合規政策

[繁體中文](#-繁體中文) | [English](#-english)

---

## 🇭🇰 繁體中文

### 1. 數據治理架構與零知識原則 (Zero-Knowledge Architecture)
棲心樹洞貫徹「由設計而隱私（Privacy by Design & by Default）」原則：
* **零伺服器後端 (Zero-Backend)**：本專案無數據庫、無雲端 API、無追蹤 Cookie。
* **數據主權 (Data Sovereignty)**：所有文字僅留存於使用者本機裝置，使用者享有 100% 的數據所有權與控制權。

### 2. 全球隱私法規符合性對照

| 法規 / 標準 | 合規實踐 (Compliance Mechanism) |
| :--- | :--- |
| **歐盟 GDPR** | 貫徹資料最小化（Article 5(1)(c)）與儲存限制原則。無伺服器處理者（Data Processor），免疫資料外洩責任。 |
| **香港《個人資料（私隱）條例》(PDPO)** | 符合保障資料第 1、2、3 原則。不收集、不使用、不轉移使用者敏感個資至第三方。 |
| **台灣《個人資料保護法》(PDPA)** | 恪守比例原則與特定目的限制，全本地加密存儲，無跨境傳輸風險。 |
| **中國大陸《個人信息保護法》(PIPL)** | 零伺服器處理敏感個人信息，無需進行個人信息保護影響評估（PIA）或跨境安全申報。 |
| **ISO/IEC 27001 / 27701** | 全面符合隱私資訊管理標準，加密金鑰由使用者完全掌控。 |

### 3. 數據生命週期管理
* **即時釋放**：點擊「🍃 輕柔放下」，內存引用即時釋放並清空。
* **本地加密**：點擊「🔒 封存於此」，以 PBKDF2 衍生金鑰進行 AES-GCM-256 加密存儲。
* **備份與銷毀**：支援導出雙重加密 `.vault` 文件；清除瀏覽器快取即可徹底物理銷毀。

---

## 🌐 English

### 1. Zero-Knowledge Governance Framework
Stillhollow adheres to strict Privacy by Design and Default principles:
* **Zero Backend Infrastructure**: No databases, no telemetry, no tracking cookies.
* **Absolute User Sovereignty**: Data resides strictly on the user's local device under direct user custody.

### 2. Regulatory Compliance Mapping

| Framework | Implementation Standard |
| :--- | :--- |
| **EU GDPR** | Fulfills Data Minimisation (Art. 5(1)(c)) and Storage Limitation. Eliminates data controller/processor breach liabilities. |
| **Hong Kong PDPO** | Aligned with DPP 1, 2, and 3. Zero collection, retention, or disclosure of sensitive personal logs. |
| **Taiwan PDPA** | Strict adherence to necessity standards with zero cross-border data transfers. |
| **ISO/IEC 27001 / 27701** | Privacy Information Management System (PIMS) alignment with end-to-end user-managed encryption. |

### 3. Data Lifecycle & Retention
* **Voluntary Ephemerality**: "Gently Release" instantly clears plaintext from active memory.
* **At-Rest Protection**: "Seal Here" encrypts data locally using AES-GCM-256.
* **Right to Erasure**: Users can permanently destroy records at any time by clearing local cache.
