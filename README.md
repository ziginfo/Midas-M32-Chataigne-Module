## M32 / X32 control with Chataigne
Default port must be 10023 !

Special thanks to norbertrostaing . This "Advanced" M32/X32-Module-Script is partially based on his [M32forChataigne](https://github.com/norbertrostaing/M32forChataigne) Script especially for the Meter-Display that has been done by him !  

If you don't really need all these features of my "Advanced" Module, please use Norbert's [Basic Module](https://github.com/norbertrostaing/M32forChataigne) instead, which has pretty less Data-Traffic and is lighter and faster ...

To get Feedback from the console in a general way, "Listen to Feedback" in the Parameter-Field must be activated ! (it is "ON" by default when inserting a M32/X32-Module).   
After first loading a M32/X32-Module it may be necessary to hit the Sync-Button ("Click to Sync all") or send one of the Sync-Request-Actions (in the Action Menu "Requests")  
And please note that after  inserting for the first time a "new" M32/X32-Module and/or after changing the Remote-Host-Address, Feedback from the console may not be available immediatly and may need a restart of Chataigne or at least a Reload of the Session-File. => first Save : cmd-S and than Reload : cmd-shift-O
(*unless you had already entered the "remoteHost address" in the "module.json" file before inserting the module; in this case Feedback will be available instantly !*) But anyway, once the session file is "saved" then the feedback will always be available !    
To stop all feedback from the console just deactivate the "Listen to Feedback" Button    

### Updated to version 2.7 (Octobre 2025)   
Added some missing fonctions , Load and Save for Scenes, Libs etc etc...     
Added Headamp-Gain actions for Local and External AES50 Preamps       
Added Headamp-Gain Feedback Display for Local and AES50 Preamps ...    
Meters Feedback Display is working thanks to Norbert Rostaing (it must be activated in the "Parameters" !)  
We have Feedback from the M32/X32 Console for Names and Fader-Levels, EQ, Mute, Dyn and Pan Status etc... 
There is also a  Feedback-Tab called **"Selected Channel"**. You can select a given channel by Target and Number and get its full feedback (name, fader, eq- and dyn-settings etc) After changing the target or the channel-number just hit "Click To Sync" to request the new values from the console. And you can also reset the whole Selected-Channel-Form by clicking the "Reset-Button".   
As all these Feedbacks and the resulting busy OSC-Data-Flux may slow-down Chataigne for other functions, you should request/activate only the Feeback you need. Especially "Meters" create a huge Data-Traffic that might slow down other Chataigne-Functions ! Keep that in mind ! There is a possibility to stop Feedback and to disable some of the "Value-Containers" (just uncheck the Radio-Buttons in the Parameter-Tab)     
Meters do run correctly after checking the concerned Radio-Button.  

Now you can also send values directly from the **"Channels-Container" Form** to the console, for example after changing a value in a given Channel Field in Chataigne!
Please use this feature carefully, as you may erase settings and values on the console !!  For example if you hit "SEND" before having any datas and values in the fields, which indeed results in a sort of "RESET" on the console !! In fact, the function **"Click To Send Updates"** will send all the values (and also the "zero-values" and the "no-values" !!) of all these Channel-Container-Fields at once !! And if the fields are empty (or set to zero), the result is a complète RESET of the Console's Channels Values !     
#### The best way to proceed is :  
Before sending any data from Chataigne to the console by the Channel-Container's "Form-Fields", first request all the data from the console by **"Click To Sync All"**. This action is "request only"; than make eventually changes in the Channels and send them back to the console by **"Click To Send Updates"**.
Please note also that the "Click to Sync All" Feature will request Data from the console by a "subscribe-function" that will be active for about 10 seconds, and you cannot change values in the field during these 10 seconds...   
The "Send-to-Console-Feature" is limited to the Channels Values Container only (just to avoid risks and confusion); any other "Value-Tab" does not send any Value to the console !  
  
To learn more about Chataigne, please visit : http://benjamin.kuperberg.fr/chataigne/
And Ben's Youtube channel where you can find tutorials : https://youtu.be/RSBU9MwJNLY
