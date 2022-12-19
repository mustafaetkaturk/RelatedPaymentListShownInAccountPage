({
	myAction : function(component, event, helper) {
        component.set('v.Columns',[
            {label:'Payment Type', fieldName:'Payment_Type__c', type:'text'},
            {label:'Amount', fieldName:'Amount__c', type:'currency'},
            {label:'Due Date', fieldName:'Due_Date__c', type:'date'},
            {label:'Created By', fieldName:'CreatedBy.Name', type:'string'},
            {label:'Created Date', fieldName:'CreatedDate', type:'date'}
        ]);
        
        var action = component.get("c.getPayments");
        action.setParams({
            recordId: component.get("v.recordId")
        });
        action.setCallback(this, function(data){
                           component.set("v.Payments", data.getReturnValue());                           
        });
    	$A.enqueueAction(action);
	}
})
