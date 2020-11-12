# Commands and Permissions

### /sell
- Permission: `ushop.use`
- Type: `user`

Opens the shop GUI, command name can be changed in config.yml.

### /ushop open \<player\>
- Permission: `ushop.admin`
- Type: `console`

Opens the shop GUI for another player.

### /ushop add \<price\> [Flags ...]
- Permission: `ushop.admin`
- Type: `admin`

- Flags: `ignore_enchantments, ignore_durability, ignore_lore, ignore_displayname, ignore_meta`

Puts a price on an item. Respects all meta data when no flag is set. So it puts a price on an item for its custom lore, displayname, durability and enchants.

### /ushop convert
- Permission: `customoregen.admin`
- Type: `admin`

It will convert all prices inside the `plugins/Essentials/worth.yml` file to uShop.