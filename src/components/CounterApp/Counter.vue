<template>
    <div class="counter" >
        <h4>{{count}}</h4> 
        <button class="counterbtn" @click.prevent="Increment({ value : 10 })">Increment1</button>
    </div>
    <div class="todo">
        <h3><b><u>Todo nameList (Done- {{ doneListCount }})</u></b></h3>
        <div>
            <ul v-for="list in todoList" :key="list">
                  <a href="#" @click.prevent="todoSelected(list.id)"><b>
                <li> {{ list.id }}.{{ list.text }} - ({{list.done ? 'Done' : 'not done'}})</li>
               </b> </a>
            </ul>
        </div>
         <div v-if="list" >
            <h3><b><u>Selected Id</u></b></h3>
            <h6>Id: {{list.id}}</h6>
            <h6>Text: {{list.text}}</h6>
            <h6>Done: {{list.done}}</h6>
        </div>
        
        <h3><b><u>Todo Done List (Done- {{ doneListCount }})</u></b></h3>
        <div >
            <ul v-for="list in doneTodo" :key="list.id">

                <li>{{ list.text }} - ({{list.done ? 'Done' : 'not done'}})</li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapActions,mapGetters,mapState} from "vuex";

    export default {
        name : 'counter',
        data() {
            return {   
                selectedId : 0,
                list : ''
            }
        },
        computed:{
            ...mapState({
                count: state => state.counter.count,
                todoList : state=>state.todos.todos
            }),
            ...mapGetters( 'todos',{
                doneListCount : 'donetodoListCount',
                doneTodo: 'doneTodo',
                todoById : 'selectedTodoById'
            }),

            // count(){
            //     return this.$store.state.count
            // },
            // todoList(){
            //     return this.$store.state.todos;
            // },

            // doneListCount(){
            //     return this.$store.getters.donetodoListCount
            // },
            // doneTodo(){
            //     return this.$store.getters.doneTodo
            // },
            // list(){
            //     return this.$store.getters.selectedTodoById(this.selectedId)
            // }
        },
        methods: {
            ...mapActions({
                Increment : 'counter/actionB'
            }),
            // Increment(){
            //     this.$store.dispatch( 
            //        'actionB'
            //     ).then((response)=>{
            //         console.log(response);
            //     })      
            // },
            todoSelected(id){
                this.selectedId = id;
                this.list = this.todoById(id);
            }
        },
    }
</script>

<style>
.counter{
    background:lightgrey;
    height:80px;
    margin-left:250px;
    width:250px;
    height:100px;
    border : 2px solid black;
}
.counterbtn{
    background:green;
    margin-top:10px;
    color: white;
    height:35px;
    width:100px;
    border:none;
    border-radius:7px;
}
.todo{
    text-align: start;
    margin-top: 20px;
    border: 2px solid black;
    height: 450px;
    width:450px;
    margin-left: 250px;
    background-color: burlywood
}
</style>