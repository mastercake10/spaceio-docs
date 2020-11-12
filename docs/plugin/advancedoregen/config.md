# Default config.yml

```yml
# Here you can define worlds where the generator should not work
disabled-worlds:
- world_nether
show-generator-command: generator
water-lava-fix: false
fence-generator-enabled: false
force-vanilla-hook: false

playerGenerators: []
generators:
  generator1:
    label: tier1
    permission: oregen.tier1
    unlock_islandLevel: 0
    blocks:
    - IRON_ORE:100
  generator2:
    label: vip
    permission: oregen.vip
    unlock_islandLevel: 0
    blocks:
    - DIAMOND_BLOCK:100
```
