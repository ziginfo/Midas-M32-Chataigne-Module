## M32 / X32 control with chataigne
Default port must be 10023 !

### Updated to version 1.5
Now we have Feedback from the M32/X32 Console (Names and Fader-Levels etc)... I probably will add some more in the future...   
There is no continuous feedback  from the Console by the looped "xremote" command from the M32/X32... But Feedback will only be send when Values are changed on the console ! Feedback will not be send after value-changes initiated frome a Chataigne-Command      
But you can update manually (or with another "loop-script") sending a "subscribe" OSC-Command !   
Any "Subscribe-Sync-Request" sent to the console will be valid for about 10 seconds and than stopps (values will not further be updated automatically, unless they are changed on the console itself or by another controler !) )...
For manual Sync-Update you can use one of the function-scripts (in the Actions-Sub-Menu : Requests); or just hit the "Click to update all"-Button in the Values-Field....   
"Listen to Feedback" in the Parameter-Field must be activated ! (it is "ON" by default when inserting a MR-Module)   
And please note that after  inserting a "new" M32-Module and/or changing the Remote-Host-Address, Feedback from the console will be available only after a restart of Chataigne.
(*unless you had already entered the (remoteHost)address in the "module.json" file before inserting the module; in this case Feedback will be available instantly !*)    

