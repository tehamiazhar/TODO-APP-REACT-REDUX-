export default class todoAction{

    static ADDTODO = "ADDTODO";
    static DELETETODO = "DELETETODO";
    static EDITTODO = "EDITTODO";

     static add(value){
        return { 
            type: 'ADDTODO'
        }
    }

     static delete(value){
        return { 
            type: 'DELETETODO'
        }
    }


 static edit(value){
        return { 
            type: 'EDITTODO'
        }
    }

}