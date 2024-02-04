<script setup lang="ts">

</script>

<template>
  <div class="fixed top-0 end-0 p-3" style="z-index: 100">
    <div class="bg-white dark:bg-[#26272F] fade box-shadow hide p-3 rounded-md lg:w-[350px] relative">
      <div class="flex items-center pb-2 px-2 border-b border-[#363843] justify-between">
        <strong class="w-2/3 text-[12px] text-gray-600">Keenthemes</strong>
        <div class="w-1/3 text-right">
          <small class="text-[10px] text-gray-600">11 mins ago</small>
        </div>
        <button type="button" class="fixed top-1.5 end-4 text-[24px]">&times;</button>
      </div>
      <div class="toast-body pt-2 px-2 text-[11px] text-gray-600">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>
</template>

<style scoped>
.box-shadow {
  box-shadow: 0 0.5rem 1.5rem 0.5rem rgba(0, 0, 0, 0.075);
}
.fade {
  transition: opacity .15s linear;
}
</style>