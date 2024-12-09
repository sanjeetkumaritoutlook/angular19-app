import { code, image, section, text } from '../content.utils';

export const documentingComponentsSection = section('Documenting Components', [
  text(`For the documentation we use the
  <fluid-link inline href="https://jsdoc.app/about-getting-started.html" target="blank"> JSDocs</fluid-link> library.
  
  `),
  text(
    `To start documenting your code all you have to do is add a comment starting with /** 
    over each block of code you want to document: Modules, methods, classes, functions, etc.`
  ),
  code(`/**
  * Retrieves a user by email.
  * @async
  * @method
  * @param {String} email - User email
  * @returns {User} User object
  * @throws {NotFoundError} When the user is not found.
  */
 const getByEmail = async (email) => {
     // ...
 }`),
  text(
    `There's a huge  <fluid-link inline href="https://jsdoc.app/#block-tags" target="blank"> list of tags </fluid-link> you can choose from to document your code as thoroughly as you as please.`
  ),

  text(
    `Remember, the more info you add to your comments, the more detailed your API documentation will be. <br />
    But also, find the amount of detail that feels right to you. <br />
    `
  ),
]);
