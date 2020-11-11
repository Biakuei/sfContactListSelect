({
	doInit : function(component, event, helper) {
		// Retrive contacts during component initialization
		helper.loadContacts(component);
	},
    
    handleSelect : function(component, event, helper) {
    	var contacts = component.get("v.contacts");
        var contactList = component.get("v.contactList");
        
        // Get the selected option: "Referral", "Social Media" or "All"
        var selected = event.getSource().get("v.value");
        
        var filtredList = [];
        var fIndx = 0;        
        for(var i = 0; i < componentList.length; i++) {
            var contact = componentList[i];
            if(selected != "All") {
                if(contact.LeadSource == selected) {
                    filtredList[fIndx] = contact;
                    fIndx++;
                }
            }else {
                filtredList = contactList;
            }
        }
        
        // Set the filtred list of contacts based on the selected option
        conponent.set("v.contacts", filtredList);
        helper.updateTotal(component);
	}
})