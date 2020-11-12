# Default config.yml

```yml
# grief prevention support, blocks releasing and capturing of any mob in claims if set to true.
block-release-and-capture-on-claims: false

# defines whether the player can catch mobs in protected regions or not.
can-catch-mobs-in-protected-regions: false

# defines whether the player can release mobs in protected regions or not.
can-release-mobs-in-protected-regions: false

# defines wether to use the PlotSquared integration or not.
# Set to false if plotsquared gives errors.
use-psq: true
# Can players release/capture on plots?
can-release-and-capture-on-plots: false

# Item with this displayname would turn in a safarinet. Nice to use in Essentials-kit.
pseudo-item:
 enabled: false
 single-use-display: "&cSingleuse"
 reusable-display: "&cReusable"

# Blacklisted mob types that can't be caught
blacklist:
- PLAYER
- ENDERDRAGON

# Debug mode
debug: true


# Logger that logs every capture and release event
disable-logger: false

# Mobs can not be caught in this worlds
disabled-worlds:
- exampleworld
# Blacklisted mobs by display name can not be caught (case insensitive)
blacklist-by-name:
- "dinnerbone"

can-catch-tamed-mobs: true
disable-mythicmobs: true
play_sound_on_capture: true
sound_on_capture:
  sound: SLIME_WALK
  volume: 1.00
  pitch: 1.00
play_sound_on_spawn: true
sound_on_spawn:
  sound: SLIME_WALK
  volume: 1.00
  pitch: 1.00

# Activate this to only allow certain mobs for player. Example permission: safarinet.catch.pig AND safarinet.release.pig
per-mob-permissions: false
use-permission-for-crafting: false
single-use:
  display-name: "&7SafariNet &3(&7Single-Use&3)"
  lore: "Right click on an entity%to catch it!"
  recipe:
    enabled: true
    line1: "aaa"
    line2: "aba"
    line3: "aaa"
    ingredients:
      - "a:STRING"
      - "b:ENDER_PEARL"
reusable:
  display-name: "&7SafariNet &3(&7Reusable&3)"
  lore: "Right click on an entity%to catch it!"
  recipe:
    enabled: true
    line1: "aaa"
    line2: "aba"
    line3: "aaa"
    ingredients:
      - "a:STRING"
      - "b:EYE_OF_ENDER"

# ability to change lore of filled safarinet -> %s is the entity's name, the second %s custon name of the entity
lore_filled_safarinet:
- "&c%s"
- "&a%s"

# catch chances. This sections is designed to set a certain chance, whether to success or fail on catch.
# chance goes from 0.0 to 1.0
# Multiple entity can be added.
# remove the '#' if you want to use this section!
# you also can define a cost for each mob
catch-chances:
  CREEPER:
    chance: 1
    cost: 50
    remove-egg-on-fail: true
    remove-entity-on-fail: true
#  SKELETON:
#    chance: 0.1
#    cost: 0
#    remove-egg-on-fail: true
#    remove-entity-on-fail: false

# messages
messages:
#Configurable messages brought to you by Scorpion(scorpionvssub)
#Messages now support new lines via \n
  config_reloaded: "Config reloaded!"
  no_perms: "&cYou don't have permission to use this!"
  no_perms_cmd: "&cYou don't have permission to use this command!"
  no_perms2: "&cYou don't have permission to use this here!"
  cant_release: "&cYou can't release that!"
  cant_catch: "&cYou can't catch that!"
  safarinet_broken: "&cThis SafariNet is broken."
  cant_catch_zhorse: "&cSorry, but you can't catch ZHorses!"
  cant_catch_mypet: "&cSorry, but you can't catch MyPets!"
  cant_catch_tamed: "&cYou can't catch tamed animals!"
  catch-failed: "&cYou failed to catch {0}!"
  catch-failed-no-money: "&cCatch failed for {0}! You don not have enough money! {1}"
  catch-succeed-took-money: "&eYou have been charged {0} for catching {1}!"
  syntax: "&cSyntax error: /safarinet give (player) (singleuse/reusable) [amount]"
  invalid-eggs: '&cInvalid eggs found. Valid: (singleuse/reusable)'
  needs-to-be-player: "&cYou need to be a player to execute this command!"
  needs-to-hold-safarinet-in-hand: "&cYou need to hold a SafariNet in your hand!"
#{0} = amount {1} = egg type {2} = player name
  egg-given: '&aGiven {0} {1} eggs to {2}'
  reloaded: '&aSuccessfully reloaded the configuration file!'
  no-number: '&cMust be a valid number!'
  not-online: '&cThis player is not online.'
  recipe-syntax: '&c/safarinet recipe (singleuse/reusable)'
  egg-broken: '&cThis egg appears to be broken :('
  blocked-world: '&cThis world does not allow mobs/animals to be captured.'

#This is the help file.
#Its list based e.x:
#Help:
#- '/sn give....'
#- 'To capture an egg right click a mob while holding it.'
Help:
  - '&a/sn reload &c- Reloads the plugin'
  - '&a/sn recipe &c- Shows recipe''s for eggs(if loaded)'
  - '&a/sn inspect &c- Shows information about the SafariNet holding in hand'
  - '&a/sn give (player) (egg) [amount] &c- Give a player an egg'

```

## Notes

- Similar to permissions there are settings to regulate permissions too.

- To allow everyone to craft eggs regardless of permission set: use-permission-for-crafting: true to false.(Default false)

- per-mob-permissions(Default false) regelates wether permission is required to capture that mob. Setting this to true means you need safarinet.catch.sheep to catch a sheep while keeping/setting it false means those with permission to capture/release(here) to do so regardless of the mob in question.

- To disable a world from egg usages simply add your worlds name to disabled-worlds:

your world.

- Same goes for mobs and names of mobs under “blacklist” and “blacklist-by-name” respectivly.

- We’ve spend extra time making sure every message important to the user is configurable.

- This saves us making language files while giving you the option to translate them to your own language.
