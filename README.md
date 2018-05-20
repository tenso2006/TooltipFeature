Originally built by Tenzin Sonam https://github.com/tenso2006/TooltipFeature

# TooltipFeature

To understand the usage of this NodeModule please clone down the project
and run npm install.

This Github repository installs the component as a node_module used by the "component/Example.js" file.

Please do ---> npm install    on the root directory

To start the server 
  type ---> npm run dev   in the console with root directory.
  
App will be launched on browser ---> http://localhost:8080/

Thank You!
  
## Node Module Usage:
  npm install react-customizable-tooltip

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

## Coming Soon,  Instructions for Ejecting the Node Module into your own react file. (reverse compiled.)
  npm run eject
// eject will svn the example into the home directory allowing the user to go their own direction.
