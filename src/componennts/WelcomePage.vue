<template>
    <div class="w-full lg:w-2/6 h-screen bg-backgroundWelcomePage bg-center bg-cover flex justify-center items-end ">
    
    
        <div class="w-full h-3/6 lg:h-3/5   bg-bgColor flex justify-center items-center">
            <div class="relative border border-white w-10/12  h-5/6 -top-20">
                <div class="overflow-hidden rounded-full w-20 absolute -top-10  -right-8 "><img src="../assets/images/a-1259.jpg" class="w-full h-full" alt="Hafez"></div>
                <img src="../assets/images/pngwing.jpg" class=" absolute top-1/3 -left-20 w-40  rotate90" alt="Hafez">
    
                <div dir="rtl" class="w-full h-4/5 flex items-end p-4  ">
                    <div class="w-full">
                        <h1 class="text-darkText IranNastaliq text-2xl m-2">درباره فال حافظ</h1>
                        <div class="text-white text-sm IranNastaliq m-4">با توجه به فرهنگ و ادبیات ایران، فال حافظ یکی از رسوم و سنت‌های محبوب است که برای گرفتن راهنمایی یا شناخت بهتر از مسائل زندگی استفاده می‌شود. این سنت به این صورت است که شخص مورد نظر یک سوال یا مسئله خاصی را مطرح می‌کند و سپس یک بیت
                            از شاهکار حافظ را به صورت تصادفی انتخاب می‌کند و آن را برای تفسیر و راهنمایی بیشتر مورد بررسی قرار می‌دهد.</div>
                    </div>
                </div>
    
                <div class="absolute w-full flex justify-center flex-col">
                    <div class="text-darkText text-center " style="font-size: .70rem;">
                        ای حافظ شیرازی! تو محرم هر رازی! تو را به خدا و به شاخ نباتت قسم می دهم که هر چه صلاح و مصلحت می بینی برایم آشکار و آرزوی مرا براورده سازی.
                      </div>  
                        <button  @click="$emit('GetOmen')" class="btn-grad">بعد از نیت کلیک کنید</button>
                      </div>
            </div>
            <!-- <div class="w-20 top-1/4 -right-3 absolute"><img class="w-full h-full rounded-full" src="../assets/images/a-1259.jpg" alt="Hafez"></div> -->
        </div>
    
    </div>
</template>


<style scoped>
.rotate90 {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
}
</style>