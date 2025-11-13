<template>
    <div class="sheet-wrapper">
        <div class="sheet">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.sheet {
    height: 600px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}

.sheet-wrapper{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>