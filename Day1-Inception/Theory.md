## What is Emmet?
It is a plugin in code editors which helps in high speed coding and completes the code with shortcuts.

## Difference between a Library and Framework?
Library is where the program is designed to call a set of apis which does a complex solution
Framework is where you have a basic structure already built and you have to follow rules as per the framework to get the desried output

## What is CDN? Why do we use it?
CDN is content delivery network, it fetches the required data from the nearest available edge server from your location
It is basically used to increase the performance of websites and mobile servers

## Why is React known as React?
React was developed for applications where the data changes very quickly, since its a FE Library and it should "react" quickly in user changing it , it is called as react

## What is crossorigin in script tag?
It sets the mode of the request for HTTP CORS Request. CORS is a request made to another doamin

## What is diference between React and ReactDOM?
ReactDOM is basically used for Web applications, React is mainly used for React Native applications

## What is difference between react.development.js and react.production.js files via CDN?
react.development.js - it doesnot contain the minfied version of code mostly used for dev purpose
react.production.js - contains the minified version, mostly used for production apps

## What is async and defer? 
Defer - mainly used when execution order is importat, parse-> fetch the script->complete? then only got to next set to parse. 
Async - Independent of the scripts and their executions doesnt matter ,parse->fetch the scripts->beat of weather its complete or not?->move and start parsing the next set


## Why do we inject css only in the head tag?
 Server-side compiler can include CSS for the remote page in the page head itslef. If not provided in the page head then this probably involves separating the CSS of the remote page(s) out of the markup there and then grabbing it as a separate file to be included in the page head during compilation,rather than it getting fetched again we can give it at the very start itself.