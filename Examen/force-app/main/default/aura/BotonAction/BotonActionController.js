({
    myAction : function(component, event, helper) {

    },
    grabar : function(component, event, helper) {

        component.set("v.lista", []);

    },
    stop : function(component, event, helper) {
    },
    play : function(component, event, helper) {
    },
    clear : function(component, event, helper) {
        component.set("v.lista", []);
    },
    addToList : function(component, event, helper) {
        var lista = component.get("v.lista");
        var item = event.getParam("number");
        lista.push(item);
        component.set("v.lista", lista);

        
    }
})
