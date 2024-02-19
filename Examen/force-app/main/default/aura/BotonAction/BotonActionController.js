({
    grabar : function(component, event, helper) {
        component.set("v.recording", true);
        component.set("v.lista", []);
        component.set("v.listaTemporal", []);
    },
    stop : function(component, event, helper) {
        component.set("v.recording", false);
        var lista = component.get("v.lista");
        var secuenciaNow = component.get("v.listaTemporal");
        if( secuenciaNow && secuenciaNow.length > 0){
            lista.push(secuenciaNow);
        }
        component.set("v.listaTemporal", []);
        component.set("v.lista", lista);
    },
    play : function(component, event, helper) {
        var secuencias = component.get("v.lista");

        function mostrarSecuenciaConRetraso(index){
            if(index < secuencias.length){
                console.log("Secuencia " + ": " + secuencias[index].join(' '));
                setTimeout(function() {
                    mostrarSecuenciaConRetraso(index + 1);
                }, 1000); 
            }
        }
        mostrarSecuenciaConRetraso(0);
    },
    clear : function(component, event, helper) {
        component.set("v.lista", []);
        component.set("v.listaTemporal", []);
    },
    save : function(component, event, helper) {
    },
    addToList : function(component, event, helper) {
        var listaTemporal = component.get("v.listaTemporal");
        var item = event.getParam("number");
        if (component.get("v.recording")){
            listaTemporal.push(item);
            component.set("v.listaTemporal", listaTemporal);
        }        
    }
})
