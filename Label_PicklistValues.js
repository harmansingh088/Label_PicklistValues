({
    doInit : function(component, event, helper) {
        var sObjectTypeList = component.get("v.sObjectTypeList");
        let action = component.get( "c.getDescribedObjects" );
        action.setParams({sObjectTypeList : sObjectTypeList});
        action.setCallback( helper, function( response ) {
            if ( component.isValid() && response.getState() === 'SUCCESS' ) {
                component.set( 'v.ObjectType', JSON.parse( response.getReturnValue() ) );
                console.table( JSON.parse( response.getReturnValue() ) ); 
            } else {
                console.error( 'Error calling action "' + actionName + '" with state: ' + response.getState() );
                alert('Error calling action "' + actionName + '" with state: ' + response.getState());
            }
            
        });
        $A.enqueueAction( action );                
    }
})
