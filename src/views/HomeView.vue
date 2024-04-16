<script setup>
import Loding from '@/componennts/Loding.vue';
import WelcomePage from '@/componennts/WelcomePage.vue';
import { defineAsyncComponent } from 'vue';
import {ref} from 'vue';
const status = ref(0)
const ShowOmen = defineAsyncComponent(()=>import('@/componennts/ShowOmen.vue'))
</script>

<template>
    <div class="flex justify-center items-center w-full h-scree">
            <WelcomePage @GetOmen="status=1" v-if="status===0"  />
        <div v-if="status===1" class="">
            <Suspense>
                <template #default>
                        <div class="flex flex-col justify-center p-2">
                            <ShowOmen/>
                            <button  @click="status=0" class="btn-grad"> بازگشت</button>
                        </div>
                </template>
                <template #fallback>
                    <div>
                        <Loding/>
                    <button @click="status=0" class="btn-grad"> بازگشت</button>
                    </div>
                </template>
            </Suspense>
        </div>
    </div>
</template>


