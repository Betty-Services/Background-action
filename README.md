# Background-action

With this action function you are able to trigger another action (as subaction) which will be executed in the background. Which means that the main action won't wait for the action which is triggered with this step to be completed.

_Keep in mind that this still means the action duration limits still apply for the action which is triggered!_

**Options:**

1. Application Identifier (required)\*
   Is the identifier of your application url. For example when your application url is my-awesome-app.betty.app the part my-awesome-app is your application identifier.

2. Applicaton ID (required)\*
   The application UUID which can be found at the bottom of your application settings.
   ![Application ID](https://imgv3.fotor.com/images/blog-richtext-image/part-blurry-image.jpg)

3. JWT (optional)
   The JWT token when using a non-private action which makes sure the action can be executed.

4. Action ID (required)\*\*
   Can be found in the URL of the action you would like to trigger.
   ![Action ID]([https://imgv3.fotor.com/images/blog-richtext-image/part-blurry-image.jpg](https://github.com/Betty-Services/Background-action/blob/main/img/action_id.jpg?raw=true))

5. Variables (optional)
   The variables which should be send over to the subaction. Where the keys are exactly equal to the input variables of the subaction.

\*_When using sandboxes it's recommended to store this value in a configuration(set), since this will be different per sandbox environment._

_\*\*This value is always the same for every sandbox so can be hardcoded._
