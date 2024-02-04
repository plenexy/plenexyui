<script setup lang="ts">
const props = defineProps({
  action: { type: String }
})
const getClass = () => {
  let className = '';
  switch (props.action) {
    case 'success':
      className = 'bg-green-500'
          break
    case 'info':
      className = 'bg-violet-500'
      break
    case 'warning':
      className = 'bg-amber-400'
      break
    case 'error':
      className = 'bg-red-500'
      break
    default:
      className = 'bg-sky-500'
        break
  }
  return className
}
</script>

<template>
  <div class="fixed top-0 end-0 p-4">
    <div class="py-3 px-5 rounded-md opacity-90" v-bind:class="getClass()" aria-live="polite" style="">
      <div class="toastr-message text-white">Are you the six fingered man?</div>
    </div>
  </div>
</template>