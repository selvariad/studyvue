<template>
  <div class="goods-item" @click="itemclick">
    <img :src="showimg" alt="" />
    <div class="goods-info">
      <p>{{ goodsitem.title }}</p>
      <span class="price">{{ goodsitem.price }}</span>
      <span class="collect">{{ goodsitem.cfav }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsitem: {
      //遍历item然后将item传入goodsitem
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgload() {
      console.log("load");
    },
    itemclick() {
      //因为进入商品详情页之后还可以用back返回，所以用push
      this.$router.push("/detail/" + this.goodsitem.iid);
    },
  },
  computed: {
    showimg() {
      //这里是将img的路径做一个判断，确保他在不同的数据来源中都有值
      return this.goodsitem.image || this.goodsitem.show.img;
    },
  },
};
</script>
<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  position: absolute;
  font-size: 12px;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  /* 让文字显示的时候如果超出范围直接末尾... */
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>