<template>
    <section class="contacts">
        <div class="label">
            <span>Контакты</span>
        </div>
        <div class="contacts__item">
            <img src="@/assets/img/pic1.svg" alt="pic">
            <span>г. Санкт-Петербург</span>
        </div>
        <div class="contacts__item">
            <img src="@/assets/img/pic2.svg" alt="pic">
            <a target="_blank" href="tel:89657507928">8 (965) 750-79-28</a>
        </div>
        <div class="contacts__item">
            <img src="@/assets/img/pic3.svg" alt="pic">
            <a target="_blank" href="mailto:kozlova.ut@gmail.com">kozlova.ut@gmail.com</a>
        </div>
        <div class="contacts__item">
            <img src="@/assets/img/pic4.svg" alt="pic">
            <a target="_blank" href="https://t.me/twnthr">@twnthr</a>
        </div>
    </section>
    
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.contacts {
    grid-area: contacts;

    &__item {
        display: flex;
        align-items: center;

        &:not(:last-child) {
            margin-bottom: 10px;
        }

        img {
            margin-right: 10px;
        }

        span, 
        a {
            @include contactsText;
        }
    }
}

@media (max-width: 870px) {
    .contacts {
        .label {
            width: 100%;
            text-align: center;
        }
    }
}

@media (max-width: 768px) {
    .contacts {
        padding: 60px 10px 20px;

        .label {
            width: 30%;
            min-width: 200px;
        }
    }
}

@media (max-width: 460px) {
    .contacts {
        .label {
            width: 100%;
        }
    }
}

</style>