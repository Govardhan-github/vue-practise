<template>
    <div><h4>post</h4></div>
    <div class="posts">
        tile is : {{postData.title}}
    </div>
</template>

<script>
    export default {
        props: {
            postData:{
                required : true
            }
        },
    }
</script>

<style scoped>
.posts{
    background-color: aqua
}

</style>