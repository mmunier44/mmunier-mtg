# General Assembly WDI Project 2: Full Stack Application

[Magic: the Gathering]

### List of Technologies Used: Javascript, Ajax, Bootstrap 4 & Handlebars

### Thought Process, Entity Relationship Diagram

[ERD] https://www.lucidchart.com/invitations/accept/ad003043-7c2c-4ba7-92e2-1f8b61e8522a

Link to deployed Heroku Back End
https://pure-waters.herokuapp.com/

Link to Ruby Back-End repo
https://github.com/mmunier44/mmunier-rails-api

For the 2nd General Assembly project I focused on simple object oriented development.

Even on the initial ERD build and wireframe for the UI front I wanted the initial project to be as simple as possible to mainly focus on the process of completing a full stack application.

After every single feature or design tweak every CRUD function was tested and retested in case of error catching.
By testing during design any bugs that were caught were fixable and did not cascade down to the rest of the code.

If a data object that was being passed through the different functions was incorrect I did not have to hunt through multiple functions in order to fix every one.

I wanted as simple of a design to focus on getting all authentication functionality completed.

[Wireframe] https://i.imgur.com/wxuHCdl.jpg
[Wireframe] https://i.imgur.com/RxyVIl9.png

MTG Trading User Stories

Version 1

As a user I want to view a single card

As a user I want to view all cards

As a user I want to create a card using inputting values into 2 fields

 name
 description

Version 2

As a user I want to view a single card

As a user I want to view all cards

As a user I want to create a card using a specific pre-loaded data pool previously drawn from an API with the following all being pre-populated into drop-down lists.
 name
 color
 mana_cost
 type 
supertype
 subtype
 rarity
 power
 toughness
 set_name
 descriptio
n image (optional or maybe too much)

As a user I want to update a card using the previous parameters

As a user I want to delete a card
Version 3

As a user I want to view a deck

As a user I want to view all decks

As a user I want to create a deck with a deck name, a deck class and a deck color type description

As a user I want to update a deck with a deck name, a deck class and a deck color type description

As a user I want to delete a deck

As a user I want to assign a single deck to a card

As a user I want to assign multiple cards to a deck VERSION 3 NOTES A user can have many decks A deck can have many cards 

Version 4

As a user I want to view a hand

As a user I want to view all hands

As a user I want to create a hand with 7 cards between a card and a deck

As a user I want to edit a hand but only from that hand

As a user I want to delete a hand but only from that hand

VERSION 4 NOTES
 A user can have many hands through decks and cards

 A hand can only have 1 user 

A hand can only have 1 deck

 A hand can have limited cards from 1 deck

The final product would be a way to create decks from older sets with a twinge of nostalgia.

#### Developer Evolution Goals
//NOTE
UX/UI
Clean up the design of the application and focus more on the wireframe/appearance of a completed application.
Scaffold out decks and hands and connect to a 3rd party API to pull in furthur feature details
