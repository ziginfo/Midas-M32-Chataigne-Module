## M32 / X32 control with chataigne
Default port must be 10023 !

Special thanks to norbertrostaing . This M32-Module-Script is partially based on his [M32forChataigne](https://github.com/norbertrostaing/M32forChataigne) Script especially for the Meter-Display ! 

### Updated to version 2.6 (Mars 2024)
Added Headamp-Gain actions for Local and external AES50 Preamps       
Added Headamp-Gain Feedback Display for Local and AES50 Preamps ...    
Meters Feedback Display is working (must be activated in the "Parameters" !  
We have Feedback from the M32/X32 Console for Names and Fader-Levels, EQ, Mute, Dyn and Pan Status etc... 
There is also a  Feedback-Tab called **"Selected Channel"**. You can select a given channel by Target and Number and get its full feedback (name, fader, eq- and dyn-settings etc) After changing the target or the channel-number just hit "Click To Sync" to request the new values from the console. And you can also reset the whole Selected-Channel-Form by clicking the "Reset-Button".   
As all these Feedbacks and the resulting busy OSC-Data-Flux may slow-down Chataigne for other functions, you should request only the Feeback you need. There is a possibility to stop Feedback and to disable (and hide) some of the "Value-Containers" (just uncheck the Radio-Buttons in the Parameter-Tab)   
When the M32/X32-Module is added to the session for the first time, those Value-Tabs and Container are disabled and hidden. To activate them, check the concerned Radio-Buttons, save the session and reload it...(shortcut : Cmd-Shift-O) and the hidden Tabs will show up ! 
Meters do run correctly after checking the concerned Radio-Button.

Now you can also send values directly from the **"Channels-Container" Form** to the console, for example after changing a value in a given Channel Field in Chataigne!
Please use this feature carefully, as you may erase settings and values on the console !!  For example if you hit "SEND" before having any datas and values in the fields, which indeed results in a sort of "RESET" on the console !! In fact, the fonction **"Click To Send Updates"** will send all the values (and the "zero-values" !!) of all these Channel-Container-Fields at once !! And if the fields are empty (or set to zero), the result is a complète RESET of the Console's Channels Values !     
#### The best way to proceed is :  
Before sending any data from Chataigne to the console by the Channel-Container's "Form-Fields", first request all the data from the console by **"Click To Sync All"**. This action is "request only"; than make eventually changes in the Channels and send them back to the console by **"Click To Send Updates"**.
Please note also that the "Click to Sync All" Feature will request Data from the console by a "subscribe-function" that will be active for about 10 seconds, and you cannot change values in the field during these 10 seconds...   
The "Send-to-Console-Feature" is limited to the Channels Values Container only (just to avoid risks and confusion); any other "Value-Tab" does not send any Value to the console !

To get Feedback from the console in a general way, "Listen to Feedback" in the Parameter-Field must be activated ! (it is "ON" by default when inserting a MR-Module).  
To stop all feedback from the console just deactivate the "Listen to Feedback" Button     
After first loading a MR-Module it may be necessary to hit the Sync-Button ("Click to Sync all") or send one of the Sync-Request-Actions (in the Action Menu "Requests")  
And please note that after  inserting a "new" MR-Module and/or after changing the Remote-Host-Address, Feedback from the console may not be available immediatly and may need a restart of Chataigne or at least a Reload of the Session-File. 
(*unless you had already entered the "remoteHost address" in the "module.json" file before inserting the module; in this case Feedback will be available instantly !*) But anyway, once the session file is "saved" then the feedback will always be available !   
  
To learn more about Chataigne, please visit : http://benjamin.kuperberg.fr/chataigne/
And Ben's Youtube channel where you can find tutorials : https://youtu.be/RSBU9MwJNLY
