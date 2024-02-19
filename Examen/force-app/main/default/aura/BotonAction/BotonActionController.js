({
    myAction : function(component, event, helper) {

    },
    grabar : function(component, event, helper) {

        component.set("v.recording", true);
        component.set("v.lista", []);

    },
    stop : function(component, event, helper) {
        component.set("v.recording", false);
        var secuencias = component.get("v.lista");
        var accion = component.get("c.guardarSecuencias");
        accion.setParams({"secuencia": secuencias});
        accion.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.lista", []);
                console.log("Secuencias guardadas");
            }
            else{
                console.log("Error al guardar secuencias");
            }
        });
        $A.enqueueAction(action);


    },
    play : function(component, event, helper) {

        var secuencias = component.get("v.lista");
        secuencias.forEach(function(secuencia,index){
            console.log("Secuencia " + (index + 1) + ": " + secuencia.join(' '));

    });
    },
    clear : function(component, event, helper) {
        component.set("v.lista", []);
    },
    addToList : function(component, event, helper) {
        var lista = component.get("v.lista");
        var item = event.getParam("number");
        if (component.get("v.recording")){
            
            lista.push(item);
            component.set("v.lista", lista);
        }        
    }
})
