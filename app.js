new Vue({
  el: '#app',
  data: {
    app_name: 'To do list',
    icon: '<i class="fa fa-calendar" aria-hidden="true"></i>',
    tasks: [{ action: "Buy Flowers", image_link: "", done: false },
            { action: "Get Shoes", image_link: "", done: false },
            { action: "Collect Tickets", image_link: "", done: true },
            { action: "Call Joe", image_link: "", done: false }]
  }
})
