/*
	Declare the MainController for the contactListApp. This is used for the "list.html" page, which lists the contacts
	and redirects to pages for adding new contacts.
	
*/
contactListApp.controller('MainController', ['$scope', 'ContactListService', function($scope, ContactListService) {		
	$scope.sortType = 'fname'; 							// used for sorting people by their first name
	$scope.phoneInfo = false; 							// used for determining if phone numbers are displayed (hidden by default)
	$scope.addressInfo = false; 						// used for determining if addresses are displayed (hidden by default)
	$scope.emailInfo = false;							// used for determining if e-mail addresses are displayed (hidden by default)
	$scope.phoneIcon = "img/phone.jpg"; 				// used to store the source of the phone icon (used in the HTML)
	$scope.addressIcon = "img/address.jpg"; 			// used to store the source of the address icon (used in the HTML)
	$scope.emailIcon = "img/email.jpg";					// used to store the source of the email icon (used in the HTML)
	$scope.phoneIconInactive = "img/phone.jpg";			// used to store the address of the "inactive" phone icon (final)
	$scope.phoneIconActive = "img/phone_selected.jpg";  // used to store the address of the "active" phone icon (final)
	$scope.addressIconInactive = "img/address.jpg"; 	// used to store the address of the "inactive" address icon (final)
	$scope.addressIconActive = "img/address_selected.jpg"; // used to store the address of the "active" address icon (final)
	$scope.emailIconInactive = "img/email.jpg";			// used to store the address of the "inactive" email icon (final)
	$scope.emailIconActive = "img/email_selected.jpg"; 	// used to store the address of the "active" email icon (final)
	$scope.contacts = ContactListService.getContacts(); // used to retrieve and store the contacts from the service
	
	/*
		The swapIcon function uses a switch statement to simply change an icon's state from active to inactive.
	*/
	$scope.swapIcon = function(icon){
		switch(icon){
			case this.phoneIconInactive:
				this.phoneIcon = this.phoneIconActive;
				break;
			case this.phoneIconActive:
				this.phoneIcon = this.phoneIconInactive;
				break;
			case this.addressIconInactive:
				this.addressIcon = this.addressIconActive;
				break;
			case this.addressIconActive:
				this.addressIcon = this.addressIconInactive;
				break;
			case this.emailIconInactive:
				this.emailIcon = this.emailIconActive;
				break;
			case this.emailIconActive:
				this.emailIcon = this.emailIconInactive;
				break;
		};
	};
   
   /*
		The showData function determines whether clicking/touching the name of the person
		will display or hide their contact information, which is hidden by default. This function
		also has conditions to determine whether to swap the icons.
   */
   $scope.showData = function(){
	   // Test to see if all of the contact information is displayed which determines that the
	   // information should be hidden
	   if(this.phoneInfo && this.addressInfo && this.emailInfo){
			this.phoneInfo = false;
			this.addressInfo = false;
			this.emailInfo = false;
			
			// If icons are active, call swapIcon method.
			if(this.phoneIcon === this.phoneIconActive 
					&& this.addressIcon === this.addressIconActive
					&& this.emailIcon === this.emailIconActive){
				this.swapIcon(this.phoneIcon);
				this.swapIcon(this.addressIcon);
				this.swapIcon(this.emailIcon);
			}
	   }else{			// Otherwise display all contact information
	   
			// Set of if statements that test whether icons are inactive and need to be displayed.
			if(!this.phoneInfo && this.phoneIcon === this.phoneIconInactive){
				this.swapIcon(this.phoneIcon);
			}
			if(!this.addressInfo && this.addressIcon === this.addressIconInactive){
				this.swapIcon(this.addressIcon);
			}
			if(!this.emailInfo && this.emailIcon === this.emailIconInactive){
				this.swapIcon(this.emailIcon);
			}
			
			this.phoneInfo = true;
			this.addressInfo = true;
			this.emailInfo = true;
	   }
   };
   /*
		The reverseSort function simply checks for the current value of sortType (ascending by default)
		and changes it to its opposite.
   */
   $scope.reverseSort = function(){
	   if($scope.sortType === 'fname'){
		   $scope.sortType = '-fname';
	   }else{
		   $scope.sortType = 'fname';
	   }
   };
}]);