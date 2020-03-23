import React, {Component} from 'react';


class Todo extends Component{
    constructor() {
        super();
        this.state = {
            userInput: "",
            items: []
        };
       
        
    
    }

    onChange(event){ 
     this.setState({
         userInput: event.target.value
     }); 
    }
    addTodo(event){
        event.preventDefault();
        this.setState({
            userInput: "", //pour pettre au forme de se vider 
            // ici,on ajoute une copie du tableau 
            //et on ajoute un nouveau element
            items: [...this.state.items, this.state.userInput]
        }); //() => console.log(this.state));

    }
    deleteTodo(event){
    event.preventDefault();
    const array = this.state.items;
    const index = array.indexOf(event.target.value);
    array.splice(index,1);
    this.setState({
    items:array
    
});
}
    // cette methode permet de voir les todos
    renderTodos(){
        return this.state.items.map((item) =>{
            return (
            
                <div key={item}>
                    {item}| <button onClick={this.deleteTodo.bind(this)}
                    className="btn btn-primary"
                    >
                 
                        supprimer
                        </button>

                </div>

            
              );
        })

    }
    render(){
        return (
            <div>
               <h1 align="center">Ma Todo List</h1> 
               <form className ="form-row align-items-center">
                   
                 <input 
                 value={this.state.userInput} type="text" 
                 placeholder="rensegner un item" 
                 onChange={this.onChange.bind(this)}
                 className="form-control mb-2"
                 />
                 <button 
                 onClick={this.addTodo.bind(this)}
                 className="btn btn-primary"
                 >
                     Ajouter
                 </button>
               </form>
             <div>
                 
               {this.renderTodos() } 
             </div>
            </div>
            // value fait référzence au state dans son etat originel
            // ensuite on crée une methode onChange qui va mettre le state à jour
        )
    }
}
export default Todo;