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
        <div class="arch-box">🖥️ Live Meeting（原生）</div>
        <div class="arch-divider">+</div>
        <div class="arch-box arch-dim">Zoom</div>
        <div class="arch-box arch-dim">Google Meet</div>
      </div>
    </div>

    <p class="center-claim" style="margin-top: 1.5rem;">
      Agent 一等参会 · 跨平台接入 · 一处出活
    </p>
  </div>
</template>
