# Background-action

With this action function you are able to trigger another action (as subaction) which will be executed in the background. Which means that the main action won't wait for the action which is triggered with this step to be completed.
 
*Keep in mind that this still means the action duration limits still apply for the action which is triggered!*

**Options:**
1. Application Identifier (required)*
Is the identifier of your application url. For example when your application url is my-awesome-app.betty.app the part my-awesome-app is your application identifier.

2. Applicaton ID (required)*
The application UUID which can be found at the bottom of your application settings. Be aware that every sandbox has its own unique UUID.

![Application ID](https://raw.githubusercontent.com/Betty-Services/Background-action/main/img/app_uuid.jpg)

4. JWT (optional)
The JWT token when using a non-private action which makes sure the action can be executed.

5. Action (required)* The action you want to run in the background.

6. Input variables (optional)
The variables which should be send over to the subaction. These are automatically mapped to the input variables of the subaction.
