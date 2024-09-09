<template>
    <div class="portfolio">
        <ReposCard
            v-for="repos in reposList"
            :key="repos.id"
            :repos="repos"
        />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getRepos } from '@/api/github';
import type { IRepos } from '@/types/portfolio';
import ReposCard from '@/components/ReposCard.vue';

const reposList = ref<IRepos[]>([]);

const loadRepos = async () => {
    const response = await getRepos();
    reposList.value = response.sort((a:IRepos, b:IRepos) => {
        const dateA = new Date(a.pushed_at).getTime();
        const dateB = new Date(b.pushed_at).getTime();
        return dateB - dateA; 
    });
}

loadRepos();

</script>

<style lang="scss" scoped>

</style>