---
theme: seriph
title: LinkerDog
info: |
  LinkerDog deck.
class: text-left
layout: default
lineNumbers: false
transition: slide-left
drawings:
  persist: false
mdc: true
colorSchema: dark
routerMode: hash
---

<section class="md-slide md-hero">
  <div class="md-brand">LinkerDog</div>
  <div class="md-floating-symbols" aria-hidden="true">
    <span style="left: 9%; animation-delay: 0s;">agent.run()</span>
    <span style="left: 23%; animation-delay: 2.1s;">task.write()</span>
    <span style="left: 51%; animation-delay: 4.2s;">memory.sync()</span>
    <span style="left: 72%; animation-delay: 1.1s;">tool.call()</span>
    <span style="left: 88%; animation-delay: 3.4s;">ship.now()</span>
  </div>
  <div class="md-center">
    <h1 class="md-title md-title-mega">会中出活</h1>
    <p class="md-subtitle">让 agent 在会议里直接推进执行。</p>
  </div>
</section>

---

<section class="md-slide">
  <div class="md-kicker">WHY NOW</div>
  <h1 class="md-title">实时 LLM 让会议变了</h1>
  <p class="md-subtitle">当生成速度足够快，会议不再只是记录场景，而是可以成为执行入口。</p>

  <div class="md-split">
    <div class="md-metric">
      <div class="md-metric-value">1000+</div>
      <div class="md-metric-label">tokens / second</div>
      <div class="md-metric-track" aria-hidden="true"><span></span></div>
    </div>
    <div class="md-stack">
      <div class="md-card">
        <span>Before</span>
        <strong>会后总结</strong>
        <p>整理已经发生的讨论。</p>
      </div>
      <div class="md-card md-card-hot">
        <span>Now</span>
        <strong>会中执行</strong>
        <p>边讨论，边生成任务、方案和下一步。</p>
      </div>
    </div>
  </div>
</section>

---

<section class="md-slide">
  <div class="md-kicker">PROBLEM</div>
  <h1 class="md-title">会议只同步了人</h1>
  <p class="md-subtitle">人对齐了，但系统没有变。从“大家知道了”到“事情真的做了”，中间有很大的 gap。</p>

  <div class="md-grid md-grid-3">
    <div class="md-card">
      <span>01</span>
      <strong>人被同步了</strong>
      <p>背景、目标、分工和下一步在会上被说清楚。</p>
    </div>
    <div class="md-card">
      <span>02</span>
      <strong>系统没被同步</strong>
      <p>任务、代码、文档、状态和记忆仍然停在原地。</p>
    </div>
    <div class="md-card">
      <span>03</span>
      <strong>执行被推迟</strong>
      <p>会后还要整理、分派、补上下文，工作才真正开始。</p>
    </div>
  </div>
</section>

---

<section class="md-slide md-flow-slide">
  <div class="md-kicker">PRODUCT</div>
  <h1 class="md-title">LinkerDog 补上这个 gap</h1>
  <p class="md-subtitle">把会议里的信息，直接变成团队系统里的可执行状态。</p>

  <div class="md-flow">
    <div class="md-node">
      <span>Listen</span>
      <strong>听懂会议</strong>
      <p>语音、发言人、决策点。</p>
    </div>
    <div class="md-arrow">→</div>
    <div class="md-node md-node-hot md-pulse">
      <span>Act</span>
      <strong>生成执行物</strong>
      <p>任务卡、负责人、截止时间、引用。</p>
    </div>
    <div class="md-arrow">→</div>
    <div class="md-node">
      <span>Persist</span>
      <strong>写回记忆</strong>
      <p>下次会议自动接上。</p>
    </div>
  </div>

  <div class="md-callout">会议结束时，事情已经进入系统。</div>
</section>

---

<section class="md-slide">
  <div class="md-kicker">USER RESULT</div>
  <h1 class="md-title">用户看到的是结果</h1>
  <p class="md-subtitle">不是多一个会议插件，而是会议后少一轮人工搬运。</p>

  <div class="md-grid md-grid-2">
    <div class="md-card md-large-card">
      <span>Action Card</span>
      <strong>谁做什么，何时交付</strong>
      <p>每张卡带原话引用，减少会后追问。</p>
    </div>
    <div class="md-card md-large-card">
      <span>Team Memory</span>
      <strong>下次直接从上次继续</strong>
      <p>决策、约束和进展沉淀为团队上下文。</p>
    </div>
  </div>
</section>

---

<section class="md-slide">
  <div class="md-kicker">WHY US</div>
  <h1 class="md-title">这不是 prompt 产品</h1>
  <p class="md-subtitle">它需要实时系统、agent 基建和工程产品化能力。</p>

  <div class="md-team-row">
    <div class="md-person">
      <img src="https://github.com/hawkingrei.png" alt="Hawkingrei" />
      <div>
        <strong>Hawkingrei</strong>
        <p>TiDB core engineering · LinkerDog</p>
      </div>
    </div>
    <div class="md-person">
      <img src="https://github.com/jackwener.png" alt="jackwener" />
      <div>
        <strong>jackwener</strong>
        <p>OpenCLI · DataFusion · Doris</p>
      </div>
    </div>
  </div>

  <div class="md-grid md-grid-3 md-compact-grid">
    <div class="md-card"><strong>实时</strong><p>边听边生成。</p></div>
    <div class="md-card"><strong>状态</strong><p>把会议写成系统状态。</p></div>
    <div class="md-card"><strong>工具链</strong><p>agent 能调用真实工具。</p></div>
  </div>
</section>

---

<section class="md-slide">
  <div class="md-kicker">STATUS</div>
  <h1 class="md-title">现在要验证付费场景</h1>
  <p class="md-subtitle">核心链路已经打通，下一步是进入真实团队。</p>

  <div class="md-grid md-grid-3">
    <div class="md-card">
      <span>Done</span>
      <strong>端到端跑通</strong>
      <p>实时字幕、执行卡、写回记忆。</p>
    </div>
    <div class="md-card">
      <span>Next</span>
      <strong>灰度上线</strong>
      <p>让真实会议持续使用。</p>
    </div>
    <div class="md-card md-card-hot">
      <span>Ask</span>
      <strong>3 个试点客户</strong>
      <p>产研团队 / 专业服务，2 周 POC。</p>
    </div>
  </div>
</section>

---

<section class="md-slide md-hero">
  <div class="md-floating-symbols" aria-hidden="true">
    <span style="left: 14%; animation-delay: 0.6s;">decision</span>
    <span style="left: 36%; animation-delay: 2.7s;">owner</span>
    <span style="left: 61%; animation-delay: 1.5s;">deadline</span>
    <span style="left: 82%; animation-delay: 3.8s;">context</span>
  </div>
  <div class="md-kicker">CLOSE</div>
  <div class="md-center">
    <h1 class="md-title">会议还没结束，任务已经开始</h1>
    <p class="md-subtitle">这就是 LinkerDog 要做的事。</p>
  </div>
</section>
