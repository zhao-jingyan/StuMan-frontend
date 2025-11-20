<script setup>
import { PlusOutlined } from '@ant-design/icons-vue';
const data = [
    {
        class: '1',
        count: 64
    },
    {
        class: '2',
        count: 63
    },
    {
        class: '3',
        count: 63
    },
    {
        class: '4',
        count: 63
    },
    {
        class: '5',
        count: 63
    },
    {
        class: '6',
        count: 63
    },
    {
        class: '7',
        count: 63
    },
]
</script>

<template>
    <a-button>
        <div style="display:flex; flex-direction:row; gap:8px; align-items: center;">
            <PlusOutlined />
            <div style="font-weight: 500;">New</div>
        </div>
    </a-button>
    <a-list :data-source="data">
        <template #renderItem="{ item }">
            <a-list-item>
                <a-list-item-meta>
                    <!-- is title the best choice?-->
                    <template #title>
                        <div style="display: flex; flex-direction: row; align-items: center;">
                            <div style="font-size:medium ">Class {{ item.class }}</div>
                            <div style="font-size: small; color: gray; margin-left: auto;">{{ item.count }} people</div>
                        </div>
                    </template>
                </a-list-item-meta>
            </a-list-item>
        </template>
    </a-list>
</template>