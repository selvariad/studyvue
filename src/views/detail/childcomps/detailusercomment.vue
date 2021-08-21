<template>
  <div class="detail-comment">
    <div class="comment-head">
      <div>用户评价</div>
      <a href=""><div class="more">更多</div></a>
    </div>
    <div class="commemt" v-if="Object.keys(comment).length !== 0">
      <div
        class="user-comment"
        v-for="(item, index) in comment.list"
        :key="index"
      >
        <div class="user-info">
          <img :src="item.user.avatar" alt="" />
          <span>
            {{ item.user.uname }}
          </span>
        </div>
        <div class="usercomment">
          <div class="user-extrainfo">
            <div v-for="(info, indey) in item.extraInfo" :key="indey">
              {{ info }}
            </div>
          </div>
          <div class="user-text">{{ item.content }}</div>
          <span
            class="user-img"
            v-for="(img, indez) in item.images"
            :key="indez"
          >
            <img :src="img" alt="" />
          </span>
        </div>
        <div class="goods-info">
          <date :getdate="item.created" />
          <div>{{ item.style }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import date from "../../../components/common/date/date"; //时间戳处理

export default {
  props: {
    comment: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    date,
  },
};
</script>

<style scoped>
.detail-comment {
  border-bottom: 5px solid #f2f5f8;
  margin-bottom: 10px;
  padding: 0 7px;
}
.comment-head {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  padding: 14px 15px;
}
.comment-head div {
  line-height: 16px;
}
.comment-head .more {
  font-weight: 600;
}
.user-info {
  display: flex;
  margin: 7px;
}
.user-info img {
  width: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.user-info span {
  line-height: 45px;
  margin-left: 10px;
  font-weight: 500;
}
.usercomment {
  margin: 0 7px;
}
.user-comment .user-extrainfo {
  color: #bababb;
}
.usercomment .user-img {
  margin-top: 10px;
}
.usercomment .user-img img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
.goods-info {
  display: flex;
  color: #bababb;
  margin: 3px 7px;
  justify-content: space-between;
}
.goods-info div {
  line-height: 16px;
}
</style>