Originally built by Tenzin Sonam https://github.com/tenso2006/TooltipFeature
<br>Additional Contributions and NPM Publishing performed by [Michael Dimmitt](https://github.com/MichaelDimmitt)

# TooltipFeature

To understand the usage of the project click the github link please clone down the project
and run npm install.

This Github repository installs the component as a node_module used by the "component/Example.js" file.

Please do ---> npm install    on the root directory

To start the server 
  type ---> npm run dev   in the console with root directory.
  
App will be launched on browser ---> http://localhost:8080/

Thank You!
  
## Node Module Usage for your application:
  npm install react-customizable-tooltip
  
  You should refer to the [example.js](https://github.com/MichaelDimmitt/TooltipFeature/blob/ready_to_publish_as_npm_package/containers/Example.js)
  to understand what components are currently availiable for your use.

  The tooltip is customizable meaning that it is waiting for you to pass a style and you are in control of the events.<br>
  The tooltip currently asks the user to write their own events. (mouse over, mouse leave, on click) - see [example.js](https://github.com/MichaelDimmitt/TooltipFeature/blob/ready_to_publish_as_npm_package/containers/Example.js) file. 

  If you would like an additional component not currently provided: 
  please open an [issue](https://github.com/tenso2006/TooltipFeature/issues/new)

  Additionally feedback can be given via issues page.

## Contributing or Running the example Tooltip
  1) git clone https://github.com/tenso2006/TooltipFeature.git
  2) cd TooltipFeature
  3) git checkout node_module_branch
  4) cd src; npm link; cd ..; 
  5) npm link react-customizable-tooltip
  6) npm run dev

To Update when contributing locally:
  1) make changes in react-customizable-tooltip/components/react-customizable-tooltip/StatelessComponents.js
  2) an example file is present that uses the tooltip. feel free to modify this in your test case purposes.

When ready to publish package changes:
  1) cd react-customizable-tooltip/components/react-customizable-tooltip
  2) npx babel StatelessComponents.js > ../../src/react-customizable-tooltip/
  3) If you accidently overide you can undo the change with git checkout .;

Package Publishing Instructions:
<br>https://docs.npmjs.com/getting-started/publishing-npm-packages
<br>basically make an npm account
<br>make sure package.json is correct and version upped. then, npm publish!

## Coming Soon, <br>Instructions for Ejecting the Node Module into your own react file. (output will be ES6)
  <b>coming soon script npm run eject</b></br>
  npm run eject</br>
// note: eject script will svn the example into the home directory allowing the user to go their own direction.



# Information for the SRC folder:

This folder contains the babel compiled output from:
  `TooltipFeature/containers/tooltips/StatelessTooltips.js`

The contents of this folder can be updated using:
  `npx babel ../../containers/tooltips/StatelessTooltips.js > StatelessTooltips.js`

To publish once the file has been updated:
1) version bump the package.json
2) npm publish

