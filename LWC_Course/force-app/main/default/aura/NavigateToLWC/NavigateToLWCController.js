({
    init : function(component, event, helper) {
        var myPageRef = component.get("v.pageReference");
        var codeText = myPageRef.state.c__codeText;
        var codeValue = myPageRef.state.c__codeNumber;
        alert('propertyValue '+codeText);

        alert('propertyValue '+codeValue);

        component.set('v.codeValue', codeValue);
        component.set('v.codeText', codeText);
    }
})
