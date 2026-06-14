---
theme: seriph
title: Linkerdog：Bot for Agent
info: |
  A simple 3-minute web deck about redesigning traditional software for agents.
class: text-left
lineNumbers: false
transition: slide-left
drawings:
  persist: false
mdc: true
colorSchema: light
routerMode: hash
---

<div class="slide-shell">
  <div class="eyebrow">Linkerdog · Bot for Agent</div>

  <div class="grid grid-cols-[1.06fr_0.94fr] gap-10 mt-8 items-start">
    <div>
      <h1 class="!text-5xl !leading-tight !mb-7">把传统软件，重新设计成 agent 的工作界面</h1>
      <p class="text-xl leading-8 max-w-2xl muted">
        起点不是再做一个会议工具，而是把会议里的声音、决策和上下文，实时变成 agent 能消费、能追踪、能沉淀的结构化记忆。
      </p>

      <div class="panel panel-wide p-6 mt-9">
        <div class="eyebrow">三分钟只讲一个判断</div>
        <div class="mt-4 text-2xl font-bold leading-9">
          Agent 需要的不是“会后回放”，而是实时上下文、可行动摘要和长期 memory。
        </div>
      </div>
    </div>

    <div class="flow-stack">
      <div class="step-box">
        <div class="metric">01</div>
        <div>
          <div class="mini-title">传统软件</div>
          <div class="muted mt-1">面向人操作和回放</div>
        </div>
      </div>
      <div class="arrow">↓</div>
      <div class="step-box step-hot">
        <div class="metric">02</div>
        <div>
          <div class="mini-title">Agent 接口</div>
          <div class="muted mt-1">实时推送、结构化整理</div>
        </div>
      </div>
      <div class="arrow">↓</div>
      <div class="step-box">
        <div class="metric">03</div>
        <div>
          <div class="mini-title">长期 Memory</div>
          <div class="muted mt-1">沉淀为可复用上下文</div>
        </div>
      </div>

      <div class="mt-8 text-lg font-bold">Meeting for agent 是第一个落地点</div>
    </div>
  </div>
</div>

---

<div class="slide-shell">
  <div class="eyebrow">Meeting for Agent</div>
  <h1 class="!text-4xl !leading-tight !mt-4 !mb-3">从三种会议入口，收敛到 agent-ready memory</h1>
  <p class="muted text-lg max-w-4xl">
    不追求大而全；先把会议这个高频上下文源，变成实时、历史、线下都可进入 agent 的接口。
  </p>

  <div class="grid grid-cols-[1fr_auto_0.86fr_auto_0.9fr] gap-4 mt-8 items-center">
    <div class="lane">
      <div class="metric">01</div>
      <div>
        <div class="mini-title">在线 meeting bot</div>
        <div class="muted text-sm mt-1">Zoom 在线会议机器人，实时把内容推给 slock 等 agent。</div>
      </div>
    </div>
    <div class="arrow-inline">→</div>
    <div class="output-box">实时会议纪要</div>
    <div class="arrow-inline">→</div>
    <div class="result-panel" style="grid-row: span 3;">
      <div class="mini-title text-[#fff7ed]">Agent 可以直接消费的结果</div>
      <ul class="result-list">
        <li>Live context</li>
        <li>Structured minutes</li>
        <li>Action suggestions</li>
        <li>Durable memory</li>
      </ul>
      <div class="result-note">
        核心不是记录会议，而是把会议变成 agent 的上下文供应链。
      </div>
    </div>

    <div class="lane">
      <div class="metric">02</div>
      <div>
        <div class="mini-title">历史视频记录</div>
        <div class="muted text-sm mt-1">把过去的视频会议整理成记录，并抽取长期可复用信息。</div>
      </div>
    </div>
    <div class="arrow-inline">→</div>
    <div class="output-box">最终 memory</div>
    <div class="arrow-inline">→</div>

    <div class="lane">
      <div class="metric">03</div>
      <div>
        <div class="mini-title">IoT 录音设备</div>
        <div class="muted text-sm mt-1">随时收集线下讨论，整理会议内容并提出建议。</div>
      </div>
    </div>
    <div class="arrow-inline">→</div>
    <div class="output-box">建议 + 纪要</div>
    <div class="arrow-inline">→</div>
  </div>

  <div class="footer">3-minute version · simple pitch</div>
</div>
