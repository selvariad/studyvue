<template>
  <div class="param-info" v-if="Object.keys(paraminfo).length !== 0">
    <table
      v-for="(table, index) in paraminfo.sizes"
      :key="index"
      class="info-size"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">
          {{ td }}
        </td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paraminfo.infos" :key="index">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paraminfo.image.length !== 0">
      <img :src="paraminfo.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paraminfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.param-info table {
  width: 100%;
  border-collapse: collapse;
}
.param-info table tr {
  height: 42px;
}
.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-param {
  color: var(--color-high-text);
}
.param-value {
  text-align: center;
}
</style>