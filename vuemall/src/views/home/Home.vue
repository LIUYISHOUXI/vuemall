<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banner='banners'></home-swiper>
    </div>
</template>


<script>
    const NavBar=()=>import('components/common/navbar/NavBar')
    const HomeSwiper=()=>import('./childComps/HomeSwiper')
    import {getHomeMultidata} from 'network/home'
    export default {
        name: "Home",
        components:{
            NavBar,
            HomeSwiper
        },
        data() {
            return {
                banners:null
            }
        },
        created() {
            getHomeMultidata().then(res=>{
               this.banners=res.data.banners
            })
        },
    }   
</script>

<style scoped>
    .home-nav{
        background-color: var(--color-tint);
        color: white
    }
</style>