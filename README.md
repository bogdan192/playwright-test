# Welcome to the Cyberhaven QA automation challenge!

The goal of this challenge is to evaluate your ability to test web apps with a rich UI. This one in particular is related to common use cases from Cyberhaven dashboard.

Prerequisite:
- You will get an invite to join a test Cyberhaven dashboard at release.cyberhaven.io. Please accept this invitation within 6 hours.
- When setting up the account make sure to choose password authentication: ![image](https://user-images.githubusercontent.com/103565209/196396237-6f8e4bd3-7438-4314-870f-f76bc52b0f3e.png)


After you have access to the dashboard, your task is to write a mini automation framework that should run the following test:

1. Login into dashboard

2. Click show data for and set:
    - search for data in the last 2 weeks 
    - time interval 6AM - 8PM 
    - click apply
    - Ex: ![time interval](https://user-images.githubusercontent.com/103565209/192313426-ea7bbf3c-1dc4-4285-ba54-f8d95edb7caf.PNG)
3. Click search by source and expand Conditions:
    - set condtions (Cloud App is Office 365) AND (Domain is onedrive.live.com). 
    - click Convert to dataset
    - add a unique name that contains Dataset Interview
    - click save
    - Ex: ![dataset](https://user-images.githubusercontent.com/103565209/192313810-1a5a1273-9dc3-4c73-be80-5fa21d2a9844.PNG)
4. Click new policy and create new policy:
    - set conditions (Cloud app account ends with @qa-interview.com) OR (Cloud app account doesn't start with admin)
    - enable Exclude flows to datasets origin
    - add a unique name that contains Policy Interview
    - apply it to dataset saved at step 3
    - enable create an incident
    - choose block
    - click setup response message and configure the response message:
      - Enable only Allow user to override blocking
      - Edit the response content (see attached example)
    - enable send email notifications and add your email into the text box
    - click save
    - Ex: ![policy1](https://user-images.githubusercontent.com/103565209/192314887-9228c755-4ae3-4a56-a0f0-13ba6128bfed.PNG) ![policy2](https://user-images.githubusercontent.com/103565209/192314935-f3e54a6d-c1e4-4ddf-ae5e-463b12526a3b.PNG)

5. Check that the new policy was created

The preferred framework for this challenge is playwright using python or node js.

Feel free to use any simplifying assumptions if you require. You can also consult any documentation available.

Please pay attention to code quality, structure and software engineering practices when writing the solution. This is a very important aspect at Cyberhaven.

Please submit the source code as a PR to the repo created by this url and add a README explaining how to run the code, any assumptions, caveats, etc.

Good luck!
