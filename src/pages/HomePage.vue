<template>
  <t-layout id="home-layout">
    <t-header id="home-header">
      <t-head-menu v-model:value="menuValue" height="120px" @change="changeMenuHandler">
        <t-avatar id="home-avatar" image="Kapibara-icon.jpg"/>
        <t-menu-item value="item1"> 这是哪儿？ </t-menu-item>
        <t-menu-item value="item2"> 咖啡豆卡 </t-menu-item>
        <t-menu-item value="item3"> 札记 </t-menu-item>
        <t-menu-item value="item4"> 游记 </t-menu-item>

      </t-head-menu>
    </t-header>
    <t-content id="home-contain">
      <div>Content: {{ menuValue }}</div>
    </t-content>
    <t-footer id="home-footer"> Bocabbage: zhangzhuofan97@gmail.com </t-footer>
  </t-layout>
</template>


<script setup>
import { ref } from 'vue';

const menuValue = ref('item1')

const changeHandler = (active) => {
  console.log('change', active);
};

</script>

<style scoped>

#home-layout {
  min-height: 100vh;
}

#home-contain {
  min-height: 768px;
  background-color: var(--td-success-color-2);
}

#home-footer {
  background-color: var(--td-success-color-3);
}

#home-avatar {
  margin-left: 10px;
  margin-right: 30px;
}

t-menu-item {
  background: var(--td-success-color-6);
}

</style>