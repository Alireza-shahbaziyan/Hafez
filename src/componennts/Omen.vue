<template>
    <div class="bg-white text-center text-lg rounded-md p-4">
        <div class="my-4 IranNastaliq">{{ RHYME }}</div>
        <div>
            {{OmenBody.MEANING}}
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const Omen = ref(null)
const OmenBody = ref('') 
const RHYME = ref('')
onMounted(async () => {
    try {
        const response = await fetch('https://one-api.ir/hafez/?token=946301:660b1811511ba');
        if (response.ok) {
            const jsonData = await response.json();
            Omen.value = jsonData;
            OmenBody.value = jsonData.result;
            RHYME.value = jsonData.result.RHYME;
            console.log(jsonData);
        } else {
            console.error('Fetch error: ', response.statusText);
        }
    } catch {
        console.error('Fetch error: ');
    }
});
console.log(Omen);
</script>

