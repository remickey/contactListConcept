/*
	Declare the ContactListService that is used to store the instance of the
	array used by the application.
	
*/
contactListApp.service("ContactListService", [function(){
	var contacts = [
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
	
	return {
		getContacts: function(){
			return contacts;
		},
		
		storeContact: function(cnt){
			return contacts.push(cnt);
		},
		
		setContact: function(cnt){
			contact = cnt;
			return console.log(contact);
		}
	};

}]);