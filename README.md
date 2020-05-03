# TOHacks-Hackathon---Covid-19

<a href="https://giphy.com/gifs/Y1Rd5VzoPX01tx45tb"> <img src = "https://giphy.com/gifs/Y1Rd5VzoPX01tx45tb" /> </a> 

<img src="https://media.giphy.com/media/Y1Rd5VzoPX01tx45tb/giphy.gif" width="40" height="40" />


## Inspiration
As public health officials repeatedly advise people to stop touching their faces in order to protect themselves against the new coronavirus, many individuals are starting to notice how often they do it and how difficult it is to stop.

Healthcare professionals have warned the public to wash their hands often and to avoid touching their faces, particularly their eyes and mouths, because severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2), the virus which causes COVID-19, can linger on some surfaces for hours or even days.

While it sounds simple enough, many people touch their faces multiple times a day with one study out of the U.S., which came out a few years ago, suggesting it could even be as often as 23 times an hour. We wanted to build a tool that mitigated the spread of the coronavirus by stopping one simple habit -- touching your face!

## What it does
ContamiNot is a web application that detects and notifies when the user touches their face in order to prevent the spread of coronavirus. The facial recognition detector runs in the background so while you using your computer you will receive immediate reminders to put an end to this habit. 

The website also keeps track of how frequently and at what time you touch your face. This data is organized and visualized for the user in the form of a graph. This will allow users to see the problem first-hand and hopefully reduce the habit of subconsciously touching your face. 

## How We built it
A series of images are grabbed from the video camera during training and assigned to one of two classes – touching or not touching. This is used to train the ML model which will then alert you if your hand is coming too close to your face. 

The data visualizer extracts two variables from the facial recognition model -- how many times you have touched your face and at what time each face touch occurred. Using the Chart.js library we were able to graph this data to provide the user with valuable insights. 

## Challenges We ran into
The biggest challenge we faced was connecting and coordinating the facial recognition software with the data visualizer. Not to mention, brainstorming a project that would solve a problem related to the coronavirus took up a lot of our time. We went back on forth trying to fix problems that were beyond our abilities, however, by the end we were able to set our sights on a problem that was relatively simple yet important to address.

## Accomplishments that We're proud of
One thing we were proud of was our ability to implement the TensorFlow library to detect when a user's hand is near their face and when it isn't. This was our first time attempting to use an ML model and we were able to successfully train the model to complete our desired task. 

## What's next for ContamiNot
In the future we would like to work on the following features:
- Improve the UI and layout of our website
- Give users access to more meaningful data and find other ways to visualize their data
- Tackle other simple problems that could prevent you from catching the coronavirus (e.g. how often you wash your hands)
