<template>
  <div class="slide-shell">
    <div class="paper-glow glow-c" />
    <div class="topline">
      <div class="eyebrow">Meeting for Agent</div>
      <div class="slide-count">04 / 05</div>
    </div>

    <div class="section-header">
      <div>
        <h1 class="section-title">从三种会议入口，收敛到 agent-ready memory</h1>
        <p class="section-copy muted">
          不追求大而全；先把会议这个高频上下文源，变成实时、历史、线下都可进入 agent 的接口。
        </p>
      </div>
      <div class="header-pill">Start with meetings</div>
    </div>

    <div class="workflow-grid">
      <div class="lane">
        <div class="metric">01</div>
        <div>
          <div class="source-tag">Real-time</div>
          <div class="mini-title">在线 meeting bot</div>
          <div class="lane-copy muted">Zoom 在线会议机器人，实时把内容推给 slock 等 agent。</div>
        </div>
      </div>
      <div class="arrow-inline">→</div>
      <div class="output-box">实时会议纪要</div>
      <div class="arrow-inline">→</div>
      <div class="result-panel">
        <div class="mini-title result-title">Agent 可以直接消费的结果</div>
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
          <div class="source-tag">Historical</div>
          <div class="mini-title">历史视频记录</div>
          <div class="lane-copy muted">把过去的视频会议整理成记录，并抽取长期可复用信息。</div>
        </div>
      </div>
      <div class="arrow-inline">→</div>
      <div class="output-box">最终 memory</div>
      <div class="arrow-inline">→</div>

      <div class="lane">
        <div class="metric">03</div>
        <div>
          <div class="source-tag">Ambient</div>
          <div class="mini-title">IoT 录音设备</div>
          <div class="lane-copy muted">随时收集线下讨论，整理会议内容并提出建议。</div>
        </div>
      </div>
      <div class="arrow-inline">→</div>
      <div class="output-box">建议 + 纪要</div>
      <div class="arrow-inline">→</div>
    </div>
  </div>
</template>
