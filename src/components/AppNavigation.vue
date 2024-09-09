<template>
    <nav class="navigation">
        <router-link 
            v-for="item in navItems"
            :key="item.id"
            :to="item.link"
            class="navigation__item"
            >
            <span>
                {{ item.name }}
            </span> 
        </router-link>
    </nav>
</template>

<script lang="ts" setup>

interface NavItem {
    id: number,
    name: string,
    link: string
}

const navItems:NavItem[] = [
    {id: 1, name: 'Портфолио', link: '/'},
    {id: 2, name: 'Опыт работы', link: '/experience'},
    {id: 3, name: 'Образование', link: '/education'},
]

</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';
@import '@/assets/styles/variables';

.navigation {
    padding: 0px;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;

    &__item {
        flex: 1 1 auto;
        padding: 10px;
        text-align: center;

        &:hover,
        &.router-link-active {
            background: $darkBG;
        }

        span {
            @include uppText;
            color: $headingColor;
        }
    }
}

@media (max-width: 870px) {
    .navigation {
        flex-direction: column;
    }
}

@media (max-width: 768px) {
    .navigation {
        flex-direction: row;
    }
}

@media (max-width: 460px) {
    .navigation {
        flex-direction: column;
    }
}
    
</style>