<template>
  <div>
    <div id="output-container"></div>
    <div id="input-container">
      <span id="prompt">{{ prompt }} </span>
      <el-input v-model="inputed_cmd" />
    </div>
    <div id="hint-container"><p id="hint"></p></div>
  </div>
</template>

<style scoped>
#input-container {
  display: flex;
  align-items: baseline;
}
#prompt {
  flex-shrink: 0;
}

</style>

<script setup lang="ts">
import { createApp, ref } from "vue";
import { prompt } from "../../settings";
import { CmdList, CmdMap } from "../../core/CmdRegister";

//defineProps<{ msg: string }>();
console.log("YEE");
function process() {
  const cmds: string[] = inputed_cmd.value.trim().split(" ");
  console.log(cmds);
  CmdMap[cmds[0]].func(cmds);
}
let inputed_cmd = ref("");

const input = createApp({})
input.mount("#input-container")

const output = createApp({});
output.mount("#output-container");

const hint = createApp({});
hint.mount("#hint-container");
</script>
