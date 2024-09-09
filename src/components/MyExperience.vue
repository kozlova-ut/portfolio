<template>
    <div class="experience">
        <div 
            v-for="item in experience"
            :key="item.id"
            class="experience__item">
            <span class="company">{{item.company }}</span>
            <span class="date">{{ item.date }}</span>
            <span class="position">{{ item.position }}</span>
            <ul v-if="item.responsibilities">
                <li v-for="(resp, index) in item.responsibilities" :key="index">
                    {{ resp }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>

const experience = [
    {
        id: 2,
        company: 'ЭкспоФорум Интернэшнл',
        date: 'Февраль 2023 - настоящее время',
        position: 'Web-разработчик',
        responsibilities: [
            'поддержка сайтов на платформе wordpress: создание шаблонов новых страниц, внесение правок в существующие',
            'перенос сайта дочерней компании на wordpress: вёрстка, натяжка на cms (вывод полей acf, настройка меню, хлебных крошек, форм, обеспечение мультиязычности)',
            'создание копий существующего сайта на платформе wordpress, изменение стилей иадаптация под новые проекты',
            'cоздание и настройка форм bitrix, стилизация и интеграция на сайте wordpress',
            'написание технической документации',
            'участие в разработке регламента по проведению аудита сайтов',
            'проведение технического аудита сайтов на платформе WordPress'
        ]
    },
    {
        id: 1,
        company: 'Data-driven lab',
        date: 'Август 2021 - ноябрь 2022',
        position: 'Верстальщик',
        responsibilities: [
            'верстка email-рассылок для различных почтовых клиентов',
            'тестирование писем на отображение (десктоп и мобильные устройства, режим darkmode)',
            'поддержка существующих шаблонов писем и работа с новыми макетами figma',
            'правка действующих рассылок',
            'верстка информационных и игровых ричмедий'
        ]
    }
]
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';
    
.experience {
    
    &__item {

        display: flex;
        flex-direction: column;

        &:not(:last-child) {
            margin-bottom: 30px;
        }

        .company {
            margin-bottom: 3px;
            @include uppText;
            color: $headingColor;
        }

        .date {
            @include addText;
        }

        .position {
            margin-top: 10px;
            @include uppText;
            color: $mainText;
        }

        ul {
            margin-top: 5px;
            padding-left: 18px;

            li {
                padding-left: 10px;
                @include mainText;

                &::marker {
                    content: '—';
                }
            }
        }
    }
}
</style>