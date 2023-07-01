# Usage

In BCRanks, everything is organized in Tiers which show up based on the player permissions.

## Tiers

Tiers can be configured in the `Tiers.yml` file. Each tier can have multiple ranks in it. 
Ranks contain all the requirements needed to claim a rank.

All Tiers in the Tier GUI (`/bcr open tiers`) are shown by a simple permission `bcranks.tiers.<tier>`, i.e. `bcranks.tiers.Tier1`.
Clicking on the Tier item shows all the ranks which show all the requirements.

### Creating Tiers

This section covers the `Tier.yml` section by section. 
`Tier.yml` has a detailed comment explanation in it but may not be enough so lets go!
For this example I'll be using the tier name: *Tier1* and the rank *Bearcub*.

Placeholders to keep in mind:

* $hasPermission = Checks/confirms the permission given
* $hasRank = Confirms tier + rank on the player.

requirement placeholders:
* none = no requirements
* rank = tier+rank to match and required
* permission = Permission the player needs to have.


```yml
Settings:
    Tiers:
        Tier1:
        #The tier name
        Icon: NAME_TAG
        Display-Name: '&2Tier 1'
        Display-Slot: 10
        #The "icon" to display in the gui with a custom name and a slot the icon goes in.
        Ranks:
        #Here we start the ranks section.
            BearCub:
            #The name of the rank.
            Rank-Requirements: permission;bcranks.custom.perm;$hasPermission;&2You have our custom permission;&4You may not own this!
            #Rank-Requirements allows you to create a permission section, a tier requirement or nothing.
            #If a permission is used you'll have to specify a permission then $hasPermission can be used to verify the permission to the player. Followed by a confirmation and unowned message.
            #The other 2 options are:
            #"none" | "none";Check below for more inhouse requirements. 
            #"rank" | "rank;Tier1;FirstRank;$hasRank;You have the rank FirstRank;You do not own the rank FirstRank yet!"
                
            #Note: 'rank' and 'permission' can be used later in line too!
                
            Eco-type: 'none'
            Eco-amount: 0
            # This lets you specify the type of economy this rank has.
            # Valid options: none, money, gems, points. (More to come)
            # When set to none, nothing is taken from the player.
            # When set to money, gems or points, the amount under (Eco-amount) will be the amount the player will be losing upon obtaining.
            # For money, you need vault and another activation plugin(i.e cmi/essentials etc)
            # For gems, you need to buy BCGems
            # For points you need the free plugin "playerpoints"
                
            Icon: FEATHER
            Display-Name: '&3BearCub'
            #The icon and display name for this rank.
                
            Requirements:
            - '' #Acts as a space
            - '&2If you complete this list you will get:'
            - '&4Free money!' #These will show without requirement!
            - 'player;food;4;You have more than %s food!;&4Food level required: %s. You only have: %current%' #Will return as requirement!
            Commands:
            - 'eco give %name% 10' #The money as promised!
```

Requirements as shown above shown with the sections name(lowercase) i.e: mcmmo, placeholderapi, mmocore etc followed by settings.
This way you can make every gui even rank as unique as possible.

Tier.yml have 3 variables(unlike settings which has 2).
- %name% = the players name
- %tier% = The tiers name
- %rank% = The rank for the player

Placeholders:

| bcranks.highest_tier | bcranks.highest_tier_rank | bcranks.lowest_tier_rank | bcranks.lowest_tier |
| -------- | -------- | -------- | -------- |
| Players highest owned tier | Players highest owned tier rank | Players lowest owned tier rank | players lowest owned tier |


## Requirements

The following plugins/sections are supported:

* [placeholderapi](./usage.md#placeholderapi)
* [mcmmo](./usage.md#mcmmo)
* [bcgems](./usage.md#gems)
* [jobs reborn](./usage.md#jobs-reborn)
* [quests](./usage.md#quests)
* [votifier](./usage.md#vote)
* [nuvotifier](./usage.md#vote)
* [mmocore](./usage.md#mmocore)
* [playerpoints](./usage.md#points)
* [skillapi](./usage#skillapi)
* [vault](./usage.md#vault)
* [mcrpg](./usage.md#mcrpg)
* [player](./usage.md#player)
* [playerstatistics](./usage.md#player-statistics)
* [advancements](./usage.md#advancements)
* [towny](./usage.md#towny)

The format for requirements differ from plugin to plugin, but essentially its just a list of arguments.
For example for mcmmo:

```yml
Requirements:
- 'mcmmo;woodcutting;30;Reached %s Woodcutting;Reach %s woodcutting. Now: %current%'
- 'mcmmo;mining;30;Reached %s Mining;Reach %s mining. Now: %current%'
```

### Advancements

These are minecraft vanilla advancements/adchievements.
While custom should be supported this is not guaranteed.

Link: https://minecraft.gamepedia.com/Advancements

As per advancement gamepedia guidelines, each advancement has a folder;section;advacement name.
These by mc standards are called "internal ID"
i.e: 	minecraft:husbandry/tame_an_animal

We need the entire section, the folder(usually a plugin this case minecraft), the section(aka parent) and the name of the advancement we need.

In simple terms:

"folder;section/advancement"

"minecraft;husbandry/tame_an_animal"

Following the above example the setup is rather easy if you find the advancements you want to use.

```
Setup(BCRanksFree):

 advancements:
  - minecraft;husbandry/breed_an_animal:&7[&a✔&7] Achievement Unlocked; animal Breeder.:&7[&4✘&7] Breed an animal
  - minecraft;adventure/ol_betsy&7[&a✔&7] Achievement Unlocked; Fired a Crossbow.:&7[&4✘&7] Fire a crossbow!
```

```
Setup(AdvancedBCRanks):
- advancements;minecraft:husbandry/breed_an_animal;Achievement unlocked: Animal Breeder;Breed an animal
```

Please make sure the name is correct as per the gamepedia link, else something might not work right.

# Player Statistics

Player Statistics are a default included feature and must be activated in the config.yml

Since the list of statistics found [here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Statistic.html) is pretty extensive, below is a list of examples and usages.
A minecraft info on each statistic can be found [here](https://minecraft.gamepedia.com/Statistics)
Please note: you can modify any statistic to your liking.

**Note: Every update statistic names may change, please use the statistic list above to verify the name is correct for your version**

| Statistic                                                  | Value Type           | Examples/info                                                                                                                        |
|----------------------------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------|
| armor_cleaned                                             | integer | playerstatistics;armor_cleaned;100;Cleaned %s stands!;Clean %s armor stands! Now: %current%'                                                                   |
| banner_cleaned                                             | integer |                                                             |
| clean_shulker_box                                            | integer |                                                                |
| boat_one_cm                                             | integer |  Centimeter calculations(1=1cm) 1 block in mc = 1000cm                                                              |
| aviate_one_cm                                           | integer | playerstatistics;aviate_one_cm;100;Flew %s cm with an elytra!;Fly %s cm with an elytra! Now: %current%'                                                                 |
| horse_one_cm                                            | integer |                                                                 |
| climb_one_cm                                            | integer |                                                                 |
| crouch_one_cm                                            | integer |                                                                 |
| fall_one_cm                                            | integer | playerstatistics;fall_one_cm;100;Fell %s cm from a mountain!;Fall %s cm from a moutain.! Now: %current%'                                                                 |
| horse_one_cm                                           | integer                       |
| pig_one_cm                                            | integer |                                                                 |
| sprint_one_cm                                            | integer |                                                                 |
| walk_one_cm                                            | integer |                                                                 |
| walk_under_water_one_cm                                            | integer |                                                                 |
| fly_one_cm                                            | integer |                                                                 |
| minecart_one_cm                                            | integer |                                                              |
| beacon_interaction                                            | integer |                                                               |
| crafting_table_interaction                                            | integer | playerstatistics;crafting_table_interaction;Used a crafting table %s times!:Interact with a crafting table %s times! Now; %current%'                                                                |
| brewingstand_interaction                                            | integer |                                                                 |
| interact_with_blast_furnace                                            | integer |                                                                 |
| interact_with_campfire                                            | integer |                                                                 |
| interact_with_cartography_table                                            | integer |                                                                 |
| ineteract_with_lectern                                            | integer |                                                                 |
| interact_with_loom                                            | integer |                                                                 |
| furnace_interaction                                            | integer |                                                                 |
| hopper_interaction                                            | integer |                                                                 |
| cauldron_filled                                            | integer | This one counts up upon filling it with lava/water                                                                |
| cauldron_used                                            | integer |                                                                 |
| interact_with_smoker                                            | integer |                                                                 |
| interact_with_stonecutter                                            | integer |                                                                 |
| bell_ring                                            | integer | playerstatistics;bell_ring;Used a belle %s times!:Interact with a bell %s times! Now; %current%'                                                               |
| chest_opened                                            | integer |                                                                 |
| enderchest_opened                                            | integer |                                                                 |
| shulker_box_opened                                            | integer |                                                                 |
| open_barrel                                            | integer |                                                                 |
| dispenser_inspected                                            | integer |          |
| hopper_inspected                                            | integer | playerstatistics;dropper_inspected;Inspected a hopper %s times!:Inspected a hopper %s times! Now; %current%'                                                            |
| dropper_inspected                                            | integer |                                                              |
| damage_dealt                                            | integer |                                                               |
| deaths                                            | integer |       'playerstatistics;deaths;100;Died %s times!;Die %s times. Now: %current%'                                                          |
| damage_dealt_resisted                                            | integer |                                                            |
| damage_blocked_by_shield                                            | integer |                                                          |
| damage_dealt_absorbed                                            | integer |                                                          |
| damage_taken                                            | integer |                                                          |
| player_kills                                            | integer |                                                          |
| leave_game                                            | integer |                                                          |
| fish_caught                                            | integer |                                                       |
| time_since_death                                            | seconds |                                                        |
| play_one_minute                                            | seconds | 'playerstatistics;86400;Spend %s on the server;Spend %s time total on the server. Now: %current%                                                         |
| time_since_rest                                            | seconds |                                                        |
| talked_to_villager                                            | integer |  'playerstatistics;talked_to_villager;100;Annoyed a villager % times!;Annoy a villager %s. Now: %current%'                                               |
| mob_kills                                            | integer | 'playerstatistics;mob_kills;100;Killed %s Monsters;Kill %s Monsters. Now: %current%'                                                         |
| traded_with_villager                                            | integer |                                                          |
| sleep_in_bed                                            | integer | 'playerstatistics;sleep_in_bed;100;Slept in a bed % times!;Sleep %s times in a bed. Now: %current%'                                                         |
| noteblock_played                                            | integer |                                                          |
| noteblock_tuned                                            | integer |                                                          |
| raid_trigger                                            | integer |                                                          |
| trapped_chest_triggered                                            | integer |                                                          |
| drop_count                                            | integer |                                                          |
| fish_caught                                            | integer |                                                          |
| raid_win                                            | integer |                                                          |
| flower_potted                                            | integer |                                                          |
| cake_slices_eaten                                            | integer |                                                          |
| jump                                            | integer |                                                          |
| enchant_item                                            | integer |                                                          |
| play_record                                            | integer |                                                          |

**Listed below are statistics that can be used more than once for multiple objects, requiring more inputs.**

| Statistic                                                  | Value           | Key Type | Example                                                                                                                         |
|----------------------------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| break_item     | integer    | block      | 'playerstatistics;break_item;200;grass_block;Broken %s Grass Blocks;Break %s Grass Blocks. Now: %curren%' |
| kill_entity     | integer     | entity      | 'playerstatistics;kill_entity;200;zombie;Killed %s Zombies;Kill %s Zombies. Now: %curren%' |
| mine_block     | integer     | block      | 'playerstatistics;mine_block;200;stone;Mined %s stone blocks;Mine %s stone blocks. Now: %curren%' |
| use_item     | integer    | item      | 'playerstatistics;use_item;200;shears;Used shears %s times;Use Shears %s times. Now: %curren%' |
| picked_up     | integer     | item     | 'playerstatistics;picked_up;200;obsidian;Picked up %s Obsidian;Pick up %s Obsidian. Now: %curren%' |
| dropped     | integer     | item     | 'playerstatistics;dropped;200;obsidian;Dropped %s Obsidian;Drop %s Obsidian. Now: %curren%' |
| entity_killed_by     | integer    | entity     | 'playerstatistics;kill_entity;200;zombie;Got killed %s by a Zombies;Get beaten %s by a Zombies. Now: %curren%' |

### Player

Tracked options:
- food(returns food level) (returns a number) *foodlevel in bcrranksfree*
- exp (Returns exp) (returns a number) *explevel in bcranksfree*
- world (Returns the worlds name) (returns a string) *Only in advanced*
- health (Returns health) (returns a number) *healthlevel in bcranksfree*
- level (Returns level)
- hunger (Returns hunger level) (returns a float, i.e: 10.0) *hungerlevel in bcranksfree*
- time (Returns time of day) (Returns a long) *Only in advanced*
- weather (returns weather type) (Returns a string) *Only in advanced*
- walk (returns walking speed) (Returns a float)*Only in advanced*

First example will refer to BCRanksFree.

```
Requirements:
- 'player;hunger;10;You have %s hunger!;You need %s hunger. Currently: %current%'
```

### PlaceholderAPI

Using the PlaceholderAPI, stats can be used from other plugins without directly integrating into them.

A full list of all currently ecloud supported(listed) plugins can be found [here](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders)

For example, *XLTournaments* has the following placeholders:

```yml
%xlt_{tournamentId}_top1name%
%xlt_{tournamentId}_top2name%
%xlt_{tournamentId}_top3name%
%xlt_{tournamentId}_top1score%
%xlt_{tournamentId}_top2score%
%xlt_{tournamentId}_top3score%
%xlt_{tournamentId}_score%
%xlt_{tournamentId}_position%
%xlt_{tournamentId}_type%
```

To make placeholderapi use these placeholders and bcranks to read them, the following command must be used prior: `/papi ecloud download XLTournaments`

After that you can use it!

The following shows 2 setups you can use to make it work:

First is an integer(x>=y) i.e: x = 5 y = 10, results in 5>=10

```yml
Requirements:
    - 'placeholderapi;integer;%xlt_{tournamentId}_score%;40;Obtained %s Tournament Points;Gain %s Tournament Points. Current: %current%'
```

In the above example the player must have a minimum of 40 tournament points to meet the requirement.
When comparing numbers bcranks must know wether or not its a string, or integer, for this all integer methods require to start with 'integer'

To compare a string(name1 equals name2) the same formula must be used except integer should not be included. Example:

```yml
Requirements:
    - 'placeholderapi;%statistic_mine_block:grass_block%;40;You dug out %s Grass Blocks;Dig out %s Blocks. Current: %current%'
```

The above example requires the player to have exactly 40 grass blocks mined, no more, no less. Adviced is to only use the string for name sake, but otherwise use 'integer' to compare numbers.

Again, there are MANY requirements available, too many to list them all.

Some plugin, may use placeholders but not use the ecloud version, or use mvmplaceholder which placeholderapi also supports.
The good part about using placeholders in this manner is you can pretty much create your own list of how its displayed which other hooks currently do not.

### McMMO

| Skill | Value | Example |
| -------- | -------- | -------- |
| Acrobatics     | Integer     | 'mcmmo;acrobatics;50;Reached Acrobatics level %s.;Reach Acrobatics level %s. Current: %current%'     |
| alchemy     | Integer     |  'mcmmo;alchemy;50;Reached alchemy level %s.;Reach alchemy level %s. Current: %current%'   |
| archery     | Integer     |  'mcmmo;archery;50;Reached archery level %s.;Reach archery level %s. Current: %current%'   |
| axes     | Integer     |  'mcmmo;axes;50;Reached axes level %s.;Reach axes level %s. Current: %current%'   |
| excavation     | Integer     |  'mcmmo;excavation;50;Reached excavation level %s.;Reach excavation level %s. Current: %current%'   |
| fishing     | Integer     |  'mcmmo;fishing;50;Reached fishing level %s.;Reach fishing level %s. Current: %current%'   |
| herbalism     | Integer     |   'mcmmo;herbalism;50;Reached herbalism level %s.;Reach herbalism level %s. Current: %current%'  |
| mining     | Integer     |  'mcmmo;mining;50;Reached mining level %s.;Reach mining level %s. Current: %current%'   |
| repair     | Integer     |  'mcmmo;repair;50;Reached repair level %s.;Reach repair level %s. Current: %current%'   |
| swords     | Integer     |  'mcmmo;swords;50;Reached swords level %s.;Reach swords level %s. Current: %current%'   |
| taming     | Integer     |  'mcmmo;taming;50;Reached taming level %s.;Reach taming level %s. Current: %current%'   |
| unarmed     | Integer     |  'mcmmo;unarmed;50;Reached unarmed level %s.;Reach unarmed level %s. Current: %current%'   |
| woodcutting     | Integer     |  'mcmmo;woodcutting;50;Reached woodcutting level %s.;Reach woodcutting level %s. Current: %current%'   |


**Please note: The list only contains "primary" skills, not sub/secondairy skill types, or activation skill types(such as blast mining)
The plugin only supports primary skills listed above.**

### Jobs Reborn

| Skill | Value | Example |
| -------- | -------- | -------- |
|      | integer     | 'jobs;30;Reached power level %s;Reach power level: %s. Current %current%'     |


### Gems

[Gems](https://www.mc-market.org/resources/11506/) work as follows:

Players doing certain things, in whatever matter it was setup, will gain a gem, to spend there.
This plugin can look into the amount of gems a player owns.

To setup the amount a player requires simply do the following:

```
Bearcub:
  Requirements:
   - 'gems;30;Reached %s gems.;Reach %s gems. Current: %current%'
```

This lets the plugin know a player must have a minimum of 300 gems before they can get the rank.
If done correctly you can see the requirement in the ranks lore.

Done!

### McRPG

McRPG is a pretty big rpg style plugin, similar to the likes of McMMO and MmoCore.

With a vast amount of both similar and unique skills its a nice option for your server.
That said, it wouldn't be right for an rpg styled ranks plugin to not support it.

The following options are supported:

```yml
Requirements:
- 'points:20:Obtained %s points!:Required; %s points. Current; %current%'
- 'bleedimmuun:You are immuun to bleeding!:Required; bleed immunity.'
- 'remote:You are able to use remote linking!:Required; remote linking.'
- 'smite:You are able to use smite!:Required; Smite ability.'
- 'power:200:Obtained %s power!:Required; %s power. Current; %current%'
- 'berserk:20:Activate berserk ability %s times!:Required; %s berserk activations. Current; %current%'
- 'blastmine:20:Activate blast mining ability %s times!:Required; %s blast mining activations. Current; %current%'
- 'blasttest:20:Activate blast testing ability %s times!:Required; %s blast test activations. Current; %current%'
- 'bleed:20:Activate bleed ability %s times!:Required; %s bleed activations. Current; %current%'
- 'bleedplus:20:Activate Bleed+ ability %s times!:Required; %s Bleed+ activations. Current; %current%'
- 'deepwound:20:Activate deepwound ability %s times!:Required; %s deepwound activations. Current; %current%'
- 'denseimpact:20:Activate denseimpact ability %s times!:Required; %s denseimpact activations. Current; %current%'
- 'diamondflower:20:Activate diamond flower ability %s times!:Required; %s diamond flower activations. Current; %current%'
- 'disarm:20:Activate disarm ability %s times!:Required; %s disarm activations. Current; %current%'
- 'doubledrop:20:Activate double drop ability %s times!:Required; %s double drop activations. Current; %current%'
- 'ironarm:20:Activate iron arm ability %s times!:Required; %s iron arm activations. Current; %current%'
- 'triple:20:Activate triple ability %s times!:Required; %s triple activations. Current; %current%'
- 'massharvest:20:Activate mass harvest ability %s times!:Required; %s mass harvest activations. Current; %current%'
- 'naturewrath:20:Activate natures wrath ability %s times!:Required; %s natures wrath activations. Current; %current%'
- 'orescan:20:Activate ore scan ability %s times!:Required; %s ore scan activations. Current; %current%'
- 'panblessing:20:Activate pan blessings ability %s times!:Required; %s pans blessing activations. Current; %current%'
- 'replant:20:Activate replant ability %s times!:Required; %s replant activations. Current; %current%'
- 'richores:20:Activate richores ability %s times!:Required; %s richores activations. Current; %current%'
- 'sepstrike:20:Activate sep strike ability %s times!:Required; %s sep strike activations. Current; %current%'
- 'superbreaker:20:Activate super breaker ability %s times!:Required; %s super breaker activations. Current; %current%'
- 'taintedblade:20:Activate tainted blade ability %s times!:Required; %s tained blade activations. Current; %current%'
- 'tightgrip:20:Activate tightgrip ability %s times!:Required; %s tightgrip activations. Current; %current%'
- 'toomanyplants:20:Activate manyplants ability %s times!:Required; %s manyplants activations. Current; %current%'
- 'vampire:20:Activate vampire ability %s times!:Required; %s vampire activations. Current; %current%'
```

The list above is ALL stats/settings supported.
Please note that api's can change and some may not work for all versions in the future.
For instance: RageSpikeDamage is not included yet due to the planned changes to its name and uncertainty of when this may happen, if not already has, it will be supported when its more secure.

### MmoCore


MMOCore is an rpg type plugin perfect for bcranks with rpg style permissions.
Its well worth for any RPG server.

Currently not many statistics are tracked by bcranks but if you want 1, just ask and ill add it :)

Currently tracked:
- friends
- level
- experience
- mana
- classpoints

```yml
Requirements:
- 'mmocore;mana;20;&7[&a✔&7] Have %s Mana!;&7[&4✘&7] Obtain %s mana &4Now: %current%'
- 'mmocore;level;20;&7[&a✔&7] Aquired level %s!;&7[&4✘&7] Aquire level %s &4Now: %current%'
- 'mmocore;classpoints;100;&7[&a✔&7] Aquired %s Class Points!;&7[&4✘&7] Aquire %s Class Points &4Now: %current%'
- 'mmocore;exp:2000:&7[&a✔&7] Aquired %s Experience!:&7[&4✘&7] Aquire %s Experience &4Now: %current%'
- 'mmocore;friends;2;&7[&a✔&7] Aquired %s Friends! yay!;&7[&4✘&7] Aquire %s Friends &4Now: %current%'
```

As of BCRanks Version: 1.3.4-MMOCore-v2 you can now include skills related to your MMOCore configurations.

```yml

Requirements:
- mmocoreskills;mmocoreskills;woodcutting;30;has;Has Not
- mmocoreskills;mining;20;has;has not
- mmocoreskills;smithing;10;has; has not
```

I do not own MMOCore, i did not make it either.
Any bugs with mmocore can be issued [here](https://github.com/Indyuce/mmocore/issues)

Issues setting up bcranks + mmocore can be issued on this wiki.
Thanks

### Points

```yml
Requirements:
- 'points;<points>;You own %s points;Own %s points. Current: %current%'
```
  
[Requires this plugin](https://dev.bukkit.org/projects/playerpoints)

### Quests

Quests itself is a very big plugin to setup, which...is not what i will teach you here.

To setup Quests itself, follow this link: https://github.com/PikaMug/Quests/wiki

To setup the quests checks for a rank however, you came to the right place.

Currently there are 2 stats tracked:

- Quest points
- Quests completed

Setup:
```yml
quests:
- qpoints:10
- qcompleted:100
```

This means a player must complete 100 quests, have a minimum of 10 quest points.

### Towny

[Towny](https://github.com/TownyAdvanced/Towny/wiki) is a plot/nation/war and minor world management plugin, a gamemode of its own type.
Nations, Towns you name it are huge part of what makes towny...towny.

[AdvancedBCRanks](https://www.spigotmc.org/resources/advancedbcranks-great-for-rpg-servers.70132/) now officially supports towny outside of placeholderapi requests.
*Please note: not all actions are supported and may need placeholderapi to work well).

Current options:

- nation (Returns wether or not they have a nation) *%current% not supported
- town (Returns wether or not they have a town) *%current% not supported
- town-world (Returns wether or not they are in a towny supported world) *Current returns current world the player is in.
- nation-rank (Matches given nation rank with current) *Current returns the first/highest found rank.
- rank (Matches given rank with current) *Current returns first/highest found rank.


Examples:

**nation**
- 'towny;nation;You own a nation!;You do not own a nation'

**town**
- 'towny;town;You own a town!;You do not own a town'

**town-world**
- 'towny;town-world;You are in the correct world!;Current world: %current%. Required: %s'

**nation-rank**
- 'towny;nation-rank;tester;You have a nice rank!;Required Rank: %s. Current: %current%'

**rank**
- 'towny;rank;king;You are the king!;Required rank: %s. Current: %current%'

### Vault

Vault is a plugin that requires additional plugins to work properly, a permissions plugin and an economy plugin(such as essentials or iconomy).

Setup:

```yml
Requirements:
- 'vault;2000;&7[&a✔&7] Have %s cash;&7[&4✘&7] Have %s Cash. &4Now: %current%'
```
    
    
**vault** is the name of the plugin used here.
**2000** is the money the player must use.
**&7[&a✔&7] Have %s cash** = The player had the money thus the requirement
**&7[&4✘&7] Have %s Cash. &4Now: %current%** The player still needs a bit more.

### Votes

This section only works using [AdvancedBCRanks](https://www.spigotmc.org/resources/advancedbcranks-great-for-rpg-servers-mmocore-support-and-more.70132/)

Votes requires either: Votifier OR NuVotifier.

To setup the votes section simply use:

```yml
Requirements:
- 'votes;7;You have voted %s times;You must vote %s times. Currently voted %current% times.'
```
    
BreakDown:
- plugin name;
- amount of votes;
- has voted enough;
- needs to vote more

### SkillAPI

SkillAPI is an api mainly used by rpg type plugins.

It support/can support many plugins leaving room for plugins like bcranks to act as a middle man for those plugins.

Currently supported:

- Skill
- Mana
- Attribute
- Class

```yml
Requirements:
- 'skill:Woodcutting:30:&7[&a✔&7] Have woodcutting level %s:&7[&4✘&7] Have woodcutting level %s &4Now %current%'
- 'mana:30:&7[&a✔&7] Have %s Mana:&7[&4✘&7]You need %s mana. Currently: %current%'
- 'class:Elf:&7[&a✔&7] You joined the right class %s:&7[&4✘&7] Be with the class %s'
- ^ setup for attribute follows class setting, tho no idea what it does.
```

And that is.

Please note, if you want more out of skillapi let me know what.

## Timed Ranks

Timed ranks are optional(as per configuration)

You can enable this by simply changing   use-timed-ranks: false to true in config.yml.

These ranks do not work with all features available in the Settings.yml.
These are purely based on time.

```yml
  MyTimedRankMore: #Rank Name
    timeInSeconds: 5000000 #Time in seconds
    last-rank: true #Does nothing at this moment
    custom-permission: mytimedrankMore.custom.permission #Permission needed to obtain it
    no-buy-permission: mytimedrankMore.nobuy.permission #Permission to skip it
    display-Name: '&8MyTimedRankMore' #Colored version of the rank name
    icon: yellow_wool #Icon for gui displays
    icon-no-perm: red_wool #Icon for not being allowed to see it
    slot: 12 #Slot to appear in
    lore: #Lore to show on the item
      - '&3Time required:&2 {1}'
      - '&3Your time:&4 {0}'
      - '&3Rank Name: {2}'
      - '&3Available: {3}'
      
```

With the use of MessageFormat numerical data is used to display placeholders.
0 = the players time online(total as per vanilla)
1 = The time for the rank to be obtainable.
2 = The ranks name
3 = Wether they (by time standards) are allowed to own it.(This does not include outside plugin sources hooking in)
