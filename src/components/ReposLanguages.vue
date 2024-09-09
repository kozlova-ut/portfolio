<template>
    <div class="languages">
        <span class="language-bar">
            <span 
                v-for="(lines, lang) in langList" 
                :key="lang"
                :class="['lang', `lang-${lang}`]"
                :style="{ width: `${langWidth(lines)}%` }"
            >
            </span>
        </span>
        <ul class="lang-list">
            <li 
                v-for="(lines, lang) in langList"
                :key="lang"
            >
                <span class="lang">
                    <div :class="['marker', `marker-${lang}`]"></div>
                    {{lang}}
                </span>
                <span>
                    {{ langWidth(lines).toFixed(1) }}%
                </span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import type { ILang } from '@/types/portfolio';
import { computed } from 'vue';

const props = defineProps<{langList: ILang}>();

const totalLines = computed(() => {
    const values = Object.values(props.langList) as number[];
    return values.reduce((acc, current) => acc + current, 0);
});

const langWidth = (lines:number) => {
    const width = (lines*100) / totalLines.value;
    return width;
}

</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.language-bar {
    margin: 20px 0px 0px;
    max-width: 300px;
    display: flex;
    height: 8px;
    border-radius: 6px;
    outline: 1px solid #fff;
    overflow: hidden;

    .lang {
        outline: 1px solid #fff;
        @include langColors;
    }
}

.lang-list {
    margin-top: 20px;
    max-width: 300px;
    display: flex;
    flex-wrap: wrap;
    list-style: none;

    li {
        flex-basis: 50%; 
        margin-bottom: 5px;
        @include mainText;

        .lang {
            display: inline-block;
            margin-right: 5px;
            font-weight: bold;
        }
        
        .marker {
            display: inline-block;
            margin-right: 5px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            @include langColors;
        }
    }
}

</style>