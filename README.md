# Reali Users Records  Dashboard #

### built with Angular V9 ###

### App Scop ###

1. Layout is Grid and Flex based.
2. user component - which is the main screen that hold the form for user registration. The form is full validate (required fields for all + phone Number (path : 123-456-7890) + age (18-75)).
3. user-list component (under user-list Lazy Loading module) which holds all users records and control edit | delete flow. If list is empty - there is a notification for the client
4. card component-  acard on the user-list  component grid, the layout provide flexible adding and screen sizing for large amount of records.
5. By coming back to user page in order to edit the record => button of "Submit" is change to "Update" so client can feel the context , same for the page title
5. Angular materials componets as UI library - as a separated module, so not all packages are imports at ones 
6. App state got "air conditioner" for more states slices to join.

* [done]  Save on memory anew user (save to store, live as long as app is running)
* [done]. AFTER adding new user - Customer will redirect to new page which display cards of all users.
* [done] customers Obj should hold => {

    firstName,
    lastName,
    age,
    phone,
    address

}

* [done] Customer should have the ability to CRUD operation over certain "in memory" user.
* [done] App should be use ngrx state management library.
* [ongoing] App should be scallable as posible.
* [done] Repository should be located at Github.

### More to come ###

-- shared Module
-- effects
-- try - catch

### bonus to do###

save to localStorage storage threw effects

