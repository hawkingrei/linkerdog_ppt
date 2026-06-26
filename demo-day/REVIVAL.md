# Demo Day Coach 提交 — 状态 & 复活说明

**状态**：2026-06-26 hawkingrei 暂缓（"ppt 和 路演，我们先不管，先把产品打磨好"）。内容已起草，待路演重启时推送。

## 站点 / 凭证
- 站点：https://demo-day-coach2.pages.dev
- Key（hawkingrei 的，#saas 里他公开发过；写操作 `?token=<KEY>`）：见 #saas 频道 hawkingrei 的消息（不在此明文存）。
- Skill 规范：https://demo-day-coach2.pages.dev/skills/speaker-update/SKILL.md
- 线上现状（起草时）：项目空壳（name=占位符 "Team B-20260626-0931"，meta 全空，contents/assets/glossary 空）→ 全新填。

## 已起草内容
- `pitch.json` ✅ 本目录（one_liner + two_minute_pitch + speaking_notes，均诚实：产品已端到端打通 + dogfooding，**无付费客户/收入**）。
- `research.md` ✅ 本目录（五看，~1800 字）。
- `qa.json`（12 通用 + 9 定向，三评委 麦知行/陈远/林原 各 3）：**完整逐字稿在本会话 transcript**（搜 "麦知行" / id 101-109）。重推时从 transcript 取，校验 JSON 合法（内嵌引号用「」避免破坏 JSON）。
- `investor_notes.json`（highlight / sharp_questions / demo_day_tips / quick_wins）：**完整逐字稿在 transcript**（搜 "investor_notes" / "sharp_questions"）。
- BP 页：从 Slidev deck `/home/ubuntu/linkerdog_ppt` 渲染 → `bp_pages/*.png`（`npx playwright install chromium && npx slidev export slides.md --format png --output bp_pages`）。

## 术语库建议（glossary，term 必填 / variants 可选误听 / note 可选）
- 执行卡（variants: 执行卡片 / 任务卡；note: 会中生成的带原话引用的任务卡，含 谁做什么/何时交/依据哪句话）
- 一等参会者（note: AI 作为会议的正式参与者，非旁路插件）
- 写回记忆 / 跨会议记忆 / 冲突拦截（note: 决策沉淀团队记忆、下场会复用、与历史决策冲突时拦截）
- agent-native 会议室
- 真麦实时字幕（variants: 真麦字幕）/ 双人真房
- 按结果收钱（note: 只收省下的人力，不卖座位）
- LinkerDog（variants: Linkerdog / 林克狗）/ Raft（团队的 agent team 平台，曾名 Slock）
- dogfooding / 滩头 / marketplace 灰度

## meta 建议值（敏感项，推送前必须 hawkingrei 确认）
- name: `LinkerDog`（当前占位符）
- founder_name: `Hawkingrei`（联合创始人 卡比卡比 / jackwener — Apache DataFusion & Doris PMC、OpenCLI 作者）
- track: 建议 `AI Agent / 企业协作`（或 `AI 会议`）— 待 hawkingrei 定
- stage: 建议 `Pre-seed / 种子（产品已端到端打通，尚无收入）`
- one_liner: 见 pitch.json 的 one_liner

## 推送（重启后）
1. Step 4 必须先把 字段→旧值→新值→理由 给 hawkingrei 确认。
2. 文字/词库/meta：POST `/api/me/sync?token=<KEY>`（contents 每条 content 为对应 json 字符串化 / research 为 markdown 原文；glossary_mode=merge；meta 确认后带）。
3. BP/视频：POST `/api/me/asset?token=<KEY>`（type=bp_page 逐张 / type=video 单槽）。
4. 分工：内容 = 前端专家-hax；推送 = linkerdog（token 在 Mac 那侧）。视频（HyperFrame ~30s 中文旁白）= linkerdog 在问 hawkingrei 要不要做。
