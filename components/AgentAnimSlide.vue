<template>
  <div class="slide-shell">
    <div class="topline">
      <div class="brand-mark">
        <img class="brand-logo" src="/linkerdog-logo.jpg" alt="" />
        <span>LinkerDog</span>
      </div>
      <div class="slide-count">10 / 11</div>
    </div>
    <div class="frame-line frame-line-top" />
    <div class="frame-line frame-line-bottom" />

    <h1 class="center-title">一边讨论，<span>活就做了</span></h1>

    <div class="anim-scene">
      <!-- Person A -->
      <div class="anim-person anim-a">
        <div class="anim-avatar">A</div>
        <div class="anim-bubble anim-bubble-a">我们要做用户增长</div>
      </div>
      <!-- Person B -->
      <div class="anim-person anim-b">
        <div class="anim-avatar">B</div>
        <div class="anim-bubble anim-bubble-b">同时要优化性能</div>
      </div>

      <!-- Agent center -->
      <div class="anim-agent">
        <div class="anim-agent-icon">🤖</div>
        <div class="anim-agent-label">Agent</div>
      </div>

      <!-- Outputs -->
      <div class="anim-output anim-out-a">
        <div class="anim-card">
          <strong>📈 增长方案</strong>
          <span>用户调研→投放策略→A/B 测试</span>
        </div>
      </div>
      <div class="anim-output anim-out-b">
        <div class="anim-card">
          <strong>⚡ 性能优化</strong>
          <span>Profile→瓶颈定位→索引方案</span>
        </div>
      </div>
    </div>

    <p class="center-claim" style="margin-top: 0.5rem;">
      多个 Agent 并行，把不同方向的活<span>当场做完</span>
    </p>
  </div>
</template>

<style scoped>
.anim-scene {
  position: relative;
  width: 100%;
  height: 16rem;
  margin: 1rem auto 0;
}

.anim-person {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  animation: fadeInMove 1.2s ease-out both;
}

.anim-a { top: 0.5rem; left: 2rem; }
.anim-b { top: 3.5rem; right: 2rem; animation-delay: 0.3s; flex-direction: row-reverse; }

.anim-avatar {
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  background: var(--ld-yellow);
  border: 2px solid var(--ld-ink);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.anim-bubble {
  background: var(--ld-panel);
  border: 1px solid var(--ld-border);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
  font-weight: 600;
  box-shadow: var(--ld-shadow);
}

.anim-bubble-a { border-bottom-left-radius: 2px; }
.anim-bubble-b { border-bottom-right-radius: 2px; }

.anim-agent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  animation: pulse 2s ease-in-out infinite;
  animation-delay: 0.8s;
}

.anim-agent-icon { font-size: 2.5rem; }
.anim-agent-label { font-size: 0.8rem; font-weight: 800; color: var(--ld-muted); }

.anim-output {
  position: absolute;
  bottom: 0.5rem;
  animation: slideUp 0.8s ease-out both;
  animation-delay: 1s;
}

.anim-out-a { left: 1rem; }
.anim-out-b { right: 1rem; animation-delay: 1.3s; }

.anim-card {
  background: var(--ld-panel);
  border: 1px solid var(--ld-border);
  border-radius: var(--ld-radius);
  box-shadow: var(--ld-shadow);
  padding: 0.6rem 1rem;
  font-size: 0.8rem;
  line-height: 1.5;
  max-width: 14rem;
}

.anim-card strong { display: block; margin-bottom: 0.2rem; }
.anim-card span { color: var(--ld-muted); font-size: 0.75rem; }

@keyframes fadeInMove {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.08); }
}

/* Loop: reset after full cycle */
.anim-person, .anim-output {
  animation-iteration-count: infinite;
  animation-duration: 3s;
}

.anim-b { animation-delay: 0.4s; }
.anim-output { animation-duration: 3s; animation-delay: 1.2s; }
.anim-out-b { animation-delay: 1.6s; }

.anim-agent {
  animation-iteration-count: infinite;
}
</style>
