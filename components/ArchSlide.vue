<template>
  <div class="slide-shell">
    <div class="topline">
      <div class="brand-mark">
        <img class="brand-logo" src="/linkerdog-logo.jpg" alt="" />
        <span>LinkerDog</span>
      </div>
      <div class="slide-count">05 / 11</div>
    </div>
    <div class="frame-line frame-line-top" />
    <div class="frame-line frame-line-bottom" />

    <h1 class="center-title">Agent Team<span> 架构</span></h1>

    <div class="arch-diagram">
      <div class="arch-layer arch-top">
        <div class="arch-box arch-wide">🧑 Agent Team 协作平台</div>
      </div>
      <div class="arch-arrow">↓</div>
      <div class="arch-layer arch-mid">
        <div class="arch-box">🤖 Meeting Bot</div>
      </div>
      <div class="arch-arrow">↓</div>
      <div class="arch-layer arch-bottom">
        <div class="arch-box arch-highlight">🖥️ Live Meeting（原生平台）</div>
        <div class="arch-divider">|</div>
        <div class="arch-box arch-roadmap">Zoom 🔜</div>
        <div class="arch-box arch-roadmap">Google Meet 🔜</div>
      </div>
    </div>

    <p class="center-claim" style="margin-top: 1.2rem;">
      会议源谁的都行，<strong>活在我们这层做。</strong>
    </p>
    <p class="arch-note">🔜 跨平台接入 = 下一步</p>
  </div>
</template>
