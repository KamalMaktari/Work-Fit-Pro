# Work Fit Pro

Work Fit Pro - A Workout App

## Local Deployment 

To run this project in your development machine, follow these steps:


1. Create and activate a conda environment by running the command: 

```console
$ conda create --name myenv python
```

You may be asked to proceed. Press 'y' and then press enter. Then run the following command: 

```console
$ conda activate myenv
```


2. Install Django in the conda environment by running the command: 

```console
$ pip install django
```


3. Clone this repo by running the command: 

```console
$ git clone https://github.com/KamalM-01/Final-Year-Project.git
```


4. Once cloned onto local folder, u must change directory to 'Work Fit Pro' which can be achieved by running the following command: 

```console
$ cd Final-Year-Project/'Work Fit Pro'
```


5. Once in the 'Work Fit Pro' folder, install npm by running the command: 

```console
$ npm install
```


6. To run the server, run the following command: 

```console
$ npm start
```


7. Now you have two options. First option is to scan the QR code that displays on the terminal to run the app on a IOS/Android device, which requires 'Expo Go' to be installed (can be found in App Store/Play Store). Second option is to have a IOS/Android emulator downloaded onto your local machine to run the app. The emulator requires 'Expo Go' to be installed (can be found in App Store/Play Store within the emulator). Once downloaded, make sure the emulator stays on. 


8. If you chose to do the first option of step 7 then scan the QR code displayed on the terminal using the IOS/Android device. If you chose to do the second option of step 7, press 'i' to load up Work Fit Pro on a IOS emulator, or press 'a' to load up Work Fit Pro on a Android emulator. 


9. Work Fit Pro should now be running on your chosen device. 


## Removing Errors

To remove the ViewPropTypes error from displaying on Work Fit Pro, follow these steps:


1. Stop the server by pressing 'ctrl + c' and close the Expo Go app on your device. 


2. Make sure your terminal is on the 'Work Fit Pro' directory. 


3. Run the following command:

```console
$ npm install deprecated-react-native-prop-types
```

4. Within the 'Work Fit Pro' folder, open the 'node_modules' folder, then open the 'react-native' folder, then open the 'index.js' file. 


5. Within the index.js file, comment out the following lines from: 383-389, 393-399, 403-409, 413-419. Make sure to save afterwards. 


6. Now follow steps 6-9 from Local Development Instructions to get Work Fit Pro running again. 


7. You should now no longer see the ViewPropTypes error when running Work Fit Pro.  


