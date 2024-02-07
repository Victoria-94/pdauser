'use strict'
/*class User{
    constructor(username, password, email){
    this.username= username;
    this.password = password;
    this.email = email;
    }
    login (username, password) {
        // validar usuario y contrasenia
        if (username===this.username && password===this.password){
            alert("Welcome");
        }else alert("Ooops... algo salio mal")
    }
    resetPassword(newpassword){
        this.password = newpassword;
        }
    updateInfo(newemail){
        this.email= newemail;
    }
    showInfo(username, email){
        alert(`Usuario ${this.username} (${this.email})`);

    }
    }

    let user = new User ("Victoria", "********", "victoria.q10@outlook.es");
    user.login("Victoria", "**");
    user.resetPassword("333");// recetear la clave
    user.login("Victoria", "333"); // debe salir welcome 
    user.updateInfo("vquinde@gmail.es");
    user.showInfo("vquinde@gmail.es");*/
    

////////////////////////////////////////////////////////////////////

class Product{
    constructor(descrition, price, stock){
    this.descrition= descrition;
    this.price = price;
    this.stock = stock;
    }
    showInfo(){
       alert(`El producto ${this.descrition} que selecciono, cuesta ${this.price}, y tenemos ${this.stock} en almacenamiento `); 
    }
    minusStock (qty){
        this.stock = (this.stock -qty);
    }
    increaseStock(high){
        this.stock = (this.stock +high)}
    
    updatePrice(newprice){
        this.price=newprice;
    };

}

let showinfo= new Product ("Zanahoria", "$2", 20);
showinfo.showInfo("Zanahoria", "$2", 20);
showinfo.minusStock(3);
showinfo.showInfo();
showinfo.increaseStock(5);
showinfo.updatePrice("$3");
showinfo.showInfo();