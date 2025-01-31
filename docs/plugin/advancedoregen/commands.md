# Commands and Permissions

There're some commands for managing and editing different generators, but as already said, you can purely use the GUI!

### /oregen edit
- Permission: `advancedoregen.admin`
- Type: `admin`
Main GUI, lets you add new generators and edit other generators

### /oregen edit \<name\>
- Permission: `advancedoregen.admin`
- Type: `admin`
Directly edits a generator

### /oregen order
- Permission: `advancedoregen.admin`
- Type: `admin`
Reorders all generators

### /oregen generator add \<name\> \<permission\> [level]
- Permission: `advancedoregen.admin`
- Type: `admin`
Adds a new generator

### /oregen generator remove \<name\>
- Permission: `advancedoregen.admin`
- Type: `admin`
Removes a generator

### /oregen set \<name\> \<permission\> [island level]
- Permission: `advancedoregen.admin`
- Type: `admin`
Modifies an exisiting generator (Changes permission or level)

### /oregen setmode [permission/islandlevel]
- Permission: `advancedoregen.admin`
- Type: `admin`
- Default: `permission`
Sets the criteria for choosing a generator regarding the permission of the island leader, or the island level.

### /oregen info [name]
- Permission: `advancedoregen.admin`
- Type: `admin`
- Default: `permission`
Print some information about the generator a player would get, i.e. generator name, island level etc.
