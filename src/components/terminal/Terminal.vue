<template>
  <div>
    <div id="output-container"></div>
    <div id="input-container">
      <el-input v-model="inputed_cmd" v-on:keypress.enter="process()" />
    </div>
    <div id="hint-container"><p id="hint"></p></div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { createApp, ref } from "vue";
import { prompt } from "../../settings";
import { CmdList, CmdMap } from "../../core/CmdRegister";

//defineProps<{ msg: string }>();

let inputed_cmd: string = prompt;

const output = createApp({});
output.mount("#output-container");
const input = createApp({});
input.mount("#input-container");
const hint = createApp({});
hint.mount("#hint-container");

function process() {
  const cmds: string[] = inputed_cmd.trim().split(" ");
  CmdMap[cmds[0]].func(cmds);
}
</script>
