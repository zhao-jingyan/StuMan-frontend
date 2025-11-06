<script lang="ts" setup>
  import SheetManager from './auth/SheetManager.vue';
  import Profile from './profile/ProfileSheet.vue';
  import List from './manage/StudentsList.vue';
  import type { UserInfo } from '@/types/index';

  const testInfo : UserInfo = {
    id : "123456",
    name : "Test Name",
    nickname : "Try nick",
    role : "Student",
    password : "",
    class : "1",
  }
</script>

<template>
  <router-view />
</template>
