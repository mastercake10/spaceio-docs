# Commands and Permissions

## Commands

/safarinet or /sn

### /safarinet reload
- Permission: `safarinet.reload`
- Type: `admin`
Reloads the configurations and recipes.

### /safarinet give \<player\> \<singleuse/reusable\> [amount]
- Permission: `safarinet.give`
- Type: `admin`
Gives empty safarinets to a player at a certain amount and type.

### /safarinet set \<singleuse/reusable\>
- Permission: `safarinet.set`
- Type: `admin`
Sets the default safarinet item for the specified egg type to the item in hand. Supports custom model data.

### /safarinet recipe \<singleuse/reusable\>
- Permission: `safarinet.recipe`
- Type: `user`
Shows the recipes in chat.


### /safarinet inspect
- Permission: `safarinet.inspect`
- Type: `admin`
Shows the NBT-String of the entity stored in the safarinet holding in hand.

## Permissions

### safarinet.craft.singleuse
Allows crafting of singleuse eggs.

### safarinet.craft.reusable
Allows crafting of reusable eggs.

### safarinet.use
Used to allow both release and capturing of mobs.

### safarinet.use.singleuse
Allow only singleuse egg catching.

### safarinet.use.reusable
Allow only reusable catching.

### safarinet.release.\<mob|passive\>
Per-mob permssion. Allows to release this mob type, or all passive mobs. Must be enabled in config.

### safarinet.capture.\<mob|passive\>
Per-mob permssion. Allows to capture this mob type, or all passive mobs. Must be enabled in config.

### safarinet.releasemob.use, safarinet.capturemob.use
These 2 permissions can be used instead of safarinet.use to allow everyone to release mobs while allowing only a donator rank(or other) to capture them.

### safarinet.changespawnertype.primitiv.\<entity-type\>
Permission for changing spawner types [more](usage.html#change-spawner-types).
