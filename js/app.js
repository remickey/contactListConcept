// Initialize the contactListApp as an AngularJS module
var contactListApp = angular.module("ContactListApp", ['ngRoute']);

/*
	Declare a module to handle routing between templates so that page loads aren't necessary when using the app.
*/
contactListApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        controller: 'AppController',
        controllerAs: 'list',
        templateUrl: 'partials/list.html'
      })
	   .when('/add', {
        controller: 'AppController',
        controllerAs: 'add',
        templateUrl: 'partials/edit.html'
      })
	   .when('/edit/:id', {
        controller: 'AppController',
        controllerAs: 'edit',
        templateUrl: 'partials/edit.html'
      })
	  .otherwise({
		redirectTo: '/'
	  });
}]);

/*
	Declare the controller for the contactListApp. This is used for storing the people objects in an array and
	adding some functionality to the HTML page.
*/
contactListApp.controller('AppController', ['$scope', function($scope) {
	
	// Initialize the contact variable used to collect the input from the input fields on the page itself.
	$scope.contact = {
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
	$scope.contacts = [
    {
      fname: "Travis",
	  lname: "Larky",
	  street: "1155 Sibling Ln",
	  city: "Westville",
	  state: "NC",
	  postalCode: "27012",
	  hphone: "1-336-134-52345",
	  mphone: "1-336-305-13547",
	  wphone: "1-336.305.61561",
	  email: "tmickey@yoohoo.com",
	  relationship: "Brother"
    },
	{
      fname: "Authur",
	  lname: "Curry",
	  street: "1422 Underwater Dr",
	  city: "Atlantis",
	  state: "CA",
	  postalCode: "90217",
	  hphone: "1-777-623-4356",
	  mphone: "1-777-451-3574",
	  wphone: "1-777-623-6361",
	  email: "aquaman@underthesea.org",
	  relationship: "Friend"
    },
	{
      fname: "Jacob",
	  lname: "Smith",
	  street: "5345 Hicktown Rd",
	  city: "Camouflage",
	  state: "NC",
	  postalCode: "27052",
	  hphone: "1-336-305-6841",
	  mphone: "1-336-305-8446",
	  wphone: "1-336-305-1355",
	  email: "xCountryBoy120x@realtreemails.com",
	  relationship: "Cousin"
    },
	{
      fname: "Rudy",
	  lname: "Schwartz",
	  street: "412 1st St",
	  city: "New York",
	  state: "NY",
	  postalCode: "34068",
	  hphone: "1-405-687-1530",
	  mphone: "1-405-567-1321",
	  wphone: "1-465-156-7894",
	  email: "bigboyrudy@geemail.com",
	  relationship: "Coworker"
    },
	{
      fname: "Sarah",
	  lname: "Bradford",
	  street: "917 Potato Ave",
	  city: "Murky Water",
	  state: "TN",
	  postalCode: "36813",
	  hphone: "1-865-413-9821",
	  mphone: "1-865-687-9234",
	  wphone: "1-865-413-9647",
	  email: "sbabs@ayeohel.com",
	  relationship: "Friend"
    },
	{
      fname: "Larry",
	  lname: "Underwood",
	  street: "6842 Rattlesnake Bl",
	  city: "Rainwater",
	  state: "TX",
	  postalCode: "46813",
	  hphone: "1-675-374-6578",
	  mphone: "1-678-698-9541",
	  wphone: "1-675-374-2884",
	  email: "larrygeneunderwood@ask.com",
	  relationship: "Friend"
    },
	{
	  fname: "Ryan",
	  lname: "Larky",
	  street: "4324 Jerky St",
	  city: "Dortmund",
	  state: "NC",
	  postalCode: "42345",
	  hphone: "1-675-374-6578",
	  mphone: "1-678-698-9541",
	  wphone: "",
	  email: "relerky@pmail.com",
	  relationship: ""
	}];
	
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
		The saveContact is used to save new contacts in the $scope.contacts array. 
	*/
	$scope.saveContact = function(){
		
		// Test to see if any phone numbers need formatting and format them.
		if($scope.contact.hAreaCode != "" && $scope.contact.hPhoneNumber != ""){
			$scope.contact.hphone = "1-" + $scope.contact.hAreaCode + "-" + $scope.contact.hPhoneNumber.substring(0,3) + "-" + $scope.contact.hPhoneNumber.substring(3);
		}
		
		if($scope.contact.mAreaCode != "" && $scope.contact.mPhoneNumber != ""){
			$scope.contact.mphone = "1-" + $scope.contact.mAreaCode + "-" + $scope.contact.mPhoneNumber.substring(0,3) + "-" + $scope.contact.mPhoneNumber.substring(3);
		}
		
		if($scope.contact.wAreaCode != "" && $scope.contact.wPhoneNumber != ""){
			$scope.contact.wphone = "1-" + $scope.contact.wAreaCode + "-" + $scope.contact.wPhoneNumber.substring(0,3) + "-" + $scope.contact.wPhoneNumber.substring(3);
		}
		// Remove unnecessary name: value pairs from the contact object.
		delete $scope.contact.hAreaCode;
		delete $scope.contact.hPhoneNumber;
		delete $scope.contact.mAreaCode;
		delete $scope.contact.mPhoneNumber;
		delete $scope.contact.wAreaCode;
		delete $scope.contact.wPhoneNumber;
		
		// Push the contact object into the array of contacts.
		$scope.contacts.push($scope.contact);
	};
}]);