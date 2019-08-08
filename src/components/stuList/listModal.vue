<template>
  <div class="modal" id="modal">
    <div class="mask" @click="hide"></div>
    <div class="modal-content">
      <h2>编辑信息</h2>
      <form action="#" id="edit-student-form" class="add-student-form">
        <div>
          <label for="name">姓名</label>
          <input
            type="text"
            name="name"
            autocomplete="off"
            :value="editStu.name"
            @input="changeValue('name', $event.target.value)"
            ref="name"
          />
        </div>
        <div class="sex">
          <label for="sex">性别</label>
          <input
            type="radio"
            name="sex"
            :checked="editStu.sex === 0"
            value="0"
            @change="changeValue('sex', 0)"
            ref="sex"
          />
          <span>男</span>
          <input
            type="radio"
            name="sex"
            :checked="editStu.sex === 1"
            value="1"
            @change="changeValue('sex', 1)"
          />
          <span>女</span>
        </div>
        <div>
          <label for="sNo">学号</label>
          <input
            type="text"
            name="sNo"
            :value="editStu.sNo"
            @input="changeValue('sNo', $event.target.value)"
            readonly
            ref="sNo"
          />
        </div>
        <div>
          <label for="email">邮箱</label>
          <input
            type="text"
            name="email"
            :value="editStu.email"
            @input="changeValue('email', $event.target.value)"
            ref="email"
          />
        </div>
        <div>
          <label for="birth">出生年</label>
          <input
            type="text"
            name="birth"
            :value="editStu.birth"
            @input="changeValue('birth', $event.target.value)"
            ref="birth"
          />
        </div>
        <div>
          <label for="phone">手机号</label>
          <input
            type="text"
            name="phone"
            :value="editStu.phone"
            @input="changeValue('phone', $event.target.value)"
            ref="phone"
          />
        </div>
        <div>
          <label for="address">住址</label>
          <input
            type="text"
            name="address"
            :value="editStu.address"
            @input="changeValue('address', $event.target.value)"
            ref="address"
          />
        </div>
        <div>
          <label for></label>
          <input type="button" value="提交" class="btn" @click="commit" />
          &nbsp;
          <input type="button" value="重置" class="btn" @click="reset" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    ...mapActions(["updateStu"]),
    hide() {
      this.$store.commit("changeModal", false);
    },
    changeValue(key, value) {
      this.user[key] = value;
    },
    commit() {
      let user = Object.assign({}, this.editStu, this.user);
      this.updateStu(user)
        .then(data => {
           this.$toast(data)
        })
        .catch(err => {
          this.$toast(err);
        });
    },
    reset() {
      for(let prop in this.$refs) {
        if(prop !== 'sex') {
          this.user[prop] = this.$refs[prop].value = ''
        }
      }
      this.user.sex = 0;
      this.$refs.sex.checked = true;
    }
  },
  computed: {
    ...mapState(["editStu"])
  }
};
</script>

<style>
</style>