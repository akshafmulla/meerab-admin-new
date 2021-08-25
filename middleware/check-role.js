export default function (context) {

    //console.log(typeof context.store.getters.isEmployee)
    if(context.store.getters.isAdmin == 'true'){ 
        context.redirect("/properties/dashboard")
    }else{
        context.redirect("/")
    }
}