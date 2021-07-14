new Vue({
  el: '#app',
  data: {
    app_name: 'To do list',
    icon: '<i class="fa fa-calendar" aria-hidden="true"></i>',
    task_name: "",
    img_link: "",
    tasks: [{ action: "Buy Flowers", image_link: "https://cdn.shopify.com/s/files/1/0035/2754/0782/articles/International_Flower_Day_2048x.jpeg?v=1579365491", done: false },
            { action: "Get Shoes", image_link: "https://toppng.com/uploads/preview/shoes-11528495416ikcwbjawnh.png", done: false },
            { action: "Collect Tickets", image_link: "https://pbs.twimg.com/profile_images/1245425709666816000/gkb8QvTW.jpg", done: true },
            { action: "Call Joe", image_link: "https://cdn6.aptoide.com/imgs/0/4/7/047d7868d8a62d69d3bb24842dfbaf21_icon.png", done: false }],
    num_deleted_tasks: 0
  },
  methods: {
    add(){
      if(this.task_name !== '')
        this.tasks.push(
          {
            action: this.task_name,
            image_link: this.img_link,
            done: false
          }
        )
      else
        alert('You have to input content')
    },
    remove(index){
      this.tasks.splice(index, 1);
      this.num_deleted_tasks++
    }
  },
  computed: {
    numberOfTasksUnfinished(){
      console.log("Count unfinished tasks");
      let count = 0;
      this.tasks.forEach(task => {
        if(!task.done) count++
      });
      return count
    },
    countNumDeletedTasks(){
      console.log("Count deleted tasks");
      return this.num_deleted_tasks
    },
  },
})
