<template>
  <button class="btn btn-primary" :style="{background:btnColor}">
      <a :href="link" target="blank">{{text}}</a>
    </button>
</template>

<script>
export default {
    props:[
        "text",
        "link",
        "btnColor"
    ],
}
</script>

<style lang="scss">
    .btn{
        display: block;
        a{
            color: #fff;
            &:hover{
                text-decoration: none;
            }
        }
    }
</style>