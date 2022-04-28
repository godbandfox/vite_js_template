<template>
  <div class="multiple-tabs">
    <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" @change="avtiveChange" @edit="onEdit">
      <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable"></a-tab-pane>
    </a-tabs>
  </div>
</template>
<script setup>
import {ref, computed} from 'vue'
import {tableListStore} from '@/store/tableListStore'

const tableStore = tableListStore()
let panes = computed({
  get() {
    return tableStore.tabList
  },
  set() {
  }
})
let activeKey = computed({
  get() {
    return tableStore.activeKey[0]
  },
  set() {
  }
})
const avtiveChange = (activeKey) => {
  tableStore.setActiveTab({activeKey: activeKey})
}
const onEdit = (targetKey) => {
  remove(targetKey)
}
const remove = (targetKey) => {
  tableStore.removeTabList({targetKey:targetKey})
}
</script>
<style lang="scss">
.multiple-tabs {
  z-index: 10;
  height: 42px;
  line-height: 32px;
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;
  border-top: 1px solid #d9d9d9;

  .ant-tabs-card {
    .ant-tabs-card-bar {
      .ant-tabs-tab-active {
        background-color: #0960bd;
        color: #fff;
      }
    }
  }
}
</style>
