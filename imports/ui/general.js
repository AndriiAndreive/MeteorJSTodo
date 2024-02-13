import { Template } from 'meteor/templating';
 
import './general.html';
 
Template.mainContainer.helpers({
  datas: [
    { 
      id: 1, 
      locationName: "Gaia Childcare - Euless Location",
      guardianName: "Deskert Jackie",
      childBirthdate: "04/30/2016",
      childExpectedStartDate: "03/13/2020",
      childName: "Deckert Richard",
      guardianAddedDate: "03/07/2022"
    },
    {
      id: 2, 
      locationName: "Gaia Childcare - Euless Location",
      guardianName: "Comelison Lester",
      childBirthdate: "05/11/2018",
      childExpectedStartDate: "04/10/2020",
      childName: "Deckert Richard",
      guardianAddedDate: "03/07/2022"
    },    
    { 
      id: 3, 
      locationName: "Gaia Childcare - Euless Location",
      guardianName: "Solomon Steve",
      childBirthdate: "12/10/2018",
      childExpectedStartDate: "05/10/1970",
      childName: "Deckert Richard",
      guardianAddedDate: "03/07/2022"
    }
  ],
});