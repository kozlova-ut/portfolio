<template>
    <div class="education">
        <div class="education__item"
            v-for="item in education"
            :key="item.id"
        >
            <div class="title">
                <span class="company">{{ item.company }}</span>
                <span class="date">{{ item.date }}</span>
            </div>
            <span class="position">{{ item.position }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>

const education = [
    {
        id: 3,
        company: 'Skillbox',
        date: '2020 - настоящее время',
        position: 'Профессия Frontend-разработчик',
    },
    {
        id: 2,
        company: 'HTML Academy',
        date: '2020 - 2020',
        position: 'Марафон по вёрстке «Заверстаю»',
    },
    {
        id: 1,
        company: 'Санкт-Петербургский государственный морской технический университет',
        date: '2009 - 2014',
        position: 'Экономика и управление на предприятии',
    },
]

</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';
.education {
    
    &__item {  
        display: grid;
        grid-template-columns: 230px 1fr;
        
        &:not(:last-child) {
            margin-bottom: 30px;
        }

        .title {
            display: flex;
            flex-direction: column;

            .company {
                margin-bottom: 3px;
                @include uppText;
                color: $headingColor;
            }

            .date {
                @include addText;
            }
        }

        .position {
            @include uppText;
            color: $mainText;
        }  
    }
}

@media (max-width: 870px) {
    .education {
        &__item {
            grid-template-columns: 1fr;

            .title {
                margin-bottom: 10px;
            }
        }
    }
}

</style>