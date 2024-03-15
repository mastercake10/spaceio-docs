# FAQ
::: details Does this plugin need a skyblock plugin?
Not essentially, but keep in mind that without a skyblock plugin it will use the nearest player's permission to check for the right generator.
If you do have a skyblock plugin, you can use the island level of the owner instead to rank up the generator. Also, it will always use the permission of the Island owner the generator is on.
::
::: details I want the ore generator to depend on the nearest player, not the island owner's permission
For this you can "force the vanilla hook" inside the config.yml `force-hook: vanilla`.
::

::: I want to edit the config.yml manually.
Caution! While editing the generator using the GUI, it will overwrite the config.yml whenever a value is changed. So ensure that you are not editing the config.yml file manually and in game at the same time.
If you do want to edit the config.yml manually, use `/oregen reload` to load your manual config.yml changes in.
::
