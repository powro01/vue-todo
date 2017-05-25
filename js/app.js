var app = new Vue({
    el: '#vue-todo',
    data: {
        tasks: [],
        content: '',
    },
    methods: {
        addTask: function() {
            let newTask = {
                content: this.content,
                complete: false
            };

            this.tasks.push(newTask);
            this.content = '';
        },
        deleteTask: function(index) {
            this.tasks.splice(index, 1);
        },
        saveTasksList: function() {
            if(typeof(Storage) !== 'undefinded') {
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            } else {

            }
        },
        getTasks: function() {

                let task = JSON.parse(localStorage.getItem('tasks'));
                this.tasks = task;
 
        },
        autoSave: function() {
            let self = this;
            setInterval(function() {
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
                console.log('test');
            }, 1000);
        }
    },
    computed: {
        tasksLength: function() {
            if(this.tasks.length > 0) {
                return true;
            } else {
                return false;
            }
        },
        completedTasks: function() {
            if(this.tasks.filter(task => task.complete).length > 0) {
                return this.tasks.filter(task => task.complete);
                completed = true;
            } else {
                completed = false;
            }
        },
        uncompletedTasks: function() {
            if(this.tasks.filter(task => !task.complete).length > 0) {
                return this.tasks.filter(task => !task.complete);
                uncompleted = true;
            } else {
                uncompleted = false;
            }
        }
    }
});