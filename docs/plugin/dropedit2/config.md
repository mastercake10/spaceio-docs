# Default config.yml and en.yml
config.yml
```yml
# available languages: EN, DE, RU
language: EN

# use loot enchantment (multiplies mob drops)
use-loot-enchantment: true

# use fortune enchantment (multiplies block drops)
use-fortune-enchantment: true

# removes custom drops (Drops configured in DropEdit) when the mob was killed by spawners
allow-custom-drops-only-for-players: false

# defines how often the data of DropEdit should be saved (increase it for better performance, or set it to -1 to disable it)
save-data-interval-minutes: 10

```

en.yml
```yml
GUI:
  name: Put items in!
  name2: Select option for %s!
  name3: Select mob!
  name4: Toggle flags for %s!
  name5: Select drops to configure
  name6: Put a block in!
  itemEditMobDrops:
    name: '&aEdit mob drops'
  itemEditBlockDrops:
    name: '&aEdit block drops'
  itemEditFishDrops:
    name: '&aEdit fish drops'
  itemBlockDropsPutIn:
    name: '&ePut a block in the empty slot!'
  itemBlockDropsContinue:
    name: '&aEdit this block'
  itemChangeExperience:
    name: '&aChange the dropping experience'
    lore:
    - setting it to -1 will use vanillas
    - experience calculation
  itemSetDrops:
    name: '&aSet custom drops'
    lore:
    - Click here to
    - customize custom drops!
  itemVanillaDrops:
    name: '&aToggle vanilla drops'
    lore:
    - 'Current: %s'
    - ''
    - 'ON: Adds vanilla drops to custom drops'
    - 'OFF: Only custom drops'
    - 'Default: ON'
  itemSpawnreason:
    name: '&aToggle flags'
    lore:
    - Click here to enable/disable
    - certain flags
  itemEditMob:
    name: '&c%s'
    lore:
    - Click to edit this mob!
  itemChangeMode:
    name: '&aChange editing mode'
    lore:
    - 'Current: %s'
    - ''
    - '&l&eclassic mode:'
    - easy to setup, less precise
    - '&l&eprecise mode:'
    - more precise (%), but less comfortable
    - 'Default: classic mode'
  itemPreciseModeInfo:
    name: '&cTotal chance:'
    lore:
    - '&a%s'
    - '&eThis value should be at 100.0'
    - '&eto get the best result!'
    - ''
    - '&cright click an item to change'
    - '&cits chance!'
messages:
  savedDrops: '&cSaved drops for %s'
  turnedOffVanillaDrops: '&cTurned off vanilla drops!'
  turnedOnVanillaDrops: '&cTurned on vanilla drops!'
  turnedOffSpawnerDrops: '&cTurned off custom drops for mobs from spawner!'
  turnedOnSpawnerDrops: '&cTurned on custom drops for mobs from spawner!'
  turnedOnPreciseMode: '&cTurned on precise mode!'
  turnedOffPreciseMode: '&cTurned off precise mode!'
  noPermission: '&cYou dont have permissions to use this command!'
  wrongItem: '&cPlease put a block in the empty slot!'
  guiNotReady: '&cGUI not ready, please wait...'
```
