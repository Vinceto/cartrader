<script setup>
    const city = ref("");
    //const router = useRouter()

    const cityError = ref(false)
    // const router = useRouter()
    const handleSearch = () => {
        if(!city.value){
            return cityError.value = true
        }
        navigateTo(`/city/${city.value}/car`)
        // router.push('/city/${city.value}/car')
    };
</script>

<template>
    <div class="font-serif w-[1000px] text-2x1 rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2x1 mx-auto">
        <input type="text" class="py-3 px-5 w-full text-2x1 rounded-full focus_outline-none" :class="cityError ? 'border-red-500 border' : '' " placeholder="search by city..." v-model="city">
        <button class="bg-sky-500 px-10 text-white" @click="handleSearch">Search</button>
    </div>
</template>