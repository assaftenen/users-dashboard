# Reali Users Records  Dashboard #

### built with Angular V9 ###

### App Scop ###

1. Layout is Grid and Flex based.
2. user component - which is the main screen that hold the form for user registration. The form is full validate (required fields for all + phone Number (path : 123-456-7890) + age (18-75)).
3. user-list component (under user-list Lazy Loading module) which holds all users records and control edit | delete flow. If list is empty - there is a notification for the client
4. card component-  a card | cards  over the user-list component, the layout provide flexible adding and screen sizing for large amount of records.
5. At editing mode (after clicking edit at user card) => button of "Submit" is change to "Update" so client can feel the context , same for the page title
5. Angular materials componets as UI library - as a separated module, so not all packages are imports at ones 

## Given tasks complition

* [done]  Save on memory anew user (save to store, live as long as app is running)
* [done]. AFTER adding new user - Customer will redirect to new page which display cards of all users.
* [done] Customer should have the ability to CRUD operation over certain "in memory" user.
* [done] App should be use ngrx state management library.
* [done] ongoing App should be scallable as posible.

### Scallability###

-- shared Module in additional to material module.
-- State - for current app features there is only one state that filled the AppState ("users" slice, hold UsersState). For simplicity state composition (reducer folder under index file, actions under actions folder)  additionals future needed "State Slices" can easily be added at separated filed and to be import to index.
-- feature module structure is based on module folder. The General Approach is to manage containers (known as "smart")  and components (known as "dumb").

