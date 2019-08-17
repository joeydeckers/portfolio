<template>
  <button class="btn btn-primary btn-custom" :style="{background:btnColor}">
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
    .btn-custom{
        display: block !important;
        margin: 20px 0;
        border-color: transparent !important;
        padding: 10px 25px !important;
        a{
            color: #fff;
            &:hover{
                text-decoration: none;
                color: #fff
            }
        }
    }
</style>