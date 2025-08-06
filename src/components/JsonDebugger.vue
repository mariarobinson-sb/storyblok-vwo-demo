<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  data: Object,
  title: { type: String, default: 'Debug Data' },
  collapsed: { type: Boolean, default: true }
});

const isOpen = ref(!props.collapsed);

const formattedJson = computed(() => {
  return JSON.stringify(props.data, null, 2);
});

const toggleDebug = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="json-debugger">
    <div 
      @click="toggleDebug" 
      class="debug-header cursor-pointer select-none"
    >
      <span class="toggle-icon">{{ isOpen ? '▼' : '▶' }}</span>
      <span class="debug-title">{{ title }}</span>
      <span class="debug-count">({{ Object.keys(data || {}).length }} keys)</span>
    </div>
    
    <Transition name="slide-down">
      <div v-if="isOpen" class="debug-content">
        <pre class="json-code">{{ formattedJson }}</pre>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.json-debugger {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
}

.debug-header {
  background: #f9fafb;
  padding: 12px 16px;
  font-family: monospace;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #e5e7eb;
}

.debug-header:hover {
  background: #f3f4f6;
}

.toggle-icon {
  color: #6b7280;
  font-size: 12px;
}

.debug-title {
  font-weight: 600;
  color: #374151;
}

.debug-count {
  color: #6b7280;
  font-size: 12px;
}

.debug-content {
  background: #1f2937;
  color: #f9fafb;
}

.json-code {
  padding: 16px;
  margin: 0;
  font-family: 'Fira Code', 'SF Mono', Consolas, monospace;
  font-size: 12px;
  line-height: 1.5;
  overflow-x: auto;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  max-height: 400px;
  opacity: 1;
}
</style>