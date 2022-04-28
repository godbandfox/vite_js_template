<template>
  <a-layout-header style="background: #fff; padding: 0">
    <menu-unfold-outlined v-if="collapsed" class="trigger" @click="changeCollapsed"/>
    <menu-fold-outlined v-else class="trigger" @click="changeCollapsed"/>
    <a-dropdown>
      <a class="ant-dropdown-link" @click.prevent>
        admin
        <DownOutlined/>
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <a href="javascript:;" @click.prevent="logOut">退出登录</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </a-layout-header>
</template>
<script setup>
import {reactive, computed} from 'vue'
import {MenuUnfoldOutlined, MenuFoldOutlined, DownOutlined} from '@ant-design/icons-vue'
import {useRouter} from 'vue-router'
import {collapsedStore} from "@/store/collapsedStore";

const router = useRouter()
const state = collapsedStore()
let collapsed = computed({
  get() {
    return state.collapsed
  },
  set() {
  }
})
const changeCollapsed = () => {
  state.changeCollapsed()
}
const logOut = () => {

  router.push({path: '/login'})
}
</script>

<style lang="scss" setup>
#app .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#app .ant-dropdown-link {
  float: right;
  margin-right: 50px;
  font-size: 24px;
}
</style>
