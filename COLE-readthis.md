* Notes
** I wasn't sure where to put my comments about steps/tasks/instructions in the code because everything is spread out over different files. If I put notes in one file you might not know whether I went there first or second or whatever. So here it is.
** After reading the README 3 or 4 times I had no idea what I started to get a little upset because I wasn't sure what half of it meant, so I used the checklist that Ellen Nitchals sent out to guide me. Sorry. I know I'm supposed to follow the README but half the time they just confuse me more than I already was and I just go by the checklists as they make a lot more sense and are much easier to follow.
** Question: single quotes or double quotes?

* Project Organization

** Step 1: npm setup
*** I understood this part of the README and it's just like a lot of other projects we've done recently so everything went according to plan except for the last part, which says that I should get an error message. I did not. When I ran npm start in my village, I saw input boxes for name, age, and height, an "Add to the village" button, and "Smurf Village" written beneath. There was no error, it was just empty.

** Step 2: tell axios to get the smurfs that are already on the server
*** I did this in my App.js document. The instructions already commented in there were kind of confusing to me. I'm not sure what they meant by passing the right properties on state down to props so I ignored this stuff and eventually deleted it because it was confusing me.
*** I added an axios request in a componentDidMount thing because in class Dan said that you should always put it in componentDidMount. I am not 100% clear on why but anything in componentDidMount runs as soon as the component is mounted and I guess if it somehow ran before then there would be nothing to set state to, and if it ran afterwards the user would get impatient or something. I don't know. I just know it's a good practice to put it in here.
*** I pointed the Axios request to the site containing our data (which is only one smurf), said then give me data, and made sure it was set to state. When I put the smurfs part in, everything worked. I now have one Brainy Smurf in my list. So one down, two to go. Yay!

**Step 3: implement a post request to create a new smurf and save it to the database
*** After looking at all the files, this looks like it should go in SmurfForm.js since there is a comment in there saying I should add code to create the smurf under addSmurf. But first, I will do a git because that's just how I roll. Otherwise, I will break something and have to go all the way back to the beginning and then forget how I did everything in the first place.
*** What is this event.preventDefault() thing that is already written in this file? I've seen it before but I have no idea what it does so I'm just going to leave it alone.
*** Made a variable to hold my new smurfs because it seemed like the right thing to do. Otherwise, where is this app going to hold what the user inputs until it can be displayed?
*** I just realized that this looks EXACTLY like what I agonized over all day yesterday, so I kind of used the same code here. Sorry.
*** Of course it doesn't work for the same reason it didn't work yesterday - I need to make a new function/method/whatever and call for the props or whatever. Since we are importing SmurfForm into App.js I'm going to try that there.
*** Oh. I need to separate out my axios GET thing into another method.
*** OMG I FORGOT THE ONCLICK. What is wrong with me???
*** But it works now. The user can add new data into the input boxes and it appears below Brainy Smurf after you click "add to the village". So 2 down, 1 to go.

** Step 4: Router stuff
*** So I had to go back to the README to see exactly what they want me to do with the router. I wish they wrote these things in English.
*** Wrapping my App in Router seems like something I could basically copy for every app I do that needs a router, from now until the end of time.
*** What are my Routes?? I'm going to assume they want us to route the {Smurfs} and {SmurfForm} components in the App.js file. That's what we did yesterday with the {FriendsList}. I hope that's right.
*** So my routes didn't break anything but now everything is all over the place so I'm going to have to make links somewhere.
*** I started creating a new file and then realized this Header file is already here so here goes.
*** OMG I cannot figure out how to pass props to Route components so I'm going to have to reorganize everything.
*** Here's what I did:
**** I took the constructor and GET and moved it out of App.js and into Smurfs.js. I thought maybe instead of getting the smurfs in one place and passing it into another, it would simplify things to get the smurfs in one place and map through the data to display them in the same place. Why I didn't think of this yesterday, I don't know. I think I just try to make things work the way I have them and don't really think about the best way or most efficient way because I am too busy just trying to make them work.
**** But anyway, when I did this it broke the map function.
**** I looked at some of my old code from the movie project, changed the "props" to "state" and suddenly all was right with the world again. I am not 100% clear on this, but this.state.whatever.map worked before and it seems to work again. I'll have to noodle over this awhile to figure out why but for right now I'm just glad it worked.
**** Since I was not getting my smurfs in one file and passing them into another, and I was also doing my POST and form render in the same place I didn't need props anymore in the Route. Which is good because I was googling and it seems like a nightmare to pass props in Route.
**** Making Routes and Links are not difficult for me as they remind me of HTML, which I understand. I just had to make sure everything had the right names and voila! 3 down, and I'm done. Whew!