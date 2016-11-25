/*============================================================================
 *    ## Plugin Info                                                          
 *----------------------------------------------------------------------------
 *    # Plugin Name                                                           
 *      DoubleX RMMV Popularized ATB Core                                     
 *----------------------------------------------------------------------------
 *    # Terms Of Use                                                          
 *      You shall keep this plugin's Plugin Info part's contents intact       
 *      You shalln't claim that this plugin's written by anyone other than    
 *      DoubleX or his aliases                                                
 *      None of the above applies to DoubleX or his aliases                   
 *----------------------------------------------------------------------------
 *    # Prerequisites                                                         
 *      Abilities:                                                            
 *      1. Nothing special for most ordinary use cases                        
 *      2. Little Javascript coding proficiency to fully utilize this plugin  
 *----------------------------------------------------------------------------
 *    # Author Notes                                                          
 *      1. DoubleX RMMV Popularized ATB uses the core addon approach with this
 *         plugin as its core and all addons needing this plugin to work      
 *      2. DoubleX RMMV Popularized ATB also serves as a learning tool for    
 *         plugin developers to learn how an atb system plugin can be written 
 *      3. State's Auto-removal Timing as Action End becomes right after the  
 *         state owner executed all the actions to conform with the defaults  
 *----------------------------------------------------------------------------
 *    # Links                                                                 
 *      This plugin:                                                          
 *      1. http://pastebin.com/9nEDBapc                                       
 *      Video:                                                                
 *      1. https://www.youtube.com/watch?v=6KTV1k6ohfE                        
 *      Basic knowledge on writing ATB(Active Time Battle) system plugins:    
 *      1. Link included in http://rpgmaker.net/submit/script/631/            
 *----------------------------------------------------------------------------
 *    # Author                                                                
 *      DoubleX                                                               
 *----------------------------------------------------------------------------
 *    # Changelog                                                             
 *      v1.02b(GMT 0500 17-9-2016):                                           
 *      1. Fixed max_linked_input_actors not working when there are 3+        
 *         inputable actors at the same time with no one having Action Times +
 *      2. Lets you set max_linked_input_actors as negative to disable it     
 *      v1.02a(GMT 0600 20-8-2016):                                           
 *      1. Added max_linked_input_actors                                      
 *      v1.01f(GMT 1400 12-8-2016):                                           
 *      1. Fixed empty atb_bar_text being converted to 0 bug                  
 *      2. PATB notetags won't be loaded more than once per game execution    
 *      3. Increased this plugin's effectiveness, efficiency and simplicity   
 *      v1.01e(GMT 0500 15-7-2016):                                           
 *      1. Upgraded to support the latest version of PATB Order               
 *      2. Increased this plugin's effectiveness, efficiency and readibility  
 *      v1.01d(GMT 0800 19-6-2016):                                           
 *      1. Fixed maximum atb value being possible to be nonpositive bug       
 *      v1.01c(GMT 1000 5-6-2016):                                           
 *      1. Fixed not updating unmovable battlers' max atb and countdown states
 *      2. Improved this plugin's effectiveness, efficiency and readibility   
 *      v1.01b(GMT 1400 31-5-2016):                                           
 *      1. Fixed the unmovable battlers having nonempty atb bug in start addon
 *      2. Improved this plugin's effectiveness, efficiency and readibility   
 *      v1.01a(GMT 0300 20-2-2016):                                           
 *      1. Lets users set whether actor atb bar will be shown on status window
 *      2. Fixed inactive actor command window not being closed immediately   
 *      3. Fixed not refreshing the inputable actor upon confirming input bug 
 *      v1.00d(GMT 0400 7-2-2016):                                            
 *      1. Fixed not updating the status window when executing actions bug    
 *      2. Fixed actor input windows not deactivating upon being uninputable  
 *      3. Fixed forbidden party escape freezing the party command window bug 
 *      4. Loosens the coupling between core, charge, cooldown and speed addon
 *      5. Removed some excessive couplings and added some code documentations
 *      v1.00c(GMT 1000 31-1-2016):                                           
 *      1. Fixed not updating the battler atb rate due to changing the battler
 *         agi without changing the base atb rate bug                         
 *      2. Fixed not refreshing actor atb bar upon reset with delay fill mode 
 *      3. Fixed not updating the status window when executing actions bug    
 *      v1.00b(GMT 0900 27-1-2016):                                           
 *      1. Fixed active hidden actor command window after closing all windows 
 *      2. Fixed not updating status windos and incorrect actor window x      
 *         position in unavailable battle system codes                        
 *      3. Fixed actor not able to execute autobattle/confusion actions with  
 *         max atb value notetag used                                         
 *      4. Fixed actor not able to do anything if becoming autobattle or      
 *         restricted when inputable bug                                      
 *      5. max_atb_val must be at least 10000 times larger than 2 ^ -52       
 *      6. atb gain rate must be at least 2 ^ -52 * max atb value * 100 per   
 *         frame                                                              
 *      7. Confused battlers can execute confused actions ahortly after       
 *         removing confusion                                                 
 *      8. Next/prior command can cause actor selections to appear chaotic    
 *      9. The battle turn clock can be disabled as using an unavailable unit 
 *      10. Increased this plugin's compatibility, modularity and readability 
 *      v1.00a(GMT 0400 23-1-2016):                                           
 *      1. Outsourced the ctb feature to the CTB addon                        
 *      2. Fixed same name patb_rate for both a property setter and function  
 *      3. Fixed actors added during battles having unitiailized atb statuses 
 *      4. Fxied undefined textWidth in draw_actor_patb bug                   
 *      5. Fixed trying to read meta from null equip bug                      
 *      6. Fixed undefined this_ and patb_color due to typo bug               
 *      7. Fixed unitialized max atb value upon battle start bug              
 *      8. Fixed executing next action before finishing the current one bug   
 *      9. Fixed actor window not completely covering status window bug       
 *      10. Actor poses can be chaotic when actor input actions or battle ends
 *      11. Added some missing documentations                                 
 *      12. Incrased this plugin's compactness, modularity and simplicity     
 *      13. 1st completed version of this plugin finished                     
 *      v0.00g(GMT 0700 1-1-2016):                                            
 *      1. Fixed undefined data in Game_Battler.prototype.patb_note_data bug  
 *      2. Fixed used the undefined any instead of some function for Array bug
 *      3. Fixed missed return in Array filter function bug                   
 *      4. Fixed undefined SceneManager.scene by adding a this._scene getter  
 *      5. Increased this plugin's compactness, modularity and readability    
 *      v0.00f(GMT 1200 9-12-2015):                                           
 *      1. Fixed concat the active flag of the actor command window instead of
 *         the window itself                                                  
 *      2. Fixed not refreshing the actor atb bars upon resetting atb values  
 *      3. Updated some outdated documentations                               
 *      4. Increased this plugin's extensibility, modularity and readability  
 *      v0.00e(GMT 1300 29-11-2015):                                          
 *      1. Fixed not refreshing all input windows upon turn end               
 *      2. Fixed not returning the reevaluated sum of all battlers' agi       
 *      3. Fixed not clearing the sum of all battlers' agi upon battle start  
 *      4. Fixed not raising refresh and update flags upon battler atb reset  
 *      5. Fixed undefined updateEvent due to typo                            
 *      6. Fixed duplicate battle event updates upon turn end                 
 *      7. Fixed resetting atb always clearing the atb values on restrict     
 *      8. Added atb_rate_code abs_agi                                        
 *      9. Updated some outdated documentations                               
 *      10. Increased this plugin's extensibility, modularity and robustness  
 *      v0.00d(GMT 0100 27-11-2015):                                          
 *      1. Exposed more easy, simple and user-friendly plugin calls           
 *      2. Increased this plugin's efficiency and user-friendliness           
 *      v0.00c(GMT 1400 24-11-2015):                                          
 *      1. Fixed database falsely returning database not loaded on game start 
 *      2. Fixed BattleManager properties falsely belonging to Game_Battler   
 *      3. Fixed undefined this when raising the battler's refresh flags      
 *      4. Fixed are_patb_battler_changed not referenced by this due to typo  
 *      5. Fixed atb bars not drawing properly due to note passing fill rate  
 *      6. Invalid configuration and/or notetag values will log error messages
 *      7. The param descriptions and plugin help become more helpful to users
 *      8. Increased this plugin's extensibility, readability and robustness  
 *      v0.00b(GMT 0000 24-11-2015):                                          
 *      1. Fixed changing max atb value not rechecking battler actability     
 *      2. Fixed null this when reading <operator max patb val: val> notetag  
 *      3. Fixed update state turns not working in the default battle system  
 *      4. Fixed description, params and help not loading due to typo         
 *      5. Fixed battler atb clock update not triggering due to typo          
 *      6. Fixed action set item passing the null argument due to typo        
 *      7. Fixed undefined function error when updating atb frame due to typo 
 *      8. Fixed failed party escape not resetting actors' atb values in delay
 *      9. Fixed passing wrong color argument type when drawing actor atb bars
 *      10. Simplified operator in <operator max patb val: val>               
 *      11. Increased this plugin's efficiency, extensibility and modularity  
 *      v0.00a(GMT 1600 22-11-2015):                                          
 *      1. 1st testing version of this plugin finished                        
 *============================================================================*/
/*:
 * @plugindesc To be an easy, simple and user-friendly, yet powerful atb system
 *             Serves as the core plugin implementing all atb system essentials
 * @author DoubleX
 *
 * @param battle_system_code
 * @desc Sets the code indicating if ATB or the default battle system will be 
 *       used as battle_system_code
 *       Available codes for battle_system_code:
 *       atb - ATB will be used
 *       The default battle system will be used if battle_system_code doesn't
 *       return any available code
 *       battle_system_code must not be changed from the available codes to the
 *       unavailable ones during the same battle(the same for the vice versa) or
 *       this plugin will fail extremely badly
 * @default atb
 *
 * @param base_fill_time
 * @desc Sets the base atb fill time from empty to full as base_fill_time
 *       seconds
 *       base_fill_time must return a Number and should return a positive one
 * @default 5
 *
 * @param turn_unit_code
 * @desc Sets the code of the unit of the battle turn clock as turn_unit_code
 *       Available code for the unit of the battle turn clock:
 *       act - Number of executed actions
 *       sec - Seconds
 *       The battle turn clock won't run if turn_unit_code doesn't return an
 *       available code
 * @default sec
 *
 * @param max_turn_unit
 * @desc Sets the maximum battle turn clock unit as max_turn_unit
 *       max_turn_unit must return a Number and should return a positive one
 * @default 5
 *
 * @param wait_cond_code
 * @desc Sets the atb wait condition code as wait_cond_code
 *       Available atb wait condition codes:
 *       full - Wait only when a message's showing or an event's running
 *       act - Wait when an action's executing as well
 *       target - Wait when the target selection window's shown as well
 *       item - Wait when the skill/item selection window's shown as well
 *       "Wait when players can input actions as well" will be used if
 *       wait_cond_code doesn't return any available code
 *       Only 1 battler can execute actions at a time
 *       Only 1 action can be executed at a time
 * @default full
 *
 * @param atb_fill_code
 * @desc Sets the atb fill code as atb_fill_code
 *       Available atb fill code:
 *       delay - Lets battlers input actions when that battler's atb's empty
 *               Refills that battler's atb right after executing actions
 *       If atb_fill_code doesn't return an available atb fill code, "Lets
 *       battlers input and execute actions when the battler's atb's full and
 *       empties the battler's atb right after executing actions" will be used
 *       atb_fill_code should return the same code during the same battle to
 *       ensure proper atb fillings and action executions
 * @default fill
 *
 * @param max_atb_val
 * @desc Sets the minimum atb value regarded as overlay(also the maximum atb
 *       value displayed on the atb bars) with atb fill code delay, and the
 *       maximum atb value with other codes, as max_atb_val
 *       max_atb_val must return a nonzero Number and should return a positive
 *       one
 *       max_atb_val should return the same value during the same battle to
 *       ensure proper atb fillings and action executions
 *       max_atb_val must be at least 10000 times larger than 2 ^ -52
 * @default 100
 *
 * @param atb_rate_code
 * @desc Sets the atb refill rate code as atb_rate_code
 *       Available atb refill rate codes:
 *       abs_agi - agi
 *       agi - agi * max_atb_val / base_fill_time / 60
 *       avg_agi - (formula in agi) / average of all alive battlers' agi
 *       The fps is assumed to be always 60
 *       If atb_rate_code returns an unavailable atb refill rate code, it'll be
 *       the same as avg_agi, except BattleManager.patb_avg_agi will always be
 *       reevalauted when it can change instead of just upon battle start
 *       atb gain rate must be at least 2 ^ -52 * max atb value * 100 per frame
 * @default update_avg_agi
 *
 * @param atb_start_code
 * @desc Sets the starting atb value code as atb_start_code
 *       The starting atb value is always 0 for:
 *       - unmovable battlers with non-delay atb fill code
 *       - actors with non-delay atb fill code and start type as surprise
 *       - enemies with non-delay atb fill code and start type as preemptive
 *       - actors with atb fill code delay and start type as preemptive
 *       - enemies with atb fill code delay and start type as surprise
 *       The starting atb value is always max_atb_val for:
 *       - unmovable battlers with atb fill code delay
 *       - actors with non-delay atb fill code and start type as preemptive
 *       - enemies with non-delay atb fill code and start type as surprise
 *       - actors with atb fill code delay and start type as surprise
 *       - enemies with atb fill code delay and start type as preemptive
 *       Available starting atb value code for normal start:
 *       agi - max_atb_val * agi / max agi in non-delay atb fill code
 *             max_atb_val * (1 - agi / this.paramMax(6)) in atb fill code
 *             delay
 *       The starting atb value will be 0 and max_atb_val in non-delay and
 *       delay atb fill code respectively if atb_start_code doesn't return an
 *       available starting atb value code for normal starts
 * @default agi
 *
 * @param atb_reset_code
 * @desc Sets the code of the reset atb mechanism as atb_reset_code for
 *       additional effects
 *       It'll only be used with non-delay atb_reset_code
 *       The atb refill will always be freezed while not movable
 *       Available code for the atb reset mechanism for additional effects:
 *       clear - The atb will be emptied when becoming unmovable as well
 *       No additional effects will trigger if atb_reset_code doesn't return
 *       an available code
 * @default clear
 *
 * @param max_linked_input_actors
 * @desc Sets the maximum number of inputable actors that can proceed
 *       inputting actions without any of them actually starting to charge
 *       or execute any inputted ones as max_linked_input_actors
 *       max_linked_input_actors should return the same value during the
 *       same battle
 *       Setting max_linked_input_actors as negative will disable this feature
 *       This feature doesn't work well with any inputable actor having Action
 *       Times +
 *       Disabling this feature for available wait_cond_code is recommended
 * @default 0
 *
 * @param show_atb_bars
 * @desc Sets the actor atb bars to be shown on the status window if
 *       show_atb_bars is true
 *       show_atb_bars should return the same value during the same battle to
 *       ensure proper status window display
 * @default true
 *
 * @param actor_name_w
 * @desc Sets the maximum width allocated for actor name display on the status
 *       window as actor_name_w
 *       actor_name_w must return a positive Number
 * @default 123
 *
 * @param actor_icon_ox
 * @desc Sets the actor icon display area x offset relative to the actor name
 *       display area on the status window as actor_icon_ox
 *       actor_icon_ox must return a positive Number
 * @default 6
 *
 * @param hp_bar_ox
 * @desc Sets the actor hp bar display area x offset relative to the actor icon
 *       display area on the status window as hp_bar_ox
 *       hp_bar_ox must return a positive Number
 * @default 6
 *
 * @param hp_bar_w
 * @desc Sets the maximum width allocated for actor hp bar display on the status
 *       window as hp_bar_w
 *       hp_bar_w must return a positive Number
 * @default 87
 *
 * @param mp_bar_ox
 * @desc Sets the actor mp bar display area x offset relative to the actor hp
 *       bar display area on the status window as mp_bar_ox
 *       mp_bar_ox must return a positive Number
 * @default 6
 *
 * @param mp_bar_w
 * @desc Sets the maximum width allocated for actor mp bar display on the status
 *       window as mp_bar_w
 *       mp_bar_w must return a positive Number
 * @default 87
 *
 * @param tp_bar_ox
 * @desc Sets the actor tp bar display area x offset relative to the actor mp
 *       bar display area on the status window as tp_bar_ox
 *       tp_bar_ox must return a positive Number
 * @default 6
 *
 * @param tp_bar_w
 * @desc Sets the maximum width allocated for actor tp bar display on the status
 *       window as tp_bar_w
 *       tp_bar_w must return a positive Number
 * @default 87
 *
 * @param atb_bar_ox
 * @desc Sets the actor atb bar display area x offset relative to the actor 
 *       mp/tp bar display area on the status window as atb_bar_ox
 *       atb_bar_ox must return a positive Number
 * @default 6
 *
 * @param atb_bar_w
 * @desc Sets the maximum width allocated for actor atb bar display on the
 *       status window as atb_bar_w
 *       atb_bar_w must return a positive Number
 * @default 87
 *
 * @param atb_c1
 * @desc Sets the 1st atb bar color as text color atb_c1
 *       atb_c1 must return a valid text color code
 *       atb_c1 should return the same value during the same battle to ensure
 *       proper atb bar color displays
 * @default 7
 *
 * @param atb_c2
 * @desc Sets the 2nd atb bar color as text color atb_c2
 *       atb_c2 must return a valid text color code
 *       atb_c2 should return the same value during the same battle to ensure
 *       proper atb bar color displays
 * @default 8
 *
 * @param atb_overlay_c1
 * @desc Sets the 1st atb bar overlay color as text color atb_overlay_c1
 *       It'll only be used with atb value above max_atb_val
 *       atb_overlay_c1 must return a valid text color code
 *       atb_overlay_c1 should return the same value during the same battle to
 *       ensure proper atb bar color displays
 * @default 19
 *
 * @param atb_overlay_c2
 * @desc Sets the 2nd atb bar overlay color as text color atb_overlay_c2
 *       It'll only be used with atb value above max_atb_val
 *       atb_overlay_c2 must return a valid text color code
 *       atb_overlay_c2 should return the same value during the same battle to
 *       ensure proper atb bar color displays
 * @default 26
 *
 * @param atb_bar_text
 * @desc Sets the atb bar description text as atb_bar_text
 *       atb_bar_text should return the same value during the same battle to
 *       ensure proper atb bar text displays
 * @default AP
 *
 * @help
 * The default plugin file name is DoubleX RMMV Popularized ATB Core v102b
 * If you want to change that, you must edit the value of
 * DoubleX_RMMV.PATB_Core_File, which must be done via opening this plugin js
 * file directly
 *============================================================================
 *    ## Notetag Info                                                         
 *----------------------------------------------------------------------------
 *    # Actor/Class/Weapon/Armor/Enemy/State Notetags:                        
 *      State notetags take the highest priority, followed by enemy, weapon,  
 *      armor, class and actor                                                
 *      1. <operator max patb val: val>                                       
 *         - Assigns val to the battler's maximum atb value via operator      
 *         - operator can be either =, +, -, *, / or %, meaning set to, add   
 *           by, subtract by, multiply by, divide by or modulo by respectively
 *         - All instances of this notetag will be used sequentially          
 *         - The final max atb_value must be at least 10000 times larger than 
 *           2 ^ -52                                                          
 *      2. <patb colors: text color 1, text color 2>                          
 *         - Changes the atb bar color 1 and 2 to text color 1 and 2          
 *           respectively when this notetag's used                            
 *         - The 1st notetag that's being read by the battler will be used    
 *      3. <patb overlay colors: text color 1, text color 2>                  
 *         - Changes the atb overlay color 1 and 2 to text color 1 and 2      
 *           respectively when this notetag's used                            
 *         - The 1st notetag that's being read by the battler will be used    
 *============================================================================
 *    ## Plugin Call Info                                                     
 *----------------------------------------------------------------------------
 *    # Configuration manipulations                                           
 *      1. $gameSystem.patb.param                                             
 *         - Returns the value of param listed in the plugin manager          
 *      2. $gameSystem.patb.param = val                                       
 *         - Sets the value of param listed in the plugin manager as val      
 *         - All $gameSystem.patb.param changes will be saved                 
 *      3. $gameSystem.is_patb()                                              
 *         - Returns if battle_system_code returns an available code          
 *      4. $gameSystem.max_patb_turn_unit(unit)                               
 *         - Returns the maximum global battle turn counter with unit as unit 
 *    # Data actor/class/weapon/armor/enemy/state manipulations               
 *      1. meta.max_patb_val                                                  
 *         - Returns the maximum atb value with the operator stored in        
 *           <operator max patb val: val> in the form of [opeartor, val]      
 *      2. meta.max_patb_val = [opeartor, val]                                
 *         - Sets the maximum atb value with the operator stored in           
 *           <operator max patb val: val> as string operator and Number val   
 *         - The final max atb value must be at least 10000 times larger than 
 *           2 ^ -52                                                          
 *         - All meta.max_patb_val changes can be saved if                    
 *           DoubleX RMMV Dynamic Data is used                                
 *      3. meta.patb_colors                                                   
 *         - Returns the text colors stored in                                
 *           <patb colors: text color 1, text color 2> in the form of         
 *           [text color 1, text color 2]                                     
 *      4. meta.patb_colors = [text color 1, text color 2]                    
 *         - Sets the text colors stored in                                   
 *           <patb colors: text color 1, text color 2> as text color 1 and 2  
 *         - All meta.patb_colors changes can be saved if                     
 *           DoubleX RMMV Dynamic Data is used                                
 *      5. meta.patb_overlay_colors                                           
 *         - Returns the text colors stored in                                
 *           <patb overlay colors: text color 1, text color 2> in the form of 
 *           [text color 1, text color 2]                                     
 *      6. meta.patb_overlay_colors = [text color 1, text color 2]            
 *         - Sets the text colors stored in                                   
 *           <patb overlay colors: text color 1, text color 2> as text color 1
 *           and 2                                                            
 *         - All meta.patb_overlay_colors changes can be saved if             
 *           DoubleX RMMV Dynamic Data is used                                
 *    # Battler manipulations                                                 
 *      1. max_patb_val                                                       
 *         - Returns the battler's maximum atb value for all atb types        
 *      2. max_patb_val = val                                                 
 *         - Sets the battler's maximum atb value for all atb types as val    
 *         - It'll be reevaluated if it can be changed without plugin calls   
 *      3. patb_val.atb                                                       
 *         - Returns the battler's atb value                                  
 *      4. patb_val.atb = val                                                 
 *         - Set the battler's atb value as val                               
 *      5. patb_rate.atb                                                      
 *         - Returns the battler's atb rate                                   
 *      6. patb_rate.atb = rate                                               
 *         - Set the battler's atb rate as rate                               
 *         - It'll be reevaluated if it can be changed without plugin calls   
 *      7. patb_val_change.atb = true                                         
 *         - Notifies that the atb value's changed                            
 *         - It must be used right after the atb bar length changed           
 *      8. patb_note_change.note = true                                       
 *         - Notifies that the values of at least 1 notetag instance of       
 *           notetag note or the corresponding configuration value has changed
 *         - Note can be max_atb_val, atb_color or atb_overlay_color,         
 *           referring to <operator max patb val: val>,                       
 *           <patb colors: text color 1, text color 2>, and                   
 *           <patb overlay colors: text color 1, text color 2> respectively   
 *      9. clear_patb()                                                      
 *          - Same as calling reset_patb_val() and reset_patb()               
 *      10. reset_patb_val()                                                   
 *          - Resets the battler's atb value to the maximum atb value in delay
 *            fill mode and 0 if otherwise                                    
 *      11. reset_patb()                                                      
 *          - Clears all battler's actions                                    
 *      12. patb_type()                                                       
 *          - Returns the current atb type, which can be either atb, charge or
 *            cooldown                                                        
 *          - charge and cooldown will be available when corresponding addons 
 *            are used as well                                                
 *      13. patb_colors(type)                                                 
 *          - Returns the text colors of the atb bars of type type, which can 
 *            be either atb, charge or cooldown                               
 *          - The overlay colors will be returned instead if the atb value of 
 *            type type is greater than max_atb_val                           
 *          - charge and cooldown will be available when corresponding addons 
 *            are used as well                                                
 *    # Battle manipulations                                                  
 *      1. BattleManager.patb_turn_clock                                      
 *         - Returns the current global battle turn clock with both second and
 *           action units in the form of { act: act, sec: sec }               
 *         - sec is stored with the number of frames as the unit              
 *         - The fps is assumed to be always 60                               
 *      2. BattleManager.patb_turn_clock.act = act                            
 *         - Sets the current global battle turn clock with action unit as act
 *      3. BattleManager.patb_turn_clock.sec = sec                            
 *         - Sets the current global battle turn clock with second unit as sec
 *         - sec is stored with the number of frames as the unit              
 *         - The fps is assumed to be always 60                               
 *      4. BattleManager.patb_base                                            
 *         - Returns the global base atb rate                                 
 *      5. BattleManager.need_patb_refresh = true                             
 *         - Indicates that at least 1 battler has refreshed                  
 *         - All windows will be refreshed and the sum of all battler's agi   
 *           will be reevaluated                                              
 *============================================================================
 */

"use strict";
var DoubleX_RMMV = DoubleX_RMMV || {};
DoubleX_RMMV["PATB Core"] = "v1.02b";

// The plugin file name must be the same as DoubleX_RMMV.PATB_Core_File
DoubleX_RMMV.PATB_Core_File = "DoubleX RMMV Popularized ATB Core v102b";

/*============================================================================
 *    ## Plugin Implementations                                               
 *       You need not edit this part as it's about how this plugin works      
 *----------------------------------------------------------------------------
 *    # Plugin Support Info:                                                  
 *      1. Prerequisites                                                      
 *         - Basic knowledge of this plugin on the user level, the default    
 *           battle system implementations and the atb system concepts        
 *         - Some Javascript coding proficiency to fully comprehend this      
 *           plugin                                                           
 *      2. Function documentation                                             
 *         - The 1st part describes why this function's rewritten/extended for
 *           rewritten/extended functions or what the function does for new   
 *           functions                                                        
 *         - The 2nd part describes what the arguments of the function are    
 *         - The 3rd part informs which version rewritten, extended or created
 *           this function                                                    
 *         - The 4th part informs whether the function's rewritten or new     
 *         - The 5th part informs whether the function's a real or potential  
 *           hotspot                                                          
 *         - The 6th part describes how this function works for new functions 
 *           only, and describes the parts added, removed or rewritten for    
 *           rewritten or extended functions only                             
 *         Example:                                                           
 * /*----------------------------------------------------------------------
 *  *    Why rewrite/extended/What this function does                      
 *  *----------------------------------------------------------------------*/ 
/* // arguments: What these arguments are                                     
 * function_name = function(arguments) { // Version X+; Rewrite/New; Hotspot  
 *     // Added/Removed/Rewritten to do something/How this function works     
 *     function_name_code;                                                    
 *     //                                                                     
 * } // function_name                                                         
 *----------------------------------------------------------------------------*/

DoubleX_RMMV.Is_PATB_Notes_Loaded = false; // v1.01f+

/*----------------------------------------------------------------------------
 *    # Edit class: DataManager                                               
 *----------------------------------------------------------------------------*/

DataManager.isDatabaseLoadedPatb = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    // Rewritten
    return this.isDatabaseLoadedPatb() && this.load_all_patb_notes();
    //
}; // DataManager.isDatabaseLoaded

DataManager.load_all_patb_notes = function() { // v0.00b+; New
    // Prevents loading PATB notetags more than once per game execution
    if (DoubleX_RMMV.Is_PATB_Notes_Loaded) { return true; }
    var types = [$dataActors, $dataClasses, $dataWeapons, $dataArmors];
    types.concat([$dataEnemies, $dataStates]).forEach(function(type) {
        type.forEach(function(data) {
            if (data) { this.load_patb_data_notes(data); }
        }, this);
    }, this);
    DoubleX_RMMV.Is_PATB_Notes_Loaded = true;
    return true;
    //
}; // DataManager.load_all_patb_notes

// data: The data to have its notetags read
DataManager.load_patb_data_notes = function(data) { // v0.00b+; New
    var color = /< *patb +colors *: *(\d+) *, *(\d+) *>/i;
    var overlay = /< *patb +overlay +colors *: *(\d+) *, *(\d+) *>/i;
    var max = /< *(.+) +max +patb +val *: *(\d+) *>/i, meta = data.meta;
    meta.max_patb_val = [];
    data.note.split(/[\r\n]+/).forEach(function(line) {
        if (!meta.patb_colors && line.match(color)) {
            meta.patb_colors = [+RegExp.$1, +RegExp.$2];
        } else if (!meta.patb_overlay_colors && line.match(overlay)) {
            meta.patb_overlay_colors = [+RegExp.$1, +RegExp.$2];
        } else if (line.match(max)) {
            meta.max_patb_val.push([RegExp.$1, +RegExp.$2]);
        }
    });
}; // DataManager.load_patb_data_notes

/*----------------------------------------------------------------------------
 *    # Edit class: SceneManager                                              
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    New public instance variable                                            
 *----------------------------------------------------------------------------*/
// Read by BattleManager to close all windows on battle scene upon battle end
Object.defineProperty(SceneManager, "scene", {
    get: function() { return this._scene; },
    configurable: true
});

/*----------------------------------------------------------------------------
 *    # Edit class: BattleManager                                             
 *      - Reimplements the the whole battle flow to run the atb system        
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    New public instance variables                                           
 *----------------------------------------------------------------------------*/
Object.defineProperties(BattleManager, {
    // The global base atb rate
    "patb_base": { get: function() { // Hotspot
        return this._patb_base;
    }, configurable: true },
    // The global base atb rate change flag for battler atb rate
    "patb_base_change": { get: function() { // Hotspot
        return this._patb_base_change;
    }, configurable: true },
    // Read by Scene_Battle to check for update action executions
    "phase": { get: function() { // Hotspot
        return this._phase;
    }, configurable: true },
    // Read by Game_Battler and Scene_Battle to mark all actable battlers
    "action_battlers": { get: function() { // Hotspot
        return this._actionBattlers;
    }, configurable: true },
    // Read by Scene_Battle to setup actors that become inputable
    "actor_index": { set: function(index) {
        this._actorIndex = index;
    }, configurable: true },
    // (v0.00b+)The battler refresh flag for refreshing agi sum and windows
    "need_patb_refresh": { get: function() { // Hotspot
        return this._need_patb_refresh;
    }, set: function(refresh) { // Hotspot
        this._need_patb_refresh = refresh;
    }, configurable: true },
    // (v0.00d+)The battle turn atb clock with all units
    "patb_turn_clock": { get: function() { // Potential Hotspot
        return this._patb_turn_clock;
    }, configurable: true }
});

/*----------------------------------------------------------------------------
 *    New private instance variables                                          
 *----------------------------------------------------------------------------*/
/* _is_halt_patb_input: Whether inputable actors can't input actions by players
 * _patb_agi_sum: The sum of agi of all alive battlers
 * _patb_input_actors_count: The number of actors inputting consecutively
 */

BattleManager.initMembersPatb = BattleManager.initMembers;
BattleManager.initMembers = function() {
    this.initMembersPatb();
    if ($gameSystem.is_patb()) { this.init_patb(); } // Added
}; // BattleManager.initMembers

/*----------------------------------------------------------------------------
 *    Keeps the appropriate input window opened if there are inputable actors 
 *----------------------------------------------------------------------------*/
BattleManager.isInputtingPatb = BattleManager.isInputting;
BattleManager.isInputting = function() { // Hotspot
    if ($gameSystem.is_patb()) { return $gameParty.canInput(); } // Added
    return this.isInputtingPatb();
}; // BattleManager.isInputting

/*----------------------------------------------------------------------------
 *    Sets the starting atb value for all battlers as well                    
 *----------------------------------------------------------------------------*/
BattleManager.startBattlePatb = BattleManager.startBattle;
BattleManager.startBattle = function() {
    this.startBattlePatb();
    if ($gameSystem.is_patb()) { this.start_patb_battle(); } // Added
}; // BattleManager.startBattle

BattleManager.selectNextCommandPatb = BattleManager.selectNextCommand;
BattleManager.selectNextCommand = function() { // v1.01f+
    if ($gameSystem.is_patb()) { this.select_next_patb_command(); } // Added
    this.selectNextCommandPatb();
}; // BattleManager.selectNextCommand

BattleManager.refreshStatusPatb = BattleManager.refreshStatus;
BattleManager.refreshStatus = function() { // v0.00e+
    // Added to refresh all visible input windows as well
    this.process_patb_scene("refresh_patb_windows");
    //
    this.refreshStatusPatb();
}; // BattleManager.refreshStatus

/*----------------------------------------------------------------------------
 *    Abandons the default battle system phase transitions                    
 *----------------------------------------------------------------------------*/
BattleManager.startTurnPatb = BattleManager.startTurn;
BattleManager.startTurn = function() {
    if (!$gameSystem.is_patb()) { this.startTurnPatb(); } // Rewritten
}; // BattleManager.startTurn

BattleManager.processVictoryPatb = BattleManager.processVictory;
BattleManager.processVictory = function() {
    // Added to close all active input windows as well
    this.process_patb_scene("close_patb_windows");
    //
    this.processVictoryPatb();
}; // BattleManager.processVictory

BattleManager.processDefeatPatb = BattleManager.processDefeat;
BattleManager.processDefeat = function() {
    // Added to close all active input windows as well
    this.process_patb_scene("close_patb_windows");
    //
    this.processDefeatPatb();
}; // BattleManager.processDefeat

BattleManager.endActionPatb = BattleManager.endAction;
BattleManager.endAction = function() {
    this.endActionPatb();
    // Added
    if ($gameSystem.is_patb() && $gameSystem.patb.turn_unit_code === "act") {
        this.update_patb_turn("act");
    }
    //
}; // BattleManager.endAction

/*----------------------------------------------------------------------------
 *    Abandons the default battle system action execution subject FIFO queue  
 *----------------------------------------------------------------------------*/
BattleManager.getNextSubjectPatb = BattleManager.getNextSubject;
BattleManager.getNextSubject = function() {
    // Rewritten
    return $gameSystem.is_patb() ? null : this.getNextSubjectPatb();
    //
}; // BattleManager.getNextSubject

BattleManager.init_patb = function() { // v1.00b+; New
    this._patb_turn_clock = { act: 0, sec: 0 }, this._patb_agi_sum = null;
    this._patb_input_actors_count = 0;
}; // BattleManager.init_patb

BattleManager.start_patb_battle = function() { // New
    this._phase = 'turn';
    var s = this._preemptive ? "preempt" : this._surprise ? "surprise" : "norm";
    $gameParty.set_start_patb_val(s);
    $gameTroop.set_start_patb_val(s);
}; // BattleManager.start_patb_battle

/*----------------------------------------------------------------------------
 *    Checks if the atb frame update or the action execution can be processed 
 *----------------------------------------------------------------------------*/
BattleManager.can_update_patb_process = function() { // v1.00a+; New; Hotspot
    if (this.isAborting() || this.isBattleEnd()) {
        this.update();
        return false;
    }
    return !$gameMessage.isBusy() && !this.updateEvent();
}; // BattleManager.can_update_patb_process

/*----------------------------------------------------------------------------
 *    Updates the current action when finished execution on the current target
 *----------------------------------------------------------------------------*/
BattleManager.update_patb_process = function() { // v1.00a+; New; Hotspot
    if (this._phase === 'action' && !this.isBusy()) { this.updateAction(); }
}; // BattleManager.update_patb_process

/*----------------------------------------------------------------------------
 *    Checks if cases always stopping the global atb frame update aren't met  
 *----------------------------------------------------------------------------*/
BattleManager.can_update_patb = function() { // New; Hotspot
    return this._phase && this._phase !== 'init';
}; // BattleManager.can_update_patb

/*----------------------------------------------------------------------------
 *    Runs the global and battler atb clocks and sets action execution subject
 *----------------------------------------------------------------------------*/
BattleManager.update_patb = function() { // New; Hotspot
    this.set_patb_base();
    $gameParty.update_patb();
    $gameTroop.update_patb();
    this.update_patb_auto_battle();
    if (this._phase !== 'action') { this.process_patb_turn(); }
    if ($gameSystem.patb.turn_unit_code !== "sec") { return; }
    this.update_patb_turn("sec");
}; // BattleManager.update_patb

/*----------------------------------------------------------------------------
 *    Sets the global base atb rate                                           
 *----------------------------------------------------------------------------*/
BattleManager.set_patb_base = function() { // New; Hotspot
    var last_base = this._patb_base;
    // Fps's assumed to be always 60
    this._patb_base = $gameSystem.patb.base_fill_time * 60;
    //
    if ($gameSystem.patb.atb_rate_code !== "agi") {
        this._patb_base *= this.patb_avg_agi();
    }
    this._patb_base_change = last_base !== this._patb_base;
}; // BattleManager.set_patb_base

BattleManager.patb_avg_agi = function() { // New; Hotspot
    if (this._patb_agi_sum) {
        if ($gameSystem.patb.atb_rate_code === "avg_agi") {
    	    return this._patb_agi_sum;
        }
        // Returns the cached average agi unless it can be changed
        if (!this._need_patb_refresh) { return this._patb_agi_sum; }
        //
    }
    this.set_patb_avg_agi();
    return this._patb_agi_sum;
}; // BattleManager.patb_avg_agi

BattleManager.set_patb_avg_agi = function() { // v0.00e+; New; Potential Hotspot
    var mems = $gameParty.aliveMembers().concat($gameTroop.aliveMembers());
    this._patb_agi_sum = mems.reduce(function(sum, mem) {
        return sum + mem.agi;
    }, 0) / mems.length;
}; // BattleManager.set_patb_avg_agi

/*----------------------------------------------------------------------------
 *    Ensures inputable battler becoming autobattle will make autobattle acts 
 *----------------------------------------------------------------------------*/
BattleManager.update_patb_auto_battle = function() { // v1.00b+; New; Hotspot
    var reset = $gameSystem.patb.atb_reset_code !== "clear";
    this._actionBattlers.forEach(function(battler) {
        if (!battler.isAutoBattle() || !battler.can_input_patb()) { return; }
        if (reset) { battler.reset_patb_val(); }
        battler.reset_patb();
    });
}; // BattleManager.update_patb_auto_battle

/*----------------------------------------------------------------------------
 *    Finds the 1st battler in the actable battler list that can cast actions 
 *----------------------------------------------------------------------------*/
BattleManager.process_patb_turn = function() { // New; Hotspot
    this._subject = this._subject || this._actionBattlers.filter(function(b) {
        return b.can_patb_act();
    })[0];
    if (this._subject) { this.processTurn(); }
}; // BattleManager.process_patb_turn

/*----------------------------------------------------------------------------
 *    Runs the global battle turn clock                                       
 *----------------------------------------------------------------------------*/
// unit: The battle turn counter unit
BattleManager.update_patb_turn = function(unit) { // New; Hotspot
    this._patb_turn_clock[unit] += 1;
    // Loosens the coupling among the core and turn plugins
    if (this._patb_turn_clock[unit] >= $gameSystem.max_patb_turn_unit(unit)) {
        this._patb_turn_clock[unit] = 0;
        this.end_patb_turn();
    }
    //
}; // BattleManager.update_patb_turn

BattleManager.end_patb_turn = function() { // New
    var mems = $gameParty.battleMembers().concat($gameTroop.members());
    mems.forEach(function(mem) {
        mem.onTurnEnd();
        this.refreshStatus();
        this._logWindow.displayAutoAffectedStatus(mem);
        this._logWindow.displayRegeneration(mem);
    }, this);
    $gameTroop.increaseTurn();
}; // BattleManager.end_patb_turn

BattleManager.can_patb_esc = function() { // v1.00a+; New
    // Ensures party escape attempt won't trigger when the battle's busy
    if (this.isBusy()) { return false; }
    return this._phase && this._phase !== 'init' && this._phase !== 'action';
    //
}; // BattleManager.can_patb_esc

/*----------------------------------------------------------------------------
 *    Helper function for calling Scene_Battle functions                      
 *----------------------------------------------------------------------------*/
// func: The function in Scene_Battle to be called
BattleManager.process_patb_scene = function(func) { // v1.01c+; New
    if (!$gameSystem.is_patb() || !$gameParty.inBattle()) { return; }
    SceneManager.scene[func]();
}; // BattleManager.process_patb_windows

// battler: The battler to be makred as actable
BattleManager.add_patb_action_battler = function(battler) { // v1.01e+; New
    if (this._actionBattlers.indexOf(battler) >= 0) { return; }
    this._actionBattlers.push(battler);
    battler.makeActionsPatb();
}; // BattleManager.add_patb_action_battler

// battler: The battler to be makred as unactable
BattleManager.remove_patb_action_battler = function(battler) { // v1.01e+; New
    var index = this._actionBattlers.indexOf(battler);
    if (index >= 0) { this._actionBattlers.splice(index, 1); }
    if (this.actor() === battler) { this.clearActor(); }
}; // BattleManager.remove_patb_action_battler

BattleManager.inputable_patb_actor_indices = function() {
// v1.01e+; New; Hotspot
    // Ensures subject won't stop inputted actor from executing acts immediately
    if (this._is_halt_patb_input) {
        if (!this.can_patb_esc()) { return []; }
        this._is_halt_patb_input = false;
    }
    //
    return this._actionBattlers.filter(function(battler) {
        return battler.canInput();
    }).map(function(battler) { return battler.index(); });
}; // BattleManager.inputable_patb_actor_indices

BattleManager.select_next_patb_command = function() { // v1.02a+; New
    var actor = this.actor();
    if (!actor) { return; }
    actor.confirm_patb_act();
    if (actor.can_input_patb()) { return; }
    this._patb_input_actors_count += 1;
    var max_linked_input_actors = $gameSystem.patb.max_linked_input_actors;
    if (max_linked_input_actors < 0) return;
    if (this._patb_input_actors_count <= max_linked_input_actors) { return; }
    this._patb_input_actors_count = 0;
    this._is_halt_patb_input = true;
    this.changeActor($gameParty.size(), 'waiting');
}; // BattleManager.select_next_patb_command

/*----------------------------------------------------------------------------
 *    # Edit class: Game_System                                               
 *      - Stores the values of all configurations listed in the plugin manager
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    New public instance variable                                            
 *----------------------------------------------------------------------------*/
// The storage of all configuration values
Object.defineProperty(Game_System.prototype, "patb", {
    get: function() { /* Hotspot */ return this._patb; },
    configurable: true
});

Game_System.prototype.initializePatb = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    this.initializePatb();
    this.init_patb_params(); // Added
}; // Game_System.prototype.initialize

Game_System.prototype.init_patb_params = function() { // New
    var val, params = PluginManager.parameters(DoubleX_RMMV.PATB_Core_File);
    this._patb = {};
    Object.keys(params).forEach(function(param) {
        val = params[param].length > 0 ? +params[param] : params[param];
        this._patb[param] = isNaN(val) ? params[param] : val;
    }, this);
    this._patb.show_atb_bars = params.show_atb_bars === "true";
}; // Game_System.prototype.init_patb_params

Game_System.prototype.is_patb = function() { // New; Hotspot
    // Loosens the coupling among the core and ctb plugins
    return this._patb.battle_system_code === "atb";
    //
}; // Game_System.prototype.is_patb

/*----------------------------------------------------------------------------
 *    Loosen the coupling among the core and turn plugins                     
 *----------------------------------------------------------------------------*/
// unit: The battle turn counter unit
Game_System.prototype.max_patb_turn_unit = function(unit) {
// v0.00c+; New; Hotspot
    // Fps's assumed to be always 60
    if (unit === "sec") { return this._patb.max_turn_unit * 60; }
    //
    return this._patb.max_turn_unit;
}; // Game_System.prototype.max_patb_turn_unit

/*----------------------------------------------------------------------------
 *    # Edit class: Game_Action                                               
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    New public instance variable                                            
 *----------------------------------------------------------------------------*/
// The action's confirmation flag for actor action inputability check
Object.defineProperty(Game_Action.prototype, "patb_confirm", {
    get: function() { /* Hotspot */ return this._patb_confirm; },
    set: function(confirm) { this._patb_confirm = confirm; },
    configurable: true
});

/*----------------------------------------------------------------------------
 *    # Edit class: Game_BattlerBase                                          
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    Updates state turns with different removal timings at different timings 
 *----------------------------------------------------------------------------*/
Game_BattlerBase.prototype.updateStateTurnsPatb = 
Game_BattlerBase.prototype.updateStateTurns;
Game_BattlerBase.prototype.updateStateTurns = function() {
    // Added
    if ($gameSystem.is_patb()) { return this.update_patb_state_turns(2); }
    //
    this.updateStateTurnsPatb();
}; // Game_BattlerBase.prototype.updateStateTurns

Game_BattlerBase.prototype.hidePatb = Game_BattlerBase.prototype.hide;
Game_BattlerBase.prototype.hide = function() {
    this.hidePatb();
    // Added to ensure hidden battlers won't be able to execute or input actions
    if ($gameSystem.is_patb()) { this.clear_patb(); }
    //
}; // Game_BattlerBase.prototype.hide

Game_BattlerBase.prototype.canInputPatb = Game_BattlerBase.prototype.canInput;
Game_BattlerBase.prototype.canInput = function() { // Hotspot
    // Rewritten
    if (!this.canInputPatb()) { return false; }
    return !$gameSystem.is_patb() || this.can_input_patb();
    //
}; // Game_BattlerBase.prototype.canInput

// start: The battle start type
Game_BattlerBase.prototype.set_start_patb_val = function(start) { // New
    // Loosens the coupling among the core and start plugins
    this["set_start_patb_val_" + start]();
    //
}; // Game_BattlerBase.prototype.set_start_patb_val

/*----------------------------------------------------------------------------
 *    Ensures this plugin still works for battlers not being actor nor enemy  
 *----------------------------------------------------------------------------*/
Game_BattlerBase.prototype.set_start_patb_val_preempt = function() {
// v1.01b+; New
    // Ensures this plugin still works for battler not being actor nor enemy
    this.set_start_patb_val_norm();
    //
}; // Game_BattlerBase.prototype.set_start_patb_val_preempt

/*----------------------------------------------------------------------------
 *    Ensures this plugin still works for battlers not being actor nor enemy  
 *----------------------------------------------------------------------------*/
Game_BattlerBase.prototype.set_start_patb_val_surprise = function() {
// v1.01b+; New
    this.set_start_patb_val_norm();
}; // Game_BattlerBase.prototype.set_start_patb_val_surprise

Game_BattlerBase.prototype.set_start_patb_val_norm = function() {
// v1.01b+; New
    if ($gameSystem.patb.atb_start_code === "agi") {
        this._patb_val.atb = this._max_patb_val * this.agi / this.paramMax(6);
    } else {
        this._patb_val.atb = 0;
    }
}; // Game_BattlerBase.prototype.set_start_patb_val_norm

/*----------------------------------------------------------------------------
 *    # Edit class: Game_Battler                                              
 *      - Implements the battler's atb actions, clock, control flow and logics
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    New public instance variables                                           
 *----------------------------------------------------------------------------*/
Object.defineProperties(Game_Battler.prototype, {
    // The maximum atb value
    "max_patb_val": { get: function() { // Hotspot
        return this._max_patb_val;
    }, set: function(val) { // Potential Hotspot
        this._max_patb_val = val;
    }, configurable: true },
    // The atb rate of all atb types
    "patb_rate": { get: function() { // Hotspot
        return this._patb_rate;
    }, configurable: true },
    // The atb values of all atb types
    "patb_val": { get: function() { // Hotspot
        return this._patb_val;
    }, configurable: true },
    // The atb value change flag of all atb types for their atb bars
    "patb_val_change": { // Hotspot
        get: function() { return this._patb_val_change; },
        set: function(change) { this._patb_val_change = change; },
        configurable: true
    },
    // The effective notetag list change flag for all notetags
    "patb_note_change": { get: function() { // Hotspot
        return this._patb_note_change;
    }, configurable: true }
});

/*----------------------------------------------------------------------------
 *    New private instance variables                                          
 *----------------------------------------------------------------------------*/
/* _patb_battler_change: The effective notetag list change flag for all notetags
 * _max_patb_val_change: The maximum atb value change flag for atb rate
 * _patb_colors: The atb bar colors for all atb types
 */

Game_Battler.prototype.initMembersPatb = Game_Battler.prototype.initMembers;
Game_Battler.prototype.initMembers = function() {
    this.initMembersPatb();
    this.init_patb(); // Added
}; // Game_Battler.prototype.initMembers

Game_Battler.prototype.refreshPatb = Game_Battler.prototype.refresh;
Game_Battler.prototype.refresh = function() {
    this.refreshPatb();
    if ($gameSystem.is_patb()) { this.set_patb_refresh(); } // Added
}; // Game_Battler.prototype.refresh

Game_Battler.prototype.onRestrictPatb = Game_Battler.prototype.onRestrict;
Game_Battler.prototype.onRestrict = function() {
    this.onRestrictPatb();
    // Added to fix nil action battlers bugs and edge cases as well
    if (!$gameSystem.is_patb() || !BattleManager.action_battlers) { return; }
    if ($gameSystem.patb.atb_reset_code !== "clear") { this.reset_patb_val(); }
    this.reset_patb();
    //
}; // Game_Battler.prototype.onRestrict

/*----------------------------------------------------------------------------
 *    Marks that this battler becomes able to act as well                     
 *----------------------------------------------------------------------------*/
Game_Battler.prototype.makeActionsPatb = Game_Battler.prototype.makeActions;
Game_Battler.prototype.makeActions = function() {
	// Rewritten
    if (!$gameSystem.is_patb()) { return this.makeActionsPatb(); }
    BattleManager.add_patb_action_battler(this);
    //
}; // Game_Battler.prototype.makeActions

Game_Battler.prototype.onAllActionsEndPatb = 
Game_Battler.prototype.onAllActionsEnd;
Game_Battler.prototype.onAllActionsEnd = function() {
    this.onAllActionsEndPatb();
    if ($gameSystem.is_patb()) { this.on_all_patb_acts_end(); } // Added
}; // Game_Battler.prototype.onAllActionsEnd

Game_Battler.prototype.onTurnEndPatb = Game_Battler.prototype.onTurnEnd;
Game_Battler.prototype.onTurnEnd = function() {
    this.onTurnEndPatb();
    if ($gameSystem.is_patb()) { this.removeBuffsAuto(); } // Added
}; // Game_Battler.prototype.onTurnEnd

/*----------------------------------------------------------------------------
 *    Ensures battlers added after the battle starts won't carry statuses over
 *----------------------------------------------------------------------------*/
Game_Battler.prototype.onBattleEndPatb = Game_Battler.prototype.onBattleEnd;
Game_Battler.prototype.onBattleEnd = function() {
    this.onBattleEndPatb();
    if ($gameSystem.is_patb()) { this.clear_patb(); } // Added
}; // Game_Battler.prototype.onBattleEnd

// start: The battle start type
Game_Battler.prototype.set_start_patb_val = function(start) { // New
    this.init_patb();
    this.update_max_patb_val();
    if (this.canMove()) {
        Game_BattlerBase.prototype.set_start_patb_val.call(this, start);
        if (this._patb_val.atb >= this._max_patb_val) { this.makeActions(); }
    } else {
        this._patb_val.atb = 0;
    }
    if ($gameSystem.patb.atb_fill_code === "delay") {
        this._patb_val.atb = this._max_patb_val - this._patb_val.atb;
    }
    this._patb_val_change.atb = true;
}; // Game_Battler.prototype.set_start_patb_val

Game_Battler.prototype.init_patb = function() { // New
    // Loosen the coupling among the core, charge and cooldown plugins
    this._max_patb_val = $gameSystem.patb.max_atb_val;
    this._patb_colors = { atb: [], atb_overlay: [] };
    this._patb_rate = { atb: 0 }, this._patb_val = { atb: 0 };
    this._patb_val_change = { atb: true };
    this._patb_battler_change = {
        max_patb_val: true,
        atb_color: true,
        atb_overlay_color: true
    };
    this._patb_note_change = {
        max_patb_val: true,
        atb_color: true,
        atb_overlay_color: true
    };
    //
}; // Game_Battler.prototype.init_patb

/*----------------------------------------------------------------------------
 *    Runs the battler atb clock                                              
 *----------------------------------------------------------------------------*/
Game_Battler.prototype.update_patb = function() { // New; Hotspot
    this.update_max_patb_val();
    if (this.canInput()) { return; }
    // Loosens the coupling among the core, charge, cooldown and speed plugins
    if ($gameSystem.patb.atb_fill_code === "delay") {
        return this.update_patb_val(0, -1);
    }
    this.update_patb_val(this._max_patb_val, 1);
    //
}; // Game_Battler.prototype.update_patb

/* cap: The atb value cap stopping further atb value updates
 * sign: The atb value update direction sign
 */
Game_Battler.prototype.update_patb_val = function(cap, sign) { // New; Hotspot
    if (this._patb_val.atb * sign >= cap * sign) { return; }
    var rate = this.get_patb_rate() * sign;
    this._patb_val.atb += rate, this._patb_val_change.atb = rate !== 0;
    if (this._patb_val.atb * sign < cap * sign) { return; }
    this._patb_val.atb = cap;
    this.makeActions();
}; // Game_Battler.prototype.update_patb_val

/*----------------------------------------------------------------------------
 *    Reevaluates the atb rate only if any of its determinators can change    
 *----------------------------------------------------------------------------*/
Game_Battler.prototype.get_patb_rate = function() { // New; Hotspot
    if ($gameSystem.patb.atb_rate_code === "abs_agi") { return this.agi; }
    if (this.can_patb_rate_change()) {
        this._patb_rate.atb = this.agi * this._max_patb_val;
        this._patb_rate.atb /= BattleManager.patb_base;
        this._max_patb_val_change = false;
        // Multiplies the difference by 100% to work with small max atb value
        if (this._patb_rate.atb < Number.EPSILON * this._max_patb_val * 100) {
            console.log("ATB rate of " + this.name() + " is too small");
        }
        //
    }
    return this._patb_rate.atb;
}; // Game_Battler.prototype.get_patb_rate

/*----------------------------------------------------------------------------
 *    Fixes bugs from changing battler agi without changing the base atb rate 
 *----------------------------------------------------------------------------*/
Game_Battler.prototype.can_patb_rate_change = function() {
// v1.00c+; New; Hotspot
    if (this._max_patb_val_change) { return true; }
    return BattleManager.patb_base_change || BattleManager.need_patb_refresh;
}; // Game_Battler.prototype.can_patb_rate_change

/*----------------------------------------------------------------------------
 *    Rereads the effective max atb val notetag only if its values can change 
 *----------------------------------------------------------------------------*/
Game_Battler.prototype.update_max_patb_val = function() { // New; Hotspot
    if (!this.are_patb_battler_changed("max_patb_val")) { return; }
    var f = this._patb_val.atb >= this._max_patb_val;
    var max = $gameSystem.patb.max_atb_val;
    this._max_patb_val = this.set_multi_patb_notes(max, "max_patb_val");
    // Multiplies the difference by 10000 to work with very small max atb value
    if (this._max_patb_val < Number.EPSILON * 10000) {
        console.log("Max atb value of " + this.name() + " is too small");
        this._max_patb_val = Number.EPSILON * 10000;
    }
    //
    this._max_patb_val_change = true;
    if ($gameSystem.patb.atb_fill_code !== "delay") { this.corr_patb(f); }
    this.mark_patb_val_change();
}; // Game_Battler.prototype.update_max_patb_val

/*----------------------------------------------------------------------------
 *    Corrects the actability and all atb values after changing max atb value 
 *----------------------------------------------------------------------------*/
// full: The full atb before changing the max atb value flag
Game_Battler.prototype.corr_patb = function(full) { // New; Potential Hotspot
    if (!full && this._patb_val.atb >= this._max_patb_val) {
        this.makeActions();
    } else if (full && this._patb_val.atb < this._max_patb_val) {
        this.clear_patb();
    }
    this.cap_patb_val();
}; // Game_Battler.prototype.corr_patb

/*----------------------------------------------------------------------------
 *    Ensures no atb value will exceed its max                                
 *----------------------------------------------------------------------------*/
Game_Battler.prototype.cap_patb_val = function() {
// v1.01b+; New; Potential Hotspot
    Object.keys(this._patb_val).forEach(function(type) {
        if (this._patb_val[type] <= this._max_patb_val) { return; }
        this._patb_val[type] = this._max_patb_val;
    }, this);
}; // Game_Battler.prototype.cap_patb_val

/*----------------------------------------------------------------------------
 *    Notifies the atb bars to be redrawn                                     
 *----------------------------------------------------------------------------*/
Game_Battler.prototype.mark_patb_val_change = function() {
// v1.00b+; New; Potential Hotspot
    Object.keys(this._patb_val_change).forEach(function(type) {
        this._patb_val_change[type] = true;
    }, this);
}; // Game_Battler.prototype.mark_patb_val_change

/* val: The configuration value as the initial notetag value
 * note: The notetag type with its values to be set
 */
Game_Battler.prototype.set_multi_patb_notes = function(val, note) {
// New; Potential Hotspot
    // Loosens the coupling among the core, delay, rate and start plugins
    this.patb_note_data().forEach(function(type) {
        type.forEach(function(data) {
            data.meta[note].forEach(function(vals) {
                val = this.operate_patb_notes(val, vals[0], vals[1]);
            }, this);
        }, this);
    }, this);
    return val;
    //
}; // Game_Battler.prototype.set_multi_patb_notes

/* current: The current value to be operated
 * operator: The notetag operator
 * val: The notetag value to be operated with the current one
 */
Game_Battler.prototype.operate_patb_notes = function(current, operator, val) {
// New; Potential Hotspot
    switch (operator) {
        case "=": return val;
        case "+": return current + val;
        case "-": return current - val;
        case "*": return current * val;
        case "/": return current / val;
        case "%": return current % val;
        default:
            console.log('Invalid notetag operator: ' + operator);
            console.log('All notetags having this operator are ignored');
            return current;
    }
}; // Game_Battler.prototype.operate_patb_notes

/*----------------------------------------------------------------------------
 *    Rereads the effective atb color notetag only if its values can change   
 *----------------------------------------------------------------------------*/
// type: The current atb type
Game_Battler.prototype.patb_colors = function(type) { // New; Hotspot
    if (this._patb_val[type] > this._max_patb_val) { type += "_overlay"; }
    if (this.are_patb_battler_changed(type + "_color")) {
        this.set_patb_colors(type);
    }
    return this._patb_colors[type];
}; // Game_Battler.prototype.patb_colors

// type: The current atb type
Game_Battler.prototype.set_patb_colors = function(type) {
// New; Potential Hotspot
    this._patb_colors[type] = this.set_patb_notes("p" + type + "_colors");
    if (this._patb_colors[type]) { return; }
    var patb = $gameSystem.patb;
    this._patb_colors[type] = [patb[type + "_c1"], patb[type + "_c2"]];
}; // Game_Battler.prototype.set_patb_colors

// note: The notetag type with its values to be set
Game_Battler.prototype.set_patb_notes = function(note) {
// New; Potential Hotspot
    // Loosens the coupling among the core, order and se plugins
    var data = this.patb_note_data(), notetag;
    for (var index = 0, length = data.length; index < length; index++) {
        for (var d = data[index], i = 0, l = d.length; i < l; i++) {
            notetag = d[i].meta[note];
            if (notetag != null && notetag !== undefined) { return notetag; }
        }
    }
    return null;
    //
}; // Game_Battler.prototype.set_patb_notes

Game_Battler.prototype.patb_note_data = function() {
// v0.00e+; New; Potential Hotspot
    return [this.states()];
}; // Game_Battler.prototype.patb_note_data

/*----------------------------------------------------------------------------
 *    Checks if the effective notetag list or any of their values changed     
 *----------------------------------------------------------------------------*/
// note: The notetags to be checked for changes
Game_Battler.prototype.are_patb_battler_changed = function(note) {
// New; Hotspot
    var ch = this._patb_battler_change[note] || this._patb_note_change[note];
    this._patb_battler_change[note] = this._patb_note_change[note] = false;
    return ch;
}; // Game_Battler.prototype.are_patb_battler_changed

Game_Battler.prototype.on_all_patb_acts_end = function() { // v1.00b+; New
    this.update_patb_state_turns(1);
    this.clear_patb();
}; // Game_Battler.prototype.on_all_patb_acts_end 

Game_Battler.prototype.clear_patb = function() { // v1.01c+; New
    this.reset_patb_val();
    this.reset_patb();
}; // Game_Battler.prototype.clear_patb

Game_Battler.prototype.reset_patb_val = function() { // v0.00e+; New
    if ($gameSystem.patb.atb_fill_code === "delay") {
        this._patb_val.atb += this._max_patb_val;
    } else {
        this._patb_val.atb = 0;
    }
    this._patb_val_change.atb = true;
}; // Game_Battler.prototype.reset_patb_val

Game_Battler.prototype.reset_patb = function() { // New
    this.corr_patb_val();
    this.clearActions();
    BattleManager.remove_patb_action_battler(this);
    this.set_patb_refresh();
}; // Game_Battler.prototype.reset_patb

/*----------------------------------------------------------------------------
 *    Prevents the atb value of an unactable battler from reaching its cap    
 *----------------------------------------------------------------------------*/
Game_Battler.prototype.corr_patb_val = function() { // v1.00b+; New
    if ($gameSystem.patb.atb_fill_code === "delay") {
        var cap = 0, sign = -1;
    } else {
        var cap = this._max_patb_val, sign = 1;
    }
    if (this._patb_val.atb * sign < cap * sign) { return; }
    // Multiplies the difference by 100% to work with very small max atb value
    var max = Math.min(this._max_patb_val, 1);
    this._patb_val.atb -= Number.EPSILON * max * 100 * sign;
    //
    this._patb_val_change.atb = true;
}; // Game_Battler.prototype.corr_patb_val

Game_Battler.prototype.set_patb_refresh = function() { // New
    Object.keys(this._patb_battler_change).forEach(function(note) {
        this._patb_battler_change[note] = true;
    }, this);
    BattleManager.need_patb_refresh = true;
}; // Game_Battler.prototype.set_patb_refresh

// timing: The state auto removal timing
Game_Battler.prototype.update_patb_state_turns = function(timing) { // New
    this.states().forEach(function(s) {
        if (s.autoRemovalTiming === timing && this._stateTurns[s.id] > 0) {
            this._stateTurns[s.id] -= 1;
        }
    }, this);
}; // Game_Battler.prototype.update_patb_state_turns

Game_BattlerBase.prototype.can_input_patb = function() { // New; Hotspot
    return false;
}; // Game_BattlerBase.prototype.can_input_patb

/*----------------------------------------------------------------------------
 *    Checks if the battler in the actable battler list can execute actions   
 *----------------------------------------------------------------------------*/
Game_Battler.prototype.can_patb_act = function() { // New; Hotspot
    // Loosens the coupling among the core, charge, delay and cooldown plugins
    return !this.can_input_patb();
    //
}; // Game_Battler.prototype.can_patb_act

/*----------------------------------------------------------------------------
 *    Loosens the coupling among the core, charge and cooldown plugins        
 *----------------------------------------------------------------------------*/
Game_Battler.prototype.patb_type = function() { // New; Hotspot
    return "atb";
}; // Game_Battler.prototype.patb_type

/*----------------------------------------------------------------------------
 *    Loosens the coupling among the core, bar, charge and cooldown plugins   
 *----------------------------------------------------------------------------*/
Game_Battler.prototype.patb_bar_text = function() { // v1.01a+; New; Hotspot
    return $gameSystem.patb.atb_bar_text;
}; // Game_Battler.prototype.patb_bar_text

//type: he atb type
Game_Battler.prototype.patb_fill_rate = function(type) {
// v1.01b+; New; Hotspot
    var max = this._max_patb_val;
    return Math.min(this._patb_val[type], max) / max;
}; // Game_Battler.prototype.patb_fill_rate

/*----------------------------------------------------------------------------
 *    # Edit class: Game_Actor                                                
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    New private instance variable                                           
 *----------------------------------------------------------------------------*/
// _patb_reserve: The actor added during battles flag

/*----------------------------------------------------------------------------
 *    Ensures actors added during battles are properly initialized as well    
 *----------------------------------------------------------------------------*/
Game_Actor.prototype.initMembersActorPatb = Game_Actor.prototype.initMembers;
Game_Actor.prototype.initMembers = function() { // v1.00a+
    this.initMembersActorPatb();
    this._patb_reserve = true; // Added
}; // Game_Actor.prototype.initMembers

Game_Actor.prototype.makeAutoBattleActionsPatb = 
Game_Actor.prototype.makeAutoBattleActions;
Game_Actor.prototype.makeAutoBattleActions = function() {
    this.makeAutoBattleActionsPatb();
    if ($gameSystem.is_patb()) { this.confirm_patb_acts(); } // Added
}; // Game_Actor.prototype.makeAutoBattleActions

Game_Actor.prototype.makeConfusionActionsPatb = 
Game_Actor.prototype.makeConfusionActions ;
Game_Actor.prototype.makeConfusionActions = function() {
    this.makeConfusionActionsPatb();
    if ($gameSystem.is_patb()) { this.confirm_patb_acts(); } // Added
}; // Game_Actor.prototype.makeConfusionActions

/*----------------------------------------------------------------------------
 *    Ensures actors added during battles are properly initialized as well    
 *----------------------------------------------------------------------------*/
Game_Actor.prototype.onBattleEnd = function() { // v1.00a+; New
    Game_Battler.prototype.onBattleEnd.call(this);
    this._patb_reserve = true; // Added
}; // Game_Actor.prototype.onBattleEnd

Game_Actor.prototype.set_start_patb_val_preempt = function() { // v1.01b+; New
    this._patb_val.atb = this._max_patb_val;
}; // Game_Actor.prototype.set_start_patb_val_preempt

Game_Actor.prototype.set_start_patb_val_surprise = function() { // v1.01b+; New
    this._patb_val.atb = 0;
}; // Game_Actor.prototype.set_start_patb_val_surprise

/*----------------------------------------------------------------------------
 *    Ensures actors added during battles are properly initialized as well    
 *----------------------------------------------------------------------------*/
// start: The battle start type
Game_Actor.prototype.set_start_patb_val = function(start) { // v1.00a+; New
    Game_Battler.prototype.set_start_patb_val.call(this, start);
    this._patb_reserve = false; // Added
}; // Game_Actor.prototype.set_start_patb_val

/*----------------------------------------------------------------------------
 *    Ensures actors added during battles are properly initialized as well    
 *----------------------------------------------------------------------------*/
Game_Actor.prototype.update_patb = function() { // v1.00a+; New; Hotspot
    // Added
    if (this._patb_reserve) {
        this.init_patb();
        this._patb_reserve = false;
    }
    //
    Game_Battler.prototype.update_patb.call(this);
}; // Game_Actor.prototype.update_patb

Game_Actor.prototype.patb_note_data = function() {
// v1.01b+; New; Potential Hotspot
    var types = Game_Battler.prototype.patb_note_data.call(this);
    // Ensures no null data will be queried for its notetags
    types.push(this.equips().filter(function(equip) { return equip; }));
    //
    return types.concat([[this.currentClass()], [this.actor()]]);
}; // Game_Actor.prototype.patb_note_data

Game_Actor.prototype.confirm_patb_act = function() { // v1.01f+; New
    // Loosens the coupling among the core, cooldown, event and unison plugins
    var act = this.inputtingAction();
    if (!act) { return; }
    act.patb_confirm = true;
    this.set_patb_refresh();
    //
}; // Game_Actor.prototype.confirm_patb_act

/*----------------------------------------------------------------------------
 *    Loosen the coupling among the core, charge and cooldown plugins         
 *----------------------------------------------------------------------------*/
Game_Actor.prototype.confirm_patb_acts = function() { // v0.00g+; New
    this._actions.forEach(function(act) { act.patb_confirm = true; });
    this.set_patb_refresh();
}; // Game_Actor.prototype.confirm_patb_acts

Game_Actor.prototype.can_input_patb = function() { // v1.01c+; New; Hotspot
    if (this._actions.length <= 0) { return false; }
    return !this._actions.every(function(act) { return act.patb_confirm; });
}; // Game_Actor.prototype.can_input_patb

/*----------------------------------------------------------------------------
 *    # (v1.01b+)Edit class: Game_Enemy                                       
 *----------------------------------------------------------------------------*/

Game_Enemy.prototype.set_start_patb_val_preempt = function() { // v1.01b+; New
    this._patb_val.atb = 0;
}; // Game_Enemy.prototype.set_start_patb_val_preempt

Game_Enemy.prototype.set_start_patb_val_surprise = function() { // v1.01b+; New
    this._patb_val.atb = this._max_patb_val;
}; // Game_Enemy.prototype.set_start_patb_val_surprise

Game_Enemy.prototype.patb_note_data = function() {
// v1.01b+; New; Potential Hotspot
    var types = Game_Battler.prototype.patb_note_data.call(this);
    return types.concat([[this.enemy()]]);
}; // Game_Enemy.prototype.patb_note_data

/*----------------------------------------------------------------------------
 *    # (v1.01b+)Edit class: Game_Unit                                        
 *----------------------------------------------------------------------------*/

// start: The battle start type
Game_Unit.prototype.set_start_patb_val = function(start) { // New
    this.members().forEach(function(mem) { mem.set_start_patb_val(start); });
}; // Game_Unit.prototype.set_start_patb_val

Game_Unit.prototype.update_patb = function() { // New; Hotspot
    this.movableMembers().forEach(function(mem) { mem.update_patb(); });
}; // Game_Unit.prototype.update_patb

/*----------------------------------------------------------------------------
 *    # Edit class: Game_Party                                                
 *----------------------------------------------------------------------------*/

Game_Party.prototype.clearActions = function() { // New
    Game_Unit.prototype.clearActions.call(this);
    // Added to reset all party members' atb values upon failed party escapes
    if (!$gameSystem.is_patb()) { return; }
    this.aliveMembers().forEach(function(mem) { mem.clear_patb(); });
    //
}; // Game_Party.prototype.clearActions

/*----------------------------------------------------------------------------
 *    # Edit class: Window_BattleStatus                                       
 *      - Draws all actors atb bars by reallocating spaces for drawing stuffs 
 *----------------------------------------------------------------------------*/

Window_BattleStatus.prototype.basicAreaRectPatb = 
Window_BattleStatus.prototype.basicAreaRect;
Window_BattleStatus.prototype.basicAreaRect = function(index) {
    // Added to reallocate spaces to draw the atb bars
    if ($gameSystem.is_patb() && $gameSystem.patb.show_atb_bars) {
        return this.patb_basic_area_rect(index);
    }
    //
    return this.basicAreaRectPatb(index);
}; // Window_BattleStatus.prototype.basicAreaRect

Window_BattleStatus.prototype.gaugeAreaWidthPatb = 
Window_BattleStatus.prototype.gaugeAreaWidth;
Window_BattleStatus.prototype.gaugeAreaWidth = function() { // Hotspot
    // Added to reallocate spaces to draw the atb bars
    if ($gameSystem.is_patb() && $gameSystem.patb.show_atb_bars) {
        return this.patb_gauge_area_width();
    }
    //
    return this.gaugeAreaWidthPatb();
}; // Window_BattleStatus.prototype.gaugeAreaWidth

Window_BattleStatus.prototype.drawBasicAreaPatb = 
Window_BattleStatus.prototype.drawBasicArea;
Window_BattleStatus.prototype.drawBasicArea = function(rect, actor) {
    // Added to reallocate spaces to draw the atb bars
    if ($gameSystem.is_patb() && $gameSystem.patb.show_atb_bars) {
        return this.draw_patb_basic_area(rect, actor);
    }
    //
    this.drawBasicAreaPatb(rect, actor);
}; // Window_BattleStatus.prototype.drawBasicArea

Window_BattleStatus.prototype.drawGaugeAreaWithTpPatb = 
Window_BattleStatus.prototype.drawGaugeAreaWithTp;
Window_BattleStatus.prototype.drawGaugeAreaWithTp = function(rect, actor) {
    // Added to reallocate spaces to draw the atb bars
    if ($gameSystem.is_patb() && $gameSystem.patb.show_atb_bars) {
        return this.draw_patb_bar_with_tp(rect, actor);
    }
    //
    this.drawGaugeAreaWithTpPatb(rect, actor);
}; // Window_BattleStatus.prototype.drawGaugeAreaWithTp

Window_BattleStatus.prototype.drawGaugeAreaWithoutTpPatb = 
Window_BattleStatus.prototype.drawGaugeAreaWithoutTp;
Window_BattleStatus.prototype.drawGaugeAreaWithoutTp = function(rect, actor) {
    // Added to reallocate spaces to draw the atb bars
    if ($gameSystem.is_patb() && $gameSystem.patb.show_atb_bars) {
        return this.draw_patb_bar_without_tp(rect, actor);
    }
    //
    this.drawGaugeAreaWithoutTpPatb(rect, actor);
}; // Window_BattleStatus.prototype.drawGaugeAreaWithoutTp

Window_BattleStatus.prototype.patb_basic_area_rect = function(index) { // New
    var rect = this.itemRectForText(index);
    rect.width -= this.gaugeAreaWidth() + $gameSystem.patb.hp_bar_ox;
    return rect;
}; // Window_BattleStatus.prototype.patb_basic_area_rect

Window_BattleStatus.prototype.patb_gauge_area_width = function() {
// New; Hotspot
    var p = $gameSystem.patb, w = p.hp_bar_w + p.mp_bar_ox + p.mp_bar_w;
    if ($dataSystem.optDisplayTp) { w += p.tp_bar_ox + p.tp_bar_w; }
    return w + p.atb_bar_ox + p.atb_bar_w;
}; // Window_BattleStatus.prototype.patb_gauge_area_width

Window_BattleStatus.prototype.draw_patb_basic_area = function(rect, actor) {
// New
    var w = $gameSystem.patb.actor_name_w;
    this.drawActorName(actor, rect.x, rect.y, w);
    var ox = w + $gameSystem.patb.actor_icon_ox;
    this.drawActorIcons(actor, rect.x + ox, rect.y, rect.width - w);
}; // Window_BattleStatus.prototype.draw_patb_basic_area

Window_BattleStatus.prototype.draw_patb_bar_with_tp = function(rect, actor) {
// New
    var patb = $gameSystem.patb;
    this.drawActorHp(actor, rect.x, rect.y, patb.hp_bar_w);
    var ox = patb.hp_bar_w + patb.mp_bar_ox;
    this.drawActorMp(actor, rect.x + ox, rect.y, patb.mp_bar_w);
    ox += patb.mp_bar_w + patb.tp_bar_ox;
    this.drawActorTp(actor, rect.x + ox, rect.y, patb.tp_bar_w);
    ox += patb.tp_bar_w + patb.atb_bar_ox;
    this.draw_actor_patb(actor, rect.x + ox, rect.y, actor.patb_type());
}; // Window_BattleStatus.prototype.draw_patb_bar_with_tp

Window_BattleStatus.prototype.draw_patb_bar_without_tp = function(rect, actor) {
// New
    var patb = $gameSystem.patb;
    this.drawActorHp(actor, rect.x, rect.y, patb.hp_bar_w);
    var ox = patb.hp_bar_w + patb.mp_bar_ox;
    this.drawActorMp(actor, rect.x + ox, rect.y, patb.mp_bar_w);
    ox += patb.mp_bar_w + patb.atb_bar_ox;
    this.draw_actor_patb(actor, rect.x + ox, rect.y, actor.patb_type());
}; // Window_BattleStatus.prototype.draw_patb_bar_without_tp

/*----------------------------------------------------------------------------
 *    Refreshes the atb bars only instead of the whole status window per frame
 *----------------------------------------------------------------------------*/
Window_BattleStatus.prototype.refresh_patb_bars = function() { // New; Hotspot
    var patb = $gameSystem.patb, actor, rect, type;
    var ox = patb.hp_bar_w + patb.mp_bar_ox + patb.mp_bar_w + patb.atb_bar_ox;
    if ($dataSystem.optDisplayTp) { ox += patb.tp_bar_ox + patb.tp_bar_w; }
    for (var index = 0, max = this.maxItems(); index < max; index++) {
        actor = $gameParty.battleMembers()[index];
        if (!actor) { continue; }
        type = actor.patb_type();
        // Refreshes the atb bar only if the atb value changed
        if (!actor.patb_val_change[type]) { continue; }
        rect = this.gaugeAreaRect(index);
        this.draw_actor_patb(actor, rect.x + ox, rect.y, type);
        actor.patb_val_change[type] = false;
        //
    }
}; // Window_BattleStatus.prototype.refresh_patb_bars

/* actor: The actor using the atb bar
 * x: The atb bar x position
 * y: The atb bar y position
 * type: The current atb type
 */
Window_BattleStatus.prototype.draw_actor_patb = function(actor, x, y, type) {
// New; Hotspot
    var w = $gameSystem.patb.atb_bar_w, colors = actor.patb_colors(type);
    var c0 = this.textColor(colors[0]), c1 = this.textColor(colors[1]);
    this.drawGauge(x, y, w, actor.patb_fill_rate(type), c0, c1);
    this.changeTextColor(this.systemColor());
    var text = actor.patb_bar_text();
    this.drawText(text, x, y, this.textWidth(text));
}; // Window_BattleStatus.prototype.draw_actor_patb

/*----------------------------------------------------------------------------
 *    # Edit class: Scene_Battle                                              
 *----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
 *    Abandons the default battle system action input and execution flows     
 *----------------------------------------------------------------------------*/
Scene_Battle.prototype.updateBattleProcessPatb = 
Scene_Battle.prototype.updateBattleProcess;
Scene_Battle.prototype.updateBattleProcess = function() { // Hotspot
    if ($gameSystem.is_patb()) { return this.update_patb_process(); } // Added
    this.updateBattleProcessPatb();
}; // Scene_Battle.prototype.updateBattleProcess

Scene_Battle.prototype.updateStatusWindowPatb = 
Scene_Battle.prototype.updateStatusWindow;
Scene_Battle.prototype.updateStatusWindow = function() { // Hotspot
    // Added
    if ($gameSystem.is_patb() && this.isActive()) {
        this.update_patb_status_window();
    }
    //
    this.updateStatusWindowPatb();
}; // Scene_Battle.prototype.updateStatusWindow

Scene_Battle.prototype.updateWindowPositionsPatb = 
Scene_Battle.prototype.updateWindowPositions;
Scene_Battle.prototype.updateWindowPositions = function() { // v1.00a+; Hotspot
    this.updateWindowPositionsPatb();
    if ($gameSystem.is_patb()) { this.update_patb_window_positions();  }// Added
}; // Scene_Battle.prototype.updateWindowPositions

Scene_Battle.prototype.refreshStatusPatb = Scene_Battle.prototype.refreshStatus;
Scene_Battle.prototype.refreshStatus = function() {
    if ($gameSystem.is_patb()) { this.refresh_patb_windows(); } // Added
    this.refreshStatusPatb();
}; // Scene_Battle.prototype.refreshStatus

Scene_Battle.prototype.commandEscapePatb = Scene_Battle.prototype.commandEscape;
Scene_Battle.prototype.commandEscape = function() { // v1.00a+
    // Added to ensure party escape attempt won't trigger when the battle's busy
    if ($gameSystem.is_patb() && !BattleManager.can_patb_esc()) {
        return this.startPartyCommandSelection();
    }
    //
    this.commandEscapePatb();
}; // Scene_Battle.prototype.commandEscape

Scene_Battle.prototype.startActorCommandSelectionPatb = 
Scene_Battle.prototype.startActorCommandSelection;
Scene_Battle.prototype.startActorCommandSelection = function() { // v1.00b+
    this.startActorCommandSelectionPatb();
    if ($gameSystem.is_patb()) { this._actorCommandWindow.show(); } // Added
}; // Scene_Battle.prototype.startActorCommandSelection

Scene_Battle.prototype.selectNextCommandPatb = 
Scene_Battle.prototype.selectNextCommand;
Scene_Battle.prototype.selectNextCommand = function() { // v1.00a+
    // Added to avoid setting up the party command window upon next command
    if ($gameSystem.is_patb()) { return this.select_next_patb_command(); }
    //
    this.selectNextCommandPatb();
}; // Scene_Battle.prototype.selectNextCommand

/*----------------------------------------------------------------------------
 *    Reconstructs the battle system action input and execution flows for atb 
 *----------------------------------------------------------------------------*/
Scene_Battle.prototype.update_patb_process = function() { // New; Hotspot
    // Loosens the coupling among the core and force plugins
    if (!BattleManager.can_update_patb_process()) {
        return this.update_patb_actor_selection();
    } else if (BattleManager.can_update_patb() && this.can_update_patb()) {
        this.update_patb();
    }
    //
    this.update_patb_actor_selection();
    BattleManager.update_patb_process();
}; // Scene_Battle.prototype.update_patb_process

/*----------------------------------------------------------------------------
 *    Runs the global atb wait conditions                                     
 *----------------------------------------------------------------------------*/
Scene_Battle.prototype.can_update_patb = function() { // New; Hotspot
    var code = $gameSystem.patb.wait_cond_code;
    if (code === "full") { return true; }
    if (BattleManager.phase === 'action') { return false; }
    if (code === "act") { return true; }
    if (this._actorWindow.active || this._enemyWindow.active) { return false; }
    if (code === "target") { return true; }
    if (this._skillWindow.active || this._itemWindow.active) { return false; }
    if (code === "item") { return true; }
    return !this._actorCommandWindow.active && !this._partyCommandWindow.active;
}; // Scene_Battle.prototype.can_update_patb

/*----------------------------------------------------------------------------
 *    Runs the global atb frame update                                        
 *----------------------------------------------------------------------------*/
Scene_Battle.prototype.update_patb = function() { // New; Hotspot
    // Loosens the coupling among the core and event plugins
    BattleManager.update_patb();
    if (BattleManager.need_patb_refresh) {
        BattleManager.need_patb_refresh = false;
        return this.refreshStatus();
    }
    if (!$gameSystem.patb.show_atb_bars) { return; }
    this._statusWindow.refresh_patb_bars();
    //
}; // Scene_Battle.prototype.update_patb

/*----------------------------------------------------------------------------
 *    Setups new inputable actors and deselects selected uninputable ones     
 *----------------------------------------------------------------------------*/
// actor_indices: The indices of all currently inputable actors
Scene_Battle.prototype.update_patb_actor_selection = function() {
// New; Hotspot
    var actor_indices = BattleManager.inputable_patb_actor_indices();
    var index = this._statusWindow.index();
    if (actor_indices.indexOf(index) >= 0) { return; }
    // Deactivates the active input windows that should be no longer active
    if (index >= 0) { return this.close_patb_selection_windows(); }
    if (this._partyCommandWindow.active) {
        if (actor_indices.length <= 0) {
        	this._partyCommandWindow.hide();
        	this._partyCommandWindow.deactivate();
        	this._partyCommandWindow.close();
        }
        return;
    }
    //
    if (actor_indices.length <= 0) { return; }
    BattleManager.actor_index = actor_indices[0];
    this.startActorCommandSelection();
}; // Scene_Battle.prototype.update_patb_actor_selection

/*----------------------------------------------------------------------------
 *    Closes all selection windows for the selected uninputable actor         
 *----------------------------------------------------------------------------*/
Scene_Battle.prototype.close_patb_selection_windows = function() { // New
    var windows = [this._actorWindow, this._enemyWindow, this._skillWindow];
    windows.push(this._itemWindow);
    if (windows.some(function(window) { return window.visible; })) {
        this._statusWindow.open();
        this._statusWindow.show();
    }
    windows.concat([this._actorCommandWindow]).forEach(function(window) {
        if (!window.active) { return; }
        window.hide();
        window.deactivate();
        window.close();
    });
    this._statusWindow.deselect();
}; // Scene_Battle.prototype.close_patb_selection_windows

/*----------------------------------------------------------------------------
 *    Loosens the coupling among core and charge plugins                      
 *----------------------------------------------------------------------------*/
Scene_Battle.prototype.update_patb_window_positions = function() {
// v1.02a+; New
    // Ensure the actor window will completely cover the status window
    if (this._actorWindow.active) {
        this._actorWindow.x = this._statusWindow.x;
    }
    //
}; // Scene_Battle.prototype.update_patb_window_positions

Scene_Battle.prototype.refresh_patb_windows = function() { // New
    var windows = [this._actorWindow, this._enemyWindow, this._skillWindow];
    windows = windows.concat([this._itemWindow, this._actorCommandWindow]);
    windows.forEach(function(w) { if (w.visible) { w.refresh(); } });
}; // Scene_Battle.prototype.refresh_patb_windows

Scene_Battle.prototype.update_patb_status_window = function() {
// v1.00b+; New; Hotspot
    if ($gameMessage.isBusy() || this._messageWindow.isClosing()) { return; }
    if ($gameParty.isAllDead() || $gameTroop.isAllDead()) { return; }
    this.open_patb_selection_windows();
}; // Scene_Battle.prototype.update_patb_status_window

Scene_Battle.prototype.open_patb_selection_windows = function() {
// New; Hotspot
    var windows = [this._actorWindow, this._enemyWindow, this._skillWindow];
    windows.push(this._itemWindow);
    if (windows.concat([this._actorCommandWindow]).some(function(window) {
        return window.active;
    })) { return this._actorCommandWindow.open(); }
    if (this._partyCommandWindow.active) { this._partyCommandWindow.open(); }
}; // Scene_Battle.prototype.open_patb_selection_windows

Scene_Battle.prototype.select_next_patb_command = function() { // v1.00b+; New
    BattleManager.selectNextCommand();
    if (BattleManager.isInputting() && BattleManager.actor()) {
        return this.startActorCommandSelection();
    }
    this.endCommandSelection();
}; // Scene_Battle.prototype.select_next_patb_command

Scene_Battle.prototype.close_patb_windows = function() { // New
    var windows = [this._actorWindow, this._enemyWindow, this._skillWindow];
    windows = windows.concat([this._itemWindow, this._actorCommandWindow]);
    windows.concat([this._partyCommandWindow]).forEach(function(window) {
        window.hide();
        window.deactivate();
        window.close();
    });
}; // Scene_Battle.prototype.close_patb_windows

/*============================================================================*/