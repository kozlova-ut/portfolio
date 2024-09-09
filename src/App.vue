<template>
    <header class="header">
        <div class="container">
            <div class="header__content">
                <div class="header__main">
                    <h1>
                        Юлия Козлова
                    </h1>
                    <span>
                        frontend-developer
                    </span>
                </div>
                <div class="header__photo">
                    <picture>
                        <source :srcset="getImageSrc(photoId, 300)" media="(min-width: 871px)">
                        <source :srcset="getImageSrc(photoId, 200)" media="(max-width: 870px)">
                        <img :srcset="getImageSrc(photoId, 300)" alt="photo">
                    </picture>
                </div>
            </div>
        </div>
    </header>
    <main class="main">
        <div class="container">
            <div class="main__grid">
              <MyContacts></MyContacts>
              <section class="content">
                <AppNavigation></AppNavigation>
                <RouterView></RouterView>
            </section>
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup>
import MyContacts  from '@/components/MyContacts.vue';
import AppNavigation from '@/components/AppNavigation.vue';


import { RouterView, useRoute } from 'vue-router';
import { ref, watch } from 'vue';

const photoId = ref(1);
const route = useRoute();

const setPhotoIdFromRoute = () => {
  switch (route.name) {
    case 'portfolio':
      photoId.value = 1;
      break;
    case 'experience':
      photoId.value = 2;
      break;
    case 'education':
      photoId.value = 3;
      break;
    default:
      photoId.value = 1;
  }
};

setPhotoIdFromRoute();

watch(route, () => {
  setPhotoIdFromRoute();
});

const getImageSrc = (id: number, size: number): string => {
  return `${import.meta.env.VITE_ASSETS_PATH}/img/julie_${id}_${size}.png`;
}

</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.header {
  &__content {
    display: grid;
    grid-template-columns: 1fr 450px;
    padding: 30px 0px 0px;
  }

  &__photo {
    img {
      width: 300px;
      border-radius: 50%;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0px 0px;

    h1 {
      margin-bottom: 10px;
      @include mainTitle;
    }

    span {
      @include secondTitle;
    }
  }
}
.main {
  margin-top: -100px;
    
  &__grid {
    padding: 120px 20px 40px;
    display: grid;
    grid-template-columns: 1fr 430px;
    grid-gap: 20px;
    grid-template-areas: 'content contacts';
    background: #ffffff;

    .content {
      grid-area: content;
    }
  }
}

@media (max-width: 1024px) {
    .header {
        &__content {
            grid-template-columns: 1fr 350px;
        }
    } 
    
    .main {
        &__grid {
            grid-template-columns: 1fr 350px;
        }
    }
}

@media (max-width: 870px) {
    .header {
        &__content {
            grid-template-columns: 1fr 300px;
        }

        &__photo {
            img {
                width: 200px;
            }
        }

        &__main {
            padding: 30px 0px 0px;
        }
    }

    .main {
        margin-top: -60px;

        &__grid {
            padding: 80px 20px 40px;
            grid-template-columns: 1fr 300px;

            .content {
              padding-top: 140px;
            }
        }
    }
}

@media (max-width: 768px) {
    .header {
        &__content {
            grid-template-columns: 1fr;
            grid-template-areas: 'photo'
                                'main';
        }

        &__photo {
            display: flex;
            justify-content: center;
            grid-area: photo;
        }

        &__main {
            grid-area: main;
            padding: 10px 0px 0px;
        }
    } 

    .main {

        margin-top: -160px;

        &__grid {
            padding: 180px 20px 40px;
            grid-template-columns: 1fr;
            grid-template-areas: 'contacts'
                                'content';
        }

        .content {
          padding-top: 80px;
        }
    }

}

@media (max-width: 460px) {
  .main {
    .content {
      padding-top: 140px;
    }
  }
}

@media (max-width: 400px) {
    .header {
        &__main {
            h1 {
                margin-bottom: 0px;
            }
        }
    }

    .main {
        &__grid {
            padding: 180px 10px 40px;
        }
    }
}

@media (max-width: 320px) {

}

</style>
