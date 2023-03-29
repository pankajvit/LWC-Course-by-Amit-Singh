({
    doHandle : function(component, event, helper) {
        const message = event.getParam('message');
        console.log('message from lwc',message);
    },

    callChild: function(component, event, helper){
        var childComp = component.find('childCmp');
        childComp.childMethod('Message from aura', 30);
    }
})
