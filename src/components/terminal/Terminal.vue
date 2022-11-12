<script setup lang="ts">
import { createApp, ref } from "vue";
import { prompt } from "../../settings";

defineProps<{ msg: string }>();

var is_alive: boolean = true;

const input = createApp({});
input.mount("#input");

const output = createApp({
  mounted() {},
});
output.mount("#input");

function cmd_args(input: string): string[] {
  return [];
}

function process(cmd_args: string[]) {
  is_alive = false;
}
</script>

<template>
  <div>
    <div id="output-container"></div>
    <div id="input-container">
      <el-input v-model="input" ref="input" />
    </div>
    <div id="hint-container"><p id="hint"></p></div>
  </div>
</template>

<style scoped></style>
