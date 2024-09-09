<template>
    <div class="repos">
        <a :href="repos.html_url" class="repos__title" target="_blank">{{ repos.name }}</a>
        <p 
            v-if="repos.description"
            class="repos__description"
        >
            {{ repos.description }}
        </p>
        <a
            v-if="repos.homepage" 
            :href="repos.homepage" 
            target="_blank"
            class="repos__link"
        >
            {{ cleanHomepage(repos.homepage) }}
        </a>
        <ReposLanguages :langList="langList"></ReposLanguages>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getLang } from '@/api/github';
import type { ILang, IRepos } from '@/types/portfolio';
import ReposLanguages from '@/components/ReposLanguages.vue';
import { cleanHomepage } from '@/utils/utils'

const props = defineProps<{ repos: IRepos }>();

const langList = ref<ILang>({});

const loadLang = async () => {
    const response = await getLang(props.repos.name);
    langList.value = response;
}

loadLang();

</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.repos {
    position: relative;
    padding: 16px;
    margin-bottom: 16px;
    border: 1px solid $borderColor;
    border-radius: 10px;

    &::after {
        content: 'Public';
        position: absolute;
        right: 16px;
        top: 16px;
        @include public;
    }

    &__title {
        display: block;
        margin-bottom: 15px;
        @include portfolioTitle;
    }

    &__description {
        margin-bottom: 15px;
        @include mainText;
    }

    &__link {
        @include contactsText;
    }
}
</style>