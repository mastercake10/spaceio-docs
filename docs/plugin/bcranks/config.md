# Default config.yml

```yml
# #######################
# 
# Developer: Scorpion|Neo
# Wiki: https://git.spaceio.xyz/Scorpion/BCRanks/wiki/BCRanks
# Part of Spaceio
# Discord: https://discordapp.com/invite/rH6HRGw
# 
# #######################
Settings:
  # true: Enables timed rank system.
  # Requires server restart.
  # Default: false
  use-timed-ranks: false

  # Inventory size Timed ranks.
  # Default 27
  timed-size: 3

  # Amount in seconds for each timed rank check.
  # Default: 300(5 minutes)
  time-check-in-seconds: 300

  # The name for Timed Ranks Gui
  timed-gui-name: Timed Gui

  # Enable the most powerfull Gui System BCR has to offer
  use-Tiers: true

  # Title for the tier gui
  tier-Title: '&3Tier Gui'

  # Size of the tier gui(1=9 slots 6 = double chest)
  tier-size: 3

  # Title for the Tiered Ranks Gui
  rank-title: '&3BCRanks Gui'

  # Size of the rank gui in rows(1=9 slots 6 = double chest)
  rank-size: 3

  # true: hides all tasks completed.
  # false: keeps everything intact.
  # Default: true
  hide-completed: false

  # Hide completed tasks.
  # Default: false
  hide-complete-single: false

  # Hide Ranks players cannot access yet.
  # Does not hide ranks players already own!
  # Doesnt work with Tiers
  # Default: false
  hide-no-buy: false

  # Format used to display time
  # Days
  time-days: 'Days '

  # Hours
  time-hours: 'Hours '

  # Minutes
  time-minutes: 'm '

  # Seconds
  time-seconds: s

  # Should we enable player Statistics?
  playerstatistics: true

  # Should we enable player Options? i.e: food hunger etc
  player: true

  # Should advancements be enabled?
  useAdvancements: true

  # Enable this if using votifier.
  # Note: You will require console to run
  # Command: /bcr add vote (voter)
  voting: false

  # How long must a person have in playtime(using seconds) before they can refer their inviter
  referenceTime: 36000

  # The Connect Gui is used when both custom & timed ranks are enabled.
  connect-gui-name: Connect Gui

  # Should we check and announce updates to those with permission?
  update-notify: true

  # Should we check for new updates on join?
  update-on-join: false

  # Check for updates.
  # Set to false if an error pops up or told to
  check-updates: true

  # Should we enable debug mode?
  # This is mainly used for testing and debugging.
  # Note: Debug mode isn't always set to the console and can also message the player when enabled.
  debug-mode: false

# What alias should the main command(/bcr) have?
Alias command:

- rank
```

# Default Tiers.yml

```yml
#Welcome to the tier system of BCRanks.
#A lot of time went into creating this and is available as of v2.0.0
#Below are 2 ranks explained.

#For questions on how to set it up, please refer to the wiki and the guide below before asking :)

#First: Include Settings: and Tiers:  this will mark the starting point of your tier list.
Settings:
  Tiers:

# Now think of a name for your tier group, i.e: Tier1
    #The name will also act as the permission(i.e: bcranks.tiers.Tier1)
    Tier1:

# Add a material name(capital) as a display item.
      Icon: NAME_TAG

# Now include a Display-Name: (can be anything)
# and specify a slot in which the item should be displayed.
# You can also change the lore!
      Display-Name: '&4Tier 1'
      Display-Slot: 10
      Lore:
        - '&9==========='
        - '&3Ranks: %ranks%'
        - '&9==========='

#

# After you done this we can start creating the rank.
# All messages are color supported!

      Ranks:
        #Name of the first rank in Tier1
        FirstTierRank:
          Rank-Requirements: permission;bcranks.custom.perm;$hasPermission;&2You have
            permission via placeholder!;&4You are not allowed to own this
          #The requirements for this rank.
          #The following options are currently available:
          # permission(requires a custom permission)
          # none(Can be obtained if all other requirements are met)
          # rank(Requires a <tier>;<rank> to be owned by the player.

          # Full explanation can be found on the wiki on all of this.
          #In short:
          # Permission:
          # Permission requires a permission;<permission> to work, the word permission to specify this is a permission rank and the <permission>
          # match the given permission with the player
          # Setup example:
          # permission;bcranks.rankperm.tier1rank;$hasPermission;&2You need permission &7bcranks.rankperm.tier1rank to unlock this;Good luck

          # Rank:
          # Ranks requires a tier input and a rank input.
          # The player must own the rank located in the given tier in order to obtain the rank.(if all other requirements are met ofcourse)
          # Setup example:
          # rank;Tier1;AnEarlierTierRank;&3You require a rank called AnEarlierTierRank;Tier location: Tier1
          #
          # In the above example, a player would need to own "AnEarlierTierRank" located under Tier1 in order to get the rank that requirement is set to.

          # None:
          # none means there are no specific requirements other than any in the Requirements section(more on this later)
          # they only need to obtain the given statistics input by the server owner.(unlike permission and rank)
          Hide-No-Rank-Requirement: true
          Hide-No-Rank-Icon: 'BARRIER'
          Hide-No-Rank-Message: '&4Complete previous sections to unlock!'
          # Hide no rank requirement.
          # When true will hide the requirements for this rank till they have the requirement met.
          # This only counts for Rank-Requirements.
          # If its set to none it will not take place.

          #Icon to display in the gui
          Icon: FEATHER
          Display-Name: '&4First Tier Rank'
          Slot: -1

          Use-Prefix: true
          Chat-Prefix: '&3First' #Requires Placeholderapi(bcranks.prefix)

          Eco-type: 'none'
          Eco-amount: 0
          # This lets you specify the type of economy this rank has.
          # Valid options: none, money, gems, points. (More to come)
          # When set to none, nothing is taken from the player.
          # When set to money, gems or points, the amount under (Eco-amount) will be the amount the player will be losing upon obtaining.
          # For money, you need vault and another activation plugin(i.e cmi/essentials etc)
          # For gems, you need to buy BCGems
          # For points you need the free plugin "playerpoints"
          # You could essentially albeit not the main objective of the plugin, create an item store.

          # Here you can create the essential "lore" or display the requiremens.
          # Incorrectly filled in  sections(i.e: mmco instead of mcmmo) will return normally.
          # Use ; instead of : for seperations.

          # Again, more info can be found on the wiki.

          #Example setup:
          # - 'mcmmo;woodcutting;5;you have level 5 woodcutting;You need level %s woodcutting, currently: %current%'
          Requirements:
            - '&2You can also use this section for regular display sections'
            - '&7Such as a lore message/reward lore?'
            - ''
            - 'player;food;4;&7[&a✔&7] Food level %s reached;&7[&4✘&7] Reach food level
            %s. Current: %current%'
            - 'mcmmo;woodcutting;5;&7[&a✔&7] Woodcutting level %s reached;&7[&4✘&7]
            Reach Woodcutting %s. Current: %current%'
            - 'mcmmo;mining;2;&7[&a✔&7] Mining level %s reached;&7[&4✘&7] Reach Mining
            level %s. Current: %current%'
            - 'advancement;minecraft:story/mine_stone;&7[&a✔&7] Advancement unlocked!.;&7[&4✘&7]
              Obtain some cobblestone.'

          # Commands
          # commands are fired when a rank its assigned to is picked and approved(player can obtain it)
          # Every command can be fired aslong as the console can use it.
          # There are a few variables:
          # [player] to fire it as a player
          # %name% = player name
          # %tier% = The tier the player obtained the rank in
          # %rank% = The rank the player obtained
          Commands:
            - ''
    Tier2:
      Icon: NAME_TAG
      Display-Name: '&4Tier 2'
      Display-Slot: 11
      Lore:
        - '&9==========='
        - '&3Ranks: %ranks%'
        - '&9==========='
      Ranks:
        SecondTierFirstRank:
          Rank-Requirements: rank;Tier1;FirstTierRank;$hasRank;&2You have the first tiers rank!;&4You are not allowed to own this
          Hide-No-Rank-Requirement: true
          Hide-No-Rank-Icon: 'BARRIER'
          Hide-No-Rank-Message: '&4Complete previous sections to unlock!'
          Icon: FEATHER
          Display-Name: '&4First Tier Rank'
          Slot: -1

          Use-Prefix: true
          Chat-Prefix: '&3First' #Requires Placeholderapi(bcranks.prefix)

          Eco-type: 'none'
          Eco-amount: 0
          Requirements:
            - '&2You can also use this section for regular display sections'
            - '&7Such as a lore message/reward lore?'
            - ''
            - 'player;food;4;&7[&a✔&7] Food level %s reached;&7[&4✘&7] Reach food level
            %s. Current: %current%'
            - 'mcmmo;woodcutting;5;&7[&a✔&7] Woodcutting level %s reached;&7[&4✘&7]
            Reach Woodcutting %s. Current: %current%'
            - 'mcmmo;mining;2;&7[&a✔&7] Mining level %s reached;&7[&4✘&7] Reach Mining
            level %s. Current: %current%'
            - 'advancement;minecraft:story/mine_stone;&7[&a✔&7] Advancement unlocked!.;&7[&4✘&7]
              Obtain some cobblestone.'
          Commands:
            - ''
  Gui-Empty-Slots:
      Tier-Gui:
        '1':
          slots: 0-54
          item: 'BLACK_STAINED_GLASS_PANE'
```
