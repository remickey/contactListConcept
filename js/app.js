// Initialize the contactListApp as an AngularJS module
var contactListApp = angular.module("ContactListApp", []);

/*
	Declare the controller for the contactListApp. This is used for storing the people objects in an array and
	adding some functionality to the HTML page.
*/
contactListApp.controller('MainController', ['$scope', function($scope) {
	
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
	   }else{							// Otherwise display all contact information
	   
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
  
  /*
		An array of person objects that is iterated through in the HTML using ng-repeat.
  */
  $scope.persons = [
    {
      fname: "Travis",
	  lname: "Mickey",
	  address: "1155 Sibling Ln",
	  city: "Westville",
	  state: "NC",
	  zip: "27012",
	  hphone: "336.134.52345",
	  mphone: "336.305.13547",
	  wphone: "336.305.61561",
	  email: "tmickey@yoohoo.com",
	  relationship: "Brother"
    },
	{
      fname: "Authur",
	  lname: "Curry",
	  address: "1422 Underwater Dr",
	  city: "Atlantis",
	  state: "CA",
	  zip: "90217",
	  hphone: "777.623.4356",
	  mphone: "777.451.3574",
	  wphone: "777.623.6361",
	  email: "aquaman@underthesea.org",
	  relationship: "Friend"
    },
	{
      fname: "Jacob",
	  lname: "Smith",
	  address: "5345 Hicktown Rd",
	  city: "Camouflage",
	  state: "NC",
	  zip: "27052",
	  hphone: "336.305.6841",
	  mphone: "336.305.8446",
	  wphone: "336.305.1355",
	  email: "xCountryBoy120x@realtreemails.com",
	  relationship: "Cousin"
    },
	{
      fname: "Rudy",
	  lname: "Schwartz",
	  address: "412 1st St",
	  city: "New York",
	  state: "NY",
	  zip: "34068",
	  hphone: "405.687.1530",
	  mphone: "405.567.1321",
	  wphone: "465.156.7894",
	  email: "bigboyrudy@geemail.com",
	  relationship: "Coworker"
    },
	{
      fname: "Sarah",
	  lname: "Bradford",
	  address: "917 Potato Ave",
	  city: "Murky Water",
	  state: "TN",
	  zip: "36813",
	  hphone: "865.413.9821",
	  mphone: "865.687.9234",
	  wphone: "865.413.9647",
	  email: "sbabs@ayeohel.com",
	  relationship: "Friend"
    },
	{
      fname: "Larry",
	  lname: "Underwood",
	  address: "6842 Rattlesnake Bl",
	  city: "Rainwater",
	  state: "TX",
	  zip: "46813",
	  hphone: "675.374.6578",
	  mphone: "678.698.9541",
	  wphone: "675.374.2884",
	  email: "larrygeneunderwood@ask.com",
	  relationship: "Friend"
    }
  ];
}]);