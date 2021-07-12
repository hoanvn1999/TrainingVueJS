new Vue({
  el: '#app',
  data: {
    app_name: 'To do list',
    icon: '<i class="fa fa-calendar" aria-hidden="true"></i>',
    tasks: [{ action: "Buy Flowers", image_link: "https://i.pinimg.com/originals/09/2f/d0/092fd0a6692251c33744c77697c9b544.png", done: false },
            { action: "Get Shoes", image_link: "https://www.freeiconspng.com/thumbs/tasks-icon/tasks-icon-9.png", done: false },
            { action: "Collect Tickets", image_link: "https://pbs.twimg.com/profile_images/1245425709666816000/gkb8QvTW.jpg", done: true },
            { action: "Call Joe", image_link: "https://iconarchive.com/download/i75526/cornmanthe3rd/squareplex/Utilities-tasks.ico", done: false }]
  }
})
