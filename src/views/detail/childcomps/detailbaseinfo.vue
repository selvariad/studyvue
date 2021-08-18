<template>
  <div v-if="Object.keys(itemdetail).length !== 0" class="base-info">
    <!-- Object.keys(name).length ！== 0可以查询对象是不是空的 -->
    <div class="info-title">{{ itemdetail.title }}</div>
    <div class="info-price">
      <span class="new-price">{{ itemdetail.newprice }}</span>
      <span class="old-price">{{ itemdetail.oldprice }}</span>
      <span v-if="itemdetail.discount" class="discount">
        {{ itemdetail.discount }}
      </span>
    </div>
    <div class="info-other">
      <span>{{ itemdetail.columns[0] }}</span>
      <span>{{ itemdetail.columns[1] }}</span>
      <span>
        {{ itemdetail.services[itemdetail.services.length - 1].name }}
      </span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in itemdetail.services.length - 1"
        :key="index"
      >
        <img :src="itemdetail.services[index - 1].icon" alt="" />
        <span>{{ itemdetail.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemdetail: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f2f2;
}
.info-title {
  color: #222;
}
.info-price {
  margin-top: 10px;
}
.info-price .new-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.info-price .old-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.info-price .discount {
  color: #f2f2f2;
  background-color: var(--color-high-text);
  border-radius: 10px;
  font-size: 10px;
  vertical-align: top;
}
.info-other {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.info-other span {
  text-align: center;
  font-size: 15px;
}
.info-service {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.info-service-item {
  text-align: center;
  font-size: 15px;
  color: #222;
}
.info-service-item img {
  width: 15px;
}
</style>