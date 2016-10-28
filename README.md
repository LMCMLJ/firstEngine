# firstEngine Version 0.0.2
This is my first ever attempt at a game engine, written mostly in JS. This code is being written fully test driven, with tests written in jasmine.


##features:
As this engine is currently in development, features are going to be split into implemented, in development, and planned.

###Implemented:
- Core game loop


###In development:
- Core engine


###Planned:
- Core movement module
- Core physics module
- Physics-collisions


##STRUCTURE
The engine is structured in a fairly simple fashion. The main game loop is located in `src/main.js`. This loop calls all of the other
modules.

###Entity:
The entity module controls all objects being displayed. It is in charge of updating all entity positions on the canvas. It contains all of the aspects necessary for movable objects. The module can be found in the file `src/entity.js`


##TESTING
This project is being developed fully test driven. The tests are run through the jasmine framework. Simply run `open SpecRunner.html` while in the main project directory to view tests. All of the tests can be found within the `spec` folder.


##INSTRUCTIONS
If you would like to help contribute to development, please go ahead and fork this repository, make any changes you see fit, explaining them with comments where necessary, and then create a descriptive pull request.

If you have some ideas about significantly expanded functionality,  feel free to get in touch with me and we can discuss options.
