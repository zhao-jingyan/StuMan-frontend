<script setup>
import { ArrowLeftOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const onClickBack = () => {
    router.back();
}
</script>

<template>
    <div style="display: flex; flex-direction: row; text-align: center; padding: 64px 128px;">
        <div>
            <a-button @click="onClickBack" size="medium">
                <div style="display:flex; flex-direction:row; gap:8px; align-items: center;">
                    <ArrowLeftOutlined />
                    <div style="font-weight: 500;">Back</div>
                </div>
            </a-button>
        </div>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; padding: 64px;">
        <p>not implemented</p>
    </div>
</template>