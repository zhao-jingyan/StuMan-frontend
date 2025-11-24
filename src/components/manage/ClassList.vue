<script setup>
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

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

/* list props */
const hoverClass = ref(null);
const selectedClass = ref(null);

const onMouseEnter = (classId) => {
    hoverClass.value = classId;
}

const onMouseLeave = () => {
    hoverClass.value = null;
}

const onListClick = (classId) => {
    selectedClass.value = classId
    router.push({ name: 'Manage', params: { classid: classId } });
}

const calcBackColor = (classId) => {
    const isSelected = classId === selectedClass.value;
    const isHover = classId === hoverClass.value;

    if (isSelected) {
        return '#e6f7ff'
    }
    else if (isHover) {
        return 'ghostwhite'
    }
    else {
        return 'transparent'
    }
}
/* list props end */

/* new button props */
const hoverNewButton = ref(false);

const onMouseEnterNew = () => {
    hoverNewButton.value = true;
}

const onMouseLeaveNew = () => {
    hoverNewButton.value = false;
}

const calcNewColor = computed(() => {
    return hoverNewButton.value ? 'ghostwhite' : 'transparent'
})
/* new button props end */

watch(() => route.params.classid, (newid) => {
    selectedClass.value = newid;
}, { immediate: true });
</script>

<template>
    <div style="display: flex; flex-direction: column; gap: 16px;">

        <!-- item in list has margin, so padding of button is set to 12px, to ensure same height in browser-->
        <div @mouseenter="onMouseEnterNew" @mouseleave="onMouseLeaveNew"
            style="border-radius: 24px; padding: 12px 16px; transition: 'background-color 0.2s'; user-select: none; "
            :style="{ backgroundColor: calcNewColor, cursor: 'pointer' }">
            <div style="display:flex; flex-direction:row; gap:16px; align-items: center; ">
                <PlusOutlined style="font-size: medium;" />
                <div style="font-weight: 500; font-size: medium;">New Class</div>
            </div>
        </div>

        <a-divider style="padding: 0px 0px ;margin: 0px 0px" />

        <div style="font-weight: 500; font-size: medium; padding-top:8px; padding-left: 16px; padding-right: 16px;">
            Your Classes:
        </div>

        <a-list :data-source="data" :split=false>
            <template #renderItem="{ item }">
                <a-list-item @click="onListClick(item.class)"
                    style="border-radius: 24px; padding: 8px 16px; transition: 'background-color 0.2s'; user-select: none;"
                    :style="{ backgroundColor: calcBackColor(item.class), cursor: 'pointer' }"
                    @mouseenter="onMouseEnter(item.class)" @mouseleave="onMouseLeave">

                    <div style="display: flex; flex-direction: row; align-items: center; width: 100%">

                        <div style="font-size:medium;"
                            :style="{ color: selectedClass === item.class ? '#2366ff' : 'black' }">
                            Class {{ item.class }}
                        </div>

                        <div style="font-size: small; margin-left: auto;"
                            :style="{ color: selectedClass === item.class ? '#2399ff' : 'gray' }">
                            {{ item.count }} people
                        </div>

                    </div>

                </a-list-item>
            </template>
        </a-list>
    </div>
</template>