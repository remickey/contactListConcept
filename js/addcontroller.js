/*
	Declare the AddController for the contactListApp. This is used for formatting the information the user inputs
	and calling a service method to store the contact into the service's contact array
	
*/
contactListApp.controller('AddController', ['$scope', 'ContactListService', function($scope, ContactListService) {	
	
	// Initialize the contact variable used to collect the input from the input fields on the page itself.
	$scope.newContact = {
		fname: "",
		lname: "",
		street: "",
		city: "",
		postalCode: "",
		hphone: "",
		hAreaCode: "",
		hPhoneNumber: "",
		mphone: "",
		mAreaCode: "",
		mPhoneNumber: "",
		wphone: "",
		wAreaCode: "",
		wPhoneNumber: "",
		email: "",
		relationship: ""
	};
	
	// Initialize the contacts variable used to hold an array of contacts. Used for displaying on the homepage.
	$scope.contacts = ContactListService.getContacts();
	
	/*
		The saveContact is used to save new contacts in the service's contacts array. 
	*/
	$scope.saveContact = function(){
		// Test to see if any phone numbers need formatting and format them.
		if($scope.newContact.hAreaCode != "" && $scope.newContact.hPhoneNumber != ""){
			$scope.newContact.hphone = "1-" + $scope.newContact.hAreaCode + "-" + $scope.newContact.hPhoneNumber.substring(0,3) + "-" + $scope.newContact.hPhoneNumber.substring(3);
		}
		
		if($scope.newContact.mAreaCode != "" && $scope.newContact.mPhoneNumber != ""){
			$scope.newContact.mphone = "1-" + $scope.newContact.mAreaCode + "-" + $scope.newContact.mPhoneNumber.substring(0,3) + "-" + $scope.newContact.mPhoneNumber.substring(3);
		}
		
		if($scope.newContact.wAreaCode != "" && $scope.newContact.wPhoneNumber != ""){
			$scope.newContact.wphone = "1-" + $scope.newContact.wAreaCode + "-" + $scope.newContact.wPhoneNumber.substring(0,3) + "-" + $scope.newContact.wPhoneNumber.substring(3);
		}
		
		// Remove unnecessary name: value pairs from the contact object.
		delete $scope.newContact.hAreaCode;
		delete $scope.newContact.hPhoneNumber;
		delete $scope.newContact.mAreaCode;
		delete $scope.newContact.mPhoneNumber;
		delete $scope.newContact.wAreaCode;
		delete $scope.newContact.wPhoneNumber;
		
		// Push the contact object into the array of contacts.
		ContactListService.storeContact($scope.newContact);
	};
}]);