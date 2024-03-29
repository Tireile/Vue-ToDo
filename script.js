Vue.component("task", {
  props: ["data"],
  methods: {
    task_done() {
      this.$emit("task_done");
    },
  },
  template: `
    <div class="task">
        <div>
            <h3 class="task__title">{{data.title}}</h3>
            <p class="task__desc">{{data.desc}}</p>
        </div>
        <button @click="task_done()" class="task__done">✔️</button>
    </div>
  `,
});

const vue = new Vue({
  el: "#app",
  data: {
    new_task: {
      title: "",
      desc: "",
    },
    tasks: [
      {
        title: "Изучить Vue.js",
        desc: "Прочитать книгу 'Величие Vue.js 2'",
      },
      {
        title: "Записать видео",
        desc: "Рассказать про vuex и vue-router",
      },
    ],
  },
  methods: {
    add_task() {
      if (this.new_task.title) {
        this.tasks.push({
          title: this.new_task.title,
          desc: this.new_task.desc,
        });
        this.new_task.title = "";
        this.new_task.desc = "";
      }
    },
    delete_task(id) {
      this.tasks.splice(id, 1);
    },
  },
});
